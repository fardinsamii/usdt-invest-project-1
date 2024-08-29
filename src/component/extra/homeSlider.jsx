// BootstrapCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

// image import
import slide1 from "../../assets/images/slider/slide-1.webp";
import slide2 from "../../assets/images/slider/slide-2.webp";
import slide3 from "../../assets/images/slider/slide-3.webp";

const BootstrapCarousel = () => {
  return (
    <Carousel className="home_slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
