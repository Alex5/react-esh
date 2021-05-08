import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = servicesSlice.actions;

export default servicesSlice.reducer;
