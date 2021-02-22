import React, { Component } from "react";
import "../../layout/carousel.css";
import img1 from "./bg1.png";
import img2 from "./bg12.png";
import img3 from "./bg13.png";
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
          <div className="carousel-item active img1">
            <div className="carousel-caption text-start caption ">
              <h5 className="titleCarousel ">Your Career is Our Business</h5>
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.
              </p>

              <button className="btn btn-md carouselBtn shadow-none " href="#">
                Sign up today
              </button>
            </div>
          </div>

          <div className="carousel-item img2" data-bs-interval="10000">
            {/* <picture>
              <source
                srcset="https://dummyimage.com/2000x500/007aeb/4196e5"
                media="(min-width: 1400px)"
              />
              <source
                srcset="https://dummyimage.com/1400x500/#007aeb/4196e5"
                media="(min-width: 769px)"
              />
              <source
                srcset="https://dummyimage.com/800x500/007aeb/4196e5"
                media="(min-width: 577px)"
              />
              <img
                srcset="https://dummyimage.com/600x500/007aeb/4196e5"
                alt="responsive image"
                class="d-block img-fluid"
              />
            </picture> */}
            <div className="carousel-caption text-start caption">
              <h5 className="titleCarousel">Start Your Non-Experience Caree</h5>
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.
              </p>
              <button className="btn btn-md carouselBtn shadow-none" href="#">
                Sign up today
              </button>
            </div>
          </div>
          <div className="carousel-item img3" data-bs-interval="10000">
            <div className="carousel-caption  text-start caption">
              <h5 className="titleCarousel">
                Start Your Career Coaching Session
              </h5>
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.{" "}
              </p>
              <button className="btn btn-md carouselBtn shadow-none" href="#">
                Sign up today
              </button>
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
