import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  activePopup: false
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setActivePopup(state, action) {
      state.activePopup = action.payload;
    }
  },
});

export const { setIsLoading, setActivePopup } = servicesSlice.actions;

export default servicesSlice.reducer;
