import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/Profiless.css";
import img1 from "../../Components/assests/imgs/rec2.png";
import img2 from "../../Components/assests/imgs/cib.png";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import { FiPhone, FiSearch, FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineGlobal, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
export default class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
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
      <div className="profileMT">
        <div className="container ">
          <div className="row ">
            <img
              src={img1}
              className="  ms-3 me-2 col-2 rounded-circle companyImg"
            />
            <div className="col-8 mt-3 ">
              <div className=" w-10">
                {/* <div className=" col-md-12 col-12  col-xs-6  mt-3 "> */}
                <h4 className="companyName ">Qowwa Inc.</h4>
                <p className="">Computer Software</p>
              </div>
            </div>
            <div className="mt-2">
              <h5 className="companyTitel">Company Profile</h5>
              <p className="companyDesc">
                Qowwa's main focus is to empower local businesses that move the
                Egyptian community forward by providing them with custom web,
                mobile, and e-commerce application development. Qowwa’s second
                focus is to provide website design, development, and management
                services to local and international clients.
              </p>
            </div>
            <div className="mt-1">
              <h5 className="companyTitel">Company Info</h5>
              <div className="row mt-3">
                <p className="col-lg-2 col-2 col-md-4 col-sm-12 col-xs-12 companyInfoTxt">
                  <AiOutlinePhone
                    id="iconss"
                    className="me-2 "
                    size="20"
                    style={{ color: "#cd8930 " }}
                  />
                  (316) 555-0116
                </p>
                <p className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt">
                  <GoLocation
                    id="iconss"
                    className="me-2 "
                    size="20"
                    style={{ color: "#cd8930 " }}
                  />
                  Alexandria, Egypt
                </p>
                <p className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt">
                  <AiOutlineGlobal
                    id="iconss"
                    className="me-2 "
                    size="20"
                    style={{ color: "#cd8930 ", size: 10 }}
                  />
                  http://qowwa.net
                </p>
                <p className="col-lg-4 col-4 col-md-10 col-sm-12 col-xs-12 companyInfoTxt text-break text-wrap">
                  <AiOutlineMail
                    id="iconss"
                    className="me-2 "
                    color="#CD8930"
                    size="21"
                    style={{ color: "#cd8930 ", size: 10 }}
                  />
                  georgia.young@example.com
                </p>
              </div>
              <div className="">
                <h4 className="companyTitel" style={{ marginLeft: -2 }}>
                  Opened Internship
                </h4>
                <p className="companyDesc">
                  There are currently no open Internship at Qowwa Inc.
                </p>
              </div>
              <div>
                <h4 className="companyTitel">Ended Internship</h4>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row">
                          <img
                            className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                            id="imgicon"
                            src={img2}
                          />
                          <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                            UI/UX Designer
                          </div>
                          <div
                            id="goldtab"
                            className=" fs-6 mt-2 col-2 col-md-1"
                          >
                            Paid
                          </div>
                        </div>
                        <div id="job" className="d-flex flex-row ms-5 ">
                          <div className="d-flex ms-3 flex-column">CIB</div>
                          <div id="gold" className="  d-flex ms-2 flex-column">
                            Finance
                          </div>
                        </div>
                        <p className="card-text mt-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam repudiandae aut possimus. Repellendus at
                          nostrum iste doloremque. Ea omnis ipsam, eum nam
                          tempore culpa illum consequuntur quis nobis adipisci
                          et?
                        </p>

                        <div className="d-flex flex-row flex-wrap ">
                          <div
                            className="d-flex flex-column  col-4 col-md-1 me-4 "
                            id="firsttagipad"
                          >
                            <a href="#" className="tagsipad" id="tags">
                              Finance
                            </a>
                          </div>
                          <div
                            className="d-flex flex-column col-4 col-md-1 me-4 "
                            id="firsttagipad"
                          >
                            <a href="#" className="tagsipad  " id="tags">
                              Banking
                            </a>
                          </div>
                          <div
                            id="drop"
                            className="d-flex flex-column col-md-3  
                             justify-space-between"
                          >
                            <p>Deadline {"        "}11 Dec 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
