import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./Reducers/themeReducer";
import rootSaga from './Sagas/rootSaga';

import createSagaMiddleware from 'redux-saga';
import authReducer from './Reducers/authReducer';
import filmsReducer from './Reducers/filmsReducer';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = {
   themeReducer,
   authReducer,
   filmsReducer,
}

export const store = configureStore({
   reducer: rootReducer,
   middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>