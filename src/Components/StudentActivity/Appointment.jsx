import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityNavbar from "./Navbar";
import rec3 from "../../Components/assests/imgs/rec3.png";
import { BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import { BsBookmark } from "react-icons/bs";

import "../../layout/EditInfo.css";
class Appointment extends Component {
  render() {
    return (
      <div>
        <Link to="/Profile/Activity/Appointment" />
        <div className="container">
          <ActivityNavbar setactive={"Appointment"} />
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={rec3} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Cv Writing</h5>
                  <p class="card-text">Date Booked</p>
                  <p class="card-text">Time Booked</p>
                  <p class="card-text">
                    <small id="gold">Resend this email</small>
                  </p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  <button className="applyBtn px-1 py-0 col-md-3 col-8 me-2">
                    Contact
                  </button>
                  <button className="applyBtn px-1 py-0 col-md-3 col-8">
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
export default Appointment;
