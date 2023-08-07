import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideosDataFromAPI } from "../apiEndPoints";
import {
  getViewsInFormat,
  getTimeInFormat,
  getDurationInFormat,
} from "../utils/utils";

const sliceRequiredData = ({
  id,
  snippet: { title, channelId, channelTitle, publishedAt, thumbnails },
  contentDetails: { duration },
  statistics: { viewCount },
}) => {
  return {
    id,
    title,
    channelTitle,
    channelId,
    timePassedSinceUpload: getTimeInFormat(publishedAt),
    thumbnail: thumbnails.standard.url,
    duration: getDurationInFormat(duration),
    viewCount: getViewsInFormat(viewCount),
  };
};

const updateVideosData = createAsyncThunk(
  "homePage/updateVideosData",
  async () => {
    const { items } = await getVideosDataFromAPI();
    return items.map(sliceRequiredData);
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

const videosData = createSlice({
  name: "videosData",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(updateVideosData.fulfilled, (_, { payload }) => ({
      data: payload,
      isLoading: false,
    }));
    builder.addCase(updateVideosData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(updateVideosData.rejected, () => ({
      data: [],
      isLoading: false,
    }));
  },
});

export const { clearState } = videosData.actions;
export { updateVideosData };
export default videosData.reducer;
