import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class CoursesForm extends Component {
  render() {
    return (
      <div className='container '>
        <h1 className='editTitle text-center'>Edit Profile</h1>
        <h3 className='categoryTitle d-flex justify-content-start mb-3'>Categories</h3>
        <ul className='nav  infoTabsUl nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link  tabBtn  ' id='General-tab' href='/Profile/General'>
              General
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className='nav-link  tabBtn  '
              id='Education-tab'
              href='/Profile/Education'
            >
              Education
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a
              className='nav-link tabBtn '
              id='Experiance-tab'
              href='/Profile/Experiance'
            >
              Experiance
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className='nav-link tabBtn active'
              id='Courses-tab'
              href='/Profile/Courses'
            >
              Courses
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Skills-tab' href='/Profile/Skills'>
              Skills
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Accounts-tab' href='/Profile/Accounts'>
              Accounts
            </a>
          </li>
        </ul>
        <form class='row g-3 mb-3'>
          {/* code goes here  */} <p>Courses</p>
        </form>
      </div>
    );
  }
}
export default CoursesForm;
