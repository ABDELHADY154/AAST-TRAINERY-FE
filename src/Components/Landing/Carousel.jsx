import React, { Component } from "react";

import img from "./bg1.png";
export class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-start">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-start">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="10000">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-start">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      // <div
      //   id="carouselExampleCaptions"
      //   classNameName="carousel slide"
      //   data-bs-ride="carousel"
      // >
      //   <div className="carousel-indicators">
      //     <button
      //       type="button"
      //       data-bs-target="#carouselExampleCaptions"
      //       data-bs-slide-to="0"
      //       className="active"
      //       aria-current="true"
      //       aria-label="Slide 1"
      //     ></button>
      //     <button
      //       type="button"
      //       data-bs-target="#carouselExampleCaptions"
      //       data-bs-slide-to="1"
      //       aria-label="Slide 2"
      //     ></button>
      //     <button
      //       type="button"
      //       data-bs-target="#carouselExampleCaptions"
      //       data-bs-slide-to="2"
      //       aria-label="Slide 3"
      //     ></button>
      //   </div>
      //   <div className="carousel-inner">
      //     <div className="carousel-item active">
      //       <img
      //         src="https://images.unsplash.com/photo-1613710145386-39d0e3d4753a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      //         // url={img}
      //         className="d-block w-100"
      //       />
      //       <div className="carousel-caption d-none d-md-block">
      //         <h5>First slide label</h5>
      //         <p>
      //           Some representative placeholder content for the first slide.
      //         </p>
      //       </div>
      //     </div>
      //     <div className="carousel-item">
      //       <img
      //         src="https://images.unsplash.com/photo-1613710145386-39d0e3d4753a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      //         // url={img}
      //         className="d-block w-100"
      //       />
      //       <div className="carousel-caption d-none d-md-block">
      //         <h5>Second slide label</h5>
      //         <p>
      //           Some representative placeholder content for the second slide.
      //         </p>
      //       </div>
      //     </div>
      //     <div className="carousel-item">
      //       <img
      //         src="https://images.unsplash.com/photo-1613710145386-39d0e3d4753a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      //         // url={img}
      //         className="d-block w-100"
      //       />
      //       <div className="carousel-caption d-none d-md-block">
      //         <h5>Third slide label</h5>
      //         <p>
      //           Some representative placeholder content for the third slide.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      //   <button
      //     className="carousel-control-prev"
      //     type="button"
      //     data-bs-target="#carouselExampleCaptions"
      //     data-bs-slide="prev"
      //   >
      //     <span
      //       className="carousel-control-prev-icon"
      //       aria-hidden="true"
      //     ></span>
      //     <span className="visually-hidden">Previous</span>
      //   </button>
      //   <button
      //     className="carousel-control-next"
      //     type="button"
      //     data-bs-target="#carouselExampleCaptions"
      //     data-bs-slide="next"
      //   >
      //     <span
      //       className="carousel-control-next-icon"
      //       aria-hidden="true"
      //     ></span>
      //     <span className="visually-hidden">Next</span>
      //   </button>
      // </div>
    );
  }
}
