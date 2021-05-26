import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChip, IIngredient, IRecFromIng} from "../types/types";

interface SearchState {
    inputIngValue: string
    inputRecipeValue: string
    foundIngredients: IIngredient[]
    chipItems: IChip[]
    recipes: IRecFromIng
}

const initialState: SearchState = {
    inputIngValue: "",
    inputRecipeValue: '',
    foundIngredients: [],
    chipItems: [],
    recipes: {
        items: [],
        total: 0
    }
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onIngInput(state, action: PayloadAction<string>) {
            state.inputIngValue = action.payload;
        },
        foundIngredient(state, action: PayloadAction<IIngredient[]>) {
            state.foundIngredients = action.payload;
        },
        setChips(state, action: PayloadAction<IChip[]>) {
            state.chipItems = action.payload;
        },
        excludeChip(state, action: PayloadAction<number>) {
            state.chipItems.map(item => item.id === action.payload ? item.exclude = !item.exclude : item);
        }
        ,
        setRecipes(state, action: PayloadAction<IRecFromIng>) {
            state.recipes = action.payload;
        },
    },
});

export const {
    onIngInput,
    foundIngredient,
    setChips,
    setRecipes,
    excludeChip
} = searchSlice.actions;
export default searchSlice.reducer;
