import React from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeNutritionalFact from "./RecipeNutritionalFact";
import { AiOutlineFire } from "react-icons/ai";
import { CiWheat } from "react-icons/ci";
import { IoFishOutline } from "react-icons/io5";
import { BiCheese, BiCake } from "react-icons/bi";

const RecipeHeader = ({ name, nutritions }) => {
  const nutritionalFactArray = [
    {
      id: uuidv4(),
      amount: nutritions?.calories,
      category: "calories",
      Icon: AiOutlineFire,
    },
    {
      id: uuidv4(),
      amount: nutritions?.fat,
      category: "fats",
      Icon: BiCheese,
    },
    {
      id: uuidv4(),
      amount: nutritions?.sugar,
      category: "sugar",
      Icon: BiCake,
    },
    {
      id: uuidv4(),
      amount: nutritions?.carbohydrates,
      category: "carbs",
      Icon: CiWheat,
    },
    {
      id: uuidv4(),
      amount: nutritions?.protein,
      category: "proteins",
      Icon: IoFishOutline,
    },
  ];
  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="fact-container">
        {nutritionalFactArray.map(({ id, category, amount, Icon }) => (
          <RecipeNutritionalFact fact={{ amount, category }} key={id}>
            <Icon />
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  );
};

export default RecipeHeader;
