import axios from "axios";
import { parse } from "csv-parse";
import { Request, Response } from "express";
import fs from "fs";
// Endpoint to parse CSV
export const parseCSV = async (req: Request, res: Response): Promise<void> => {
  const file = req.file;

  if (file) {
    const results: Array<Array<string>> = [];

    // Using csv-parse to parse the CSV file
    const parser = parse({ delimiter: "," });

    fs.createReadStream(file.path)
      .pipe(parser)
      .on("data", (data) => {
        // Process each row of the CSV here
        results.push(data);
      })
      .on("end", async () => {
        // Calculate the spent on stock and percentage
        const stockData = results.slice(1); // Skipping the header row
        const spentOnStockArray = stockData.map(
          (row) => parseFloat(row[10]) * parseFloat(row[11])
        );
        const totalSpent = spentOnStockArray.reduce(
          (acc, curr) => acc + curr,
          0
        );
        const percentageSpentArray = spentOnStockArray.map(
          (spent) => spent / totalSpent
        );

        const stocks = stockData.map((row, index) => [
          row[0],
          percentageSpentArray[index],
        ]);

        // Send the response
        res.status(200).json(await evaluatePortfolio(stocks));

        // Remove the temporary file after processing
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully");
          }
        });
      });
  } else {
    res.status(400).send("No file uploaded");
  }
};

const GDELT_URL = "https://api.gdeltproject.org/api/v2/doc/doc";
const TONECHART_MODE = "tonechart";
const TIMESPAN = "48m";

export const environment = {
  keywords: "(waste OR sustain OR environment OR energy)",
  theme: "WB_1786_ENVIRONMENTAL_SUSTAINABILITY",
};

export const social = {
  keywords: "(abuse OR emotional)",
  theme: "HUMAN_RIGHTS_ABUSES",
};

export const governance = {
  keywords: "(ethics OR layoff OR management)",
  theme: "WB_725_ORGANIZATIONAL_MANAGEMENT",
};

/**
 * Calculate the tone for a company and its category (E S or G)
 * @param company
 * @returns Array of tones
 */
export const getAverageESGTone = async (company: string, category: any) => {
  let tones = await axios.get(GDELT_URL, {
    params: {
      query: `${company} ${category.keywords}`,
      format: "json",
      mode: TONECHART_MODE,
      timespan: TIMESPAN,
      theme: category.theme,
      sourcelang: "eng",
    },
  });
  return calculateAvgTone(process(tones.data.tonechart, company));
};

/**
 * Proccess array
 * @param data
 * @param company
 * @returns proccessed array
 */
const process = (data: any[], company: string) => {
  let ans: any[] = [];
  data.forEach((element: any, index: number) => {
    element.toparts.forEach((article: any) => {
      let title: string = article.title;
      if (title.toLowerCase().includes(company.toLowerCase())) {
        ans.push(element.bin);
      }
    });
  });
  return ans;
};

/**
 * Calculate the average tone of a tone array
 * @param tone_arr
 * @returns avg tone of the array
 */
const calculateAvgTone = (tone_arr: any[]) => {
  if (tone_arr.length == 0) {
    console.log(0);
    return 0;
  }
  let avg =
    tone_arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / tone_arr.length;
  // console.log(avg);
  return avg;
};

const evaluateCompany = async (ticker: string) => {
  const names: any = {
    AAPL: "Apple",
    GOOG: "Google",
    GM: "General Motors",
    MSFT: "Microsoft",
    SU: "Suncor",
    TSLA: "Tesla",
    COST: "Costco",
  };
  let company = names[ticker];
  const e = (100 * ((await getAverageESGTone(company, environment)) + 20)) / 40;
  const s = (100 * ((await getAverageESGTone(company, social)) + 20)) / 40;
  const g = (100 * ((await getAverageESGTone(company, governance)) + 20)) / 40;
  return {
    ticker: ticker,
    e_score: e,
    s_score: s,
    g_score: g,
    overall_score: (e + s + g) / 3,
  };
};

/**
 * Evaluate the portfolio
 * @param percentages
 * @param companies
 */
const evaluatePortfolio = async (stocks: any[]) => {
  let portfolio_score = 0;
  let stock_scores: any[] = [];
  console.log(stocks);

  for (let stock of stocks) {
    let company_eval = await evaluateCompany(stock[0]);
    stock_scores.push(company_eval);
    portfolio_score += stock[1] * company_eval.overall_score;
  }
  return { portfolio_score: portfolio_score, stock_scores: stock_scores };
};
