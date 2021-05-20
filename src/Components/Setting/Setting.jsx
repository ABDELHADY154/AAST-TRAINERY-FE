import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "@pathofdev/react-tag-input/build/index.css";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

// import { Link } from "react-router-dom";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      id: 0,
      error: {},
      FormLoading: false,
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ FormLoading: true });
      await axios
        .put("/W/student/updateEmail")
        .then((res) => {
          this.setState({
            email: res.data.response.data,
            FormLoading: false,
          });
          console.log(res.data.response.data);
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({ FormLoading: false });
        });
    }
    // console.log(this.props.match.params.id);
  }
  handleupdateEmail = async (e) => {
    this.setState({ FormLoading: true });

    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    if (this.props.match.params.id) {
      await axios
        .put("/W/student/updateEmail", data)
        .then((response) => {
          this.setState({
            loggedIn: true,
            FormLoading: false,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({
            FormLoading: false,

            error: {
              emailErr: error.response.data.errors.email,
            },
          });
        });
    }
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/Profile" />;
    }
    // console.log(this.state.level);
    return (
      <div>
        <div className="container wrapper">
          <div>
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold "
                  >
                    Change Password
                  </label>
                  <p>
                    To change your account password, enter your current
                    password, then enter your new password and confirm it.
                  </p>
                  <input
                    type="Password"
                    className={
                      this.state.error && this.state.error.languageErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id="Password"
                    placeholder="Current Password"
                    onChange={(e) =>
                      this.setState({ language: e.target.value })
                    }
                    value={this.state.language}
                  />
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    style={{ marginTop: 10 }}
                    type="Password"
                    className={
                      this.state.error && this.state.error.languageErr
                        ? " form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id="Password"
                    placeholder="New Password "
                    onChange={(e) =>
                      this.setState({ language: e.target.value })
                    }
                    value={this.state.language}
                  />
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    style={{ marginTop: 10 }}
                    type="Password"
                    className={
                      this.state.error && this.state.error.languageErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id="Password"
                    placeholder="Confirm Password  "
                    onChange={(e) =>
                      this.setState({ language: e.target.value })
                    }
                    value={this.state.language}
                  />
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none">
                    Update
                  </button>
                </div>
              </LoadingOverlay>
            </form>
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Account Email
                  </label>
                  <p>
                    You are already registered with the following email:{" "}
                    <span style={{ color: "#cd8930" }} className="text-wrap">
                      basmaamostafa27@student.aast.edu{" "}
                    </span>
                    If you would like to sign-in and receive emails on a
                    different address, write this new email here:
                  </p>
                  <input
                    type="email"
                    className={
                      this.state.error && this.state.error.emailErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id="email"
                    placeholder="new email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                  {this.state.error && this.state.error.emailErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.emailErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none">
                    Update
                  </button>
                </div>
              </LoadingOverlay>
            </form>
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    My Subscriptions
                  </label>
                  <p>
                    You will receive emails containing the latest jobs which
                    match your preferences.
                  </p>
                  {/* <div class="col-4 col-lg-5 col-md-4 col-sm-4 col-xs-3 male form-check form-check-inline d-flex"> */}
                  <input
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="male"
                    className="checkbox signInput"
                    onChange={(e) => this.setState({ gender: e.target.value })}
                  />
                  <label
                    class="form-check-label checkboxLabel"
                    for="inlineCheckbox3"
                  >
                    Receive newsletter
                  </label>
                  {/* </div> */}
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none">
                    Update
                  </button>
                </div>
              </LoadingOverlay>
            </form>{" "}
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Ad-Cancellation
                  </label>
                  <p>Monthly pay to advois seeing Ads</p>
                </div>
                <div class="mt-1 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none">
                    Subscribe
                  </button>
                </div>
              </LoadingOverlay>
            </form>{" "}
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Delete Account
                  </label>
                  <p>Permanently delete my account</p>
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn deleteBtn shadow-none">
                    Delete
                  </button>
                </div>
              </LoadingOverlay>
            </form>
          </div>
        </div>
        <div>
          <Footer2 />
        </div>{" "}
      </div>
    );
  }
}
export default Setting;
