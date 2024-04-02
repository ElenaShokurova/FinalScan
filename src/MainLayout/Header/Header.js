import React, { useEffect, useState } from "react";
import logo from '../Header/logo.png';
import userLogo from "../Header/userLogo.jpg";
import mobileMenu from '../Header/mobile-menu.svg';
import closeIcon from '../Header/closeIcon.svg'
import './Header.css';
import '../../Components/Loader.css'

import { Link, useNavigate } from "react-router-dom";

import { getAccountInfo } from "../../api/api";
import Menu from "./MobileMenu";

function Header() {
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const isAuthenticated = localStorage.getItem('accessToken');
    const [accountInfo, setAccountInfo] = useState(null);
    const navigate = useNavigate();


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(menuOpen)
        if(menuOpen==false && mobileMenu){
            navigate('/mobile')
        }else{
            navigate(-1)
        }
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('expire');
        localStorage.clear();
        navigate('/');

        window.location.reload();
        setIsLoggedOut(true);
    };

    useEffect(() => {
        if (isLoggedOut) {
            setIsLoggedOut(false);
        }
    }, [isLoggedOut]);

    useEffect(() => {
        if (isAuthenticated) {
            getAccountInfo(localStorage.getItem('accessToken'))
                .then((eventFiltersInfo) => {
                    setAccountInfo(eventFiltersInfo);
                })
                .catch((error) => {
                    console.error('Ошибка при получении информации об аккаунте:', error.message);
                });
        }
    }, [isAuthenticated]);

    return (
        <>
            <header className="App-header" >
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>


                <nav className="menu">
                    <Link to="/">Главная</Link>
                    <Link to="/*">Тарифы</Link>
                    <Link to="/*">FAQ</Link>
                </nav>



                {isAuthenticated ?
                    (<div className="account-info">
                        {accountInfo ?
                            (<div className="account-info">
                                <div className="account-info-text">Использовано компаний: <span>{accountInfo.usedCompanyCount}</span></div>
                                <div className="account-info-text">Лимит по компаниям: <span style={{ color: "green" }}>{accountInfo.companyLimit}</span></div>
                            </div>)
                            :
                            (<div className="loader"></div>)
                        }
                    </div>) : ''}




                {!isAuthenticated ? (
                    <div className="entry">
                        <Link to="/*"><button className="entry-register">Зарегистрироваться</button></Link>
                        <Link to="/authorization"><button className="entry-enter"> Войти</button></Link>
                    </div>
                ) : (
                    <>
                        <div className="logout">
                            <div className="user_name">Елена Ш. </div>
                            <Link to="/"><button onClick={handleLogout} className="entry-logout"> Выйти</button></Link>

                        </div>
                        <img src={userLogo} className="userLogo" alt="icon" />
                    </>
                )}

                <img
                    src={menuOpen ? closeIcon : mobileMenu}
                    className="Mobile-menu"
                    alt="menu"
                    onClick={toggleMenu}
                />
                
                 
            
           



        </header >

        </>

    )
}

export default Header;

