import { RootState } from "../store";

export default {
   getLoggedIn: (state: RootState) => state.authReducer.isLoggedIn,
   getUserInfo: (state: RootState) => state.authReducer.userInfo,
};