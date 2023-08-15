import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const AmountContext = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
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

  const addData = (form) => {
    const parseData = convertUsd(form.amount, form.current);
    const newData = [...data, { ...form, amount: parseData }];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <Context.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        total,
        setTotal,
        currencies,
        setCurrencies,
        addData,
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useAmount = () => useContext(Context);

export default AmountContext;
