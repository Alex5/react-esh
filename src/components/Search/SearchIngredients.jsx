import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Search.scss";
import SearchPopUp from "./SearchPopUp";

const SearchIndgredients = () => {
  return (
    <>
      <Link to="/ingredients/add" className="search-result__add-ingredients">
        Добавить ингредиенты
      </Link>
      <Switch>
        <Route path="/ingredients/add">
          <SearchPopUp />
        </Route>
      </Switch>
    </>
  );
};

export default SearchIndgredients;
