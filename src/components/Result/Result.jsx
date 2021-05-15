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
    ResultHeader, IngredientsPlaceholder,
    RecipesPlaceholder,
    ResultRoot
} from "./ResultStyle";

import Button from "../../services/Button";
import {RecipeItem, ChipItem} from "./index";

const Result = () => {
    const [recipesLoad, setRecLoad] = React.useState(false);
    const [newRecipes, setNewRecipes] = React.useState([]);
    const dispatch = useDispatch();
    const chipItems = useSelector((state) => state.search.chipItems);
    const recipes = useSelector((state) => state.search.recipes);
    const location = useLocation()

    React.useEffect(() => {
        loadRecipes()
    }, [chipItems]);

    React.useEffect(() => {
        loadNewRecipes()
    }, []);

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

    const loadNewRecipes = () => {
        searchAPI
            .getRecipes([
                {
                    name: 'Шоколад',
                    id: 14094,
                    count: 0,
                    exclude: false
                },
                {
                    name: 'Молоко',
                    id: 13453,
                    count: 0,
                    exclude: false
                },
                {
                    name: 'Пшеничная мука',
                    id: 13458,
                    count: 0,
                    exclude: false
                }
                ])
            .then(({data}) => {
                setNewRecipes(data.items)
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
        <>
            <ResultRoot>
                <ResultHeader>
                    {chipItems.length !== 0 && location.pathname === '/ingredients' ? 'Ингредиенты' : ''}
                    {recipes.length !== 0 && location.pathname === '/recipes' ? 'Рецепты' : ''}
                    {location.pathname === '/' ? '#Новое' : ''}
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
                                : <IngredientsPlaceholder/>}
                        </Route>
                        <Route path="/recipes/">
                            {recipes.length !== 0
                                ? <FoundRecipes>
                                    {recipes.slice(0, 5).map(item => (
                                        <Link to={`/recipes/result/${item._id}`}>
                                            <RecipeItem key={item._id} {...item}/>
                                        </Link>
                                    ))}
                                </FoundRecipes>
                                : <RecipesPlaceholder/>}
                        </Route>
                        <Route path="/">
                            <FoundRecipes>
                                {recipesLoad ? <Loader/> : newRecipes.map(item => (
                                    <Link to={`/recipes/result/${item._id}`}>
                                        <RecipeItem key={item._id} {...item}/>
                                    </Link>
                                ))}
                            </FoundRecipes>
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
        </>
    );
}

export default Result;
