import lock from '../Form/замок.svg';
import google from '../Form/гугл.svg';
import facebook from '../Form/фейсбук.svg';
import yandex from '../Form/яндекс.svg';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../api/api"


function Form({ }) {
    const [credentials, setCredentials] = useState({ login: '', password: '' });
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });

        setIsButtonDisabled(!credentials.login || !credentials.password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, expire } = await Login(credentials.login, credentials.password);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('expire', expire);
            navigate('/');
            // window.location.reload();

        } catch (err) {
            setError('Неверный логин или пароль');
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <img src={lock} className="lock" alt="lock" />

            <div className="enter-form">
                <Link to="/authorization"><button className="enter">Войти</button></Link>
                <Link to="/*"><button className="register">Зарегистрироваться</button></Link>
            </div>

            <div className="login">
                <label htmlFor="login">Логин или номер телефона:</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    value={credentials.login}
                    onChange={handleChange}
                    required
                    style={{ border: error ? '1px solid red' : '' }}
                />
                {error ? (<div className="error" style={{ color: "red", textAlign: "center", fontSize: '14px' }}>Введите корректные данные</div>) : ""}
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    style={{ border: error ? '1px solid red' : '' }}
                />
                {error ? (<div className="error" style={{ color: "red", textAlign: "center", fontSize: '14px' }}>Неправильный пароль</div>) : ""}
            </div>
            <button
                className="goin"
                type='submit'
                disabled={isButtonDisabled}
            >
                Войти
            </button>

            <Link to="/*"><button className="recovery">Восстановить пароль</button></Link>
            <p>Войти через:</p>
            <div className="social">
                <Link to="https://www.google.ru/">
                    <img src={google} className="google" alt='google' />
                </Link>
                <Link to="https://www.facebook.com/">
                    <img src={facebook} className="facebook" alt='facebook' />
                </Link>
                <Link to="https://www.yandex.com/">
                    <img src={yandex} className="yandex" alt='yandex' />
                </Link>

            </div>

        </form>

    )


}

export default Form;
