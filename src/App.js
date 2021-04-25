import "./App.scss";
import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import IngredientsResult from "./components/IngredientsResults/IngredientsResult";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loadingIngredients, setLoadingIngredients] = React.useState(null);
  const [loadingRecipes, setLoadingRecipes] = React.useState(null);
  const [recipesState, setRecipesState] = React.useState([]);
  const [chipItems, setChipItems] = React.useState([]);
  const [inputIngredients, setInputIngredients] = React.useState("");
  const [ingrCount, setIngrCount] = React.useState(0.0);
  const [excludeItem, setExcludeItems] = React.useState(false);

  const onExclude = (id) => {
    chipItems.forEach((element) => {
      if (id === element._id) {
        let excludeChipItemsArr = new Set([...chipItems]);
        excludeChipItemsArr.add(element);
        setExcludeItems((element.exclude = !excludeItem));
      }
    });
  };

  React.useEffect(() => {
    getRecipes();
  }, [chipItems, ingrCount, excludeItem]);

  const getRecipes = () => {
    let newChipItems = [];

    chipItems.forEach((ingredients) => {
      newChipItems.push({
        id: ingredients._id,
        count: ingrCount,
        exclude: ingredients.exclude,
      });
    });

    let config = {
      method: "post",
      url: "https://intense-reef-89831.herokuapp.com/getRecipes",
      data: newChipItems,
      params: {
        mode: 1,
      },
    };

    setLoadingRecipes(true);

    axios(config)
      .then(({ data }) => {
        setRecipesState(data.items);
        setLoadingRecipes(false);
      })
      .catch(() => {
        console.log("Список ингредиентов пуст!");
        setLoadingRecipes(false);
        setRecipesState([]);
      });
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/ingredients/result">
            <IngredientsResult recipesState={recipesState} />
          </Route>

          <Route path="/">
            <div className="container__search">
              <Search
                chipItems={chipItems}
                loadingIngredients={loadingIngredients}
                setInputIngredients={setInputIngredients}
                inputIngredients={inputIngredients}
                ingrCount={ingrCount}
              />
            </div>
            <div className="container__result">
              <Hero
                
                recipesState={recipesState}
                loadingRecipes={loadingRecipes}
                ingrCount={ingrCount}
                setIngrCount={setIngrCount}
                onExclude={onExclude}
                excludeItem={excludeItem}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
