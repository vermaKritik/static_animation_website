import {  createSlice } from "@reduxjs/toolkit";
import { setTheme } from "./reducers";

const initialState = {
  theme: "dark",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme,
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
