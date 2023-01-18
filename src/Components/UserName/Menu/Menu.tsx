import React from "react";
import Button, { ButtonTypes } from "../../Button";

import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";


import styles from "./Menu.module.css"
import { logoutUser } from "../../../Redux/Reducers/authReducer";

const Menu = () => {

   const isLoggedIn = true;
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const onLogOut = () => {
      dispatch(
         logoutUser()
      );
   };

   return <div className={styles.container}>

   {isLoggedIn && 
      <div className={styles.buttonsContainer}> 
         <Button
            title={"Edit profile"}
            onClick={() => {navigate('/settings');}}
            type={ButtonTypes.Secondary}
            className={styles.editProfileButton}
         />

         <Button
            title={"Log Out"}
            onClick={onLogOut}
            type={ButtonTypes.Secondary}
            className={styles.logOutButton}
         />

</div> }

   </div>
};

export default Menu;