import React, {useEffect} from "react";
import {setChips, setRecipes, onIngrInput, foundIngredient} from "../../redux/searchSlice";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {Button, ChipItem, SearchPopup} from "../index";
import {searchAPI} from "../../api/Api";

import searchIcon from '../../assets/img/search.svg'
import Loader from "../../services/Loader";
import {
    StyledDropDown,
    StyledInput,
    StyledSearch,
    StyledIngredients,
    StyledResult,
    StyledResultHeader
} from "./SearchStyle";

import {RecipeItem} from "../Result";
import {setActivePopup} from "../../redux/servicesSlice";

const Search = () => {
    const [load, onLoad] = React.useState(false)
    const [foundRecipes, setFoundRecipes] = React.useState([])
    const inputValue = useSelector((state) => state.search.inputIngrValue);
    const activePopup = useSelector((state) => state.services.activePopup);
    const dispatch = useDispatch();
    const chipItems = useSelector((state) => state.search.chipItems);
    const recipes = useSelector((state) => state.search.recipes);
    const foundIngredients = useSelector(
        (state) => state.search.foundIngredients
    );

    useEffect(() => {
        searchAPI.getRecipes(chipItems).then(res => {
            setFoundRecipes(res.data)
        })
    }, [chipItems])

    console.log(foundRecipes)

    const onIngInput = (value) => {
        onLoad(true)
        dispatch(onIngrInput(value));
        if (value.length >= 3) {
            searchAPI.getIngAndRecipes(value).then((res) => {
                dispatch(foundIngredient(res[0].data))
                dispatch(setRecipes(res[1].data))
                onLoad(false)
            })
        }
        dispatch(foundIngredient([]))
        onLoad(false)
    };

    const onAddChip = (item) => {
        let newChipItems = new Set([...chipItems])
        const newItem = {
            name: item.name,
            id: item._id,
            count: 0.0,
            exclude: false,
        }
        newChipItems.add(newItem)
        dispatch(setChips([...newChipItems]))
    };

    return (
        <StyledSearch>
            <StyledInput activePopup={activePopup}>
                {load ? <Loader/> : <img className={"search-icon"} src={searchIcon} alt="search"/>}
                <input onInput={(e) => onIngInput(e.target.value)}
                       onFocus={() => dispatch(setActivePopup(true))}
                       value={inputValue}
                       placeholder={"Ингредиенты, рецепты"}
                       type="text"/>
                {activePopup
                    ? <StyledDropDown activePopup={activePopup}>
                        <StyledIngredients>
                            <h3>Ингредиенты</h3>
                            <ul>
                                {foundIngredients.map((item) => (
                                    <li key={item._id} onClick={() => onAddChip(item)}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </StyledIngredients>
                        <StyledResult chipItems={chipItems}>
                            <StyledResultHeader>
                                <h3>{chipItems.length > 0 ? 'Добавленные' : 'Рецепты'}</h3>
                                {chipItems.length > 0
                                    ? <Button onClick={async () => {
                                        await dispatch(setChips([]))
                                        await dispatch(onIngrInput(''))
                                    }} outline
                                              small>Очистить</Button>
                                    : <></>}
                            </StyledResultHeader>
                            <ul>
                                {chipItems?.length === 0
                                    ? recipes.items.map((item) => (
                                        <li key={item._id} onClick={() => {
                                            dispatch(setActivePopup(false))
                                            dispatch(onIngrInput(''));
                                        }}>
                                            {recipes.items.map(item => (
                                                <Link to={`/recipes/result/${item._id}`}>
                                                    <RecipeItem key={item._id} {...item}/>
                                                </Link>
                                            ))}
                                        </li>
                                    ))
                                    : chipItems.map(chip =>
                                        <li>
                                            <ChipItem chip={chip}/>
                                        </li>)
                                }
                            </ul>
                            {chipItems.length > 0 ?
                                <Button onClick={() => dispatch(setRecipes(foundRecipes))}>
                                    <Link to={`/recipes/result`}>
                                        Найдено {foundRecipes ? foundRecipes.items.length : <Loader/> } рецепта
                                    </Link>
                                </Button>
                                : <Button onClick={() => dispatch(setActivePopup(false))}>
                                    <Link to={`/recipes/result`}>
                                        Найдено {recipes.total} рецепта
                                    </Link>
                                </Button>
                            }
                        </StyledResult>
                    </StyledDropDown>
                    : <></>
                }
            </StyledInput>
            {activePopup
                ? <SearchPopup/>
                : <></>}
        </StyledSearch>
    );
}

export default Search;
