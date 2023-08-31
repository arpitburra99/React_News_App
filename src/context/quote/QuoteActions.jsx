export const fetchQuote = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  return data;
};
