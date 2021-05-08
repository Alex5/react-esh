import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRecipeInput, setRecipes } from "../../redux/searchSlice";
import { searchAPI } from "../../api/Api";

import "./Search.scss";
import searchImg from "../../assets/img/search.svg";

const SearchRecipes = () => {
  const dispatch = useDispatch();
  const inputRecipeValue = useSelector(state => state.search.inputRecipeValue
  );
  const recipes = useSelector(state => state.search.recipes)

  const onInput = (value) => {
    dispatch(onRecipeInput(value));
    searchAPI.getRecipesOnInput(value).then(({data}) => {
      dispatch(setRecipes(data))
    })
  };

  return (
    <>
    <div className="search-block">
      <img src={searchImg} className="search-block__input-img" />
      <input
        value={inputRecipeValue}
        type="text"
        className="search-block__input"
        placeholder="Введите название рецепта"
        onInput={(e) => onInput(e.target.value)}
      />
    </div>
    {/* <div>
      {recipes.map(item => (
        <div>{item.name}</div>
      ))}
    </div> */}
    </>
    
  );
};

export default SearchRecipes;
