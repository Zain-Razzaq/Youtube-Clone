import { createSlice } from "@reduxjs/toolkit";

const suggestedVideosData = createSlice({
  name: "suggestedVideosData",
  initialState: [],
  reducers: {
    updateSuggestedVideos: (_, { payload }) => payload,
  },
});

export const { updateSuggestedVideos } = suggestedVideosData.actions;
export default suggestedVideosData.reducer;
