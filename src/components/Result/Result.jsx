import React from "react";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {searchAPI} from "../../api/Api";

import {setChips, setRecipes} from "../../redux/searchSlice";
import Loader from "../../services/Loader";

import {
    AddedChips,
    FoundRecipes,
    ResultBody,
    ResultFooter,
    ResultRoot
} from "./ResultStyle";

import Button from "../../services/Button";
import {RecipeItem, ChipItem} from "./index";

const Result = () => {
    const [recipesLoad, setRecLoad] = React.useState(false);
    const dispatch = useDispatch();
    const chipItems = useSelector((state) => state.search.chipItems);
    const recipes = useSelector((state) => state.search.recipes);
    const location = useLocation()

    React.useEffect(() => {
        loadRecipes()
    }, [chipItems]);

    const loadRecipes = () => {
        setRecLoad(true);
        searchAPI
            .getRecipes(chipItems)
            .then(({data}) => {
                dispatch(setRecipes(data.items));
                setRecLoad(false);
            })
            .catch((ERR) => {
                if (ERR.response.status === 500) {
                    setRecLoad(false);
                }
            });
    }

    const onDeleteChip = (item) => {
        let newChipItems = new Set([...chipItems])
        newChipItems.delete(item)
        dispatch(setChips([...newChipItems]))
    };

    return (
        <ResultRoot>
            <ResultBody>
                <Switch>
                    <Route path="/ingredients/">
                        {chipItems.length !== 0
                            ? <AddedChips>
                                {chipItems.map((item) => (
                                    <ChipItem key={item._id} item={item}
                                              onDeleteChip={onDeleteChip}
                                    />
                                ))}
                            </AddedChips>
                            : <></>}
                    </Route>
                    <Route path="/recipes/">
                        {recipes.length !== 0
                            ? <FoundRecipes>
                               ы
                            </FoundRecipes>
                            : <></>}
                    </Route>

                </Switch>
            </ResultBody>
            <ResultFooter>
                {chipItems.length !== 0 && location.pathname === '/ingredients' ?
                    <Button>
                        <Link to={`${location.pathname}/result`}>
                            Найдено {recipesLoad ? <Loader/> : recipes.length} рецепта
                        </Link>
                    </Button> : <></>}
                {recipes.length !== 0 && location.pathname === '/recipes' ?
                    <Button>
                        <Link to={`${location.pathname}/result`}>
                            Найдено {recipesLoad ? <Loader/> : recipes.length} рецепта
                        </Link>
                    </Button> : <></>}
            </ResultFooter>
        </ResultRoot>
    );
}

export default Result;
