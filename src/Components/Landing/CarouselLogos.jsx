import React, { Component } from "react";
import "../../layout/carousel.css";

import img from "./bg1.png";
export default class CarouselLogos extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div class="carousel" data-flickity>
        <div class="carousel-cell">
          <img src={img} className="img-responsive" />
        </div>{" "}
        <div class="carousel-cell">
          <img src={img} className="img-responsive" />
        </div>{" "}
        <div class="carousel-cell">
          <img src={img} className="img-responsive" />
        </div>
      </div>
    );
  }
}
