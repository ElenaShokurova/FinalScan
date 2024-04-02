import "../News/News.css";
import { Link } from 'react-router-dom';


export const News = ({date, author, title, type, image, text, indent, countWords}) => {

    return (
        <>
            <div className="News">
                <div className="date">
                    <p>{date}</p>
                    <Link to="/*">{author}</Link>
                </div>
                <h2 className="title">{title}</h2>
                <p className="type">{type}</p>
                <img src={image} />
                <p className="text">{text}</p>
                <p className="indent">{indent}</p>
                <div className="footerNews">
                    <button className="read">Читать в источнике</button>
                    <p className="countWords">{countWords}</p>
                </div>
            </div>

        </>
    )
}

