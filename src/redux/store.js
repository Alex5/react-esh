import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import servicesSlice from "./servicesSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    services: servicesSlice
  },
});

export default store;
