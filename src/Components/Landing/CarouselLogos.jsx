import React, { Component } from "react";
import "../../layout/carousel.css";

import logo1 from "./Assets/logo1.png";
import logo2 from "./Assets/logo2.png";
import logo3 from "./Assets/logo3.png";

import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// import Swiper from 'swiper/bundle';
SwiperCore.use([Navigation, Pagination]);

// init Swiper:
//  const swiper = new Swiper(...);
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
    // var swiper = new Swiper(".swiper-container", {
    //   slidesPerView: 3,
    //   spaceBetween: 40,
    //   freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });
    return (
      // <div className="swiper-container   ms-5 col-lg-4 col-6 col-sm-12 col-xs-12 ">
      //   <div className="swiper-wrapper">
      //     <div className="swiper-slide">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide ">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide ">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide  ">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide ">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide   ">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //     <div className="swiper-slide">
      //       <img src={logo1} className="img-responsive" />
      //     </div>
      //   </div>

      //   <div className="swiper-pagination "></div>
      // </div>
      <div
        class="  LogoCarousel col-lg-4 col-6 col-sm-7 col-md-4 "
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
