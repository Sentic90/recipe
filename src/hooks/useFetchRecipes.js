import { useState } from "react";
import httpService from "../services/httpService";

const useFetchRecipes = () => {
  const [recipes, setReceipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchParam) => {
    setLoading(true);
    setReceipes([]);
    setError(null);
    try {
      const params = {
        from: "0",
        size: "20",
      };
      if (searchParam) {
        params.q = searchParam;
      }
      const response = await httpService.get("/recipes/list", { params });
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
