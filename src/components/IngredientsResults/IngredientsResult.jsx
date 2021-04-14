import React from "react";
import { Route } from "react-router-dom";

const IngredientsResult = ({ recipesState }) => {
  return (
    <Route path="/ingredients/result">
      <div>
        {recipesState.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
    </Route>
  );
};

export default IngredientsResult;
