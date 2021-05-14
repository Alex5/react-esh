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
    ResultHeader, ResultPlaceholder,
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
        getRecipes();
    }, [chipItems]);

    const onDeleteChip = (item) => {
        let newChipItems = new Set([...chipItems])
        newChipItems.delete(item)
        dispatch(setChips([...newChipItems]))
    };


    const getRecipes = () => {
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
    };

    return (
        <>
            <ResultRoot>
                <ResultHeader>
                    {chipItems.length !== 0 && location.pathname === '/ingredients' ? 'Ингредиенты' : ''}
                    {recipes.length !== 0 && location.pathname === '/recipes' ? 'Рецепты' : ''}
                </ResultHeader>
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
                                : <ResultPlaceholder/>}
                        </Route>
                        <Route path="/recipes/">
                            <FoundRecipes>
                                {recipes.length !== 0 ? recipes.slice(0, 5).map(item => (
                                    <Link to={`/recipes/result/${item._id}`}>
                                        <RecipeItem key={item._id} {...item}/>
                                    </Link>
                                )) : <ResultPlaceholder/>}
                            </FoundRecipes>
                        </Route>
                    </Switch>
                </ResultBody>
                <ResultFooter>
                    {chipItems.length !== 0 ?
                        <Button>
                            <Link to={`${location.pathname}/result`}>
                                Найдено {recipesLoad ? <Loader/> : recipes.length} рецепта
                            </Link>
                        </Button> : <></>}
                </ResultFooter>
            </ResultRoot>
        </>
    );
}

export default Result;
