import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

import styles from "./FormContainer.module.css";
import classNames from "classnames";
import Logo from "../../Assets/Image/logo";
import Footer from "../Footer";
import { PathNames } from "../../Pages/Router/Router";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

type FormContainerProps  = {
   title: string;
   children: ReactElement;
};

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => {
   
   const {theme} = useThemeContext()

   return (
      <div className={styles.container}>

         <div className={classNames(styles.formContainer, {[styles.lightFormContainer] : theme === Theme.Light})}>
            <h1 className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>{title}</h1>
            <div className={styles.childrenContainer}>{children}</div>
         </div>

         <Footer />
      </div>
   );
};

export default FormContainer;