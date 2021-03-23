import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/career1.jpg";
import img1 from "../assests/imgs/coach1.jpg";
import img2 from "../assests/imgs/coach2.jpg";
import img3 from "../assests/imgs/coach3.jpg";
import quote from "../assests/imgs/quote.png";

import career1 from "../assests/imgs/career1.png";
import career2 from "../assests/imgs/career2.png";
import career3 from "../assests/imgs/career3.png";
import career4 from "../assests/imgs/career4.png";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";

export default class CareerCoaching extends Component {
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
              <img className="h-100" src={img} />
            </div>
          </div>
          <div className="d-flex flex-row fs-3 pagetitlec mt-5">
            <div>Our Coaches</div>
          </div>
        </div>
        <div className="container-fluid carom">
          <div className="d-flex flex-row flex-wrap   mt-5">
            <div
              id="carousell"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className=" d-flex flex-row flex-wrap align-content-center  container-fluid">
                  <div className="carousel-item  d-flex flex-row text-wrap text-center ">
                    <div className="containerrr">
                      <img
                        src={img1}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Micheal Hanna
                          {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            CEO at Nobels CO.
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}
                    <div className="containerrr">
                      <img
                        src={img2}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Sarah Abdelwekil
                          {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            HR Manager at Qowwa
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}
                    <div className="containerrr">
                      <img
                        src={img1}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Abdellatif Okazi {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            TA at AAST{" "}
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    <div className="containerrr">
                      <img
                        src={img2}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Abdellatif Okazi {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            TA at AAST{" "}
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}{" "}
                  </div>

                  <div className="carousel-item active d-flex flex-row text-wrap text-center ">
                    <div className="containerrr">
                      <img
                        src={img1}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Micheal Hanna
                          {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            CEO at Nobels CO.
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}
                    <div className="containerrr">
                      <img
                        src={img2}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Sarah Abdelwekil
                          {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            HR Manager at Qowwa
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}
                    <div className="containerrr">
                      <img
                        src={img3}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Abdellatif Okazi {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            TA at AAST{" "}
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    <div className="containerrr">
                      <img
                        src={img3}
                        //   {this.state.coach_img}
                        id="imagehoverr"
                        className="d-flex flex-column col-md-3 col-12 rounded "
                        alt="..."
                      />
                      <div class="overlay" id="overlayy">
                        <a
                          id="linksss"
                          href="#"
                          class="texttt fs-4 col-12 col-md-12 "
                        >
                          Abdellatif Okazi {/* {this.state.coach_name} */}
                          <br />
                          <span class="texttt fs-6 col-12 col-md-12 mt-4">
                            TA at AAST{" "}
                            {/* {this.state.job_title} at {this.state.company_name} */}
                          </span>
                        </a>

                        <div className="mt-5 ">
                          <li>
                            <a href="#">
                              <FaFacebookF
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
                              <FaLinkedinIn
                                color="#ffffff"
                                fill="#ffffff"
                                className="m-2"
                              />
                            </a>
                            <a href="#">
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
                    {/* <div className="d-flex flex-column col-md-1 col-1"></div> */}{" "}
                  </div>
                </div>
                <button
                  className="carousel-control-prev prevbtn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon  backbtncaro"
                    aria-hidden="true"
                    color={"#1e4274"}
                    fill={"#1e4274"}
                  ></span>
                  <span className="visually-hidden ">Previous</span>
                </button>
                <button
                  className="carousel-control-next nxtbtn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon backbtncaro"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="container mt-5">
          {/* CAREER CARD 1 */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row mt-2">
                    <img
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 "
                      src={career1}
                    />

                    <div className="d-flex flex-column col-md-8">
                      <p className=" fs-3">CV writing service</p>
                      <p className="card-text mt-2">
                        Our aim is to make you 100% satisfied with your CV;
                        that’s why we offer a first draft that you approve
                        before you receive the final version of your document.
                        <br />
                        Now you can get expert feedback on your CV and profile,
                        Perfect your CV & profile to better reflect your skills,
                        and Refine your job search strategy
                      </p>
                      {/* <DateTimePicker/> */}
                      <div className="d-flex flex-row flex-wrap ">
                        <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button className="applyBtn px-4 py-0 ">Book</button>
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
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 "
                      src={career2}
                    />

                    <div className="d-flex flex-column col-md-8">
                      <p className=" fs-3">Interview coaching</p>
                      <p className="card-text mt-2">
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
                      <div className="d-flex flex-row flex-wrap ">
                        <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button className="applyBtn px-4 py-0 ">Book</button>
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
                      className=" mt-0 d-md-flex d-none flex-column col-md-3 me-5 col-2 me-1 "
                      src={career3}
                    />

                    <div className="d-flex flex-column col-md-8">
                      <p className=" fs-3">Make the right career move</p>
                      <p className="card-text mt-2">
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
                      <div className="d-flex flex-row flex-wrap ">
                        <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button className="applyBtn px-4 py-0 ">Book</button>
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

                    <div className="d-flex flex-column col-md-8">
                      <p className=" fs-3">
                        Career Coaching & Advising Services
                      </p>
                      <p className="card-text mt-2">
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
                      <div className="d-flex flex-row flex-wrap ">
                        <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                          <p id="gold">
                            Please check your email for all details
                          </p>
                        </div>
                        <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                          <p id="gold">150 L.E</p>
                        </div>
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button className="applyBtn px-4 py-0 ">Book</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-5">
            <div className="d-flex flex-column col-md-12 col-12  text-wrap bg-none me-5 ">
              <div className="fs-3 " id="Title">
                Your Colleagues Say{" "}
              </div>
              <div
                id="quote"
                className="d-flex flex-column col-md-6 d-none d-md-flex "
              >
                <img className="h-50 w-50" src={quote} />
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
