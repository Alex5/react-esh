import "./App.scss";
import React, {useEffect} from "react";

import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import Search from "./components/Search/Search";
import IngredientsResult from "./components/IngredientsResults/IngredientsResult";

import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import GlobalFonts from './assets/fonts/fonts';
import RecipesCart from "./components/RecipesCart/RecipesCart";
import {useDispatch} from "react-redux";
import {setRecipes} from "./redux/searchSlice";

function App() {


    return (
        <Router>
            <GlobalFonts/>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path={`/ingredients/result`} component={IngredientsResult}/>
                    <Route path="/recipes/:id" component={RecipesCart}/>
                    <Route path="/">
                        <div className="container__search">
                            <Search/>
                        </div>
                        <div className="container__result">
                            <Result/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
