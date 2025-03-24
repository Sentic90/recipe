import { Outlet } from "react-router-dom";

const RecipeInfo = ({ instructions, image, ingredients }) => {
  return (
    <div className="recipe-info">
      <Outlet context={{ instructions, ingredients }} />
      <img className="recipe-img" src={image} alt="thumnail_image to recipe" />
    </div>
  );
};

export default RecipeInfo;
