import { PayloadAction } from "@reduxjs/toolkit";

interface State {
  theme: string; 
}

export const setTheme = (state: State, action: PayloadAction<string>) => {
  const theme = action.payload as State["theme"];
  state.theme = theme;
};
