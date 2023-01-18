import { ACCESS_TOKEN_KEY } from './../../Constants/consts';
import { RegisterUserPayload, SignInUserPayload, UserInfoData } from './../Types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    isLoggedIn: boolean,
    userInfo: UserInfoData | undefined
};

const INITIAL_STATE: initialStateType = {
    isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
    userInfo: undefined,
}

const authSlice = createSlice( {
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        registerUser: (state, action:PayloadAction<RegisterUserPayload>) => {},
        signInUser: (state, action:PayloadAction<SignInUserPayload>) => {},
        setLoggedIn: (state, action: PayloadAction<boolean>) => {state.isLoggedIn = action.payload;},
        getUserData: (state, action: PayloadAction<undefined>) => {},
        setUserData: (state, action: PayloadAction<UserInfoData>) => {
            state.userInfo = action.payload;},
        logoutUser: (state, action: PayloadAction<undefined>) => {},
    }
})

export const {registerUser, signInUser, setLoggedIn, getUserData, setUserData, logoutUser} = authSlice.actions;
const reducer = authSlice.reducer;
export default reducer;