import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityNavbar from "./Navbar";
import img2 from "../../Components/assests/imgs/cib.png";
import { BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import { BsBookmark } from "react-icons/bs";

import "../../layout/EditInfo.css";
class Accepted extends Component {
  render() {
    return (
      <div>
        <Link to="/Profile/Activity/Accepted" />
        <div className="container">
          <ActivityNavbar setactive={"Accepted"} />

          <div className="card mb-3 mt-5">
            <div className="card-body">
              <div className="d-flex flex-row flex-wrap">
                {" "}
                <img
                  className=" mt-0 d-flex flex-column col-md-4 col-2 me-3"
                  id="imgicon"
                  src={img2}
                />
                <p id="" className="card-title fs-5 mt-2">
                  Dr. Rehab ElBadrawy
                </p>
              </div>
              <hr />
              <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                  id="imgicon"
                  src={img2}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  UI/UX Designer
                </div>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  Paid
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="d-flex ms-3 flex-column">CIB</div>
                <div id="gold" className="d-flex ms-2 flex-column">
                  Finance
                </div>
              </div>
              <p className="card-text mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                repudiandae aut possimus. Repellendus at nostrum iste
                doloremque. Ea omnis ipsam, eum nam tempore culpa illum
                consequuntur quis nobis adipisci et?
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
                  className="d-flex flex-column col-4  col-md-1 me-4 mb-1 "
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
                <div className=" mb-4 d-flex flex-row col-12 col-md-2 justify-content-start me-1"></div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {/* <div className="col-md-4"></div> */}

                  <button className="applyBtn px-1 py-0 col-md-3 col-8 mb-5">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mt-3">
            <div className="card-body">
              <div className="d-flex flex-row flex-wrap">
                {" "}
                <img
                  className=" mt-0 d-flex flex-column col-md-4 col-2 me-3"
                  id="imgicon"
                  src={img2}
                />
                <p id="" className="card-title fs-5 mt-2">
                  Dr. Rehab ElBadrawy
                </p>
              </div>
              <hr />
              <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                  id="imgicon"
                  src={img2}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  UI/UX Designer
                </div>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  Paid
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="d-flex ms-3 flex-column">CIB</div>
                <div id="gold" className="d-flex ms-2 flex-column">
                  Finance
                </div>
              </div>
              <p className="card-text mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                repudiandae aut possimus. Repellendus at nostrum iste
                doloremque. Ea omnis ipsam, eum nam tempore culpa illum
                consequuntur quis nobis adipisci et?
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
                  className="d-flex flex-column col-4  col-md-1 me-4 mb-1 "
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
                <div className=" mb-4 d-flex flex-row col-12 col-md-2 justify-content-start me-1"></div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {/* <div className="col-md-4"></div> */}

                  <button className="applyBtn px-1 py-0 col-md-3 col-8 mb-5">
                    Review
                  </button>
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
export default Accepted;
