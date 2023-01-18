import { all } from 'redux-saga/effects';
import authSaga from './authSagas';
import filmsSaga from './filmsSagas';

export default function* rootSaga () {
    yield all ([ authSaga(), filmsSaga()])
}