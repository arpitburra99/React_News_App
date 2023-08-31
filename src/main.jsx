import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NewsProvider } from "./context/news/NewsContext.jsx";
import { QuoteProvider } from "./context/quote/QuoteContext.jsx";
import { WeatherProvider } from "./context/weather/WeatherContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsProvider>
      <QuoteProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </QuoteProvider>
    </NewsProvider>
  </React.StrictMode>
);
