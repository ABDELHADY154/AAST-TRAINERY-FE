import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class Skills extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

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
            <a className='nav-link tabBtn ' id='Courses-tab' href='/Profile/Courses'>
              Courses
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn active' id='Skills-tab' href='/Profile/Skills'>
              Skills
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Accounts-tab' href='/Profile/Accounts'>
              Accounts
            </a>
          </li>
        </ul>
        <div>
          <form class='row g-3 mb-3' onSubmit={this.handleSubmit}>
            <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputSkill' class='form-label editLabel '>
                Skills
              </label>
              <input
                type='text'
                className='form-control editInput '
                id='fullname'
                placeholder='Please enter your Skills '
              />
            </div>
            <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
              <select id='inputSkillYears' className='form-select editInput '>
                <option selected>Years of Experience ...</option>
                <option>...</option>
              </select>
            </div>
            <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
              <button type='submit' class='btn me-2 cancelBtn shadow-none'>
                Cancel
              </button>
              <button type='submit' class='btn doneBtn shadow-none'>
                Add
              </button>
            </div>
            {/* <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
          </form>
          <form class='row g-3 mb-3' onSubmit={this.handleSubmit}>
            <hr className='hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12' />
            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputRegNum' class='form-label editLabel'>
                Intrests
              </label>
              <input
                type='number'
                className='form-control editInput '
                id='RegNum'
                placeholder='Please enter your Intrests'
              />
            </div>

            <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
              <button type='submit' class='btn me-2 cancelBtn shadow-none'>
                Cancel
              </button>
              <button type='submit' class='btn doneBtn shadow-none'>
                Add
              </button>
            </div>
            {/* <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
          </form>
          <form class='row g-3 mb-3' onSubmit={this.handleSubmit}>
            <hr className='hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12' />

            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputRegNum' class='form-label editLabel'>
                Level
              </label>
              {/* <input
              type="number"
              className="form-control editInput "
              id="RegNum"
              placeholder="Please enter your Registration Number"
            /> */}
            </div>
            <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
              <button type='submit' class='btn me-2 cancelBtn shadow-none'>
                Cancel
              </button>
              <button type='submit' class='btn doneBtn shadow-none'>
                Add
              </button>
            </div>
            {/* <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
          </form>
        </div>{" "}
      </div>
    );
  }
}
export default Skills;
