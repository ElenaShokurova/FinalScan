import React from "react"
import { Link} from "react-router-dom";
import "./MobileMenu.css"

function Menu() {
    const isAuthenticated = localStorage.getItem('accessToken');
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (
        <main className="mobile">
            <nav className="menu-mobile">
                <Link to="/">Главная</Link>
                <Link to="/*">Тарифы</Link>
                <Link to="/*">FAQ</Link>
            </nav>
            {!isAuthenticated ? (
                <div className="entry-mobile">
                    <Link to="/*">
                        <button className="entry-register-mobile">Зарегистрироваться</button>
                    </Link>
                    <Link to="/authorization">
                        <button className="entry-enter-mobile"> Войти</button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="logout-mobile">
                        <Link to="/">
                            <button onClick={handleLogout} className="entry-logout-mobile">
                                Выйти
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </main>

    )

}

export default Menu;