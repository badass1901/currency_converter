import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //we want to fetch this api automatically everytime the function is called or the value of currency is changed, hence we use useEffect hook

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

  }, [currency]);

  return data;
}

export default useCurrencyInfo;


