import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from './../../Constants/@types';

const initialState = {
   theme: Theme.Dark,
}

const themeSlice = createSlice ({
   name: 'themeReducer',
   initialState,
   reducers: {
      setTheme: ( state, action: PayloadAction<Theme> ) => {
            state.theme = action.payload;
      }
   }
})

export const { setTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer

export default themeReducer;