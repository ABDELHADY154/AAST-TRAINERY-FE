import React, { Component } from "react";
import "../../layout/Profiless.css";
import ReactStars from "react-rating-stars-component";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export class CarouselReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    window.scrollTo(0, 0);

    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mb-5">
            <div className="carousel-item active">
              <div className="flex-row d-flex justify-content-center">
                <div className="col-md-12">
                  <div className="d-flex flex-row justify-content-center">
                    <div className=" carouselCaption text-center col-md-11 mb-2 col-11">
                      <p className="txtCarousel lh-sm">{this.props.comment}</p>
                    </div>
                  </div>

                  <center>
                    <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
                  </center>
                  <div className="d-flex flex-row col-12 col-md-12 text-center fs-5  ">
                    <div className="d-flex flex-column col-12 col-md-12">
                      <center>
                        <p className="txtName">{this.props.fullName}</p>
                      </center>
                    </div>
                  </div>
                  <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                    <div className="d-flex flex-column col-12 col-md-12">
                      <center>
                        <p className="txtRole">{this.props.training_role}</p>
                      </center>
                    </div>
                  </div>
                  <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center  mb-2 starsReview">
                    <div className="d-flex flex-column justify-content-center col-md-12 align-items-center">
                      <ReactStars
                        count={5}
                        value={this.props.rate}
                        edit={false}
                        size={23}
                        activeColor="#F2A23A"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev prevBtnReviews"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-shown">
                <BsChevronLeft id="iconss" size="20" />
              </span>
            </button>
            <button
              className="carousel-control-next nextBtnReviews"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-shown">
                <BsChevronRight id="iconss" size="20" />
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
