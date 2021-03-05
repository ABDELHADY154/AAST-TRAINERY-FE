import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { axios } from "../../Api/axios";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import ExperianceForm from "./ExperianceForm";
import CoursesForm from "./CoursesForm";
import AccountsForm from "./AccountsForm";
import GeneralForm from "./GeneralForm";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <h1 className="editTitle text-center">Edit Profile</h1>
          <h3 className="categoryTitle d-flex justify-content-start mb-3">
            Categories
          </h3>
          <ul className="nav nav-tabs infoTabsUl" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link active tabBtn "
                id="General-tab"
                href="/Profile/General"
              >
                General
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Education-tab"
                href="/Profile/Education"
              >
                Education
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Experiance-tab"
                href="/Profile/Experiance"
              >
                Experiance
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Courses-tab"
                href="/Profile/Courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Skills-tab"
                href="/Profile/Skills"
              >
                Skills
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Accounts-tab"
                href="/Profile/Accounts"
              >
                Accounts
              </a>
            </li>
          </ul>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default GeneralInfo;
