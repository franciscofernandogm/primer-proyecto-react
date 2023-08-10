import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "../features/tasks/taskSlice.js";

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});
