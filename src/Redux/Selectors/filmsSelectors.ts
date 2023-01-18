import { RootState } from "../store";

export default {
   getAllFilms: (state: RootState) => state.filmsReducer.allFilms,
   getSingleFilms: (state: RootState) => state.filmsReducer.singleFilms,
};