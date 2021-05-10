import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {onRecipeInput, setRecipes} from "../../redux/searchSlice";
import {searchAPI} from "../../api/Api";

import "./Search.scss";
import searchImg from "../../assets/img/search.svg";
import {SearchBlock, SearchInput, SearchWrapper} from "./SearchStyle";

const SearchRecipes = () => {
    const dispatch = useDispatch();
    const inputRecipeValue = useSelector(state => state.search.inputRecipeValue);

    const onInput = (value) => {
        dispatch(onRecipeInput(value));
        searchAPI.getRecipesOnInput(value).then(({data}) => {
            dispatch(setRecipes(data))
        })
    };

    return (
        <SearchWrapper>
            <SearchBlock>
                <img src={searchImg} className="search-block__input-img"/>
                <SearchInput
                    value={inputRecipeValue}
                    type="text"
                    placeholder="Введите название рецепта"
                    onInput={(e) => onInput(e.target.value)}
                />
            </SearchBlock>
            {/* <div>
      {recipes.map(item => (
        <div>{item.name}</div>
      ))}
    </div> */}
        </SearchWrapper>

    );
};

export default SearchRecipes;
