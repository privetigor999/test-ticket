import { createSlice } from "@reduxjs/toolkit";

const minDate = (): string => {
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getUTCMonth() + 1;
  const day = todayDate.getUTCDate();
  const date = year + "-" + month + "-" + day;
  return date;
};

const initialState = {
  todayDate: minDate(),
};

const todayDateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},
});

export default todayDateSlice.reducer;
