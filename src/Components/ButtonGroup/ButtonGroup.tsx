import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import styles from "./ButtonGroup.module.css";
import { BookmarkIcon } from "../../Assets/ButtonGroup/BookmarkIcon";
import { ShareIcon } from "../../Assets/ButtonGroup/ShareIcon";


type ButtonGroupProps = {
   title?: ReactElement;
   onClick?: () => void;
   className?: string;
   disabled?: boolean;
};

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
   const { title, onClick, className, disabled } = props;

   return (
      <>
      <div className={styles.ButtonGroup}>

      <div
         className={classNames(styles.button, styles.rightButton, className, {[styles.disabled]: !!disabled,})}
         onClick={onClick}
      >
      {<BookmarkIcon />}
      </div>

      <div
         className={classNames(styles.button, styles.leftButton, className, {[styles.disabled]: !!disabled,})}
         onClick={onClick}
      >
      {<ShareIcon />}
      </div>

      </div>
      </>
   );
};

export default ButtonGroup;