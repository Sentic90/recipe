import React from "react";
import Error from "../Error";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <Error message={error.statusText} explanition={error.data} />
    </div>
  );
};

export default ErrorPage;
