import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';


const rootReducer = combineReducers({
  themeSlice: themeSlice.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;
