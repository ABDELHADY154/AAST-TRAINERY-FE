import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/career1.jpg";
import img1 from "../assests/imgs/coach1.jpg";
import img2 from "../assests/imgs/coach2.jpg";
import img3 from "../assests/imgs/coach3.jpg";
import { ImQuotesLeft } from "react-icons/im";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import careerbottom from "../assests/imgs/careerbottom.jpg";
import CoachCaro from "../CareerCoaching/CoachCaro";
import career1 from "../assests/imgs/career1.png";
import career2 from "../assests/imgs/career2.png";
import career3 from "../assests/imgs/career3.png";
import career4 from "../assests/imgs/career4.png";
import ReactStars from "react-rating-stars-component";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import DateTimePicker from "react-datetime-picker";

export default class CareerCoaching extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: [],
  //   };
  //   onChange = (e) => {
  //     this.setState({ value: e });
  //     this.props.value(e);
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };

  render() {
    return (
      <div className="container-fluid ">
        <div className="container">
          <div className="d-flex flex-row fs-2 pagetitlec ">
            <div>Career Coaching</div>
          </div>
          <div className="d-flex flex-row fs-6 pagetitlec mt-3">
            <div className="d-flex flex-column col-md-6 col-12">
              Be Your Best with our career coaching services as we will help you
              make informed decisions to reach your career goals in smarter and
              faster ways.
            </div>
          </div>
          <div className="d-flex flex-row mt-5">
            <div className="d-flex flex-column col-md-6  text-wrap bg-none me-5 ">
              <div className="fs-3 " id="Title">
                Our career coaching services
              </div>
              <div className="fs-6 ">
                What differentiates one candidate from another? In the job
                search market, each job seeker needs to learn how to distinguish
                themself from the competition. That’s exactly what students need
                to do. When an internship, everything a student does
                communicates their value and their 'brand'. Whether it’s with a
                well-crafted resume, compelling cover letter, job search, and
                networking strategies interviewing, or more. With Student Career
                Coaching, students learn how to effectively market themself with
                confidence.
              </div>
            </div>
            <div
              id="Experienceimg"
              className="d-flex flex-column col-md-6 d-none d-md-flex ms-5"
            >
              <img className="h-100 w-100 careerimgh" src={img} />
            </div>
          </div>
          <div className="d-flex flex-row fs-3 pagetitlec mt-5">
            <div>Our Coaches</div>
          </div>
        </div>
        <div className="container ">
          <CoachCaro />
        </div>

        <div className="container mt-5">
          {/* CAREER CARD 1 */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row mt-2">
                    <img
                      className=" mt-0 d-md-flex d-none flex-column  col-md-3 me-5 col-2 me-1 careerimg "
                      src={career1}
                    />

                    <div className="d-flex flex-column col-md-9">
                      <p className=" fs-3">CV writing service</p>
                      <p className="card-text mt-2 cardtextt">
                        Our aim is to make you 100% satisfied with your CV;
                        that’s why we offer a first draft that you approve
                        before you receive the final version of your document.
                        <br />
                        Now you can get expert feedback on your CV and profile,
                        Perfect your CV & profile to better reflect your skills,
                        and Refine your job search strategy
                      </p>
                      {/* <DateTimePicker/> */}
                      {/* <DateTimePicker onChange={onChange()} value={value} /> */}

                      <div className="d-flex  mt-2 flex-row flex-wrap ">
                        <div className=" mb-1 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-1 d-flex flex-row mt-1 col-4 col-md-3 justify-content-center  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 mt-0 justify-content-end">
                          <Link to="/CareerCoaching/CvWriting">
                            {" "}
                            <button className="applyBtn px-4 py-0 bookbtn">
                              Book
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row mt-2">
                    <img
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 careerimg"
                      src={career2}
                    />

                    <div className="d-flex flex-column col-md-9">
                      <p className=" fs-3">Interview coaching</p>
                      <p className="card-text mt-2 cardtextt">
                        Our career coaches will help you overcome your interview
                        fears and refine your answers, to enhance your chances
                        of getting the job. you will understand your strengths
                        and blind spots in interviews through a personality
                        assessment, Practice and rehearse your answers to your
                        most challenging interview questions, Get detailed,
                        personalized feedback on your interview answers, body
                        language, manner of speaking, etc.
                      </p>
                      {/* <DateTimePicker/> */}

                      <div className="d-flex   mt-2 flex-row flex-wrap ">
                        <div className=" mb-1 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-1 d-flex flex-row mt-1 col-4 col-md-3 justify-content-center  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 mt-0 justify-content-end">
                          <Link to="/CareerCoaching/InterviewCoaching">
                            {" "}
                            <button className="applyBtn px-4 py-0 bookbtn">
                              Book
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row mt-2">
                    <img
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 careerimg"
                      src={career3}
                    />

                    <div className="d-flex flex-column col-md-9">
                      <p className=" fs-3">Make the right career move</p>
                      <p className="card-text mt-2 cardtextt">
                        Do you want to fully prepare yourself for the right
                        career path? your dedicated career coach will help you
                        answer the question, “what is the best career for me?”
                        through identifying your personality, skills, interests,
                        and career values, Accurately identify how ready you are
                        for your targeted career and how satisfied you would be
                        in this career, Put together a tailored and detailed
                        career plan for your next career move.
                      </p>
                      {/* <DateTimePicker/> */}

                      <div className="d-flex  mt-2 flex-row flex-wrap ">
                        <div className=" mb-1 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-1 d-flex flex-row mt-1 col-4 col-md-3 justify-content-center  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <Link to="/CareerCoaching/CareerMove">
                            {" "}
                            <button className="applyBtn px-4 py-0 bookbtn ">
                              Book
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row mt-2">
                    <img
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 careerimg"
                      src={career4}
                    />

                    <div className="d-flex flex-column col-md-9">
                      <p className=" fs-3">
                        Career Coaching & Advising Services
                      </p>
                      <p className="card-text mt-2 cardtextt">
                        Get a career package that includes CV & Profile Review
                        and Interview Coaching plus the career path coaching you
                        will enhance your CV & profile to better reflect your
                        skills, Refine your job search strategy, Understand your
                        strengths and blind spots in interviews through a
                        personality and body language assessment, Practice and
                        rehearse your answers to the most challenging interview
                        questions, and identifying your personality, skills,
                        interests, and career values, and how ready you are for
                        your targeted career.
                      </p>
                      {/* <DateTimePicker/> */}

                      <div className="d-flex  mt-2 flex-row flex-wrap ">
                        <div className=" mb-1 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-1 d-flex flex-row mt-1 col-4 col-md-3 justify-content-center  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 mt-0 justify-content-end">
                          <Link to="/CareerCoaching/Advising">
                            {" "}
                            <button className="applyBtn px-4 py-0 bookbtn">
                              Book
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mb-3 mt-3">
            <div className="d-flex flex-column col-md-12 col-12  text-wrap bg-none me-5 ">
              <div className="fs-3 " id="Title">
                Your Colleagues Say{" "}
              </div>
              <div className="d-flex flex-column col-md-6 d-flex d-md-flex ">
                <ImQuotesLeft fill="#cd8930" color="#cd8930" className="fs-1" />
              </div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-row col-md-12 col-12 justify-content-center text-center">
              <>
                {/* <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                > */}
                {/* <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div> */}
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner mb-5">
                    <div className="carousel-item active">
                      <div className="flex-row d-flex justify-content-center">
                        <div className="col-md-12">
                          <div className="d-flex flex-row justify-content-center">
                            <div className=" fs-6   col-md-12 mb-2 col-12">
                              <p className="card-text ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repudiandae aut
                                possimus. Repellendus at nostrum iste
                                doloremque. Ea omnis ipsam, eum nam tempore
                                culpa illum consequuntur quis nobis adipisci et?
                                {/* {this.state.colleauge_comment} */}
                              </p>
                            </div>
                          </div>

                          <center>
                            <hr className="commentgoldline d-flex flex-column justify-content-center col-md-3" />
                          </center>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                {" "}
                                <p className="boldtext"> Yasmin Sabry</p>
                              </center>
                              {/* {this.state.colleauge_name} */}
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p> CV WRITING</p>
                              </center>
                              {/* {this.state.colleauge_service} */}
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center fs-5 mb-2 ">
                            {/* <div className="d-flex flex-column justify-content-center col-md-4 me-5"></div> */}
                            <div className="d-flex flex-column justify-content-center col-md-12 align-items-center">
                              <ReactStars
                                count={5}
                                value="1"
                                // value={this.props.years_of_exp}
                                edit={false}
                                size={23}
                                activeColor="#F2A23A"
                              />
                            </div>
                            {/* <div className="d-flex flex-column justify-content-center col-md-3"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="flex-row d-flex justify-content-center">
                        <div className="col-md-12">
                          <div className="d-flex flex-row justify-content-center">
                            <div className=" fs-6   col-md-12 mb-2 col-12">
                              <p className="card-text ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repudiandae aut
                                possimus. Repellendus at nostrum iste
                                doloremque. Ea omnis ipsam, eum nam tempore
                                culpa illum consequuntur quis nobis adipisci et?
                                {/* {this.state.colleauge_comment} */}
                              </p>
                            </div>
                          </div>
                          <center>
                            <hr className="commentgoldline d-flex flex-column justify-content-center col-md-3" />
                          </center>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p className="boldtext">
                                  Basma Mostafa
                                  {/* {this.state.colleauge_name} */}
                                </p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p>
                                  CV WRITING
                                  {/* {this.state.colleauge_service} */}
                                </p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center fs-5 mb-2 ">
                            {/* <div className="d-flex flex-column justify-content-center col-md-4"></div> */}
                            <div className="d-flex flex-column justify-self-center align-items-center col-md-12 ">
                              <ReactStars
                                count={5}
                                value="3"
                                // value={this.props.years_of_exp}
                                edit={false}
                                size={23}
                                activeColor="#F2A23A"
                              />
                            </div>{" "}
                            {/* <div className="d-flex flex-column justify-content-center col-md-3"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
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
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
          {/* <center>
            <div className="d-none d-md-flex flex-row col-md-12 careerbottom">
              <img src={careerbottom} />
            </div>
          </center> */}
        </div>
        <Footer2 />
      </div>
    );
  }
}

function DatePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}
