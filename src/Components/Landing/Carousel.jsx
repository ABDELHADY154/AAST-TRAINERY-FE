import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../layout/carousel.css";
import img1 from "./Assets/bg1.png";
import img2 from "./Assets/bg12.png";
import img3 from "./Assets/bg13.png";
export class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel  slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active img1"
            alt="a laptop with a screen that reads Join us online"
          >
            <div className="carousel-caption text-start caption ">
              <h1 className="titleCarousel ">Your Career is Our Business</h1>
              <p className="textCarousel lh-sm">
                We firmly believe that success starts from university years for
                undergraduate students, and for that we want to secure your
                success early on to excel in your chosen career path and guide
                you through those years.
              </p>

              <Link to="/Register">
                <button className="btn btn-md carouselBtn shadow-none">
                  Sign Up today
                </button>
              </Link>
            </div>
          </div>

          <div
            className="carousel-item img2"
            data-bs-interval="10000"
            alt="an eagle eye view of people sitting on a cafe casually and an old man walking past the tables"
          >
            <div className="carousel-caption text-start caption">
              <h1 className="titleCarousel">
                Start Your Non-Experience Career
              </h1>
              <p className="textCarousel lh-sm">
                A lot may think that you should have multiple skills in order to
                earn an internship opportunity for your major or preffered area.
                With Trainery, you won't only land impressive training jobs but
                also you'll be able to grow and enhance your skill with us.
              </p>
              <Link
                // renderAs="button"
                // className="btn btn-nav shadow-none signUp col-xm-6  mx-1"
                to="/Register"
              >
                <button className="btn btn-md carouselBtn shadow-none">
                  Sign Up today
                </button>
              </Link>
            </div>
          </div>
          <div
            className="carousel-item img3"
            data-bs-interval="10000"
            alt="a man sitting on a desk with his back facing and focusing on the screen"
          >
            <div className="carousel-caption  text-start caption">
              <h1 className="titleCarousel">
                Start Your Career Coaching Session
              </h1>
              <p className="textCarousel lh-sm">
                We got your back anywhere and anytime to help you improve your
                soft and technical skills and give you the guidance you need
                with professional coaches to learn more about your future career
                and job market
              </p>

              <Link
                // renderAs="button"
                // className="btn btn-nav shadow-none signUp col-xm-6  mx-1"
                to="/Register"
              >
                <button className="btn btn-md carouselBtn shadow-none">
                  Sign Up today
                </button>
              </Link>
              {/* </button> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
