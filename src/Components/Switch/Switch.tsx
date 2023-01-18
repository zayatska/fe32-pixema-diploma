import React, {FC, useState, Component } from "react";

import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";


import styles from "./Switch.module.css"
import classNames from 'classnames';

const Switch = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div
      onClick={() => {
        if (theme === Theme.Light) {
          onChangeTheme(Theme.Dark);
        } else {
          onChangeTheme(Theme.Light);
        }
      }}
      className={classNames(styles.switch,{ 
        [styles.lightSwitch]: theme === Theme.Light        
    })}
    >
      < div className={classNames(styles.circle,{ 
          [styles.darkSwitch]: theme === Theme.Dark
      })} />
    </div>
  );
};

export default Switch;