import React from "react";
import "./Search.scss";
import foodEat from "../../assets/img/foodEat.svg";
import SearchIndgredients from "./SearchIngredients";
import SearchRecipes from "./SearchRecipes";
import { NavLink, Switch, Route } from "react-router-dom";

const Search = () => {
  return (
    <section className="search">
      <div className="search-block">
        <div className="search-block__search-switch">
          <NavLink
            className="item"
            activeClassName="selected"
            to="/ingredients"
          >
            Ингредиенты
          </NavLink>

          <NavLink className="item" activeClassName="selected" to="/recipes">
            Рецепты
          </NavLink>
        </div>
        <div className="search-result">
          <div className="search-placeholder">
            <img src={foodEat} alt="" className="search-result__foodEatImg" />
          </div>
          <Switch>
            <Route path="/ingredients">
              <SearchIndgredients />
            </Route>
            <Route path="/recipes">
              <SearchRecipes />
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default Search;
