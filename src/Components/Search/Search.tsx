import React, { FC } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import classNames from 'classnames';
import styles from './Search.module.css';

import { SearchFilteredIcon } from '../../Assets/Search/SearchFilteredIcon';
import { SearchIcon } from '../../Assets/Search/SearchIcon';

type SearchProps = {
   value?: string;
   disabled?: boolean;
   filters?: boolean;
   className?: string;
   onChange: (value: string) => void;
};

const Search: FC<SearchProps> = (props) => {
   const {
      value,
      disabled,
      filters,
      className,
      onChange
   } = props;

   const {theme} = useThemeContext();

   return (
      <div className={styles.wrapper}>
         <input
            placeholder="Search"
            className={classNames(styles.input, { [styles.disabled]: disabled }, {[styles.lightInput] : theme === Theme.Light})}
         />
      {filters ? (
         <div className={styles.svg}><SearchFilteredIcon /></div>
      ) : (
         <div className={styles.svg}><SearchIcon /></div>
      )}
   </div>
   );
};

export default Search;