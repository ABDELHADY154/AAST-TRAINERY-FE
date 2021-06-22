import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { axios } from "../../Api/axios";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../../layout/CareerCoaching.css";

export default class PortCaro extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    await axios
      .get("/W/coaches")
      .then((res) => {
        this.setState({
          data: res.data.response.data,
        });
      })
      .catch((err) => {
        console.log(err);
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
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      pauseOnHover: true,
      // fade: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div className="mt-5 justify-content-center ms-3">
        <Slider {...settings}>
          {this.state.data.length == 0
            ? " "
            : this.state.data.map((data) => {
                return (
                  <div className="containerrr col-md-12 col-12">
                    <img
                      src={data.image}
                      id="imagehoverr"
                      className="d-flex flex-column col-md-3 col-12 rounded "
                    />
                    <div className="overlay " id="overlayy">
                      <a
                        id="linksss"
                        href="#"
                        className="textttt fs-4 mt-5  col-12 col-md-12 "
                      >
                        {data.name}
                        <br />
                        <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                          {data.jobTitle}
                          {/* at */}
                          {/* {data.company_name} */}
                        </span>
                      </a>

                      <div className="mt-3 socialscoach">
                        <li>
                          <a href={data.fb_url}>
                            <FaFacebookF
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                          <a href={data.in_url}>
                            <FaLinkedinIn
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                          <a href={data.y_url}>
                            <FaYoutube
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                );
              })}
        </Slider>
      </div>
    );
  }
}
