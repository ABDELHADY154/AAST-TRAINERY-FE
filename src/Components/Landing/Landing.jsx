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
import { DepLoader } from "../../loader";
import "../../layout/Landing.css";
import { BsCheck } from "react-icons/bs";
import CountUp from "react-countup";

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
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex flex-row ">
            <div
              id="DescCont"
              className="d-flex flex-column text-wrap bg-none "
            >
              <div className="fs-2" id="Title">
                We Provide The Best Experience
              </div>
              <div className="fs-6 " id="DescProv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis numquam similique eum repellat nesciunt beatae error
                quod, tenetur aspernatur a cumque, non maxime sit nulla
                excepturi pariatur inventore illum placeat.
              </div>
              <div
                id="Num"
                className="d-flex flex-row flex-wrap mt-5 justify-content-between"
              >
                {this.state.loading === false ? (
                  <div>
                    <DepLoader />
                    <DepLoader />
                    <DepLoader />
                  </div>
                ) : (
                  <>
                    <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                      <CountUp
                        className="Numbers"
                        start={0}
                        end={this.state.opportunities}
                      />

                      <div className="NumTitle">Opportunities</div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                      <CountUp
                        className="Numbers"
                        start={0}
                        end={this.state.students}
                      />

                      <div className="NumTitle">Students</div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                      <CountUp
                        className="Numbers"
                        start={0}
                        end={this.state.applied}
                      />

                      <div className="NumTitle">Accepted</div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              id="Experienceimg"
              className="d-flex flex-column d-none d-md-flex ms-5 "
            >
              <img className="" src={img} />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div id="Career" className="fs-2">
              Career Coaching Guidance
            </div>
          </div>
          <div className="d-flex flex-row" id="CoachCont">
            <div className="fs-6 " id="DescProv">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis numquam similique eum repellat nesciunt beatae error
              quod, tenetur aspernatur a cumque, non maxime sit nulla excepturi
              pariatur inventore illum placeat. orem ipsum dolor sit amet
              consectetur, adipisicing elit. Reiciendis numquam similique eum
              repellat nesciunt beatae error quod, tenetur aspernatur a cumque,
              non maxime sit nulla excepturi pariatur inventore illum placeat.
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap  " id="CoachCont">
            <div className=" mt-3 col-md-4 col-12">
              <div className="card m-md-5">
                <img
                  className="cardImg img-responsive"
                  src={img1}
                  height="200"
                />
                <div className="carousel-caption2">
                  <h5 className="textt">CV writing Coaching</h5>
                </div>
              </div>
            </div>
            <div className=" mt-3  col-md-4 col-12">
              <div className=" card m-md-5">
                <img
                  className="cardImg img-responsive"
                  src={img3}
                  height="200"
                />
                <div className="carousel-caption2">
                  <h5 className="textt">Interview Coaching</h5>
                </div>
              </div>
            </div>
            <div className=" mt-3 col-md-4 col-12">
              <div className=" card m-md-5">
                <img
                  className="cardImg img-responsive"
                  src={img2}
                  height="200"
                />
                <div className="carousel-caption2">
                  <h5 className="textt "> Career Coaching Path</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row mt-3">
            <div
              id="DescCont"
              className=" d-flex flex-column text-wrap bg-none "
            >
              <div className="fs-2 " id="Title">
                Why Join Us?
              </div>
              <div className="fs-6 " id="DescProv">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis numquam similique eum repellat nesciunt beatae error
                quod, tenetur aspernatur a cumque, non maxime sit nulla
                excepturi pariatur inventore illum placeat.
              </div>
              <div>
                <div id="checklist" className="d-flex flex-column mt-3 ">
                  <div>
                    <BsCheck color="#cd8930" fill="#cd8930" className="fs-3" />
                    {"    "}
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>

                  <div className="mt-3">
                    <BsCheck color="#cd8930" fill="#cd8930" className="fs-3" />
                    {"    "}
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>

                  <div className="mt-3">
                    <BsCheck ccolor="#cd8930" fill="#cd8930" className="fs-3" />
                    {"    "}
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center w-100">
                    <div className="mt-4">
                      <span id="apps" className=" ">
                        Download Trainery and Start Training
                      </span>
                    </div>
                    <div className="my-3 d-flex flex-row ">
                      <a href="#">
                        <img className="mx-1" src={google} height="40" />
                      </a>
                      <a href="#">
                        <img className="mx-1" src={apple} height="40" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Experienceimg"
              className="d-flex flex-column d-none d-md-flex ms-5 "
            >
              <img src={img4} />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div id="opportunities" className="fs-2">
              Over 1000 Opportunities Just For Students
            </div>
          </div>
          <div className="d-flex flex-row" id="CoachCont">
            <div className="fs-6 mb-1  " id="DescProv">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis numquam similique eum repellat nesciunt beatae error
              quod, tenetur aspernatur a cumque, non maxime sit nulla excepturi
              pariatur inventore illum placeat.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
// d
export default Landing;
