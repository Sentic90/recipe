import { useReducer } from "react";
import httpService from "../services/httpService";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const ACTION = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (_, action) => {
  switch (action.type) {
    case ACTION.FETCHING_DATA:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case ACTION.FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case ACTION.FETCH_ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
const useFetchRecipe = () => {
  const [{ data, error, loading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchRecipe = async (id) => {
    dispatch({ type: ACTION.FETCHING_DATA });

    try {
      const response = await httpService.get("/recipes/get-more-info", {
        params: { id },
      });
      const { data } = response;

      dispatch({ type: ACTION.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTION.FETCH_ERROR, payload: err.message });
    }
  };

  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
