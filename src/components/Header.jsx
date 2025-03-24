import React, { useState } from "react";
import foodImage from "../assets/food-image.jpg";

const Header = ({ onSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchParam = () => {
    onSearchQuery(searchQuery);
  };
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta autem
          tenetur culpa rerum incidunt hic ipsum nihil. Voluptatum, tempora
          ducimus.
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a receipe..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
          />
          <button onClick={handleSearchParam}>Search</button>
        </div>
      </div>
      <div>
        <img src={foodImage} alt="" className="main_img" />
      </div>
    </header>
  );
};

export default Header;
