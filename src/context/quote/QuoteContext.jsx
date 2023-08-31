import { createContext, useReducer } from "react";
import QuoteReducer from "../quote/QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const initialState = {
    quoteData: null,
  };

  const [state, quoteDispatch] = useReducer(QuoteReducer, initialState);

  return (
    <QuoteContext.Provider value={{ ...state, quoteDispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
