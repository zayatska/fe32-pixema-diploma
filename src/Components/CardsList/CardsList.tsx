import React, { FC } from "react";
import { CardsListType } from "../../Constants/@types";
import Card from "../Card/Card";
import EmptyState from "../EmptyState";

import styles from "./CardsList.module.css"

type CardsListProps = {
   cardsList: CardsListType
}

const CardsList:FC<CardsListProps> = ({cardsList}) => {
   return cardsList && cardsList.length > 0 ? ( 
      <div className={styles.container}> 
         {cardsList.map((card)=>{
            return <Card card={card} key={card.id} />
         })}
      </div>
   ) : <EmptyState />
};

export default CardsList;