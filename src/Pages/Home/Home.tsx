import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import CardsList from "../../Components/CardsList";
import { CardsListType } from "../../Constants/@types";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import styles from "./Home.module.css";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { getFilms } from "../../Redux/Reducers/filmsReducer";


const Home = () => {

   const MOCK_CARD = {
      id: 0,
      image:
         "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/26a099c6-f326-45ce-9e57-1dfa61937009/1920x",
      title: "Хороший год",
      genres: ["Драма -", " Мелодрама -", " Комедия"],
      rating: 7.7,
   };

   const MOCK_CARDS_LIST = [
      MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD
   ];

   const dispatch = useDispatch();
   const allFilms = useSelector(filmsSelectors.getAllFilms);
      useEffect(() => {
         dispatch(getFilms());
      }, []);

   return (
   <>
      <div className={styles.container}>
         <Sidebar />
         <CardsList cardsList={allFilms} />
      </div>
   </>
   );
};

export default Home;