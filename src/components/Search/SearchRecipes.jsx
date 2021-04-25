import React from "react";
import "./Search.scss";
import searchImg from "../../assets/img/search.svg";

const SearchRecipes = () => {
  return (
    <div className="search-block">
       <img
        src={searchImg}
        className="search-block__input-img"
        
      />
      <input
        type="text"
        className="search-block__input"
        placeholder="Введите название рецепта"
      />
     
    </div>
  );
};

export default SearchRecipes;
