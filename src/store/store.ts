import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./features/dataSlice";
import todayDateSlice from "./features/todayDateSlice";

const rootReducers = combineReducers({
  data: dataSlice,
  date: todayDateSlice,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
