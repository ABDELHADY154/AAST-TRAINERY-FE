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
      website: "",
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      behance: "",
      github: "",
    };
  }
  //get list
  async componentDidMount() {
    await axios
      .get("/W/student/profile/account")
      .then((aList) => {
        console.log(aList.data.response.data);
        this.setState({
          accounts: aList.data.response.data,
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
      id: this.state.id,
      website: this.state.website,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      youtube: this.state.youtube,
      linkedin: this.state.linkedin,
      behance: this.state.behance,
      github: this.state.github,
    };
    return await axios
      .post("/W/student/profile/account")
      .then((res) => {
        console.log(res);
        this.setState({
          id: res.data.response.data.id,

          website: res.data.response.data.website,
          facebook: res.data.response.data.facebook,
          instagram: res.data.response.data.instagram,
          youtube: res.data.response.data.youtube,
          linkedin: res.data.response.data.linkedin,
          behance: res.data.response.data.behance,
          github: res.data.response.data.github,
        });
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.facebook);
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
                value={this.state.website ? this.state.website : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ website: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Facebook
              </label>
              <input
                value={this.state.facebook ? this.state.facebook : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ facebook: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Instagram
              </label>
              <input
                value={this.state.instagram ? this.state.instagram : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ instagram: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Youtube
              </label>
              <input
                value={this.state.youtube ? this.state.youtube : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ youtube: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                LinkedIn
              </label>
              <input
                value={this.state.linkedin ? this.state.linkedin : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ linkedin: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Behance
              </label>
              <input
                value={this.state.behance ? this.state.behance : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ behance: e.target.value })}
              />
            </div>
            <div className="row g-0 mb-3 ">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Github
              </label>
              <input
                value={this.state.github ? this.state.github : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                // id="fullname"
                placeholder="URL"
                onChange={(e) => this.setState({ github: e.target.value })}
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
