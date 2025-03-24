import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "x-rapidapi-key": "b66db239ddmsh9b764abe129f473p15420bjsn48f30497ffe0",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setReceipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchParam) => {
    setLoading(true);
    setReceipes([]);
    setError(null);
    try {
      const reqOptions = { ...options };
      if (searchParam) {
        reqOptions.params.q = searchParam;
      }
      const response = await axios.request(reqOptions);
      const { data } = response;
      setLoading(false);
      setReceipes(data.results);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;
