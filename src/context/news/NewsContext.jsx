import { createContext, useReducer } from "react";
import NewsReducer from "../news/NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    allNews: [],
    topic: "",
  };

  const [state, newsDispatch] = useReducer(NewsReducer, initialState);

  return (
    <NewsContext.Provider value={{ ...state, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
