import React, { createContext, useContext } from "react";

export const Context = createContext();

const AmountContext = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
export const useItem = () => useContext(Context);

export default AmountContext;
