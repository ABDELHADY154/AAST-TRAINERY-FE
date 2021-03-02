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

class GeneralInfo extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Edit Profile</h1>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="General"
            role="tabpanel"
            aria-labelledby="General-tab"
          >
            <GeneralForm />
          </div>
          <div
            class="tab-pane fade"
            id="Education"
            role="tabpanel"
            aria-labelledby="Education-tab"
          >
            <EducationForm />
          </div>
          <div
            class="tab-pane fade"
            id="Experiance"
            role="tabpanel"
            aria-labelledby="Experiance-tab"
          >
            <ExperianceForm />
          </div>
          <div
            class="tab-pane fade"
            id="Courses"
            role="tabpanel"
            aria-labelledby="Courses-tab"
          >
            <CoursesForm />
          </div>
          <div
            class="tab-pane fade"
            id="Skills"
            role="tabpanel"
            aria-labelledby="Skills-tab"
          >
            <SkillsForm />
          </div>

          <div
            class="tab-pane fade"
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
