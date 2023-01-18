import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PathNames } from "../Router/Router";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Home from "../Home";

import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

const PagesWrapper = () => {

   const { pathname } = useLocation();
   const {theme} = useThemeContext();

   return (
      <div className={classNames(styles.container, {[styles.lightContainer] : theme === Theme.Light})}>
            <Header />
            {pathname === PathNames.Home ? <Home /> : <Outlet />}
            <Footer />
      </div>
   )
};

export default PagesWrapper;