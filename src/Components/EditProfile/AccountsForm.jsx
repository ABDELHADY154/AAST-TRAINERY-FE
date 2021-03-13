import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";

class AccountsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WebsitE: "",
      facebooK: "",
      instagraM: "",
      youtubE: "",
      linkediN: "",
      behancE: "",
      githuB: "",
    };
  }
  //get list
  async componentDidMount() {
    await axios
      .get("/W/student/profile/account")
      .then((aList) => {
        console.log(aList.data.response.data);
        this.setState({
          WebsitE: aList.data.response.data.website,
          facebooK: aList.data.response.data.facebook,
          instagraM: aList.data.response.data.instagram,
          youtubE: aList.data.response.data.youtube,

          linkediN: aList.data.response.data.linkedin,
          behancE: aList.data.response.data.behance,
          githuB: aList.data.response.data.github,
        });
        console.log(aList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      website: this.state.WebsitE,
      facebook: this.state.facebooK,
      instagram: this.state.instagraM,
      youtube: this.state.youtubE,
      linkedin: this.state.linkediN,
      behance: this.state.behancE,
      github: this.state.githuB,
    };
    return await axios
      .post("/W/student/profile/account")
      .then((res) => {
        console.log(res);
        this.setState({
          WebsitE: res.data.response.data.website,
          facebooK: res.data.response.data.facebook,
          instagraM: res.data.response.data.instagram,
          youtubE: res.data.response.data.youtube,
          linkediN: res.data.response.data.linkedin,
          behancE: res.data.response.data.behance,
          githuB: res.data.response.data.github,
        });
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.facebooK);
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
                className="nav-link tabBtn active"
                id="Accounts-tab"
                href="/Profile/Accounts"
              >
                Accounts
              </a>
            </li>
          </ul>

          <form class="text-left g-3 mb-3 " onSubmit={this.handleSubmit}>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Website
              </label>
              <input
                value={this.state.WebsitE ? this.state.WebsitE : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ WebsitE: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Facebook
              </label>
              <input
                value={this.state.facebooK ? this.state.facebooK : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ facebooK: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Instagram
              </label>
              <input
                value={this.state.instagraM ? this.state.instagraM : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ instagraM: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Youtube
              </label>
              <input
                value={this.state.youtubE ? this.state.youtubE : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ youtubE: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                LinkedIn
              </label>
              <input
                value={this.state.linkediN ? this.state.linkediN : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ linkediN: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Behance
              </label>
              <input
                value={this.state.behancE ? this.state.behancE : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ behancE: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Github
              </label>
              <input
                value={this.state.githuB ? this.state.githuB : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ githuB: e.target.value })}
              />
            </div>

            <div class="col-12 d-flex justify-content-end">
              <button class="btn deleteBtn me-2 my-2  shadow-none ">
                Delete
              </button>
              <button
                class="btn updateBtn shadow-none my-2 "
                onClick={this.handleSubmit}
              >
                Update
              </button>
            </div>

            <div class="col-12 d-flex justify-content-end">
              <a href="/Profile">
                <button
                  type="button"
                  class="btn me-2 my-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
              </a>
              <button type="submit" class="btn doneBtn shadow-none my-2 ">
                Add
              </button>
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default AccountsForm;
