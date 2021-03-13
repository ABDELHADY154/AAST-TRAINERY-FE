import React, { Component } from "react";
import "../../layout/carousel.css";

import logo1 from "./Assets/logo1.png";
import logo2 from "./Assets/logo2.png";
import logo3 from "./Assets/logo3.png";
export class CarouselLogos extends Component {
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
      <div
        class="  LogoCarousel col-lg-4 col-6 col-sm-7 "
        data-flickity='{ "freeScroll": true, "prevNextButtons": false, "groupCells": true, "asNavFor": ".carousel-main"}'
      >
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class="logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class=" logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
        <div class="logo1 size-180 carousel-cell-logo">
          <img src={logo1} className="img-responsive" />
        </div>
      </div>
    );
  }
}
