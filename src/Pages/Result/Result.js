import "../Result/Result.css";
import Search from "../Result/Seach.svg";
import data from "../Result/data.svg";
import skill from "../Result/skill.svg";
import Histogram from "../../Components/Histogram/Histogram";
import { News } from "../../Components/News/News";


export default function Result() {

    return (
        <>
            <main className="Result">
                <section className="resultHeading">
                    <div className="info">
                        <h1 className="infoHeading">
                            Ищем. Скоро <br /> будут результаты
                        </h1>
                        <p className="infoText">
                            Поиск может занять некоторое время, <br /> просим сохранять
                            терпение.
                        </p>
                    </div>
                    <div className="image">
                        <img src={Search} />
                    </div>
                </section>
                <section className="brief">
                        <h2 className="briefTitle">Общая сводка</h2>
                        <span className="found">Найдено 4 221 вариантов</span>
                        <Histogram/>
                </section>
                    <h2 className="resultTitle">Список документов</h2>
                    <div className="listNews">

                    <News date={'13.09.2021'}
                            author={'Комсомольская правда KP.RU'}
                            title={'Скиллфэктори - лучшая онлайн-школа для будущих айтишников'}
                            type={'Технические новости'} image={skill} countWords={'2 543 слова'}
                            text={'SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.'}
                            indent={'Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.'} />
                        <News date={'15.10.2021'}
                            author={'VC.RU'}
                            title={'Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций'}
                            type={'Технические новости'} image={data} countWords={'3 233 слова'}
                            text={'Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.'}
                            indent={'В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.'} />

                    </div>
                {/* </section> */}
                <button className="button">Показать больше</button>
            </main>
        </>
    )
}