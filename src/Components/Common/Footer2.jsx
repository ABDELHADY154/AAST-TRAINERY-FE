import React, { Component } from "react";
import logo from "../../Components/assests/icons/White-Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import ScrollTop from "react-scrolltop-button";
import "../../layout/Footer.css";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      // fixed-bottom

      <div
        id="footer"
        className="Container
        
       flex-row "
      >
        <footer className="footer-area footer    footer--light m-auto prim">
          <div className="footer-big">
            <div className="container pt-4 ">
              <div className="row ml-4">
                <div className=" col-md-5 col-12 d-flex flex-row loremipad">
                  <div className="footer-widget ">
                    <div className="mt-2 flex-row ">
                      <img
                        id="footlogo"
                        src={logo}
                        width="40%"
                        alt="AAST Trainery AAST Trainery Logo"
                      ></img>
                      <p className="mt-2 ">
                        AAST Trainery was established in september 2020 by AAST
                        undergraduate students. Your Career is Our Business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-12 ">
                  <div className="footer-widget d-flex ">
                    <div id="About" className="footer-menu flex-column mt-3 ">
                      <ul>
                        <li>
                          <Link to="/Explore">Explore</Link>
                        </li>
                        <li>
                          <Link to="/CareerCoaching">Career Coaching</Link>
                        </li>
                        <li>
                          <Link to="/Profile/Activity/Applied">Activity</Link>
                        </li>
                        <li>
                          <Link to="/helpCenter">Help Center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-12">
                  <div className="footer-widget d-flex">
                    <div id="About" className="footer-menu flex-column mt-3 ">
                      <ul>
                        <li>
                          <Link to="/Profile">Profile</Link>
                        </li>
                        <li>
                          <Link to="/AboutUs">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contactUs" className="pb-4">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/TermsandConditions">
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="About" className="d-flex flex-row flex-wrap ">
                <p className=" col-md-10 col-12">
                  © 2021 AAST Trainery. All Rights Reserved.
                </p>

                <div className="col-md-2 col-12 ">
                  <li>
                    <a
                      href="https://www.instagram.com/trainerys/"
                      alt="AAST Trainery instagram page link"
                      target="_blank"
                    >
                      <FaInstagram
                        alt="AAST Trainery instagram page link logo"
                        color="#ffffff"
                        fill="#ffffff"
                        id="instagram"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/trainerys/"
                      alt="AAST Trainery facebook page link"
                      target="_blank"
                    >
                      <FaFacebookF
                        alt="AAST Trainery facebook page link logo"
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                      />
                    </a>
                    {/* <a
                      href="#"
                      alt="AAST Trainery linkedin page link"
                      target="_blank"
                    >
                      <FaLinkedinIn
                        alt="AAST Trainery linkedin page link logo"
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                      />
                    </a>
                    <a href="#" alt="youtube page link" target="_blank">
                      <FaYoutube
                        alt="youtube page link logo"
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                      />
                    </a> */}
                  </li>
                </div>
              </div>
            </div>
          </div>
          <ScrollTop
            alt="AAST Trainery Scroll to top "
            id="ST"
            text={<BsChevronUp id="st" fontSize="20px" fill="#cd8930" />}
            style={{
              backgroundColor: "transparent",
              borderRadius: "5px",

              borderColor: "#cd8930",
            }}
            icon={<BsChevronUp id="st" fill="#cd8930" />}
          />
        </footer>
      </div>
    );
  }
}
