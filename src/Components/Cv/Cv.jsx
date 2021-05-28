import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { axios } from "../../Api/axios";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../../layout/CareerCoaching.css";
import PortCaro from "./PortCaro";
import MyPortCaro from "./MyPortCaro";

export default class Cv extends Component {
  state = {
    data: [],
    mydata: [],
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="container">
          <div className="d-flex flex-row pagetitlec ">
            <h1 className="fs-2">Portfolio</h1>
          </div>
          <div className="container ">
            <PortCaro />
          </div>
          <p className="fs-3 mt-5">My Portfolios</p>
          {this.state.mydata.length == 0 ? (
            <p className="fs-6 mt-1">
              You don’t have your own portfolio yet check our portfolio themes
              or
              <span style={{ color: "#cd8930" }}> generate your CV</span> for
              free
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
