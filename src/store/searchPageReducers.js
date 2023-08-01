import { createSlice } from "@reduxjs/toolkit";

const searchedVideosData = createSlice({
  name: "searchedVideosData",
  initialState: [],
  reducers: {
    updateSearhedVideos: (_, { payload }) => payload,
  },
});

export const { updateSearhedVideos } = searchedVideosData.actions;
export default searchedVideosData.reducer;
