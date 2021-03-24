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
import { BsArrowUpRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { CarouselReviews } from "./CarouselReviews";

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
            <div className="col-12">
              <p className="companyTitel ">Company internship reviews</p>

              <CarouselReviews />
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
