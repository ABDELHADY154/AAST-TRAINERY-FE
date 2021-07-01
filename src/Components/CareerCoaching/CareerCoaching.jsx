import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/career1.jpg";

import { ImQuotesLeft } from "react-icons/im";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import CoachCaro from "../CareerCoaching/CoachCaro";

import ReactStars from "react-rating-stars-component";
import { axios } from "../../Api/axios";

import DateTimePicker from "react-datetime-picker";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class CareerCoaching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      FormLoading: true,
      review: [],
      // status: "",
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };

  state = {
    data: [],
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get("/W/sessions")
      .then((res) => {
        this.setState({
          data: res.data.response.data,
          FormLoading: false,
          // status: res.data.response.data.status,
        });
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
    await axios
      .get(`/W/student/careerCoachingReviews`)
      .then((res) => {
        this.setState({
          review: res.data.response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    console.log(this.state.data);

    return (
      <div className="container-fluid ">
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container">
            <div className="d-flex flex-row fs-2 pagetitlec ">
              <div>Career Coaching</div>
            </div>
            <div className="d-flex flex-row fs-6 pagetitlec mt-3">
              <div className="d-flex flex-column col-md-6 col-12">
                Be Your Best with our career coaching services as we will help
                you make informed decisions to reach your career goals in
                smarter and faster ways.
              </div>
            </div>
            <div className="d-flex flex-row mt-5">
              <div className="d-flex flex-column col-md-6  text-wrap bg-none me-5 ">
                <div className="fs-3 " id="Title">
                  Our career coaching services
                </div>
                <div className="fs-6 ">
                  What differentiates one candidate from another? In the job
                  search market, each job seeker needs to learn how to
                  distinguish themself from the competition. That’s exactly what
                  students need to do. When an internship, everything a student
                  does communicates their value and their 'brand'. Whether it’s
                  with a well-crafted resume, compelling cover letter, job
                  search, and networking strategies interviewing, or more. With
                  Student Career Coaching, students learn how to effectively
                  market themself with confidence.
                </div>
              </div>
              <div
                id="Experienceimg"
                className="d-flex flex-column col-md-6 d-none d-md-flex ms-5"
              >
                <img
                  className="h-100 w-100 careerimgh"
                  src={img}
                  alt="Two men greeting eachother with a smile"
                />
              </div>
            </div>
            <div className="d-flex flex-row fs-3 pagetitlec mt-5">
              <div>Our Coaches</div>
            </div>
          </div>
          <div className="container ">
            <CoachCaro />
          </div>

          <div className="container ">
            {!this.state.data
              ? " "
              : this.state.data.map((data) => {
                  return (
                    <div className="row mt-5">
                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex flex-row mt-2">
                              <img
                                alt={data.title}
                                className=" mt-0 d-md-flex d-none flex-column  col-md-3 me-5 col-2 me-1 careerimg "
                                src={data.image}
                              />

                              <div className="d-flex flex-column col-md-9">
                                <p className=" fs-3">{data.title}</p>
                                <p className="card-text mt-2 cardtextt">
                                  {data.desc}
                                </p>
                                {/* <DateTimePicker/> */}
                                {/* <DateTimePicker onChange={onChange()} value={value} /> */}

                                <div className="d-flex  mt-2 flex-row flex-wrap ">
                                  <div className=" mb-1 d-flex mt-1 flex-row col-12 col-md-5 justify-content-start ">
                                    <p id="gold">
                                      Please check your email for all details
                                    </p>
                                  </div>
                                  <div className=" mb-1 d-flex flex-row mt-1 col-4 col-md-4 justify-content-center  ">
                                    <p id="gold">{data.price} L.E</p>
                                  </div>
                                  <div className=" d-flex flex-row col-6 col-md-3 mt-0 justify-content-end">
                                    <Link
                                      to={`/CareerCoaching/Advising/${data.id}`}
                                    >
                                      {data.status == "unbooked" ? (
                                        <button className="applyBtn px-4 py-0 bookbtn">
                                          Book
                                        </button>
                                      ) : (
                                        <button className="applyBtn px-4 py-0 bookbtn">
                                          Booked
                                        </button>
                                      )}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

            <div className="d-flex flex-row mb-3 mt-3">
              <div className="d-flex flex-column col-md-12 col-12  text-wrap bg-none me-5 ">
                <div className="fs-3 " id="Title">
                  Your Colleagues Say{" "}
                </div>
                <div className="d-flex flex-column col-md-6 d-flex d-md-flex ">
                  <ImQuotesLeft
                    fill="#cd8930"
                    color="#cd8930"
                    className="fs-1"
                    alt="quote icon"
                  />
                </div>
              </div>
            </div>
            <>
              <Slider {...settings} className="mb-5">
                {this.state.review.map((data) => {
                  return (
                    <CarouselReviews
                      comment={data.comment}
                      fullName={data.fullName}
                      session_type={data.session_type}
                      rate={data.rate}
                    />
                  );
                })}
              </Slider>
            </>
          </div>
          <Footer2 />
        </LoadingOverlay>
      </div>
    );
  }
}
class CarouselReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <div className="d-flex flex-row justify-content-center">
            <div className=" carouselCaption text-center col-md-11 mb-2 col-11">
              <p className="txtCarousel lh-sm">{this.props.comment}</p>
            </div>
          </div>
          <center>
            <hr className="hrReview" />
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
                <p className="txtRole">{this.props.session_type}</p>
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
                activeColor="#cd8930"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
