import React from "react";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {searchAPI} from "../../api/Api";

import {setChips, setRecipes} from "../../redux/searchSlice";

import closeChip from "../../assets/img/cancel_black_24dp.svg";
import Loader from "../../services/Loader";


import {
    AddedChips,
    Chip,
    ChipHeader,
    FoundRecipes,
    RecipesItem,
    RecipesItemImage,
    RecipesItemInfo,
    RecipesItemInfoBody, RecipesItemInfoFooter,
    RecipesItemInfoHeader,
    ResultBody,
    ResultFooter,
    ResultHeader, ResultPlaceholder,
    ResultRoot
} from "./ResultStyle";
import Button from "../../services/Button";

const Result = () => {
    const [recipesLoad, setRecLoad] = React.useState(false);

    const dispatch = useDispatch();
    const chipItems = useSelector((state) => state.search.chipItems);
    const recipes = useSelector((state) => state.search.recipes);
    const location = useLocation()

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

    React.useEffect(() => {
        getRecipes();
    }, [chipItems]);

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
        <>{recipes.length !== 0 ? <ResultRoot>
            <ResultHeader>
                {location.pathname === '/ingredients' ? 'Ингредиенты' : 'Рецепты'}
            </ResultHeader>
            <ResultBody>
                <Switch>
                    <Route path="/ingredients/">
                        <AddedChips>
                            {chipItems.map((item) => (
                                <Chip key={item._id}>
                                    <ChipHeader className="chip__header">
                                        <span>{item.name}</span>
                                        <button
                                            onClick={() => onDeleteChip(item)}
                                            className="chip__header_close-btn"
                                        >
                                            <img src={closeChip} alt=""/>
                                        </button>
                                    </ChipHeader>
                                    {/* <div className="chip__body">
                    <label htmlFor="ingr-weight">Количество: {item.countName}</label>
                    <input
                      value={ingrCount}
                      onInput={(e) => {
                        setIngrCount(e.target.value);
                      }}
                      id="ingr-weight"
                      type="number"
                    />
                  </div> */}
                                    {/* <div className="chip__footer">
                    <button>изменить</button>
                    <button
                      className={item.exclude ? "exclude" : ""}
                      onClick={() => onExclude(item._id)}
                    >
                      исключить
                    </button>
                  </div> */}
                                </Chip>
                            ))}
                        </AddedChips>
                    </Route>
                    <Route path="/recipes/">
                        <FoundRecipes>
                            {recipes.slice(0, 5).map(item => (
                                <Link to={`/recipes/${item._id}`}>
                                    <RecipesItem key={item._id}>
                                        <RecipesItemImage>
                                            <img src={item.recipeCover} alt={item.name}/>
                                        </RecipesItemImage>
                                        <RecipesItemInfo>
                                            <RecipesItemInfoHeader>
                                                <span>{item.name}</span>
                                            </RecipesItemInfoHeader>
                                            <RecipesItemInfoBody>
                                                <span>Время приготовления <b>{item.recipeTime}</b></span>
                                                <span>Порций <b>{item.portionsCount}</b></span>
                                            </RecipesItemInfoBody>
                                            <RecipesItemInfoFooter>
                                                {item.ingredients.map(el => (
                                                    <span>{el.name} </span>
                                                ))}
                                            </RecipesItemInfoFooter>
                                        </RecipesItemInfo>
                                    </RecipesItem>
                                </Link>
                            ))}
                        </FoundRecipes>
                    </Route>
                </Switch>
            </ResultBody>
            {(chipItems.length !== 0 || recipes.length !== 0) ? (
                <ResultFooter>
                    <Button>
                        <Link to={`${location.pathname}/result`}>
                            Найдено {recipesLoad ? <Loader/> : recipes.length} рецепта
                        </Link>
                    </Button>
                </ResultFooter>
            ) : (
                <></>
            )}
        </ResultRoot> : <ResultPlaceholder/>}</>
    );
}

export default Result;
