import "../NotFound/NotFound.css";
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
        return (
        <>
            <main className="NotFound">
                <h1>ERROR 404</h1>
                <h2>Страница в разработке</h2>
                <button onClick={() => navigate(-1)}>Вернуться</button>
            </main>

        </>
    )
}