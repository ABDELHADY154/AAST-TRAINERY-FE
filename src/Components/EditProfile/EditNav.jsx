import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import EducationForm from "./EducationForm";
import ExperianceForm from "./ExperienceForm";

class EditNav extends Component {
  setactive(val) {
    this.setState({ test: val });
  }

  render() {
    return (
      <div>
        <h1 className='editTitle text-center'>Edit Profile</h1>
        <h3 className='categoryTitle d-flex justify-content-start mb-3'>Categories</h3>
        <ul className='nav  infoTabsUl nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "General"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='General-tab'
              href='/Profile/General'
            >
              General
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "Education"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='Education-tab'
              href='/Profile/Education'
            >
              Education
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "experience"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='Experiance-tab'
              href='/Profile/Experiance'
            >
              Experiance
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "Courses"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='Courses-tab'
              href='/Profile/Courses'
            >
              Courses
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "Skills"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='Skills-tab'
              href='/Profile/Skills'
            >
              Skills
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a
              className={
                this.props && this.props.setactive === "Accounts"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id='Accounts-tab'
              href='/Profile/Accounts'
            >
              Accounts
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default EditNav;
