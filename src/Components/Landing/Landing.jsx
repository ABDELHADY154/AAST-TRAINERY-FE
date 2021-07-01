import React from "react";
import { axios } from "../../Api/axios";
import { Redirect, Link } from "react-router-dom";
import Footer from "../Common/Footer";
import img from "./Assets/bg2.png";
import img1 from "./Assets/Rectangle1.png";
import img2 from "./Assets/Rectangle2.png";
import img3 from "./Assets/Rectangle3.png";
import img4 from "./Assets/2.png";
import google from "./Assets/google.png";
import apple from "./Assets/apple.png";
import { DepLoader, LogoesCarousel } from "../../loader";
import "../../layout/Landing.css";
import "../../layout/carousel.css";
import { BsCheck } from "react-icons/bs";
import CountUp from "react-countup";
import Ticker from "./Counter.jsx";

import { Carousel } from "./Carousel";
import { CarouselLogos } from "./CarouselLogos";

import { FaCheck } from "react-icons/fa";
import { Component } from "react";

class Landing extends React.Component {
  state = {
    loading: false,
  };
  componentWillMount() {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  }
  async componentDidMount() {
    await axios.get("/W/landingCount").then(data => {
      this.setState({
        loading: true,
        students: data.data.response.data.students,
        opportunities: data.data.response.data.opportunities,
        applied: data.data.response.data.applied,
      });
    });
  }

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/Home" />;
    }
    return (
      <div className="container-fluid">
        <Carousel />
        <div className="container">
          <div className="d-flex flex-row ">
            <div
              id="DescCont"
              className="d-flex flex-column text-wrap bg-none "
            >
              <h2 className="fs-2" id="Title">
                We Provide The Best Experience
              </h2>
              <div className="fs-6 " id="DescProv">
                You don't have to be experienced in order to land internship
                opportunities whether they were online internships or offline
                internships. With Trainery, you can easily get on job training
                as an undergraduate without any fear of lacking soft skills.
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
                      <Ticker
                        className="Numbers"
                        start={0}
                        end={this.state.opportunities}
                        alt={this.state.opportunities}
                      />

                      <div className="NumTitle">Opportunities</div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                      <Ticker
                        className="Numbers"
                        start={0}
                        end={this.state.students}
                        alt={this.state.students}
                      />

                      <div className="NumTitle">Students</div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                      <Ticker
                        className="Numbers"
                        start={0}
                        end={this.state.applied}
                        alt={this.state.applied}
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
              <img
                alt="three people looking at a laptop as a form of career internship for undergraduates"
                src={img}
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div id="Career" className="fs-2">
              Career Coaching Guidance
            </div>
          </div>
          <div className="d-flex flex-row" id="CoachCont">
            <div className="fs-6 " id="DescProv">
              If you think you don't have what it takes to know what goes on in
              the labor market regarding future jobs just because you're a
              university student them let us change your mind. We offer various
              career coaching sessions that enhance your technical skills and
              give you the boost of confidence needed to be more aware of your
              career path, alongside step by step with professioinal career
              coaches.
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap  " id="CoachCont">
            <div className=" mt-3 col-md-4 col-12">
              <div className="card m-md-5" id="bd">
                <img
                  alt="two women one is taking notes for CV template coaching guidance"
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
              <div id="bd" className=" card m-md-5">
                <img
                  alt="two women sitting and talking in an interview guidance career coaching session"
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
              <div id="bd" className=" card m-md-5">
                <img
                  alt="a student standing holding a book thinking about internship opportunities"
                  className="cardImg img-responsive"
                  src={img2}
                  height="200"
                />
                <div className="carousel-caption2">
                  <h5 className="textt ">Career Coaching Path</h5>
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
                Trainery is a platform made by university students for
                university students, so we know what AAST students need the most
                to excel through-out their college years.
              </div>
              <div>
                <div id="checklist" className="d-flex flex-column mt-3 ">
                  <div>
                    <BsCheck
                      alt="bullet 1"
                      color="#cd8930"
                      fill="#cd8930"
                      className="fs-3"
                    />
                    <span>
                      Explore University internships opportunities for students{" "}
                    </span>
                  </div>

                  <div className="mt-3">
                    <BsCheck
                      alt="bullet 2"
                      color="#cd8930"
                      fill="#cd8930"
                      className="fs-3"
                    />
                    <span>
                      Students have the ability to make CVs and Portfolios with
                      minimal to zero effort
                    </span>
                  </div>

                  <div className="mt-3">
                    <BsCheck
                      alt="bullet 3"
                      ccolor="#cd8930"
                      fill="#cd8930"
                      className="fs-3"
                    />
                    <span>
                      The platforms are easy to browse through just like using
                      AAST portal
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center w-100">
                    <div className="mt-4">
                      <span id="apps" className=" ">
                        Download Trainery and Start Training
                      </span>
                    </div>
                    <div className="my-3 d-flex flex-row flex-wrap">
                      <a href="#">
                        <img
                          alt="google play store logo and download Trainery app link"
                          className="mx-1"
                          src={google}
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <img
                          alt="apple app store logo and download Trainery app link"
                          className="mx-1"
                          src={apple}
                          height="40"
                        />
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
              <img
                src={img4}
                alt="an undergraduate student holding stacked books with a backpack on her shoulder for CV portfolio career coaching"
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div id="opportunities" className="fs-2">
              Over 1000 Opportunities Just For Students
            </div>
          </div>
          <div className="d-flex flex-row" id="CoachCont">
            <div className="fs-6 mb-1  " id="DescProv">
              We got all the opportunities you might need here with the help of
              the below companies in order to give you the chance to get your
              training and enhance your skills with us without the burden of
              having to go through a long and routine-filled process.
            </div>
          </div>
        </div>
        <div className="container">
          <CarouselLogos />

          <div className="mb-4 mt-5 d-flex justify-content-center">
            <button className="d-flex justify-content-center contactBtn col-md-2 col-4 col-lg-1 col-sm-4 text-center  py-1">
              <Link className="" to="/contactus">
                <span>Contact</span>
              </Link>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Landing;
