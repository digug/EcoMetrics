import axios from "axios";
import { parse } from "csv-parse";
import { Router, Request, Response } from "express";
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
      .on("end", () => {
        // Calculate the spent on stock and percentage
        const stockData = results.slice(1); // Skipping the header row
        const spentOnStockArray = stockData.map(row => parseFloat(row[10]) * parseFloat(row[11]));
        const totalSpent = spentOnStockArray.reduce((acc, curr) => acc + curr, 0);
        const percentageSpentArray = spentOnStockArray.map(spent => (spent / totalSpent) * 100);
        const responseArray = stockData.map((row, index) => [row[0], percentageSpentArray[index]]);

        // Send the response
        res.status(200).json(responseArray);

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

/**
 * Gets all articles within the last year with their article title and tone
 * @param company The company name
 */
export const getAllArticles = async (company: string) => {
  const GDELT_URL = "https://api.gdeltproject.org/api/v2/doc/doc";
  const TIMELINE_TONE_MODE = "timelinetone";
  const ART_LIST_MODE = "artlist";
  const TIMESPAN = "12m";
  const DATE_DESC = "DateDesc";

  let all_articles = [];

  const timeline_tone = await axios.get(GDELT_URL, {
    params: {
      query: company,
      format: "json",
      mode: TIMELINE_TONE_MODE,
      timespan: TIMESPAN,
      sort: DATE_DESC,
    },
  });

  const art_list = await axios.get(GDELT_URL, {
    params: {
      query: company,
      format: "json",
      mode: ART_LIST_MODE,
      timespan: TIMESPAN,
      sort: DATE_DESC,
    },
  });

  //   for (let i = 0; i < art_list.data.length(); ) {

  //   }
};
