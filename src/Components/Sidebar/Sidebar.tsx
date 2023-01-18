import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { FavoritesIcon } from "../../Assets/Menu/FavoritesIcon";
import { HomeIcon } from "../../Assets/Menu/HomeIcon";
import { SettingsIcon } from "../../Assets/Menu/SettingsIcon";
import { TrendsIcon } from "../../Assets/Menu/TrendsIcon";

import styles from "./Sidebar.module.css";
import classNames from 'classnames';
import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Selectors/authSelectors";


const Sidebar = () => {
   const { pathname } = useLocation();
   const isLoggedIn = useSelector(authSelectors.getLoggedIn);
   

   const CATEGORIES = [
      { name: "Home", icon: <HomeIcon />, link: "/" },
      { name: "Trends", icon: <TrendsIcon />, link: "" },
      { name: "Favorites", icon: <FavoritesIcon />, link: "", disabled: false },
      { name: "Settings", icon: <SettingsIcon />, link: "/settings", disabled: false },
   ];

   return (
      <>
      <div className={styles.container}>
         {CATEGORIES.map(({ link, name, icon, disabled }) => {
            return (
               <NavLink
                  key={link}
                  to={link}
                  className={classNames(styles.categories, {
                  [styles.activeСategories]: pathname === link,
                  [styles.disabled]: disabled === isLoggedIn,
                  })}
               >
               {icon}
               {name}
               </NavLink>
            );
         })}
      </div>
      </>
   );
};

export default Sidebar;