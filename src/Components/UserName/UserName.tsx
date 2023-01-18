import React, {FC, useState} from "react";
import { ArrowDownIcon } from "../../Assets/UserName/ArrowDownIcon";
import { ArrowRightIcon } from "../../Assets/UserName/ArrowRightIcon";
import Button, { ButtonTypes } from "../Button";
import Menu from "./Menu";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import { Link } from "react-router-dom";

import styles from "./UserName.module.css";
import classNames from "classnames";
import { UserNameIcon } from "../../Assets/UserName/UserNameIcon";
import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Selectors/authSelectors";

type UserNameProps = {
   username: string | any;
};

const UserName: FC<UserNameProps> = ({ username }) => {

   const {theme} = useThemeContext();
   const [isOpened, setOpened] = useState(false);

   const isLoggedIn = useSelector(authSelectors.getLoggedIn);

   const onArrowClick = () => {
      setOpened(!isOpened);
   };

   return <div className={classNames(styles.container, {[styles.lightContainer] : theme === Theme.Light})}>
      
      <div className={classNames(styles.letter, {[styles.lightLetter] : theme === Theme.Light})} > {isLoggedIn ? username[0] : <UserNameIcon /> }</div>
      {isLoggedIn ? username : <span className={styles.nameBlock}>Sign In</span> }
      
      {
         isLoggedIn ?
         <Button
         title={isOpened ? <ArrowRightIcon /> : <ArrowDownIcon />}
         onClick={onArrowClick}
         type={ButtonTypes.Primary}
         className={styles.arrowButton}
      /> :
         <Link to={`/sign-in`}>
            <Button
               title={<ArrowRightIcon />}
               onClick={onArrowClick}
               type={ButtonTypes.Primary}
               className={styles.arrowButton}
            />
         </Link>
      }

{isOpened && isLoggedIn && <Menu />}
      </div>
      
};

export default UserName;