import notFoundImage from "../assets/404_logo.jpg";
import { Link } from "react-router-dom";
const Error = ({ message, explanition }) => {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="" className="not-found-image" />
      <h3 className="not-found-header">
        {message ? message : "Oops! Not Found"}
      </h3>
      <p>
        {explanition
          ? explanition
          : "Recipe not found in our database, we will added is soon."}
      </p>

      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Error;
