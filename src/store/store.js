import { configureStore } from "@reduxjs/toolkit";

import videosDataReducer from "./homePageReducer/homePageReducer";
import searchedVideosDataReducers from "./searchPageReducers/searchPageReducers";
import suggestedVideosDataReducers from "./suggestedVideosReducers/suggestedVideosReducers";
import favoriteVideosReducers from "./favoriteVideosReducers/favoriteVideosReducers";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
    searchedVideosData: searchedVideosDataReducers,
    suggestedVideosData: suggestedVideosDataReducers,
    favoriteVideos: favoriteVideosReducers,
  },
});

export default store;
