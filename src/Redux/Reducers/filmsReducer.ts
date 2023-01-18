import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   CardsListType, CardType,
} from "../../Constants/@types";

type FilmsReducerState = {
   allFilms: CardsListType;
   singleFilms: CardType | null;
};

const initialState: FilmsReducerState = {
   allFilms: [],
   singleFilms: null,
};

const filmsSlice = createSlice({
   name: "filmsReducer",
   initialState,
   reducers: {
      getFilms: (state, action: PayloadAction<undefined>) => {},
      setFilms: (state, action: PayloadAction<CardsListType>) => {state.allFilms = action.payload;},

      getSingleFilms: (state, action: PayloadAction<string>) => {},
      setSingleFilms: (state, action: PayloadAction<CardType>) => {state.singleFilms = action.payload;},
   }
});

   export const { 
      getFilms,
      setFilms,
      getSingleFilms,
      setSingleFilms
   } = filmsSlice.actions;

   const filmsReducer = filmsSlice.reducer;
   export default filmsReducer;