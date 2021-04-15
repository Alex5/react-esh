import React from "react";

import { Route, useHistory } from "react-router-dom";

const IngredientsResult = ({ recipesState }) => {
  const history = useHistory();

  return (
    <Route path="/ingredients/result">
      <div className="imgredients-result">
        <div className="imgredients-result__header">
          <div>
            <h1>Найдено {recipesState.length} рецептов</h1>
          </div>
          <div>
            <button onClick={history.goBack}>Изменить ингредиенты</button>
          </div>
        </div>
        <div className="imgredients-result__body">
          {recipesState &&
            recipesState.map((item) => (
              <div key={item._id} className="imgredients-result__body-item">
                <div>
                  <img
                    style={{ backgroundSize: "cover" }}
                    src={item.recipeCover}
                    alt=""
                  />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div>
                    <ul>
                      <li>{item.ingredients.length} ингредиентов</li>
                      <li>{item.portionsCount} порций</li>
                      <li>{item.recipeTime} минут</li>
                    </ul>
                  </div>
                  <div>
                    <button>Открыть</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Route>
  );
};

export default IngredientsResult;
