import "./App.scss";
import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import IngredientsResult from "./components/IngredientsResults/IngredientsResult";
import Alert from "./services/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [filterIngredients, setFilterIngredients] = React.useState([]);
  const [loadingIngredients, setLoadingIngredients] = React.useState(null);
  const [loadingRecipes, setLoadingRecipes] = React.useState(null);
  const [recipesState, setRecipesState] = React.useState([]);
  const [chipItems, setChipItems] = React.useState([]);
  const [inputIngredients, setInputIngredients] = React.useState("");
  const [ingrCount, setIngrCount] = React.useState(0.0);
  const [excludeItem, setExcludeItems] = React.useState(false);

  const onIngrInput = () => {
    if (inputIngredients.length >= 3) {
      setLoadingIngredients(true);
      axios
        .get(
          `https://intense-reef-89831.herokuapp.com/getIngredients/?q=${inputIngredients}`
        )
        .then((res) => {
          setFilterIngredients(res.data);
          setLoadingIngredients(false);
        });
    } else {
      setFilterIngredients([]);
    }
  };

  const addChipItems = (elem) => {
    let chipItemsArr = new Set([...chipItems]);
    chipItemsArr.add(elem);
    elem.exclude = false;
    setChipItems([...chipItemsArr]);
    setInputIngredients("");
  };

  const deleteChipItem = (item) => {
    let deletingChipItems = new Set([...chipItems]);
    deletingChipItems.delete(item);
    setChipItems([...deletingChipItems]);
  };

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

  React.useEffect(() => {
    onIngrInput();
  }, [inputIngredients]);

  const getRecipes = () => {
    let newChipItems = [];

    chipItems.forEach((ingredients) => {
      newChipItems.push({
        id: ingredients._id,
        count: ingrCount,
        exclude: ingredients.exclude
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
        console.log('Список ингредиентов пуст!');
        setLoadingRecipes(false);
        setRecipesState([])
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
                filterIngredients={filterIngredients}
                onIngrInput={onIngrInput}
                addChipItems={addChipItems}
                chipItems={chipItems}
                loadingIngredients={loadingIngredients}
                setInputIngredients={setInputIngredients}
                inputIngredients={inputIngredients}
                ingrCount={ingrCount}
                deleteChipItem={deleteChipItem}
              />
            </div>
            <div className="container__result">
              <Hero
                chipItems={chipItems}
                deleteChipItem={deleteChipItem}
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
