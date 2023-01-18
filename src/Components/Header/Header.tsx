import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Image/logo';
import LogoLightTheme from "../../Assets/Image/logoLightTheme";
import { PathNames } from '../../Pages/Router/Router';
import Search from '../Search';
import UserName from '../UserName';
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from './Header.module.css';
import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Selectors/authSelectors";

const Header = () => {
   const [searchValue, setSearchValue] = useState("");
   const {theme} = useThemeContext();
   const isLoggedIn = useSelector(authSelectors.getLoggedIn);
   const dataUser = useSelector(authSelectors.getUserInfo);

   return (
      <div className={styles.inner}>

         <div className={styles.logo}>
            <NavLink to={PathNames.Home} className={styles.link}>{theme === Theme.Light ? <LogoLightTheme /> : <Logo />}</NavLink>
         </div>

         <div className={styles.innerBlock}>
         <Search 
            value={searchValue}
            onChange={(value: string) => setSearchValue(value)}
         />
         <UserName username={dataUser?.name}/>
         </div>
      </div>
   );
};

export default Header;