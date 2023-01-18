import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

import styles from "./SignIn.module.css";
import { PathNames } from "../Router/Router";
import Switcher from "../../Components/Switch";
import { ClosedEyeIcon } from "../../Assets/Password/ClosedEyeIcon";
import { OpenEyeIcon } from "../../Assets/Password/OpenEyeIcon";
import { PasswordTypes } from "../../Constants/@types";
import { signInUser } from "../../Redux/Reducers/authReducer";
import { useDispatch } from "react-redux";

const SignIn = () => {

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [type, setType] = useState(PasswordTypes.Password);
  const onEyeClick = () => {
    type === PasswordTypes.Password
      ? setType(PasswordTypes.Text)
      : setType(PasswordTypes.Password);
  };

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSignIn = () => {
      dispatch(
         signInUser({
            data: {
               email: login,
               password,
               token_name: 'token',
            },
            callback: () => navigate(PathNames.Home),
         })
      );
   };
   
   return (
         <FormContainer title={"Sign In"}>
            <>
            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />
               
               <div className={styles.passwordContainer}>
                  <Input
                     title={"Password"}
                     type={type}
                     value={password}
                     onChange={(value: string) => setPassword(value)}
                     placeholder={"Password"}
                  />

                  <div className={styles.eyeIcon} onClick={onEyeClick}>
                     {password && type !== "password" ? (
                  <ClosedEyeIcon />
                     ) : (
                  <OpenEyeIcon />
                  )}
                  </div>
               </div>

            </div>
               
               <div className={styles.forgotPassword}>{"Forgot password?"}</div>

               <Button
                  className={styles.button}
                  title={"Sign In"}
                  type={ButtonTypes.Primary}
                  onClick={onSignIn}
               />

            <div className={styles.signContainer}>
               {"Don’t have an account?"}{" "}
               <NavLink to={PathNames.SignUp} className={styles.link}>{"Sign Up"}</NavLink>
            </div>
            
            </>
         </FormContainer>
   );
};

export default SignIn;