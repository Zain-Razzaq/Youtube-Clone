import { configureStore } from "@reduxjs/toolkit";
import videosDataReducer from "./reducer";

const store = configureStore({
  reducer: {
    videosData: videosDataReducer,
  },
});

export default store;
