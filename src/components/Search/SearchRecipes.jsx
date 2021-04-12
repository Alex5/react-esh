import React from "react";
import "./Search.scss";
import searchImg from "../../assets/img/search.svg";
import { Link } from "react-router-dom";

const SearchRecipes = () => {

  return (
    <div className="search-block">
      <Link className="search-block__input">Введите название рецепта</Link>
      <img
        src={searchImg}
        className="search-block__input-img"
        alt="search-recipes"
        placeholder="Введите название рецепта"
      />
    </div>
  );
};

export default SearchRecipes;
