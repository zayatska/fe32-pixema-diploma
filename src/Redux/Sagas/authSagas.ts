import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { ACCESS_TOKEN_KEY, ID_KEY } from '../../Constants/consts';
import { registerUser, signInUser, setLoggedIn, getUserData, setUserData, logoutUser } from '../Reducers/authReducer';
import { RegisterUserPayload, SignInUserPayload } from '../Types/auth';
import API from '../utils/api';

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
    const { data: registerData, callback} = action.payload;

    const { ok, problem } = yield call (API.registerUser, registerData)
    
    if(ok) {
        callback() 
    } else {
        console.warn ('Error while registering user:', problem)
    }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
    const { data: signInData, callback } = action.payload;

    const { ok, problem, data } = yield call(API.signInUser, signInData);

    if (ok) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data?.user.access_token);
        localStorage.setItem(ID_KEY, data.user.id);

        yield put(setLoggedIn(true));
        callback()
    } else {
        console.warn("Error while sign in: ", problem);
    }
}

function* getUserDataWorker() {

    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || "";
    const idUser = localStorage.getItem(ID_KEY) || '';

    const { ok, problem, data } = yield call(API.getUserInfo, accessToken, idUser);
    

    if (ok && data) {
        yield put(setUserData({ mail: data.user.email, name: data.user.display_name }));
    } else {
        console.warn("Error while getting user info: ", problem);
    }
}

function* logoutUserWorker() {
    yield put(setLoggedIn(false));
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(ID_KEY);
}

export default function* authSaga() {
    yield all ([
        takeLatest(registerUser, registerUserWorker),
        takeLatest(signInUser, signInUserWorker),
        takeLatest(getUserData, getUserDataWorker),
        takeLatest(logoutUser, logoutUserWorker),
        ])
}