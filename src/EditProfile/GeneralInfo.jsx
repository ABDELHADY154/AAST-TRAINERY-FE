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
import Footer from "../Components/Common/Footer2";
class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <div className='container '>
          <h1 className='editTitle text-center'>Edit Profile</h1>
          <h3 className='categoryTitle d-flex justify-content-start mb-3'>Categories</h3>
          <ul className='nav nav-tabs infoTabsUl' id='myTab' role='tablist'>
            <li className='nav-item infoTabs' role='presentation'>
              <button
                className='nav-link active tabBtn '
                id='General-tab'
                data-bs-toggle='tab'
                data-bs-target='#General'
                type='button'
                role='tab'
                aria-controls='General'
                aria-selected='true'
              >
                General
              </button>
            </li>
            <li className='nav-item infoTabs' role='presentation'>
              <button
                className='nav-link tabBtn'
                id='Education-tab'
                data-bs-toggle='tab'
                data-bs-target='#Education'
                type='button'
                role='tab'
                aria-controls='Education'
                aria-selected='false'
              >
                Education
              </button>
            </li>
            <li class='nav-item infoTabs' role='presentation'>
              <button
                className='nav-link tabBtn'
                id='Experiance-tab'
                data-bs-toggle='tab'
                data-bs-target='#Experiance'
                type='button'
                role='tab'
                aria-controls='Experiance'
                aria-selected='false'
              >
                Experiance
              </button>
            </li>
            <li className='nav-item infoTabs' role='presentation'>
              <button
                className='nav-link tabBtn'
                id='Courses-tab'
                data-bs-toggle='tab'
                data-bs-target='#Courses'
                type='button'
                role='tab'
                aria-controls='Courses'
                aria-selected='false'
              >
                Courses
              </button>
            </li>
            <li className='nav-item infoTabs' role='presentation'>
              <button
                className='nav-link tabBtn'
                id='Skills-tab'
                data-bs-toggle='tab'
                data-bs-target='#Skills'
                type='button'
                role='tab'
                aria-controls='conSkillstact'
                aria-selected='false'
              >
                Skills
              </button>
            </li>
            <li class='nav-item infoTabs' role='presentation'>
              <a className='nav-link tabBtn' id='Accounts-tab' href='/home'>
                Accounts
              </a>
            </li>
          </ul>
          {/* <div className='tab-content' id='myTabContent'>
            <div
              className='tab-pane fade show active mt-3'
              id='General'
              role='tabpanel'
              aria-labelledby='General-tab'
            >
              <GeneralForm />
            </div>
            <div
              className='tab-pane fade mt-3'
              id='Education'
              role='tabpanel'
              aria-labelledby='Education-tab'
            >
              <EducationForm />
            </div>
          </div>*/}
        </div>
        <Footer />
      </div>
    );
  }
}
export default GeneralInfo;
