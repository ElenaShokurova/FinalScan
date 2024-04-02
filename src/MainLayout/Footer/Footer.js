import logoFooter from '../Footer/logo-footer.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
        <img src={logoFooter} className="logo-footer" alt='logoFooter' />
        <div className="adress">
          <p>г. Москва, Цветной б-р, 40
            +7 495 771 21 11
            info@skan.ru</p>
          <p>Copyright. 2022</p>

        </div>
      </footer>

    )
}

export default Footer;