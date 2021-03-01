import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { axios } from "../Api/axios";
import Skills from "./Skills";
import Education from "./Education";
class GeneralInfo extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Genaeral Info</h1>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <Link
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              //   renderAs="button"
              //   to="/Skills"
            >
              Active
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              //   renderAs="button"
              //   to="/Education"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show "
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Skills />
          </div>
          <div
            class="tab-pane fade "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Education />
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    );
  }
}
export default GeneralInfo;
