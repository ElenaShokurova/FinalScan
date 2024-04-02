import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import time from '../Carousel/время.svg';
import search from '../Carousel/поиск.svg';
import security from '../Carousel/Защита.svg';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="item">
          <img src={time} alt="время"/>
          <p>Высокая и оперативная скорость обработки заявки</p>

        </div>
        <div className="item">
          <img src={search} alt="поиск"/>
          <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>

        </div>
        <div className="item">
          <img src={security} alt="защита"/>
          <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>

        </div>
      </Slider>
    </div>
  );
}

export default Carousel;