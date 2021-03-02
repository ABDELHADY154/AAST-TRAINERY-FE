import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { axios } from "../Api/axios";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import ExperianceForm from "./ExperianceForm";
import CoursesForm from "./CoursesForm";
import AccountsForm from "./AccountsForm";
import GeneralForm from "./GeneralForm";
import "../layout/EditInfo.css";
class GeneralInfo extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="editTitle">Edit Profile</h1>
        <h3 className="categoryTitle d-flex justify-content-start mb-3">
          Categories
        </h3>
        <ul className="nav nav-tabs infoTabsUl" id="myTab" role="tablist">
          <li className="nav-item infoTabs" role="presentation">
            <button
              className="nav-link active tabBtn "
              id="General-tab"
              data-bs-toggle="tab"
              data-bs-target="#General"
              type="button"
              role="tab"
              aria-controls="General"
              aria-selected="true"
            >
              General
            </button>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <button
              className="nav-link tabBtn"
              id="Education-tab"
              data-bs-toggle="tab"
              data-bs-target="#Education"
              type="button"
              role="tab"
              aria-controls="Education"
              aria-selected="false"
            >
              Education
            </button>
          </li>
          <li class="nav-item infoTabs" role="presentation">
            <button
              className="nav-link tabBtn"
              id="Experiance-tab"
              data-bs-toggle="tab"
              data-bs-target="#Experiance"
              type="button"
              role="tab"
              aria-controls="Experiance"
              aria-selected="false"
            >
              Experiance
            </button>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <button
              className="nav-link tabBtn"
              id="Courses-tab"
              data-bs-toggle="tab"
              data-bs-target="#Courses"
              type="button"
              role="tab"
              aria-controls="Courses"
              aria-selected="false"
            >
              Courses
            </button>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <button
              className="nav-link tabBtn"
              id="Skills-tab"
              data-bs-toggle="tab"
              data-bs-target="#Skills"
              type="button"
              role="tab"
              aria-controls="conSkillstact"
              aria-selected="false"
            >
              Skills
            </button>
          </li>

          <li class="nav-item infoTabs" role="presentation">
            <button
              className="nav-link tabBtn"
              id="Accounts-tab"
              data-bs-toggle="tab"
              data-bs-target="#Accounts"
              type="button"
              role="tab"
              aria-controls="Accounts"
              aria-selected="false"
            >
              Accounts
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active mt-3"
            id="General"
            role="tabpanel"
            aria-labelledby="General-tab"
          >
            <GeneralForm />
          </div>
          <div
            className="tab-pane fade mt-3"
            id="Education"
            role="tabpanel"
            aria-labelledby="Education-tab"
          >
            <EducationForm />
          </div>
          <div
            className="tab-pane fade mt-3 "
            id="Experiance"
            role="tabpanel"
            aria-labelledby="Experiance-tab"
          >
            <ExperianceForm />
          </div>
          <div
            className="tab-pane fade mt-3"
            id="Courses"
            role="tabpanel"
            aria-labelledby="Courses-tab"
          >
            <CoursesForm />
          </div>
          <div
            className="tab-pane fade mt-3"
            id="Skills"
            role="tabpanel"
            aria-labelledby="Skills-tab"
          >
            <SkillsForm />
          </div>

          <div
            className="tab-pane fade mt-3"
            id="Accounts"
            role="tabpanel"
            aria-labelledby="Accounts-tab"
          >
            <AccountsForm />
          </div>
        </div>
      </div>
    );
  }
}
export default GeneralInfo;
