import React, {useEffect} from "react";
import {setChips, setRecipes, onIngInput, foundIngredient} from "../../redux/searchSlice";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {Button, SearchPopup} from "../index";
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
import {setActivePopup} from "../../redux/servicesSlice";
import List from "./Lists/List";
import IngredientItem from "./IngredientItem";
import ChipItem from "../Result/ChipItem/ChipItem";
import {IIngredient, IChip, IRecFromIng} from "../../types/types";
import {ISearchState, IServicesState} from "../../types/SearchTypes";

const Search = () => {
    const [load, onLoad] = React.useState<boolean>(false)
    const [recipesFromIng, setRecipesFromIng] = React.useState<IRecFromIng>({items: [], total: 0})

    const dispatch = useDispatch();
    const inputValue = useSelector((state: ISearchState) => state.search.inputIngValue);
    const activePopup = useSelector((state: IServicesState) => state.services.activePopup);
    const chipItems = useSelector((state: ISearchState) => state.search.chipItems);
    const foundIngredients = useSelector(
        (state: ISearchState) => state.search.foundIngredients
    );

    useEffect(() => {
        if (chipItems.length !== 0) {
            searchAPI.getRecipes(chipItems)
                .then(res => {
                    setRecipesFromIng(res.data)
                    onLoad(false)
                })
        }
    }, [chipItems])

    const onInput = (value: string) => {
        onLoad(true)
        dispatch(onIngInput(value));
        if (value.length >= 3) {
            searchAPI.getIngAndRecipes(value).then((res) => {
                dispatch(foundIngredient(res[0].data))
                setRecipesFromIng(res[1].data)
                onLoad(false)
            })
        }
        dispatch(foundIngredient([]))
        onLoad(false)
    };

    // const onAddChip = (item: {}) => {
    //     let newChipItems = new Set([...chipItems])
    //     newChipItems.add(item)
    //     dispatch(setChips([...newChipItems]))
    // };

    return (
        <StyledSearch>
            <StyledInput inputValue={inputValue.length} activePopup={activePopup}>
                {load ? <Loader/> : <img className={"search-icon"} src={searchIcon} alt="search"/>}
                <input onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)}
                       onFocus={() => dispatch(setActivePopup(true))}
                       value={inputValue}
                       placeholder={"Ингредиенты, рецепты"}
                       type="text"/>
                <button onClick={() => {
                    setRecipesFromIng({items: [], total: 0})
                    dispatch(foundIngredient([]))
                    dispatch(onIngInput(''))
                }} className={"close-button"}>
                </button>
                <StyledDropDown activePopup={activePopup}>
                    <StyledIngredients>
                        <h3>Ингредиенты</h3>
                        <List items={foundIngredients}
                              renderItem={(ingredient: IIngredient) => <IngredientItem
                                  ingredient={ingredient}
                                  key={ingredient._id}/>}/>
                    </StyledIngredients>
                    <StyledResult chipItems={chipItems.length}>
                        <StyledResultHeader>
                            <h3>{chipItems?.length > 0 ? 'Добавленные' : 'Рецепты'}</h3>
                            {chipItems?.length > 0
                                ? <Button onClick={async () => {
                                    await dispatch(setChips([]))
                                    await dispatch(onIngInput(''))
                                }} outline
                                          small>Очистить</Button>
                                : <></>}
                        </StyledResultHeader>
                        <List items={chipItems}
                              renderItem={(chip: IChip) => <ChipItem chip={chip} key={chip.id}/>}/>
                        {/*<List items={recipesFromIng} renderItem={RecipeItem}/>*/}
                        {/*<ul>*/}
                        {/*    {chipItems.length !== 0*/}
                        {/*        ? chipItems.map(chip =>*/}
                        {/*            <li>*/}
                        {/*                <ChipItem chip={chip}/>*/}
                        {/*            </li>)*/}
                        {/*        : recipesFromIng?.items.slice(0, 10).map((item) => (*/}
                        {/*            <li key={item._id} onClick={() => {*/}
                        {/*                dispatch(setActivePopup(false))*/}
                        {/*                dispatch(onIngrInput(''));*/}
                        {/*            }}>*/}
                        {/*                <Link to={`/recipes/result/${item._id}`}>*/}
                        {/*                    <RecipeItem key={item._id} {...item}/>*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</ul>*/}
                        {chipItems.length > 0
                            ? <Button onClick={() => {
                                dispatch(setRecipes(recipesFromIng))
                                dispatch(setActivePopup(false))
                            }}>
                                <Link to={`/recipes/result`}>
                                    Найдено {recipesFromIng.items.length} рецепта
                                </Link>
                            </Button>
                            : <Button onClick={() => dispatch(setActivePopup(false))}>
                                <Link to={`/recipes/result`}>
                                    Найдено {recipesFromIng.total} рецепта
                                </Link>
                            </Button>
                        }
                    </StyledResult>
                </StyledDropDown>
            </StyledInput>
            {activePopup
                ? <SearchPopup/>
                : <></>}
        </StyledSearch>
    );
}

export default Search;
