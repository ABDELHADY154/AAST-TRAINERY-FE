import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/Profiless.css";
import img from "../../Components/assests/imgs/rec2.png";
import img2 from "../../Components/assests/imgs/cib.png";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import { FiPhone, FiSearch, FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineGlobal, AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

export default class advisorProfile extends Component {
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
      <div>
        <div className="container ">
          <div className="row ">
            <img
              src={img}
              className="ms-3 me-2 col-3 rounded-circle companyImg"
            />
            <div className="col-6  mt-3 ">
              <h4 className="companyName ">Dr. Rehab Elbadrawy</h4>
              <p className="">BIS Training advisor</p>
            </div>
            <div className="mt-4">
              <h5 className="companyTitel">Advisor Profile</h5>
              <p className="companyDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                malesuada molestie tempor ornare condimentum mi, dictum. Ut
                lobortis nulla aliquet enim, fusce vitae. Pellentesque molestie
                metus nisi in condimentum id. Quam donec eros pellentesque
                fringilla. Facilisi sem pellentesque dui quis consectetur eu.
                Consequat elit etiam ultricies morbi leo hac id mauris quisque.
                Felis habitant neque tellus risus eu non urna dui.
              </p>
            </div>
            <div className="mt-1">
              <h5 className="companyTitel">Advisor Info</h5>
              <div className="row mt-3">
                <p className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt">
                  <AiOutlineMail
                    className="me-2 "
                    id="iconss"
                    size="21"
                    style={{ color: "#cd8930 " }}
                  />
                  georgia.young@example.com
                </p>
                <p
                  className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt"
                  style={{ color: "#1E4274" }}
                >
                  <FiUsers
                    className="me-2 "
                    color="#CD8930"
                    size="20"
                    style={{ color: "#cd8930 " }}
                  />
                  AAST - CMT
                </p>
                <p
                  className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt"
                  style={{ color: "#1E4274" }}
                >
                  <FiUsers
                    className="me-2 "
                    color="#CD8930"
                    size="20"
                    style={{ color: "#cd8930 ", size: 10 }}
                  />
                  BIS Department
                </p>
              </div>
              <div>
                <h4 className="companyTitel">Published Internship</h4>
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
                            className="d-flex flex-column col-4  col-md-1 me-4 "
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
                          <div className="  d-flex flex-row col-12 col-md-2 justify-content-start me-1">
                            <BsArrowUpRight
                              className="me-2"
                              color="#cd8930"
                              fill="#cd8930"
                            />
                            <p id="gold">Promoted</p>
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
