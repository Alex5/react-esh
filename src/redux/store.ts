import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import servicesSlice from "./servicesSlice";
import {useDispatch} from "react-redux";

const store = configureStore({
  reducer: {
    search: searchSlice,
    services: servicesSlice
  },
});

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch()

export default store;
