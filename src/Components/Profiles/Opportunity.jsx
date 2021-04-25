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
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
export default class advisorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      data: {},
      departments: [],
      tags: [],
      requirements: [],
      FormLoading: true,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get(`/W/student/post/${3}`)
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          departments: res.data.response.data.departments,
          tags: res.data.response.data.tags,
          requirements: res.data.response.data.requirements,
          FormLoading: false,
        });
        console.log(res.data.response.data.tags);
        // console.log(res.data.response.data.internshipPosts.description);
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="profileMT">
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
          <div className="container ">
            <div className="d-flex flex-row mb-3 ">
              <img
                // src={img}
                src={this.state.data.company_logo}
                className="ms-1 me-3 col-2 rounded-circle companyImg"
              />
              <div className="col-7 mt-3 ">
                <div className="d-flex flex-row w-7">
                  <h4 className="opportunity col-md-12 col-12  col-xs-6">
                    {this.state.data.title}
                  </h4>
                </div>
                <div className="row">
                  <p className="col-3  col-md-2 col-sm-5 col-xs-5  company">
                    {this.state.data.company_name}
                  </p>
                  <p className="col-2 col-md-3 col-sm-3 col-xs-3  paid">
                    {this.state.data.salary}
                  </p>
                </div>
                <div className=" departments d-flex flex-row">
                  {this.state.departments.map((item) => {
                    return (
                      <Departments
                        id={item.id}
                        key={item.id}
                        departments={item.departments}
                        dep_name={item.dep_name}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" d-flex flex-row flex-wrap col-12 col-md-12">
              {this.state.tags.map((item) => {
                return (
                  <Interest
                    id={item.id}
                    key={item.id}
                    interest={item.interest}
                  />
                );
              })}
            </div>
            <div className="mt-4">
              <h5 className="companyTitel">Overview</h5>
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-6 ">
                  <div className="row d-flex justify-content-between">
                    <div className="col-6 col-xl-5 col-xxl-5 col-lg-6 col-md-5 col-sm-6 col-xs-6  titleCol">
                      <p className="overvireTitle mb-1">Puplished on:</p>
                      <p className="overvireTitle mb-1">Vacancy:</p>
                      <p className="overvireTitle mb-1">Gender:</p>
                      <p className="overvireTitle mb-1">Type:</p>
                      <p className="overvireTitle mb-1">Salary:</p>
                      <p className="overvireTitle mb-1">
                        Application deadline:
                      </p>
                      <p className="overvireTitle mb-1">location:</p>
                    </div>
                    <div className="col-6 col-xl-7 col-xxl-7 col-lg-6 col-md-7 col-sm-6 col-xs-6 discCol">
                      <p className=" overvireTxt mb-1">
                        {this.state.data.published_on}
                      </p>
                      <p className="overvireTxt mb-1">
                        {this.state.data.vacancy}
                      </p>
                      <p className="overvireTxt mb-1">
                        {this.state.data.gender}
                      </p>
                      <p className="overvireTxt mb-1">{this.state.data.type}</p>
                      <p className="overvireTxt mb-1">
                        {this.state.data.salary}
                      </p>
                      <p className="overvireTxt mb-1">
                        {this.state.data.application_deadline}
                      </p>
                      <a
                        className="overvireTxt location mb-1 "
                        href={`http://maps.google.com/?q=1200:${this.state.data.location}`}
                        // href={`${this.state.data.location_url}`}
                        // href="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003"
                      >
                        {this.state.data.location}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="companyTitel">Description</h5>
                <p className="companyDesc">{this.state.data.description}</p>
              </div>

              <div className="mt-4">
                <h5 className="companyTitel">Requirements</h5>
                <ul className="reuirLi">
                  {this.state.requirements.map((item) => {
                    return (
                      <Requirements
                        id={item.id}
                        key={item.id}
                        requirements={item.requirements}
                        req={item.req}
                      />
                    );
                  })}
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
            <div className="d-flex flex-row ">
              <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-5 ">
                <p className="mb-0 companyTitel" id="Title">
                  Add Your Review
                </p>
                <ReactStars
                  className="reviewstars"
                  count={5}
                  value="3"
                  onChange={(value) => {
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
        </LoadingOverlay>
      </div>
    );
  }
}

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p className="dep me-2">{this.props.dep_name}</p>;
  }
}

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="d-flex flex-row me-2 fs-5 ">
        <p
          style={{ textTransform: "capitalize" }}
          className=" d-flex flex-row flex-wrap col-12 col-md-12 tag "
        >
          {this.props.interest}
        </p>
      </div>
    );
  }
}
class Requirements extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <li className=" companyDesc reuirLi">{this.props.req} </li>;
  }
}
