import { createSlice } from "@reduxjs/toolkit";

const videosData = createSlice({
  name: "videosData",
  initialState: [],
  reducers: {
    addVideosData: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addVideosData } = videosData.actions;
export default videosData.reducer;
