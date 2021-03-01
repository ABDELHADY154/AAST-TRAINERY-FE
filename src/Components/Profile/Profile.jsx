/** @format */

import React, { Component } from "react";
import profileimg from "../../Components/assests/imgs/pp.jpg";
import "../../layout/Profile.css";

// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex flex-row flex-wrap">
            <img
              className="d-flex flex-column col-2 col-md-1 me-3"
              id="profilepp"
              src={profileimg}
            ></img>
            <div className="d-flex flex-column col-7 col-md-4 mt-1">
              <div className="d-flex flex-row flex-wrap">YASMIN SABRY</div>
              <div className="d-flex flex-row flex-wrap">
                Arab Academy for Science and Technology - CMT
              </div>
              <div className="d-flex flex-row flex-wrap ">
                Business Information System <span>9.0</span>
              </div>
              <div className="d-flex flex-row flex-wrap">2017 - 2021</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
