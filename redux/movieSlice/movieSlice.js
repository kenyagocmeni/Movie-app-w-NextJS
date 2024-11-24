import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [], // Tüm filmlerin saklanacağı yer
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload; // API'den çekilen filmleri store'a kaydet
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
