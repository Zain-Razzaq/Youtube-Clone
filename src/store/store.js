import { configureStore } from "@reduxjs/toolkit";

import videosDataReducer from "./homePageReducer";
import searchedVideosDataReducers from "./searchPageReducers";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
    searchedVideosData: searchedVideosDataReducers,
  },
});

export default store;
