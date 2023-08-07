import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideosDataForSearch } from "../apiEndPoints";
import { getTimeInFormat } from "../utils/utils";

const sliceRequiredData = ({
  id,
  snippet: {
    title,
    description,
    channelId,
    channelTitle,
    publishedAt,
    thumbnails,
  },
}) => {
  return {
    id: id.videoId || id.channelId || id.playlistId,
    title,
    description,
    channelTitle,
    channelId,
    timePassedSinceUpload: getTimeInFormat(publishedAt),
    thumbnail: thumbnails.high.url,
  };
};

const updateSearhedVideos = createAsyncThunk(
  "search/updateSearchedVideos",
  async (searchQuery) => {
    const {
      data: { items },
    } = await getVideosDataForSearch(searchQuery);
    return items.map(sliceRequiredData);
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

const searchedVideosData = createSlice({
  name: "searchedVideosData",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(updateSearhedVideos.fulfilled, (_, { payload }) => ({
      data: payload,
      isLoading: false,
    }));
    builder.addCase(updateSearhedVideos.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(updateSearhedVideos.rejected, () => ({
      data: [],
      isLoading: false,
    }));
  },
});

export const { clearState } = searchedVideosData.actions;
export { updateSearhedVideos };
export default searchedVideosData.reducer;
