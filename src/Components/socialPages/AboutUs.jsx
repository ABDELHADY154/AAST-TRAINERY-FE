import React, { useState } from "react";
import { axios } from "../../Api/axios";

import "../../layout/socialPages.css";
import { Link, NavLink } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Footer2 from "../Common/Footer2";
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
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    await axios.get("/W/landingCount").then((res) => {
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
            overlay: (base) => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container">
            <div className="mt-5 mb-3">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis numquam similique eum repellat nesciunt beatae
                  error quod, tenetur aspernatur a cumque, non maxime sit nulla
                  excepturi pariatur inventore illum placeat. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Reiciendis numquam
                  similique eum repellat nesciunt beatae error quod, tenetur
                  aspernatur a cumque, non maxime sit nulla excepturi pariatur
                  inventore illum placeat.
                </p>
              </div>
              <div
                id="Experienceimg"
                className="d-flex flex-column  d-none d-md-flex ms-5 "
              >
                <img className="" src={img} />
              </div>
            </div>
            <div className="row mb-5 mt-5">
              <div className="col-12 col-sm-12 col-lg-6 col-md-6">
                <div className="col-12 mt-3 divBorder">
                  <h5>Explore Training Opportinities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend{" "}
                  </p>
                </div>
                <div className="col-12 mt-3 divBorder">
                  <h5>Explore Training Opportinities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-md-6">
                <div className="col-12 mt-3 divBorder">
                  <h5>Explore Training Opportinities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend{" "}
                  </p>
                </div>
                <div className="col-12 mt-3 divBorder">
                  <h5>Explore Training Opportinities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur dictumst nisi blandit ornare viverra eleifend{" "}
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

                <div className="NumTitle">CV Genarated</div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Porttitor quis vitae volutpat.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Porttitor quis vitae
                      volutpat.
                    </h6>
                  </div>
                  <div className="row ">
                    <p
                      className="d-flex  justify-content-center"
                      style={{ color: "#cd8930" }}
                    >
                      Trainery Team
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Footer2 />
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
            onChange={(isVisible) => {
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
