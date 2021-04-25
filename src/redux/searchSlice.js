import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  foundIngredients: [],
  chipItems: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onIngrInput(state, action) {
      state.inputValue = action.payload;
    },
    foundIngredient(state, action) {
      state.foundIngredients = action.payload;
    },
    setChips(state, action) {
      state.chipItems = action.payload;
    },
  },
});

export const { onIngrInput, foundIngredient, setChips } = searchSlice.actions;
export default searchSlice.reducer;
