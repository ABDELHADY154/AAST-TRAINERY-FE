import React from "react";
import "../../layout/socialPages.css";
import { Link, NavLink } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Footer2 from "../Common/Footer2";
import "../../layout/Home.css";
// import "../../layout/Sign.css";

import { HiOutlineMail } from "react-icons/hi";
import { MdSettingsPhone } from "react-icons/md";

class contactUs extends React.Component {
  render() {
    return (
      <div>
        {/* <LoadingOverlay
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
        > */}
        <div className="container mb-5">
          <div className="mt-3">
            <h1 className="text-center fs-3 fw-bold">Contact Us</h1>
            <p className="text-center">
              Any questions or remarks? Just send us a message!
            </p>
          </div>
          <div className="row ">
            <div className="d-flex flex-column-reverse col-12 col-lg-7 col-md-12 col-sm-12">
              <form action="" className="mb-5">
                <div className="d-flex flex-column col-11 mb-3">
                  <label htmlFor="">Email</label>
                  <input type="text" className="form-control contactInput" />
                </div>
                <div class="d-flex flex-column col-11 mb-3">
                  {/* <label for="">Works with selects</label> */}

                  <select
                    type="text"
                    className="form-control  contactSelect "
                    id="departs"
                  >
                    <option selected>What can we help you with</option>
                    <option value="1">Account settings</option>
                    <option value="2">Cannot access account </option>
                    <option value="3">Other</option>
                  </select>
                </div>
                <div class="d-flex flex-column col-11 mb-3">
                  <label for="">Comment</label>
                  <textarea
                    className="form-control contactInput"
                    placeholder="Leave a comment here"
                    // id="floatingTextarea"
                  ></textarea>
                </div>
                <div className="d-flex  mb-3">
                  <div className="col-11 d-flex justify-content-end">
                    <button
                      // SUBMIT FUNCTION!!!!
                      type="submit"
                      className="col-2 btn applyBtn d-flex flex-row justify-content-center"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="container d-flex   col-11 col-lg-5 col-md-11 col-sm-10 reachUs rounded mb-5 mt-2 text-center">
              <div className="align-item-center align-self-center justify-content-center m-auto">
                <h1 className="text-center fs-4 fw-bold text-white mb-3">
                  Reach Us
                </h1>
                <div className="d-flex flex-column text-center align-items-start ">
                  <div className="d-flex flex-row justify-content-center text-center">
                    <HiOutlineMail
                      fill="white"
                      color="white"
                      className="me-2 icon"
                    />
                    <h6
                      className="text-center text-white fw-lighter"
                      id="reachData"
                    >
                      {/* PUT MAIL LINK */}
                      aast-trainery@gmail.com
                    </h6>
                  </div>
                  <div className="d-flex flex-row justify-content-center ">
                    <MdSettingsPhone
                      fill="white"
                      color="white"
                      className="me-2 "
                      size="18"
                    />
                    <h6
                      className="text-center text-white fw-lighter"
                      id="reachData"
                    >
                      (480) 555-0103
                    </h6>
                  </div>
                  {/* PUT FB AND INSTA LINKS */}
                  <div className="d-flex flex-row justify-content-center ">
                    <HiOutlineMail
                      fill="white"
                      color="white"
                      className="me-2 icon"
                    />
                    <h6
                      className="text-center text-white fw-lighter"
                      id="reachData"
                    >
                      aast-trainery@gmail.com
                    </h6>
                  </div>
                  <div className="d-flex flex-row justify-content-center ">
                    <HiOutlineMail
                      fill="white"
                      color="white"
                      className="me-2 icon"
                    />
                    <h6
                      className="text-center text-white fw-lighter"
                      id="reachData"
                    >
                      aast-trainery@gmail.com
                    </h6>
                  </div>
                </div>
              </div>
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
                  <h5 className="d-flex col-9 col-md-8 col-lg-9 col-sm-9 justify-content-start ">
                    Check our help center to find the most asked questions
                  </h5>
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
        {/* </LoadingOverlay> */}
      </div>
    );
  }
}
export default contactUs;
