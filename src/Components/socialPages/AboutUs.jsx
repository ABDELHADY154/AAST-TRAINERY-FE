import React from "react";
import "../../layout/socialPages.css";
import { Link, NavLink } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Footer2 from "../Common/Footer2";
import "../../layout/Home.css";
import img from "../assests/imgs/aboutus.png";

import { HiOutlineMail } from "react-icons/hi";
import { MdSettingsPhone } from "react-icons/md";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      // FormLoading: true,
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
            <div className="mt-3">
              <h1 className="text-center fs-3 fw-bold">About Us</h1>
            </div>
            <div className="d-flex flex-row ">
              <div
                id="DescCont"
                className="d-flex flex-column text-wrap bg-none "
              >
                <h4 className="" id="Title">
                  We Provide The Best Experience
                </h4>
                <div className="fs-6 " id="DescProv">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reiciendis numquam similique eum repellat nesciunt beatae
                  error quod, tenetur aspernatur a cumque, non maxime sit nulla
                  excepturi pariatur inventore illum placeat. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Reiciendis numquam
                  similique eum repellat nesciunt beatae error quod, tenetur
                  aspernatur a cumque, non maxime sit nulla excepturi pariatur
                  inventore illum placeat.
                </div>
                {/* <div
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
                        />

                        <div className="NumTitle">Opportunities</div>
                      </div>
                      <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                        <Ticker
                          className="Numbers"
                          start={0}
                          end={this.state.students}
                        />

                        <div className="NumTitle">Students</div>
                      </div>
                      <div className="col-12 col-md-4 d-flex justify-content-center text-center flex-column align-items-center">
                        <Ticker
                          className="Numbers"
                          start={0}
                          end={this.state.applied}
                        />

                        <div className="NumTitle">Accepted</div>
                      </div>
                    </>
                  )}
                </div> */}
              </div>
              <div
                id="Experienceimg"
                className="d-flex flex-column d-none d-md-flex ms-5 "
              >
                <img className="" src={img} />
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
                    <h5 className="d-flex  justify-content-start ">
                      Check our help center to find the most asked questions
                    </h5>
                  </div>
                  <div className="row ">
                    <p className="d-flex col-9 col-md-8 col-lg-9 col-sm-9 justify-content-start ">
                      We understand y ou may have question that are not answered
                      in our FAQ, If you cannot find the answer to your question
                      please feel free to contact us
                    </p>
                    <div className="col-md-2 col-sm-0 col-0 col-lg-2 space "></div>
                    <div className=" col-3 col-md-2 col-sm-3 col-lg-1 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="col-12 col-md-12 col-sm-12 col-lg-12 btn FAQBtn"
                      >
                        FAQ
                      </button>
                    </div>
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
