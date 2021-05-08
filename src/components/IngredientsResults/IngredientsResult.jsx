import React from "react";
import {Route, Switch, useHistory, Link} from "react-router-dom";

import RecipesCart from "../RecipesCart/RecipesCart";
import Button from "../../services/Button";

import "./IngredientsResult.scss";
import notFound from "../../assets/img/404.svg";
import {useSelector} from "react-redux";

const IngredientsResult = () => {
    const history = useHistory();
    const recipes = useSelector((state) => state.search.recipes);

    return (
        <Switch>
            <Route path={`/ingredients/result/:id`}>
                <RecipesCart/>
            </Route>
            <Route path="/ingredients/result">
                <div className="ingredients-result">
                    <div className="ingredients-result__header">
                        <div className="ingredients-result__header_change-btn">
                            <Button onClick={history.goBack}>Изменить ингредиенты</Button>
                        </div>
                        <div>
                            <h1>Найдено {recipes.length} рецептов</h1>
                        </div>
                    </div>
                    <div className={"ingredients-result__body"}>
                        {recipes.length !== 0 ? (
                            recipes.map((item) => (
                                <Link
                                    to={{
                                        pathname: `/ingredients/result/${item._id}`,
                                        state: {id: item._id, ingredients: item.ingredients},
                                    }}
                                    key={item._id}
                                    className="ingredients-result__body-item"
                                >
                                    <div className="ingredients-result__body-item__img">
                                        <img
                                            style={{backgroundSize: "cover"}}
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
                                                <div>
                                                    <strong>{item.ingredients.length}</strong>{" "}
                                                    ингредиентов <span>ⓘ</span>
                                                </div>
                                                <div>
                                                    <strong>{item.portionsCount}</strong> порций
                                                </div>
                                                <div>
                                                    Время приготовления:{" "}
                                                    <strong>{item.recipeTime}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <img style={{width: "500px"}} src={notFound} alt=""/>
                        )}
                    </div>
                </div>
            </Route>
        </Switch>
    );
};

export default IngredientsResult;
