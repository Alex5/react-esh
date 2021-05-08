import React from "react";
import {NavLink, Switch, Route} from "react-router-dom";

import "./Search.scss";

import SearchIngredients from "./SearchIngredients";
import SearchRecipes from "./SearchRecipes";

import {setChips, setRecipes, onRecipeInput} from "../../redux/searchSlice";
import {useDispatch} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();

    const clearStateData = () => {
        dispatch(setRecipes([]))
        dispatch(setChips([]))
        dispatch(onRecipeInput(''))
    }

    return (
        <section className="search">
            <div className="hero-header__title">
                <h1>
                    Что
                    <br/> приготовить?
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
                        onClick={() => clearStateData()}
                    >
                        Ингредиенты
                    </NavLink>
                    <NavLink onClick={() => clearStateData()} className="item" activeClassName="selected"
                             to="/recipes">
                        Рецепты
                    </NavLink>
                </div>
                <div className="search-result">
                    <Switch>
                        <Route path="/ingredients" component={SearchIngredients}/>
                        <Route path="/recipes" component={SearchRecipes}/>
                    </Switch>
                </div>
            </div>
        </section>
    );
};

export default Search;
