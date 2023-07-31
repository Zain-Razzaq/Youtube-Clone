import { createSlice } from "@reduxjs/toolkit";

const videosData = createSlice({
  name: "videosData",
  initialState: [],
  reducers: {
    updateVideosData: (state, { payload }) => {
      return payload;
    },
  },
});

export const { updateVideosData } = videosData.actions;
export default videosData.reducer;
