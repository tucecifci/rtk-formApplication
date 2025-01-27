import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
