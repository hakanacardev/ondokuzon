import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const AmountContext = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [total, setTotal] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const convertUsd = (amount, currency) => {
    const convertUsd = amount * currencies[currency];
    return convertUsd;
  };
  const getCurrency = () => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_bauGK9JbiAlk0rZeVwHa8d2A6wq1tqmuwD0dN4VQ"
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrencies(res.data);
      });
  };
  useEffect(() => {
    getCurrency();
  }, []);
  return (
    <Context.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        total,
        setTotal,
        currencies,
        setCurrencies,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useAmount = () => useContext(Context);

export default AmountContext;
