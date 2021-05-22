import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    foundIngredient,
    onIngrInput,
    setChips
} from "../../redux/searchSlice";

import {searchAPI} from "../../api/Api";

import "./Search.scss";
import Loader from "../../services/Loader";
import {SearchBlock, SearchInput, SearchResult, SearchWrapper} from "./SearchStyle";
import searchImg from "../../assets/img/search.svg";
import {Chip} from "../Result/ChipItem/ChipItemStyle";

const SearchIngredients = () => {
    const [ingLoad, setIngLoad] = React.useState(false)
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.search.inputIngrValue);
    const foundIngredients = useSelector(
        (state) => state.search.foundIngredients
    );
    const chipItems = useSelector((state) => state.search.chipItems);

    const onIngInput = (value) => {
        setIngLoad(true)
        dispatch(onIngrInput(value));
        if (value.length >= 3) {
            searchAPI
                .getIngredients(inputValue)
                .then((res) => {
                    dispatch(foundIngredient(res.data))
                    setIngLoad(false)
                });
        } else {
            setIngLoad(false)
            dispatch(foundIngredient([]))
        }
    };

    return (
        <SearchWrapper>
            <SearchBlock>
                <img src={searchImg}/>
                <SearchInput
                    placeholder="Введите название ингредиента"
                    value={inputValue}
                    type="search"
                    onInput={(e) => onIngInput(e.target.value)}
                />
            </SearchBlock>
            <div className="search-popup__chips">
                {chipItems && chipItems.map((item) => (
                    <Chip key={item._id} className="chip">{item.name}</Chip>
                ))}
            </div>
            {ingLoad ? <Loader/> : <SearchResult>
                <ul>
                    {foundIngredients.map((item) => (
                        <li onClick={() => onAddChip(item)} key={item._id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </SearchResult>
            }
        </SearchWrapper>
    );
};

export default SearchIngredients;
