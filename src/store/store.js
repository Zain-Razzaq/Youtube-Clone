import { configureStore } from "@reduxjs/toolkit";

import videosDataReducer from "./homePageReducer";
import searchedVideosDataReducers from "./searchPageReducers";
import suggestedVideosDataReducers from "./suggestedVideosReducers";
import favoriteVideosReducers from "./favoriteVideosReducers";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
    searchedVideosData: searchedVideosDataReducers,
    suggestedVideosData: suggestedVideosDataReducers,
    favoriteVideos: favoriteVideosReducers,
  },
});

export default store;
