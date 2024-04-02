import "../Checkbox/Checkbox.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export const Checkbox = () => {
    
    return (
        <>
            <div className="checkbox">

            <label className="maxComplete">
                <input className = "myinput" type="checkbox" 
                />
                <span className="textCheckbox"></span>
                Признак максимальной полноты
            </label>

            <label className="businesContext">
                <input className = "myinput" type="checkbox" 
                />
                <span className="textCheckbox"></span>
                Упоминания в бизнес-контексте
            </label>
            

            <label className="mainRole">
                <input className = "myinput" type="checkbox" 
                />
                <span className="textCheckbox"></span>
                Главная роль в публикации
            </label>
            

            <label className="riskFactors disabled">
                <input className = "myinput" type="checkbox" disabled />
                <span className="textCheckbox"></span>
                Публикации только с риск-факторами
            </label>
            

            <label className="technicalNews disabled">
                <input className = "myinput" type="checkbox" disabled />
                <span className="textCheckbox"></span>
                Включать технические новости рынков
            </label>
            

            <label className="anonsCalendar">
                <input className = "myinput" type="checkbox" 
                />
                <span className="textCheckbox"></span>
                Включать анонсы и календари
            </label>
            

            <label className="bulletinsNews disabled">
                <input className = "myinput" type="checkbox" disabled />
                <span className="textCheckbox"></span>
                Включать сводки новостей
            </label>
            

            <div className="search_button">
              <Link to = "/result"><button className = "button" disabled={false} >Поиск</button></Link>
            </div>
            <span className ="required_field">* Обязательные к заполнению поля</span>
            </div>

        </>
    )
}
