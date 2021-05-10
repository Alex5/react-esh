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
        let deletingChipItems = new Set([...chipItems]);
        deletingChipItems.delete(item);
        dispatch(setChips([...deletingChipItems]));
    };

    // const onExclude = (id) => {
    //   chipItems.forEach((element) => {
    //     if (id === element._id) {
    //       let excludeChipItemsArr = new Set([...chipItems]);
    //       excludeChipItemsArr.add(element);
    //       setExcludeItems((element.exclude = !excludeItem));
    //     }
    //   });
    // };

    const getRecipes = () => {
        let newChipItems = [];

        chipItems.forEach((ingredients) => {
            newChipItems.push({
                id: ingredients._id,
                count: 0.0,
                exclude: false,
            });
        });

        setRecLoad(true);

        searchAPI
            .getRecipes(newChipItems)
            .then(({data}) => {
                dispatch(setRecipes(data.items));
                setRecLoad(false);
            })
            .catch(() => {
                setRecLoad(false);
            });
    };

    return (
        <>
            {recipes.length !== 0
                ? <ResultRoot>
                    <ResultHeader>
                        {location.pathname === '/ingredients' ? 'Ингредиенты' : 'Рецепты'}
                    </ResultHeader>
                    <ResultBody>
                        <Switch>
                            <Route path="/ingredients/">
                                <AddedChips>
                                    {chipItems.map((item) => (
                                        <ChipItem key={item._id} item={item} onDeleteChip={onDeleteChip}/>
                                    ))}
                                </AddedChips>
                            </Route>
                            <Route path="/recipes/">
                                <FoundRecipes>
                                    {recipes.slice(0, 5).map(item => (
                                        <Link to={`/recipes/result/${item._id}`}>
                                            <RecipeItem key={item._id} {...item}/>
                                        </Link>
                                    ))}
                                </FoundRecipes>
                            </Route>
                        </Switch>
                    </ResultBody>
                        <ResultFooter>
                            <Button>
                                <Link to={`${location.pathname}/result`}>
                                    Найдено {recipesLoad ? <Loader/> : recipes.length} рецепта
                                </Link>
                            </Button>
                        </ResultFooter>
                </ResultRoot>
                : <ResultPlaceholder/>}
        </>
    );
}

export default Result;
