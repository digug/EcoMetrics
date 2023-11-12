import axios from "axios";

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
