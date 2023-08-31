import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsHeadLine from "./components/NewsHeadLine";
import Home from "./pages/Home";
import NewsContext from "./context/news/NewsContext";
import DailyQuote from "./components/DailyQuote";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const { topic } = useContext(NewsContext);

  return (
    <Router>
      <Navbar />
      <div className="container p-5">
        <DailyQuote />
        <h1 className="display-3 mt-2" style={{ fontWeight: "400" }}>
          Latest News About {topic}
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="p-2 grid gap-0 column-gap-5">
                  <NewsHeadLine />
                  <div className="row d-flex">
                    <div className="col-8">
                      <Home />
                    </div>
                    <div className="col-4">
                      <WeatherCard />
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
