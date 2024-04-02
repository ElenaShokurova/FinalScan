import React from "react";
import './Tarife.css';
import beginer from '../Tarife/тарифБегинер.svg';
import pro from '../Tarife/тарифПро.svg';
import business from '../Tarife/тарифБизнес.svg';

import { useAuth } from "../../hooks/useAuth";

function Tarife() {
    const isAuthenticated = useAuth();

    return (
        <>
            <h3 className="heading-tarife">наши тарифы</h3>

            <div className='tarife'>
                {isAuthenticated ? (<div className='itemTarif Beginner' style={{ boxShadow: "0px 0px 20px 0px #00000026, inset 0px  8.5em 0px 3px var(--additional-color-yellow)" }}>
                    <div className="headerTarif">
                        <p className="nameTarife">Beginner</p>
                        <p className="somebodyTarif">Для небольшого исследования</p>
                    </div>
                    <img src={beginer} alt="beginer" />

                    {isAuthenticated ?
                        <div className="currentTarife">Текущий тариф</div> :
                        ""}

                    <div className="Price">
                        <p className="actionPrice">799 &#8381;</p>
                        <p className="oldPrice">1200 &#8381;</p>
                    </div>

                    <p className="mounthPrice">или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    <div className="infoTarif">
                        <ul>В тариф входит:
                            <li>Безлимитная история запросов</li>
                            <li>Безопасная сделка</li>
                            <li>Поддержка 24/7</li>
                        </ul>

                    </div>
                    <button className="moreTarif" style={{ backgroundColor: "#D2D2D2", color: "#000000" }}>Перейти в личный кабинет</button>
                </div>) : (<div className='itemTarif Beginner'>
                    <div className="headerTarif">
                        <p className="nameTarife">Beginner</p>
                        <p className="somebodyTarif">Для небольшого исследования</p>
                    </div>
                    <img src={beginer} alt="beginer" />

                    {isAuthenticated ?
                        <div className="currentTarife">Текущий тариф</div> :
                        ""}

                    <div className="Price">
                        <p className="actionPrice">799 &#8381;</p>
                        <p className="oldPrice">1200 &#8381;</p>
                    </div>

                    <p className="mounthPrice">или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    <div className="infoTarif">
                        <ul>В тариф входит:
                            <li>Безлимитная история запросов</li>
                            <li>Безопасная сделка</li>
                            <li>Поддержка 24/7</li>
                        </ul>

                    </div>
                    <button className="moreTarif">Подробнее</button>
                </div>)}
                {/* <div className='itemTarif Beginner'>
                    <div className="headerTarif">
                        <p className="nameTarife">Beginner</p>
                        <p className="somebodyTarif">Для небольшого исследования</p>
                    </div>
                    <img src={beginer} alt="beginer" />

                    {isAuthenticated ?
                        <div className="currentTarife">Текущий тариф</div> :
                        ""}

                    <div className="Price">
                        <p className="actionPrice">799 &#8381;</p>
                        <p className="oldPrice">1200 &#8381;</p>
                    </div>

                    <p className="mounthPrice">или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    <div className="infoTarif">
                        <ul>В тариф входит:
                            <li>Безлимитная история запросов</li>
                            <li>Безопасная сделка</li>
                            <li>Поддержка 24/7</li>
                        </ul>

                    </div>
                    {isAuthenticated ?
                        <button className="moreTarif" style={{ backgroundColor: "#D2D2D2", color: "#000000" }}>Перейти в личный кабинет</button> :
                        <button className="moreTarif">Подробнее</button>
                    }
                </div> */}
                <div className='itemTarif Pro'>
                    <div className="headerTarif">

                        <p className="nameTarife">Pro</p>
                        <p className="somebodyTarif">Для HR и фрилансеров</p>
                    </div>
                    <img src={pro} alt="pro" />
                    <div className="Price">
                        <p className="actionPrice">1299 &#8381;</p>
                        <p className="oldPrice">2600 &#8381;</p>
                    </div>

                    <p className="mounthPrice">или 279 ₽/мес. при рассрочке на 24 мес.</p>
                    <div className="infoTarif">
                        <ul>В тариф входит:
                            <li>Все пункты тарифа Beginner</li>
                            <li>Экспорт истории</li>
                            <li>Рекомендации по приоритетам</li>
                        </ul>

                    </div>
                    <button className="moreTarif">Подробнее</button>

                </div>
                <div className='itemTarif Business'>
                    <div className="headerTarif">

                        <p className="nameTarife">Business</p>
                        <p className="somebodyTarif">Для корпоративных клиентов</p>
                    </div>
                    <img src={business} alt="business" />
                    <div className="Price">
                        <p className="actionPrice">799 &#8381;</p>
                        <p className="oldPrice">1200 &#8381;</p>
                    </div>

                    <p></p>
                    <div className="infoTarif">
                        <ul>В тариф входит:
                            <li>Все пункты тарифа Pro</li>
                            <li>Безлимитное количество запросов</li>
                            <li>Безлимитное количество запросов</li>
                        </ul>
                    </div>
                    <button className="moreTarif">Подробнее</button>

                </div>

            </div>

        </>
    )
}

export default Tarife;