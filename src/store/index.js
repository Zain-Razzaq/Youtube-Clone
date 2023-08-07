import { configureStore } from "@reduxjs/toolkit";

import videosDataReducer from "./homePage/reducer";
import searchedVideosDataReducers from "./searchPage/reducers";
import suggestedVideosDataReducers from "./suggestedVideos/reducers";
import favoriteVideosReducers from "./favoriteVideos/reducers";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
    searchedVideosData: searchedVideosDataReducers,
    suggestedVideosData: suggestedVideosDataReducers,
    favoriteVideos: favoriteVideosReducers,
  },
});

export default store;
