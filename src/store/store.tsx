import { configureStore } from "@reduxjs/toolkit";
import streamReducer from "../store/slices/stream/streamSlice";

export const store = configureStore({
  reducer: {
    api: streamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
