import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router/Router";
import styles from "./LogoWrapper.module.css";
import Logo from "../../Assets/Image/logo";
import SignIn from "../SignIn";

const LogoWrapper = () => {

   const { pathname } = useLocation();

   return (
      <div className={styles.container}>
            <div className={styles.logo}>
            <NavLink to={PathNames.Home} className={styles.link}><Logo /></NavLink>
            </div>
            {pathname === PathNames.Home ? <SignIn /> : <Outlet />}
      </div>
   )
};

export default LogoWrapper;