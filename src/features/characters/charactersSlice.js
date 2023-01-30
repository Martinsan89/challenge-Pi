import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: false,
  characters: [],
  searchedCharacters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setCharacters: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.characters = payload;
    },
    setError: (state) => {
      state.error = true;
    },
    setHome: (state) => {
      state.searchedCharacters = [];
    },
    searchCharacter: (state, { payload }) => {
      state.searchedCharacters = payload;
    },
    deleteCharacter: (state, { payload }) => {
      state.characters = payload;
      state.searchedCharacters = [];
    },
  },
});

export const {
  setLoading,
  setCharacters,
  setError,
  setHome,
  searchCharacter,
  deleteCharacter,
} = charactersSlice.actions;

export const charactersSelector = (state) => state.characters;

export default charactersSlice.reducer;

export function findCharacters(payload) {
  return searchCharacter(payload);
}
export function setDeleteCharacter(payload) {
  return deleteCharacter(payload);
}
