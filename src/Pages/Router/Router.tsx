import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";


import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NewPassword from "../NewPassword";
import ResetPassword from "../ResetPassword";

import PagesWrapper from "../PagesWrapper";
import Home from "../Home";
import ContentPage from "../ContentPage";
import SettingsPage from "../SettingsPage";
import LogoWrapper from "../LogoWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/Reducers/authReducer";
import authSelectors from "../../Redux/Selectors/authSelectors";
import { userInfo } from "os";


export enum PathNames {
   Home = "/",
   SignIn = "/sign-in",
   SignUp = "/sign-up",
   NewPassword = "/new-password",
   ResetPassword = "/reset-password",
   Search = "/search/:searchString",
   SettingsPage = "/settings",
   ContentPage = "/content-page/:id",
}

const Router = () => {

   const isLoggedIn = useSelector(authSelectors.getLoggedIn);
   const dispatch = useDispatch();

   useEffect(() => {
      if (isLoggedIn) {
         dispatch(getUserData());
      }
   }, [isLoggedIn]);

   return (
      <BrowserRouter>
         <Routes>

            <Route path={PathNames.Home} element={<PagesWrapper />}>
               <Route path={PathNames.ContentPage} element={<ContentPage />} />
               <Route path={PathNames.SettingsPage} element={ isLoggedIn ? <SettingsPage /> : <Navigate to={PathNames.SignIn} /> } />

            </Route>

            <Route path={PathNames.Home} element={<LogoWrapper />}>
               <Route path={PathNames.SignIn} element={<SignIn />} />
               <Route path={PathNames.SignUp} element={<SignUp />} />
               <Route path={PathNames.NewPassword} element={<NewPassword />} />
               <Route path={PathNames.ResetPassword} element={<ResetPassword />} />
            </Route>

               <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
         </Routes>

      </BrowserRouter>
   );
};

export default Router;