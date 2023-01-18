import React, { FC, useEffect, useState, ReactElement} from "react";

import { useLocation, useNavigate } from 'react-router-dom';


import Button, { ButtonTypes } from '../../Components/Button';
import Input from '../../Components/Input';
import Switch from '../../Components/Switch';
import Sidebar from "../../Components/Sidebar";

import { Theme } from "../../Constants/@types";
import { useThemeContext } from "../../Context/Theme";

import styles from './SettingsPage.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../Redux/Selectors/authSelectors";
import { Console } from "console";
import { getUserData } from "../../Redux/Reducers/authReducer";


const SettingsPage = () => {

   const navigate = useNavigate();
   const { theme } = useThemeContext();
   const { state } = useLocation(); 

   const [password, setPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const dataUser = useSelector(authSelectors.getUserInfo);

   return (
      <>
      <div className={styles.container}>
         <Sidebar />

         <div className={styles.settings}>
            <div className={styles.settingsBlock}>
               <h2 className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>Profile</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={classNames(styles.item, {[styles.lightItem] : theme === Theme.Light})}>

                        <div>Name</div>
                        <div className={classNames(styles.inputInfo, {[styles.lightInputInfo] : theme === Theme.Light})}>{dataUser?.name}</div>

                  </div>

                  <div className={classNames(styles.item, {[styles.lightItem] : theme === Theme.Light})}>
                  
                        <div>Email</div>
                        <div className={classNames(styles.inputInfo, {[styles.lightInputInfo] : theme === Theme.Light})}>{dataUser?.mail}</div>

                  </div>
               </div>
            </div>
            
            <div className={styles.settingsBlock}>
               <h2 className={styles.title}>Password</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={styles.item}>
                  <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
                  className={styles.input}
                  />
                  </div>

                  <div className={styles.item}>

                  <Input
                  title={"New password"}
                  value={newPassword}
                  onChange={(value:string) => setNewPassword(value)}
                  placeholder={"Your password"}
                  className={styles.input}
                  />

                  <Input
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value:string) => setConfirmPassword(value)}
                  placeholder={"Confirm password"}
                  />

                  </div>
               </div>
            </div>
            
            <div className={styles.settingsBlock}>
               <h2 className={styles.title}>Color mode</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={styles.item}>
                     <div className={classNames(styles.subtitle, {[styles.lightSubtitle] : theme === Theme.Light})}>{theme === Theme.Light ? "White" : "Dark"}</div>
                     <span className={styles.spanThema}>{theme === Theme.Light ? "Use dark thema" : "Use white thema"}</span>
                  </div>

                  <Switch />
               </div>
            </div>

            <div className={styles.buttonsBlock}>
                  <Button
                  title={'Cancel'}
                  type={ButtonTypes.Secondary}
                  onClick={() => {navigate('/');}}
                  />

                  <Button
                  className={styles.button}
                  title={"Save"}
                  type={ButtonTypes.Primary}
                  onClick={()=>{}}
                  />
                  
               </div>

         </div>
      </div>
      </>
   )
};

export default SettingsPage;