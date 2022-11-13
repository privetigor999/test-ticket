import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "./../../types/data";

const initialState: IData = {
  cityFrom: "",
  cityTo: "",
  dateFrom: "",
  dateBack: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCityFrom: (state, action: PayloadAction<IData["cityFrom"]>) => {
      state.cityFrom = action.payload;
    },
    setCityTo: (state, action: PayloadAction<IData["cityTo"]>) => {
      state.cityTo = action.payload;
    },
    setDateFrom: (state, action: PayloadAction<IData["dateFrom"]>) => {
      if (state.dateBack < action.payload) {
        state.dateBack = "";
      }
      state.dateFrom = action.payload;
    },
    setDateBack: (state, action: PayloadAction<IData["dateBack"]>) => {
      if (state.dateFrom < action.payload) {
        state.dateBack = action.payload;
      } else {
        state.dateBack = "";
      }
    },
  },
});

export const {
  setCityFrom,
  setCityTo,
  setDateFrom,
  setDateBack,
} = dataSlice.actions;

export default dataSlice.reducer;
