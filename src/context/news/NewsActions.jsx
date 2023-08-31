export const fetchNews = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=YYYYMMDDThhmmssZ&sortBy=publishedAt&apiKey=3eb6a584e7274621a05492e2e033b4dd`
  );
  const data = await response.json();
  return data.articles;
};
