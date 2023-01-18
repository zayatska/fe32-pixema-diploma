import React, { FC, useEffect, useState, ReactElement} from "react";

import { CardType } from "../../Constants/@types";
import ButtonGroup from "../../Components/ButtonGroup";

import { useNavigate, useParams } from "react-router-dom";
import { PathNames } from "../Router/Router";

import Sidebar from "../../Components/Sidebar";

import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./ContentPage.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFilms } from "../../Redux/Reducers/filmsReducer";
import filmsSelectors from "../../Redux/Selectors/filmsSelectors";
import { Fire } from "../../Assets/Fire";
import { IMDb } from "../../Assets/ContentPage/IMDb";

const ContentPage = () => {
    const {theme} = useThemeContext();
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (id) {
            dispatch(getSingleFilms(id));
        }
    }, []);

    const card = useSelector(filmsSelectors.getSingleFilms);
    const rating = card?.rating;

    return (
            
        <div className={styles.container}>
            <Sidebar />

            <div className={styles.oneFilm}>

                <div className={styles.leftContainer}>
                    <img src={card?.large_cover_image} alt="img" className={styles.image}/>
                    <ButtonGroup />

                </div>

                <div className={styles.rightContainer}>

                    <div className={styles.topContainer}>
                        <div className={styles.genres}>{card?.genres.join(" ▪ ")}</div>
                        <div className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>{card?.title}</div>
                        <div className={styles.label}>
                            <span className={classNames(styles.rating, {
                                [styles.ratingRed]: rating && rating <= 5,
                                [styles.ratingYellow]: rating && rating > 5 && rating && rating <= 7,
                                [styles.ratingGreen]: rating && rating > 7 && rating && rating <= 7.5,
                                [styles.ratingBlue]: rating && rating > 7.5,
                                })}>
                            {rating && rating > 7.5 ? <Fire /> : ''}
                            {rating}
                            </span>
                            
                            <span className={styles.time}><IMDb /> {card?.runtime}</span>
                            <span className={styles.time}>136 min</span>
                        </div>
                        <div className={classNames(styles.desc, {[styles.lightDesc] : theme === Theme.Light})}>{card?.description_full}</div>
                        
                        <div className={styles.containerList}>
                            <ul className={styles.leftList}>
                                <li>Year</li>
                                <li>Released</li>
                                <li>BoxOffice</li>
                                <li>Country</li>
                                <li>Production</li>
                                <li>Actors</li>
                                <li>Director</li>
                                <li>Writers</li>
                            </ul>
                            <ul className={classNames(styles.rightList, {[styles.lightRightList] : theme === Theme.Light})}>
                                <li>{card?.year}</li>
                                <li>15 Jul 2011</li>
                                <li>$381,409,310</li>
                                <li>United Kingdom, United States</li>
                                <li>Heyday Films, Moving Picture Company, Warner Bros.</li>
                                <li>Daniel Radcliffe, Emma Watson, Rupert Grint</li>
                                <li>David Yates</li>
                                <li>J.K. Rowling, Steve Kloves</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.downContainer}>

                        <div className={classNames(styles.recommendations, {[styles.lightRecommendations] : theme === Theme.Light})}>Recommendations</div>
                        

                        {/*<div className={styles.cards}>
                            <Card card={card}/>
                            <Card card={card}/>
    </div>*/}

                    </div>
                </div>

    </div>
        </div>
    );
};

export default ContentPage;