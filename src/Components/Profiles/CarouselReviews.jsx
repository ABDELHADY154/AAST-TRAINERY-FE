import React, { Component } from "react";
import "../../layout/Profiless.css";
import ReactStars from "react-rating-stars-component";

export class CarouselReviews extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel  slide mb-4"
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
          <div className="carousel-item active bg">
            <div className="carousel-caption text-center caption ">
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.
              </p>
              <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
              <p className="txtName">full name</p>
              <p className="txtRole">Trainig role</p>
              <div className="position-absolute start-50 translate-middle">
                <ReactStars
                  count={5}
                  value={3}
                  edit={false}
                  size={23}
                  activeColor="#cd8930"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item bg">
            <div className="carousel-caption text-center caption ">
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi
                sagittis donec sed massa. Velit malesuada amet pretium turpis in
                commodo aliquet pulvinar ultrices.
              </p>
              <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
              <p className="txtName">full name</p>
              <p className="txtRole">Trainig role</p>
              <div className="position-absolute  start-50 translate-middle mt-5">
                <ReactStars
                  count={5}
                  value={3}
                  edit={false}
                  size={23}
                  activeColor="#cd8930"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item bg">
            <div className="carousel-caption text-center caption ">
              <p className="textCarousel lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.
              </p>
              <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
              <p className="txtName">full name</p>
              <p className="txtRole">Trainig role</p>
              <div className="position-absolute start-50 translate-middle">
                <ReactStars
                  count={5}
                  value={3}
                  edit={false}
                  size={23}
                  activeColor="#cd8930"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
