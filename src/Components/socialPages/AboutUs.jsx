import React, { useState } from "react";
import { axios } from "../../Api/axios";

import "../../layout/socialPages.css";
import { Link, NavLink } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Footer2 from "../Common/Footer2";
import Footer from "../Common/Footer";

import "../../layout/Home.css";
import "../../layout/Landing.css";

import img from "../assests/imgs/aboutus.png";
// import Ticker from "./Counter.jsx";
import { DepLoader, LogoesCarousel } from "../../loader";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      // FormLoading: true,
      students: 0,
      opportunities: 0,
      applied: 0,
      token: sessionStorage.getItem("token"),
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    await axios.get("/W/landingCount").then(res => {
      this.setState({
        // loading: true,
        students: res.data.response.data.students,
        opportunities: res.data.response.data.opportunities,
        applied: res.data.response.data.applied,
      });
    });
  }

  render() {
    console.log(this.state.students);
    return (
      <div>
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          styles={{
            overlay: base => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container">
            <div className={this.state.token ? "mt-5 mb-3" : "pt-4 mb-3"}>
              <h1 className="text-center fs-3 fw-bold ">About Us</h1>
            </div>
            <div className="d-flex flex-row ">
              <div
                id="DescCont"
                className="d-flex flex-column text-wrap bg-none "
              >
                <h5 className="fw-bold" id="Title">
                  What make us diffrent
                </h5>
                <p className="" id="DescProv">
                  AAST Trainery is made by undergraduate students for
                  undergraduate students, <br />
                  so who's better in knowing what students look for during their
                  academics need than their colleagues?
                  <br /> We've conducted full-on analysis to be able to provide
                  the overlooked and underestimated services free of charge to
                  all eligible students to ensure that everyone is able to
                  unleash their full potential and grow along with us as we too
                  aim for constant growth with each step you take. <br />
                  Your career is our business.
                </p>
              </div>
              <div
                id="Experienceimg"
                className="d-flex flex-column  d-none d-md-flex ms-5 "
              >
                <img
                  alt="three images representing career coaching, undergraduate student internships and graduating."
                  src={img}
                />
              </div>
            </div>
            <div className="row mb-5 mt-5">
              <div className="col-12 col-sm-12 col-lg-6 col-md-6">
                <div className="col-12 mt-3 divBorder">
                  <h5>Explore Training Opportinities</h5>
                  <p>
                    AAST Trainery offers you a set collection of internship
                    opportunities for you to apply on and the sky is the limit
                    when it comes to the variety of the offered internships, so
                    don't worry you'll find opportunities that perfectly fit
                    your needs.
                  </p>
                </div>
                <div className="col-12 mt-3 divBorder">
                  <h5>Create Your Personal Profile</h5>
                  <p>
                    AAST Trainery enables you to create your profile freely from
                    adding your personal information, your profile picture all
                    the way to your educational information, experiences,
                    skills, and languages to unlock your full potential.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-md-6">
                <div className="col-12 mt-3 divBorder">
                  <h5>Book Career Coaching Sessions</h5>
                  <p>
                    AAST Trainery aims for your growth and skill development, so
                    we offer you a selection of career coaching session that
                    enable you to enhance your soft and technical skills along
                    with professional and well-known coaches that help you to be
                    prepared for the future labor market.
                  </p>
                </div>
                <div className="col-12 mt-3 divBorder">
                  <h5>Generate CVs and Portfolios</h5>
                  <p>
                    With just a click of a button you're able to choose and
                    create your personal CV and portfolio to match todays trends
                    in applying to opportunities in the market.
                  </p>
                </div>
              </div>{" "}
            </div>

            <div
              id="Num"
              className="d-flex flex-row flex-wrap mt-5 justify-content-between mb-5"
            >
              <div className="col-6 mt-2 col-md-3 d-flex justify-content-center text-center flex-column align-items-center">
                <Ticker
                  className="Numbers"
                  start={0}
                  end={this.state.opportunities}
                />

                <div className="NumTitle">Opportunities</div>
              </div>
              <div className="col-6 mt-2 col-md-3 d-flex justify-content-center text-center flex-column align-items-center">
                <Ticker
                  className="Numbers"
                  start={0}
                  end={this.state.students}
                />
                <div className="NumTitle">Students</div>
              </div>
              <div className="col-6 mt-2 col-md-3 d-flex justify-content-center text-center flex-column align-items-center">
                <Ticker
                  className="Numbers"
                  start={0}
                  end={this.state.applied}
                />

                <div className="NumTitle">Accepted</div>
              </div>{" "}
              <div className="col-6 mt-2 col-md-3 d-flex justify-content-center text-center flex-column align-items-center">
                <Ticker
                  className="Numbers"
                  start={0}
                  end={this.state.applied}
                />

                <div className="NumTitle">CVs Genarated</div>
              </div>
            </div>
          </div>

          <div
            id="footer"
            className="Container
        
       flex-row "
          >
            <footer
              className="footer-area footer  m-auto prim"
              style={{
                backgroundColor: "#F2F2F2",
              }}
            >
              <div className="pb-4">
                <div className="container pt-4 ">
                  <div className="row ">
                    <h6 className="lh-base d-flex justify-content-center  text-center ">
                      "Your Career is Our Business"
                    </h6>
                  </div>
                  <div className="row ">
                    <p
                      className="d-flex  justify-content-center"
                      style={{ color: "#cd8930" }}
                    >
                      AAST Trainery Team
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {this.state.token ? <Footer2 /> : <Footer />}
        </LoadingOverlay>
      </div>
    );
  }
}
export default AboutUs;

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};
