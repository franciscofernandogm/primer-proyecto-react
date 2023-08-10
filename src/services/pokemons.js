import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPokemons } from "../features/tasks/taskSlice.js";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (_, { dispatch }) => {
    const firstGenerationRange = Array.from(
      { length: 151 },
      (_, index) => index + 1
    );
    const pokemonList = [];
    const isCatchingList = [];

    for (const id of firstGenerationRange) {
      try {
        const response = await axios.get(POKEMON_API + `/${id}`);
        const data = response.data;
        pokemonList.push(data);
        isCatchingList.push(false);
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
      }
    }

    dispatch(setPokemons({ pokemonList, isCatchingList }));
  }
);
