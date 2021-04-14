import "./App.scss";
import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import IngredientsResult from "./components/IngredientsResults/IngredientsResult";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [filterIngredients, setFilterIngredients] = React.useState([]);
  const [loadingIngredients, setLoadingIngredients] = React.useState(null);

  const onIngrInput = (e) => {
    e.target.value.trim();

    if (e.target.value.length >= 3) {
      setLoadingIngredients(true);
      axios
        .get(
          `https://intense-reef-89831.herokuapp.com/getIngredients/?q=${e.target.value}`
        )
        .then((res) => {
          setFilterIngredients(res.data);
          setLoadingIngredients(false);
        });
    } else {
      setFilterIngredients([]);
    }
  };

  const [chipItems, setChipItems] = React.useState([]);

  const addChipItems = (elem) => {
    let chipItemsArr = new Set([...chipItems]);
    chipItemsArr.add(elem);
    setChipItems([...chipItemsArr]);
  };

  const deleteChipItem = (item) => {
    let deletingChipItems = new Set([...chipItems]);
    deletingChipItems.delete(item);
    setChipItems([...deletingChipItems]);
  };

  const [recipesState, setRecipesState] = React.useState([])

  const onGetRecipes = () => {
    let newChipItems = [];

    chipItems.forEach((ingredients) => {
      newChipItems.push({
        id: ingredients._id,
        count: 0.0,
        exclude: false,
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

    axios(config)
      .then(({data}) => {
        setRecipesState(data.items);
      })
      .catch((errot) => {
        console.log(errot);
      });
  };

  return (
    <Router>
      <Header />
      <Switch>
        <div className="container">
          <Route path="/">
            <div className="container__search">
              <Search
                filterIngredients={filterIngredients}
                onIngrInput={onIngrInput}
                addChipItems={addChipItems}
                chipItems={chipItems}
                loadingIngredients={loadingIngredients}
              />
            </div>
            <div className="container__result">
              <Hero chipItems={chipItems} 
              deleteChipItem={deleteChipItem} 
              onGetRecipes={onGetRecipes}
              />
            </div>
          </Route>
          <Route path="/ingredients/result">
            <IngredientsResult recipesState={recipesState}/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
