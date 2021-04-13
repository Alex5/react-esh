import React from "react";
import "./Search.scss";
import SearchPopUp from "./SearchPopUp";

const SearchIndgredients = ({
  filterIngredients,
  onIngrInput,
  addChipItems,
  chipItems,
  loadingIngredients
}) => {
  return (
    <SearchPopUp
      filterIngredients={filterIngredients}
      onIngrInput={onIngrInput}
      addChipItems={addChipItems}
      chipItems={chipItems}
      loadingIngredients={loadingIngredients}
    />
  );
};

export default SearchIndgredients;
