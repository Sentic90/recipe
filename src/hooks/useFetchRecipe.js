import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "8138" },
  headers: {
    "x-rapidapi-key": "b66db239ddmsh9b764abe129f473p15420bjsn48f30497ffe0",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

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
      options.params.id = id;
      const response = await axios.request(options);
      const { data } = response;

      dispatch({ type: ACTION.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTION.FETCH_ERROR, payload: err.message });
    }
  };

  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
