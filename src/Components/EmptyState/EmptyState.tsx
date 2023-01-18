import React from "react";
import { EmptyStateIcon } from "../../Assets/Image/EmptyStateIcon";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
   return (
      <div className={styles.container}>
         <EmptyStateIcon />
         <div className={styles.description}>{"Not found"}</div>
      </div>
   );
};

export default EmptyState;