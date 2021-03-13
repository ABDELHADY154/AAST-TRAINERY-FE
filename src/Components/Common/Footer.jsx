/** @format */

import React, { Component } from "react";
import logo from "../../Components/assests/icons/White-Logo.png";
import { Link } from "react-router-dom";

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
      <div className="Container flex-row">
        <footer className="footer-area footer--light m-auto prim">
          <div className="footer-big">
            <div className="container pt-4">
              <div className="row ml-4">
                <div className="col-md-5 col-sm-4 ">
                  <div className="footer-widget d-flex justify-content-center text-align-center ">
                    <div className="mt-2 flex-column">
                      <img
                        id="footlogo"
                        // className="navbar-brand img-rounded m-auto "
                        src={logo}
                        width="40%"
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
                    <div id="About" className="footer-menu flex-column ">
                      <h4 className="footer-widget-title pt-3">About</h4>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>

                        <li>
                          <a href="#">
                            <FaInstagram
                              color="#ffffff"
                              fill="#ffffff"
                              id="instagram"
                            />
                          </a>
                          <a href="#">
                            <FaFacebookF
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                          <a href="#">
                            <FaLinkedinIn
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                          <a href="#">
                            <FaYoutube
                              color="#ffffff"
                              fill="#ffffff"
                              className="m-2"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-12">
                  <div className="footer-widget d-flex">
                    <div id="About" className="footer-menu flex-column ">
                      <h4 className="footer-widget-title pt-3">Account</h4>
                      <ul>
                        <li>
                          <Link to="/Register">Sign Up</Link>
                        </li>
                        <li>
                          <Link to="/Login">Sign In</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="About" className="d-flex flex-row ">
                <p className="">© 2021 AAST Trainery. All Rights Reserved.</p>
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
