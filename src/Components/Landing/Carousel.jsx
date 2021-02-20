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
        className="carousel carousel-dark slide mb-5"
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
          <div className="carousel-item active ">
            <img src={img1} className="d-block w-100 " alt="..." />
            <div className="carousel-caption text-start caption ">
              <h5 className="title ">First slide label</h5>
              <p className="text lh-sm">
                Some representative placeholder content for the first slide.
              </p>

              <button className="btn btn-md carouselBtn shadow-none " href="#">
                Sign up today
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img
              src={img2}
              className="d-block w-100 bd-placeholder-img"
              alt="..."
            />
            <div className="carousel-caption text-start">
              <h5 className="title">secound slide label</h5>
              <p className="text lh-sm">
                Some representative placeholder content for the first slide.
              </p>
              <button className="btn btn-md carouselBtn shadow-none" href="#">
                Sign up today
              </button>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="10000">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption  text-start">
              <h5 className="title">therid slide label</h5>
              <p className="text lh-sm">
                Some representative placeholder content for the first slide.
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
