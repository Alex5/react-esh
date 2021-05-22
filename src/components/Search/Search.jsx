import React from "react";
import {setChips, setRecipes, onIngrInput, foundIngredient} from "../../redux/searchSlice";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {Button, SearchPopup} from "../index";
import {searchAPI} from "../../api/Api";
import {useLocation} from 'react-router-dom'

import searchIcon from '../../assets/img/search.svg'
import Loader from "../../services/Loader";
import {StyledDropDown, StyledInput, StyledSearch, StyledIngredients, StyledRecipes} from "./SearchStyle";

import {RecipeItem} from "../Result";
import {setActivePopup} from "../../redux/servicesSlice";

const Search = () => {
    const location =useLocation()
    const [load, onLoad] = React.useState(false)
    const inputValue = useSelector((state) => state.search.inputIngrValue);
    const activePopup = useSelector((state) => state.services.activePopup);
    const dispatch = useDispatch();
    const chipItems = useSelector((state) => state.search.chipItems);
    const recipes = useSelector((state) => state.search.recipes);
    const foundIngredients = useSelector(
        (state) => state.search.foundIngredients
    );

    const onIngInput = (value) => {
        onLoad(true)
        dispatch(onIngrInput(value));
        // dispatch(onRecipeInput(value));
        if (value.length >= 3) {
            searchAPI.getIngAndRecipes(value).then((res) => {
                dispatch(foundIngredient(res[0].data))
                dispatch(setRecipes(res[1].data))
                console.log(res[1].data)
                onLoad(false)
            })
        } else {
            dispatch(foundIngredient([]))
            onLoad(false)
        }
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
        dispatch(onIngrInput(''));
        dispatch(foundIngredient([]));
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
                {recipes && foundIngredients.length !== 0
                    ? <StyledDropDown activePopup={activePopup}>
                        <StyledIngredients>
                            <h3>Ингредиенты</h3>
                            <ul>
                                {foundIngredients.map((item) => (
                                    <li key={item._id}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </StyledIngredients>
                        <StyledRecipes>
                            <h3>Рецепты</h3>
                            <ul>
                                {recipes.items.map((item) => (
                                    <li key={item._id} onClick={() => dispatch(setActivePopup(false))}>
                                        {recipes.items.map(item => (
                                            <Link to={`/recipes/result/${item._id}`}>
                                                <RecipeItem key={item._id} {...item}/>
                                            </Link>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                            <Button>
                                <Link to={`/recipes/result`}>
                                    Найдено {recipes.total} рецепта
                                </Link>
                            </Button>

                        </StyledRecipes>
                    </StyledDropDown>
                    : <></>
                }
            </StyledInput>
            {activePopup || inputValue.length !== 0
                ? <SearchPopup/>
                : <></>}
        </StyledSearch>
    );
}

export default Search;
