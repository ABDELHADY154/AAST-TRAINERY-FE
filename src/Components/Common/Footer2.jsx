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
                        alt="AAST Trainery Logo"
                      ></img>
                      <p className="mt-2 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur dictumst nisi blandit ornare viverra
                        eleifend
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-12 ">
                  <div className="footer-widget d-flex ">
                    <div id="About" className="footer-menu flex-column mt-3 ">
                      <ul>
                        <li>
                          <a href="#">Explore</a>
                        </li>
                        <li>
                          <a href="#">Career Coaching</a>
                        </li>
                        <li>
                          <a href="#">Activity</a>
                        </li>
                        <li>
                          <a href="#">Help Center</a>
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
                          <a href="#">Profile</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#" className="pb-4">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pb-4">
                            Terms & Conditions
                          </a>
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
                    <a href="#">
                      <FaInstagram
                        color="#ffffff"
                        fill="#ffffff"
                        id="Socialmediafooticon"
                      />
                    </a>
                    <a href="#">
                      <FaFacebookF
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                        id="Socialmediafooticon"
                      />
                    </a>
                    <a href="#">
                      <FaLinkedinIn
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                        id="Socialmediafooticon"
                      />
                    </a>
                    <a href="#">
                      <FaYoutube
                        color="#ffffff"
                        fill="#ffffff"
                        className="m-2"
                        id="Socialmediafooticon"
                      />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <ScrollTop
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
