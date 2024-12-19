import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./info/slice";

const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

export default store;
