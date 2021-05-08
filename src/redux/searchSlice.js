import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    inputIngrValue: "",
    inputRecipeValue: '',
    foundIngredients: [],
    chipItems: [],
    recipes: [],
  },
  reducers: {
    onIngrInput(state, action) {
      state.inputIngrValue = action.payload;
    },
    onRecipeInput(state, action) {
      state.inputRecipeValue = action.payload;
    },
    foundIngredient(state, action) {
      state.foundIngredients = action.payload;
    },
    setChips(state, action) {
      state.chipItems = action.payload;
    },
    setRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

export const {
  onIngrInput,
  foundIngredient,
  setChips,
  setRecipes,
  onRecipeInput
} = searchSlice.actions;
export default searchSlice.reducer;
