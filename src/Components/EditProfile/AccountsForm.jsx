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
  componentDidMount = async () => {
    await axios
      .get("/W/student/profile/account")
      .then((aList) => {
        console.log(aList.data.response.data);
        this.setState({
          WebsitE: aList.data.response.data[`0`].website,
          facebooK: aList.data.response.data[`0`].facebook,
          instagraM: aList.data.response.data[`0`].instagram,
          youtubE: aList.data.response.data[`0`].youtube,

          linkediN: aList.data.response.data[`0`].linkedin,
          behancE: aList.data.response.data[`0`].behance,
          githuB: aList.data.response.data[`0`].github,
        });
        console.log(aList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      .post("/W/student/profile/account", data)
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
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  render() {
    console.log(this.state.facebooK);
    return (
      <div>
        <div className="container ">
 

          <form class="text-left g-3 mb-3 " onSubmit={this.handleSubmit}>
            <div className="row g-0 mb-3 mt-sm-0 mt-4">
              <label className=" col-lg-2 col-11 col-md-3 col-sm-12 col-xs-12  form-label editLabel closeLabel ">
                Website
              </label>
              <input
                value={this.state.WebsitE ? this.state.WebsitE : ""}
                type="text"
                className="col-lg-5 
               col-11 col-md-5 col-sm-12 col-xs-12 editInput "
                
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
