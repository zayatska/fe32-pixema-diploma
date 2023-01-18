import React, { FC, ChangeEvent, forwardRef } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import classNames from "classnames";
import styles from "./Input.module.css";

type InputProps = {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   error?: string;
   title?: string;
   className?: string;
   type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const {
      value,
      onChange,
      placeholder,
      disabled,
      error,
      title,
      className,
      type,
   } = props;

   const {theme} = useThemeContext();

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
   };

   return (
      <>
         {title && <div className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>{title}</div>}
            <input
               value={value}
               onChange={onChangeInput}
               placeholder={placeholder}
               disabled={disabled}
               ref={ref}
               className={classNames(styles.input, {[styles.lightInput] : theme === Theme.Light})}
               type={type}
            />
            {error && <div className={styles.textError}>{error}</div>}
      </>
   );
});

export default Input;