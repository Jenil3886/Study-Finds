import { configureStore } from "@reduxjs/toolkit";
import viewToggleReducer from "../features/layoutslice";
import dataReducer from "../features/dataSlice";

export const store = configureStore({
  reducer: {
    viewToggle: viewToggleReducer, //add view toggal reducer
    data: dataReducer, //add view toggal reducer
  },
});
