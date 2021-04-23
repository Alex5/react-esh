import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import "./Search.scss";

import SearchIndgredients from "./SearchIngredients";
import SearchRecipes from "./SearchRecipes";

const Search = ({
  filterIngredients,
  onIngrInput,
  addChipItems,
  chipItems,
  loadingIngredients,
  setInputIngredients,
  inputIngredients,
  deleteChipItem
}) => {

  return (
    <section className="search">
      <div className="hero-header__title">
        <h1>
          Что
          <br /> приготовить?
        </h1>
      </div>
      <div className="hero-header__description">
        <p>Мы подскажем! Ищите по ингредиентам или блюдам</p>
      </div>
      <div className="search-block">
        <div className="search-block__search-switch">
          <NavLink
            className="item"
            activeClassName="selected"
            to="/ingredients"
          >
            Ингредиенты
          </NavLink>
          {/* <NavLink className="item" activeClassName="selected" to="/recipes">
            Рецепты
          </NavLink> */}
        </div>
        <div className="search-result">
          <Switch>
            <Route path="/ingredients">
              <SearchIndgredients
              deleteChipItem={deleteChipItem}
                filterIngredients={filterIngredients}
                onIngrInput={onIngrInput}
                addChipItems={addChipItems}
                chipItems={chipItems}
                loadingIngredients={loadingIngredients}
                setInputIngredients={setInputIngredients}
                inputIngredients={inputIngredients}

              />
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
