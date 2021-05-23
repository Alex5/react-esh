import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    isLoading: false,
    activePopup: false
  },
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
