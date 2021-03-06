import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import ReactDOM from "react-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";

// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";

class Skills extends Component {
  state = {
    tags: [],
  };
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  tagsHandler = (e) => {
    this.setState({ tags: e });
  };

  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    console.log(this.state.tags);
    return (
      <div>
        {" "}
        <div className="container ">
          <h1 className="editTitle text-center">Edit Profile</h1>
          <h3 className="categoryTitle d-flex justify-content-start mb-3">
            Categories
          </h3>
          <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  "
                id="General-tab"
                href="/Profile/General"
              >
                General
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  "
                id="Education-tab"
                href="/Profile/Education"
              >
                Education
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn "
                id="Experiance-tab"
                href="/Profile/Experiance"
              >
                Experiance
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn "
                id="Courses-tab"
                href="/Profile/Courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn active"
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
          <div>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputSkill" className="form-label editLabel ">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control editInput "
                  id="fullname"
                  placeholder="Please enter your Skills "
                />
              </div>
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 ">
                <select id="inputSkillYears" className="form-select editInput ">
                  <option selected>Years of Experience ...</option>
                  <option>...</option>
                </select>
                <label for="inputLevel" className="form-label editLabel mt-2">
                  Level
                </label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor="#F2A23A"
                />
              </div>

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none">
                  Update
                </button>
              </div>
            </form>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <hr className="hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12" />
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputRegNum" className="form-label editLabel">
                  Intrests
                </label>
                {/* <input
                type="number"
                className="form-control editInput "
                id="RegNum"
                placeholder="Please enter your Intrests"
              /> */}
                <ReactTag className="editLabel" tags={this.tagsHandler} />
              </div>

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none">
                  Update
                </button>
              </div>
            </form>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <hr className="hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12" />

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputSkill" className="form-label editLabel ">
                  Language
                </label>

                <select id="inputSkillYears" className="form-select editInput ">
                  <option selected>Language ...</option>
                  <option>...</option>
                </select>
                <label for="inputRegNum" className="form-label editLabel mt-3">
                  Level
                </label>
                <ReactStars
                  count={5}
                  value={4}
                  edit={false}
                  size={28}
                  activeColor="#F2A23A"
                />
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor="#F2A23A"
                />
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Skills;

class ReactTag extends Component {
  state = {
    tags: [],
  };
  setTags = (e) => {
    this.setState({ tags: e });
    this.props.tags(e);
  };

  render() {
    return (
      <ReactTagInput
        tags={this.state.tags}
        editable={true}
        removeOnBackspace={true}
        onChange={(newTags) => this.setTags(newTags)}
      />
    );
  }
}
