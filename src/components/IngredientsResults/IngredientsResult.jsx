import React from "react";

import "./IngredientsResult.scss";

import { Route, useHistory } from "react-router-dom";

const IngredientsResult = ({ recipesState }) => {
  const history = useHistory();

  return (
    <Route path="/ingredients/result">
      <div className="ingredients-result">
        <div className="ingredients-result__header">
          <div>
            <h1>Найдено {recipesState.length} рецептов</h1>
          </div>
          <div className="ingredients-result__header_change-btn">
            <button onClick={history.goBack}>Изменить ингредиенты</button>
          </div>
        </div>
        <div className="ingredients-result__body">
          {recipesState &&
            recipesState.map((item) => (
              <div key={item._id} className="ingredients-result__body-item">
                <div className="ingredients-result__body-item__img">
                  <img
                    style={{ backgroundSize: "cover" }}
                    src={item.recipeCover}
                    alt=""
                  />
                </div>
                <div className="ingredients-result__body-item__body">
                  <div>
                    <div className="ingredients-result__body-item__body-name">
                      {item.name}
                    </div>
                    <div className="ingredients-result__body-item__body-lists">
                      <ul>
                        <li>{item.ingredients.length} ингредиентов</li>
                        <li>{item.portionsCount} порций</li>
                        <li>{item.recipeTime} минут</li>
                      </ul>
                    </div>
                  </div>

                  <div className="ingredients-result__body-item__body-open-btn">
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
