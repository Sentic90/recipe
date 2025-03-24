import axios from "axios";
// import logger from "./logService";

const apiUrl = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = apiUrl;
axios.defaults.headers = {
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
};
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // logger.log(error);
    console.log(error);
    alert("An unexpected error occurred - " + error.code);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
