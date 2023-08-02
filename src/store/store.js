import { configureStore } from "@reduxjs/toolkit";

import videosDataReducer from "./homePageReducer";
import searchedVideosDataReducers from "./searchPageReducers";
import suggestedVideosDataReducers from "./suggestedVideosReducers";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
    searchedVideosData: searchedVideosDataReducers,
    suggestedVideosData: suggestedVideosDataReducers,
  },
});

export default store;
