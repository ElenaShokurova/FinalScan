import React, { useState } from 'react';
import mainPhoto1 from '../Main/mainPhoto1.svg';
import mainPhoto2 from '../Main/mainPhoto2.svg';
import mainPhoto2Mobile from '../Main/mainPhoto2Mobile.svg'
import Carousel from '../../Components/Carousel/Carousel';
import Tarife from '../../Components/Tarife/Tarife';
import './Main.css';
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/useAuth';

function Main() {
    const isAuthenticated = useAuth();

    return (
        <>

            <main className='Main'>
                <div className='searchService'>
                    <h1 className="headerMain">сервис по поиску публикаций
                        о компании
                        по его ИНН</h1>
                    <p className='description'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>

                    {isAuthenticated ? (
                        <>
                            <Link to="/search"><button className="request" disabled={false} >Запросить данные</button></Link>

                        </>
                    ) : (
                        <Link to="/search"><button className="request" disabled={true} >Запросить данные</button></Link>
                    )}

                    <img src={mainPhoto1} className="mainPhoto" alt="mainPhoto" />

                </div>



                <h3 className='heading-scroll'>Почему именно мы</h3>
                <Carousel />
                <img src={mainPhoto2} className="mainSkin" alt="mainSkin" />
                <img src={mainPhoto2Mobile} className="mainSkinMobile" alt="mainSkinMobile" />


                <Tarife />

            </main>
        </>

    )
}
export default Main;