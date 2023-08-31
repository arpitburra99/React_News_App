import React, { useContext, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsActions";

const Home = () => {
  const { allNews, newsDispatch } = useContext(NewsContext);

  const fetchData = async (topic) => {
    const data = await fetchNews(topic);
    newsDispatch({
      type: "NEWS_DATA",
      payload: { news: data, topic: topic },
    });
  };

  useEffect(() => {
    fetchData("india");
  }, []);

  if (!allNews || allNews.length === 0) {
    return (
      <>
        <div class="card" aria-hidden="true">
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              class="btn btn-primary disabled placeholder col-2 float-end"
              aria-disabled="true"
            ></a>
          </div>
        </div>
        <div class="card my-3" aria-hidden="true">
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              class="btn btn-primary disabled placeholder col-2 float-end"
              aria-disabled="true"
            ></a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {allNews.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </>
  );
};

export default Home;
