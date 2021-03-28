import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/Profiless.css";
import img from "../../Components/assests/imgs/rec2.png";
import img2 from "../../Components/assests/imgs/cib.png";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import { FiPhone, FiSearch, FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineGlobal, AiOutlineMail } from "react-icons/ai";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { CarouselReviews } from "./CarouselReviews";
import ReactStars from "react-rating-stars-component";

export default class advisorProfile extends Component {
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
      <div className="profileMT">
        <div className="container ">
          <div className="row ">
            <img
              src={img}
              className="ms-3 me-2 col-3 rounded-circle companyImg"
            />
            <div className="col-7 mt-3 ">
              <div className="d-flex flex-row w-7">
                <h4 className="opportunity col-md-12 col-12  col-xs-6">
                  Web Developer
                </h4>
              </div>
              <div className="row">
                <p className="col-6 col-lg-2 col-md-3 col-sm-5 col-xs-4 company">
                  Qowwa
                </p>
                <p className="dep col-2 col-lg-1 col-md-2  col-sm-3 col-xs-4">
                  BIS
                </p>
                <p className="paid col-1 col-lg-1 col-md-1 col-sm-2 col-xs-2">
                  Paid
                </p>
              </div>
            </div>

            <div className=" d-flex flex-row flex-wrap col-12 col-md-12 mt-2">
              <div className="d-flex flex-row me-2 fs-5 ">
                <p
                  style={{ textTransform: "capitalize" }}
                  className=" d-flex flex-row flex-wrap col-12 col-md-12  mt-2 tag "
                >
                  mmnnnnnnm
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="companyTitel">Overview</h5>
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-6 ">
                  <div className="row d-flex justify-content-between">
                    <div className="col-6 col-xl-5 col-xxl-5 col-lg-4 col-md-6 col-sm-6 col-xs-6  titleCol">
                      <p className="overvireTitle mb-1">Puplished on:</p>
                      <p className="overvireTitle mb-1">Vacancy:</p>
                      <p className="overvireTitle mb-1">Gender:</p>
                      <p className="overvireTitle mb-1">Type:</p>
                      <p className="overvireTitle mb-1">Salary:</p>
                      <p className="overvireTitle mb-1">
                        Application deadline:
                      </p>
                    </div>
                    <div className="col-6 col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 discCol">
                      <p className="overvireTxt mb-1">Oct 1, 2020</p>
                      <p className="overvireTxt mb-1">2</p>
                      <p className="overvireTxt mb-1">Any</p>
                      <p className="overvireTxt mb-1">Full Time</p>
                      <p className="overvireTxt mb-1">Paid</p>
                      <p className="overvireTxt mb-1">Oct 14, 2020</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-xxl-4 col-lg-4 col-md-6  ">
                  <div className="row d-flex justify-content-between">
                    <div className="col-6 col-xl-4 col-xxl-4 col-lg-4 col-md-5 col-sm-6 col-xs-6  titleCol">
                      <p className="overvireTitle mb-1">Puplished on:</p>
                    </div>
                    <div className="col-6 col-xl-7 col-xxl-7 col-lg-7 col-md-6 col-sm-6 col-xs-6 discCol">
                      <p className="overvireTxt mb-1">Oct 14, 2020</p>
                    </div>
                  </div>
                  <div
                    className="bg-dark col-xl-5 col-xxl-4 col-lg-4 col-md-6 map"
                    // style={{ width: 260, height: 90 }}
                  ></div>
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13646.513994923827!2d29.9491302!3d31.2310203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49897e2d526104e2!2zRHIuIEFiZGVsaGFkeSBFbHNoYW15IC4g2K8uINi52KjYr9in2YTZh9in2K_ZiiDYp9mE2LTYp9mF2YouINil2LPYqti02KfYsdmKINis2LHYp9it2Kkg2KfZhNiq2KzZhdmK2YQg2Ygg2KfZhNit2LHZiNmCIC4!5e0!3m2!1sen!2seg!4v1616949635625!5m2!1sen!2seg"
                    width="600"
                    height="450"
                    // style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe> */}
                </div>
              </div>

              <div className="mt-4">
                <h5 className="companyTitel">Description</h5>
                <p className="companyDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  malesuada molestie tempor ornare condimentum mi, dictum. Ut
                  lobortis nulla aliquet enim, fusce vitae. Pellentesque
                  molestie metus nisi in condimentum id. Quam donec eros
                  pellentesque fringilla. Facilisi sem pellentesque dui quis
                  consectetur eu. Consequat elit etiam ultricies morbi leo hac
                  id mauris quisque. Felis habitant neque tellus risus eu non
                  urna dui.
                </p>
              </div>

              <div className="mt-4">
                <h5 className="companyTitel">Requirements</h5>
                <ul className="reuirLi">
                  <li className=" companyDesc reuirLi">
                    knowledge about Web, IOS, Android Design Guidelines.
                  </li>
                  <li className=" companyDesc reuirLi">
                    knowledge about Web, IOS, Android Design Guidelines.
                  </li>{" "}
                  <li className=" companyDesc reuirLi">
                    knowledge about Web, IOS, Android Design Guidelines.
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3">
              <div className="d-flex flex-column col-4 col-md-1 me-4 "></div>
              <div className="d-flex flex-column col-4  col-md-1 me-4 "></div>
              <div
                id="drop"
                className="d-flex flex-column col-md-3  
                             justify-space-between"
              ></div>
              <div className="  d-flex flex-row col-12 col-md-2 justify-content-start me-1"></div>
              <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                <BsBookmark
                  id="BsBookmark"
                  color="#1e4274"
                  className="fs-2 align-self-center col-md-2 col-4"
                  path="0px"
                />
                <button className="applyBtn px-1 py-0 col-md-3 col-8">
                  Apply
                </button>
              </div>
            </div>
            {/* carousel */}
            <div className="col-12">
              <p className="companyTitel ">Company internship reviews</p>
              {/* <CarouselReviews /> */}
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
                              <p className="txtCarousel lh-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repudiandae aut
                                possimus. Repellendus at nostrum iste
                                doloremque. Ea omnis ipsam, eum nam tempore
                                culpa illum consequuntur quis nobis adipisci et?
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repudiandae aut
                                possimus. Repellendus at nostrum iste
                                doloremque. Ea omnis ipsam, eum nam tempore
                                culpa illum consequuntur quis nobis adipisci et?
                              </p>
                            </div>
                          </div>

                          <center>
                            <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
                          </center>
                          <div className="d-flex flex-row col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p className="txtName">full name</p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p className="txtRole">Trainig role</p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center  mb-2 starsReview">
                            <div className="d-flex flex-column justify-content-center col-md-12 align-items-center">
                              <ReactStars
                                count={5}
                                value="4"
                                edit={false}
                                size={23}
                                activeColor="#F2A23A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <div className="flex-row d-flex justify-content-center">
                        <div className="col-md-12">
                          <div className="d-flex flex-row justify-content-center">
                            <div className=" carouselCaption text-center col-md-11 mb-2 col-11">
                              <p className="txtCarousel lh-sm ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repudiandae aut
                                possimus. Repellendus at nostrum iste
                                doloremque. Ea omnis ipsam, eum nam tempore
                                culpa illum consequuntur quis nobis adipisci et?
                              </p>
                            </div>
                          </div>

                          <center>
                            <div className="hrReviews position-absolute top-40 start-50 translate-middle "></div>
                          </center>
                          <div className="d-flex flex-row col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p className="txtName">full name</p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
                            <div className="d-flex flex-column col-12 col-md-12">
                              <center>
                                <p className="txtRole">Trainig role</p>
                              </center>
                            </div>
                          </div>
                          <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center mb-2 ">
                            <div className="d-flex flex-column justify-content-center col-md-12 align-items-center">
                              <ReactStars
                                count={5}
                                value="1"
                                edit={false}
                                size={23}
                                activeColor="#F2A23A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators reviewsBtnIndicators">
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
                      </div>
                    </div> */}

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
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-5 ">
              <p className="mb-0 companyTitel" id="Title">
                Add Your Review
              </p>
              <ReactStars
                className="reviewstars"
                count={5}
                value="3"
                onChange={value => {
                  this.setState({ value: value });
                }}
                size={28}
                activeColor="#F2A23A"
                edit={true}
              />
            </div>
          </div>
          <div className="d-flex flex-row mt-3 mb-5 ">
            <textarea
              placeholder="Enter Your Review Here..."
              type="text"
              name="name"
              className="reviewbox d-flex flex-column col-md-12 col-12 pt-2  px-3"
            ></textarea>
          </div>
          <div className="d-flex flex-row mb-5 justify-content-end ">
            <button className="applyBtn px-1 py-0 col-md-1 col-4 ">
              Review
            </button>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
