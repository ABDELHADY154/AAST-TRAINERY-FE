import React, { Component } from "react";

import img from "./bg1.png";
export default class Caro extends Component {
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
      <div className='w-100'>
        <div
          className='carousel'
          data-flickity='{ "imagesLoaded": true,"prevNextButtons": false , "percentPosition": false  }'
        >
          <div className='carousel'>
            <img src={img} className='img-responsive'></img>
            <div className='carousel-caption1'>
              <h1 className='carousel-header'>Start Your Non-Experience Career</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis
                morbi sagittis donec sed massa.
              </p>
              <button
                renderAs='button'
                className='btn btn-outline-light btn-small btn-nav mr-1 pl-4 pr-4'
              >
                <span>Sign up</span>
              </button>
            </div>
          </div>
          <img src={img} className='img-responsive' />
          <img src={img} className='img-responsive' />
        </div>
      </div>
    );
  }
}
