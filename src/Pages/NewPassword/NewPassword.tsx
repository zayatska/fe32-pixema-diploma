import React, { useState, useRef, useEffect } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

import classNames from "classnames";
import styles from "./NewPassword.module.css";

const NewPassword = () => {

   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
      }, []);
   
   return (

      <FormContainer title={"Reset password"}>
            <>

            <div className={styles.inputsContainer}>
            <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
                  ref={inputRef}
               />

               <Input
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value:string) => setConfirmPassword(value)}
                  placeholder={"Confirm your password"}
               />

            </div>

               <Button
                  className={styles.button}
                  title={"Set password"}
                  type={ButtonTypes.Primary}
                  onClick={() => {}}
               />
            </>
      </FormContainer>
   );
};

export default NewPassword;