import React, { useEffect } from "react";
import { useContext } from "react";
import QuoteContext from "../context/quote/QuoteContext";
import { fetchQuote } from "../context/quote/QuoteActions";
import NewsContext from "../context/news/NewsContext";

const DailyQuote = () => {
  const { allNews } = useContext(NewsContext);
  const { quoteData, quoteDispatch } = useContext(QuoteContext);

  const getQuote = async () => {
    const data = await fetchQuote();
    quoteDispatch({
      type: "GET_QUOTE",
      payload: data,
    });
  };

  useEffect(() => {
    getQuote();
  }, [allNews]);

  if (!quoteData) {
    return <marquee className="display-6 my-2">Loading...</marquee>;
  }

  return (
    <marquee className="display-6 my-2">
      {quoteData.content} - {quoteData.author}
    </marquee>
  );
};

export default DailyQuote;
