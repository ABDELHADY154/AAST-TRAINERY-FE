import React from "react";
import { axios } from "../../Api/axios";

import { Redirect } from "react-router-dom";
// import Caro from "./Caro";
import Footer from "../Footer";
import img from "./bg2.png";
import img1 from "./Rectangle1.png";
import img2 from "./Rectangle2.png";
import img3 from "./Rectangle3.png";
import img4 from "./2.png";
import google from "./google.png";
import apple from "./apple.png";
import { Loader } from "../../loader";
import "../../layout/Landing.css";

import { FaCheck } from "react-icons/fa";
import { Component } from "react";

class Landing extends React.Component {
  state = {
    loading: false,
  };

  async componentDidMount() {
    await axios.get("/W/landingCount").then((data) => {
      this.setState({
        loading: true,
        students: data.data.response.data.students,
        opportunities: data.data.response.data.opportunities,
        applied: data.data.response.data.applied,
      });
      console.log(data.data.response.data);
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div id="DescCont" className="d-flex flex-column text-wrap bg-none">
            <div class="fs-2" id="Provide">
              We Provide The Best Experience
            </div>
            <div class="fs-6 " id="DescProv">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis numquam similique eum repellat nesciunt beatae error
              quod, tenetur aspernatur a cumque, non maxime sit nulla excepturi
              pariatur inventore illum placeat.
            </div>
            <div class="d-flex flex-row mt-5 justify-content-between">
              <div>
                <p className="Numbers">{this.state.opportunities}</p>
                <div className="NumTitle">Opportunities</div>
              </div>
              <div>
                <p className="Numbers">{this.state.students}</p>
                <div className="NumTitle">Students</div>
              </div>
              <div>
                <p className="Numbers">{this.state.applied}</p>
                <div className="NumTitle">Accepted</div>
              </div>
            </div>
          </div>
          <div id="Experienceimg" className="d-flex flex-column  ">
            <img className="ml-200" src={img} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
