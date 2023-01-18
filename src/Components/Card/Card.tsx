import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./Card.module.css"
import classNames from "classnames";

import { CardType } from "../../Constants/@types";
import { Fire } from "../../Assets/Fire";

type CardProps = {
   card: CardType;
};

const Card: FC<CardProps> = ({ card }) => {
   const { medium_cover_image, rating, title, genres, id } = card;
   const navigate = useNavigate();
   const {theme} = useThemeContext();

   const onCardClick = () => {
      navigate(`/content-page/${id}`);
   };


   return (
      <div className={classNames(styles.container, {[styles.lightContainer] : theme === Theme.Light})}
      onClick={onCardClick}
      >
         
         <span
            className={classNames(styles.rating, {
               [styles.ratingRed]: rating <= 5,
               [styles.ratingYellow]: rating > 5 && rating <= 7,
               [styles.ratingGreen]: rating > 7 && rating <= 7.5,
               [styles.ratingBlue]: rating > 7.5,
         })}
         >
         {rating > 7.5 ? <Fire /> : ''}
         {rating}
         </span>

         <img className={styles.card} src={medium_cover_image} alt={''} />
         <div className={styles.title}>{title}</div>
         <div className={styles.genres}>{genres.join(" ▪ ")}</div>
      </div>
   );
};

export default Card;