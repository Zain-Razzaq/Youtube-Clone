import { createSlice } from "@reduxjs/toolkit";

const favoriteVideos = createSlice({
  name: "favoriteVideos",
  initialState: [],
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.push(payload);
    },
    removerFromFavorites: (state, { payload }) =>
      state.filter((videoId) => videoId !== payload),
  },
});

export const { addToFavorites, removerFromFavorites } = favoriteVideos.actions;
export default favoriteVideos.reducer;
