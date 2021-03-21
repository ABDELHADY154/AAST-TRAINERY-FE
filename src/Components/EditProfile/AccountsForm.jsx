import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import EditNav from "./EditNav";

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
        <div className='container '>
          <form class='text-left g-3 mb-3 ' onSubmit={this.handleSubmit}>
            <LoadingOverlay
              active={this.state.FormLoading}
              spinner={<BounceLoader color='#cd8930' />}
              styles={{
                overlay: (base) => ({
                  ...base,
                  background: "rgb(255, 255, 255)",
                }),
              }}
            >
              <EditNav setactive={"Accounts"} />
              <div className=' row'>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-sm-0 mt-4 flex-row d-flex justify-content-center'>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Website
                  </label>
                  <input
                    value={this.state.WebsitE ? this.state.WebsitE : ""}
                    type='text'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ WebsitE: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Facebook
                  </label>
                  <input
                    value={this.state.facebooK ? this.state.facebooK : ""}
                    type='text'
                    className='form-control editInput '
                    onChange={(e) => this.setState({ facebooK: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Instagram
                  </label>
                  <input
                    value={this.state.instagraM ? this.state.instagraM : ""}
                    type='text'
                    className='form-control editInput '
                    onChange={(e) => this.setState({ instagraM: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Youtube
                  </label>
                  <input
                    value={this.state.youtubE ? this.state.youtubE : ""}
                    type='text'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ youtubE: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    LinkedIn
                  </label>
                  <input
                    value={this.state.linkediN ? this.state.linkediN : ""}
                    type='text'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ linkediN: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Behance
                  </label>
                  <input
                    value={this.state.behancE ? this.state.behancE : ""}
                    type='text'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ behancE: e.target.value })}
                  />
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label className=' form-label editLabel  form-label editLabel   '>
                    Github
                  </label>
                  <input
                    value={this.state.githuB ? this.state.githuB : ""}
                    type='text'
                    className='form-control editInput'
                    // id="fullname"
                    onChange={(e) => this.setState({ githuB: e.target.value })}
                  />
                </div>

                <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
                  <button
                    class='btn updateBtn shadow-none my-2 '
                    onClick={this.handleSubmit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </LoadingOverlay>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default AccountsForm;
