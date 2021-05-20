import React, { Component } from "react";
import "../../layout/carousel.css";

import logo1 from "./Assets/logo1.png";
import logo2 from "./Assets/logo2.png";
import logo3 from "./Assets/logo3.png";
import Slider from "react-slick";

import { axios } from "../../Api/axios";

// init Swiper:
//  const swiper = new Swiper(...);
export class CarouselLogos extends Component {
  state = {
    logos: [],
  };

  async componentDidMount() {
    await axios.get("/W/landingLogoes").then((data) => {
      // console.log(data.data.response.data);
      this.setState({
        logos: data.data.response.data,
      });
    });
  }
  render() {
    var settings = {
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      pauseOnHover: true,
      // fade: true,

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
      <Slider {...settings}>
        {this.state.logos
          ? this.state.logos.map((item) => {
              return (
                <div className="logo1">
                  <img
                    alt="associated company logo"
                    className="logoCaroImg"
                    src={item.logo}
                  />
                </div>
              );
            })
          : ""}
        {/* <div>
          <h3>1</h3>
        </div> */}
      </Slider>
      // <div>
      //   <h2> Multiple items </h2>
      //   <Slider {...settings}>
      //     {this.state.logos? this.state.logos.map(item => {
      //           return (
      //             <div>
      //               <img src={item.logo} />
      //             </div>
      //           );
      //         })
      //       : ""}
      //     {/* <div>
      //     <h3>1</h3>
      //   </div> */}
      //   </Slider>
      // </div>
      // <div
      //   class="  LogoCarousel col-lg-9 col-10 col-sm-7 col-md-9 "
      //   data-flickity='{ "freeScroll": true, "prevNextButtons": false, "groupCells": true, "asNavFor": ".carousel-main"}'
      // >
      // {this.state.logos    ? this.state.logos.map(item => {
      //       return (
      //         <div class=" logo1 size-180 carousel-cell-logo">
      //           <img src={item.logo} className="img-responsive" />
      //         </div>
      //       );
      //     })
      //   : ""}

      /* <div class=" logo1 size-180 carousel-cell-logo">
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
        </div> */
    );
  }
}
