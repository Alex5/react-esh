import "./App.scss";
import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [filterIngredients, setFilterIngredients] = React.useState([]);
  const [loadingIngredients, setLoadingIngredients] = React.useState(false);

  const onIngrInput = (e) => {
    e.target.value.trim()
    if ( e.target.value.length >= 3) {
      axios
        .get(
          `https://intense-reef-89831.herokuapp.com/getIngredients/?q=${e.target.value}`
        )
        .then((res) => {
          setFilterIngredients(res.data);
          setLoadingIngredients(true)
        })
        .then(() => {
          setLoadingIngredients(false)
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

  return (
    <Router>
      <Header />
      <div className="container">
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
          <Hero chipItems={chipItems} deleteChipItem={deleteChipItem} />
        </div>
      </div>
    </Router>
  );
}

export default App;
