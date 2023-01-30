import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "./characters/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
