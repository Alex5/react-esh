import React from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";

import {RecipesCart, Button} from '../index'

import notFound from "../../assets/img/404.svg";
import {useSelector} from "react-redux";
import FoundItem from "./FoundItem/FoundItem";
import {FoundResultBody, FoundResultHeader, FoundResultWrapper} from "./FoundResultStyle";

const FoundResults = () => {
    const history = useHistory();
    const location = useLocation()
    const recipes = useSelector((state) => state.search.recipes);

    return (
        <Switch>
            <Route path={[`/ingredients/result/:id`, `/recipes/result/:id`]}>
                <RecipesCart/>
            </Route>
            <Route path={["/recipes/result", "/ingredients/result"]}>
                <FoundResultWrapper>
                    <FoundResultHeader>
                        <Button
                            onClick={history.goBack}>{location.pathname === '/recipes/result' ? 'Назад к поиску' : 'Изменить ингредиенты'}</Button>
                        <h1>Найдено {recipes.length} рецептов</h1>
                    </FoundResultHeader>
                    <FoundResultBody>
                        {recipes.length !== 0 ? (
                            recipes.map((item) => (
                                <FoundItem item={item}/>
                            ))
                        ) : (
                            <img style={{width: "500px"}} src={notFound} alt=""/>
                        )}
                    </FoundResultBody>
                </FoundResultWrapper>
            </Route>
        </Switch>
    );
};

export default FoundResults;
