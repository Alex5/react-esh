import { React, useState, useEffect } from "react";
import RecipesCart from "../RecipesCart/RecipesCart";

import "./IngredientsResult.scss";

import { Route, Switch, useHistory, Link } from "react-router-dom";

const IngredientsResult = ({ recipesState }) => {
  const history = useHistory();
  const [resultOptions, setResultOptions] = useState(null);

  return (
    <Switch>
      <Route path={`/ingredients/result/:id`}>
        <RecipesCart resultOptions={resultOptions} />
      </Route>
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
                      <Link
                        onClick={() =>
                          setResultOptions({
                            id: item._id,
                            ingredients: item.ingredients,
                          })
                        }
                        to={{
                          pathname: `/ingredients/result/${item._id}`,
                          state: { id: item._id, ingredients: item.ingredients },
                        }}
                      >
                        Открыть
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default IngredientsResult;
