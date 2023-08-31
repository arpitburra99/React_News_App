import React, { useContext, useState } from "react";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsActions";
import { Link } from "react-router-dom";
import WeatherContext from "../context/weather/WeatherContext";
import { fetchWeather } from "../context/weather/WeatherActions";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const { newsDispatch } = useContext(NewsContext);
  const { weatherDispatch } = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchNews(search);
    newsDispatch({
      type: "NEWS_DATA",
      payload: { news: data, topic: search },
    });

    const weather = await fetchWeather(search);

    weatherDispatch({
      type: "GET_WEATHER",
      payload: weather,
    });

    setSearch("");
  };

  const handleTopics = async (topic) => {
    const data = await fetchNews(topic);
    newsDispatch({
      type: "NEWS_DATA",
      payload: { news: data, topic: topic },
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-light h1 mx-3 my-1"
          to="/"
          style={{ fontSize: "25px" }}
          onClick={() => handleTopics("India")}
        >
          KalTak News
        </Link>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/#sports"
                onClick={() => handleTopics("Sports")}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/#business"
                onClick={() => handleTopics("Indian Business")}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/#entertainment"
                onClick={() => handleTopics("Indian Cinema")}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/#politics"
                onClick={() => handleTopics("Politics")}
              >
                Politics
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
