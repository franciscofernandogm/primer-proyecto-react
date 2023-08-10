import { createSlice } from "@reduxjs/toolkit";

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    pokemons: [],
    isCatching: [],
    isLoading: true,
  },
  reducers: {
    setPokemons(state, { payload }) {
      (state.pokemons = payload.pokemonList),
        (state.isCatching = payload.isCatchingList),
        (state.isLoading = false);
    },
    changeCatching(state, { payload }) {
      const newCatchingList = [].concat(state.isCatching);
      newCatchingList[payload.id] = payload.change;
      state.isCatching = newCatchingList;
    },
  },
});

export const { setPokemons, changeCatching } = pokedexSlice.actions;
export default pokedexSlice.reducer;
