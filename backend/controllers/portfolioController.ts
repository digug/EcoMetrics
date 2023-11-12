import axios from "axios";

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
  console.log(avg);
  return avg;
};

const evaluateCompany = async (company: string) => {
  const e = await getAverageESGTone(company, environment);
  const s = await getAverageESGTone(company, social);
  const g = await getAverageESGTone(company, governance);
  return [e, s, g];
};

/**
 * Evaluate the portfolio
 * @param percentages
 * @param companies
 */
export const evaluatePortfolio = (percentages: any[], companies: any[]) => {
  const evaluation = {};
  //   companies.forEach();
};
