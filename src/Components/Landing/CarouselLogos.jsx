import React, { Component } from "react";
// import "../../layout/carousel.css";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";

export class CarouselLogos extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        class="carousel slider"
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
        <div class="carousel-inner row">
          <div class="carousel-item col-1">
            <img src={logo1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item active col-1" data-bs-interval="1000">
            <img src={logo2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item col-1" data-bs-interval="2000">
            <img src={logo3} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}
