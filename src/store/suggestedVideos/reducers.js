import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVidoesByCategory, getVideoById } from "../../apiEndPoints";
import {
  getTimeInFormat,
  getDurationInFormat,
  getViewsInFormat,
} from "../../utils/formators";

const requiredDataAdopter = ({
  id,
  snippet: { title, channelTitle, publishedAt, thumbnails },
  contentDetails: { duration },
  statistics: { viewCount },
}) => {
  return {
    id,
    title,
    channelTitle,
    timePassedSinceUpload: getTimeInFormat(publishedAt),
    thumbnail: thumbnails.standard.url,
    duration: getDurationInFormat(duration),
    viewCount: getViewsInFormat(viewCount),
  };
};

const updateSuggestedVideos = createAsyncThunk(
  "watch/updateSearhedVideos",
  async (videoId) => {
    const videoData = await getVideoById(videoId);
    const data = await getVidoesByCategory(videoData.snippet.categoryId);
    return data.items.map(requiredDataAdopter);
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

const suggestedVideosData = createSlice({
  name: "suggestedVideosData",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(updateSuggestedVideos.fulfilled, (_, { payload }) => ({
      data: payload,
      isLoading: false,
    }));
    builder.addCase(updateSuggestedVideos.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(updateSuggestedVideos.rejected, (_) => initialState);
  },
});

export const { clearState } = suggestedVideosData.actions;
export { updateSuggestedVideos };
export default suggestedVideosData.reducer;
