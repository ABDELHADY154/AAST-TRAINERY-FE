/** @format */
import { axios } from "../Api/axios";
import React from "react";
// const MyFacebookLoader = () => <Facebook />;
import { Loader2 } from "../loader";
import { Redirect } from "react-router-dom";
import "../layout/Sign.css";
import loginBG from "../Components/assests/imgs/login.jpg";

import { Link } from "react-router-dom";

class Registry extends React.Component {
  constructor() {
    super();
    this.state = {
      error: {},
      departs: [],
      loading: false,
      loggedIn: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      reg_no: 0,
      department_id: 0,
    };
    if (sessionStorage.getItem("token")) {
      this.setState({ loggedIn: true });
    }
  }

  async componentDidMount() {
    await axios.get("/departments").then(dep => {
      this.setState({
        departs: dep.data.response.data,
        loading: true,
      });
    });
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword,
      gender: this.state.gender,
      reg_no: this.state.reg_no,
      department_id: this.state.department_id,
    };
    console.log(data);
    await axios
      .post("/register", data)
      .then(response => {
        sessionStorage.setItem("token", response.data.response.data.token);
        sessionStorage.setItem("status", response.statusText);
        this.setState({
          token: sessionStorage.getItem("token"),
          status: sessionStorage.getItem("status"),
          loggedIn: true,
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: {
            fullName: error.response.data.errors.name[0],
            emailErr: error.response.data.errors.email[0],
            regnumErr: error.response.data.errors.reg_no[0],
            departErr: error.response.data.errors.department_id[0],
            passwordErr:
              error.response.data.errors.password[0] !==
              "The password confirmation does not match."
                ? error.response.data.errors.password[0]
                : null,
            passwordConfErr:
              error.response.data.errors.password[0] ==
              "The password confirmation does not match."
                ? error.response.data.errors.password[0]
                : null,
            genderErr: error.response.data.errors.gender[0],
          },
        });
      });
  };
  render() {
    let redirect = null;
    if (this.state.loggedIn === true) {
      return <Redirect to="/Home" />;
    }
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-11 col-lg-9 ">
            <div className=" d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-11 col-lg-9 mx-auto signup h-100">
                    <h3 className="mb-5 signTitle">Sign Up</h3>
                    <form
                      className="col-md-8 col-lg-10"
                      onSubmit={this.handleSubmit}
                    >
                      <div>
                        <div className="form-row">
                          <h3 className="mb-5 signSubTitle">
                            Personal Information
                          </h3>
                          <div className="col-md-10 col-lg-12 form-label-group input-field">
                            <label className="label">Full Name</label>
                            <input
                              type="name"
                              className={
                                this.state.error.fullName ? "wrong" : ""
                              }
                              onChange={e =>
                                this.setState({ name: e.target.value })
                              }
                            />
                            <p className="error">
                              {this.state.error.fullName
                                ? this.state.error.fullName
                                : ""}
                            </p>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-10 col-lg-12 form-label-group input-field">
                            <label className="label">Student Email</label>
                            <input
                              type="email"
                              id="Email"
                              className={
                                this.state.error.emailErr ? "wrong" : ""
                              }
                              onChange={e =>
                                this.setState({ email: e.target.value })
                              }
                            />
                            <p className="error">
                              {this.state.error.emailErr
                                ? this.state.error.emailErr
                                : ""}
                            </p>
                          </div>
                        </div>

                        <div className="row  form-label-group">
                          <h2 className="genderLabel">Gender</h2>
                          <div className="row ">
                            <div class="col-3 male form-check form-check-inline d-flex">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="male"
                                className="radio"
                                onChange={e =>
                                  this.setState({ gender: e.target.value })
                                }
                              />
                              <label
                                class="form-check-label raioLabel"
                                for="inlineCheckbox3"
                              >
                                Male
                              </label>
                            </div>
                            <div class="col-2  checkbox form-check-inline d-flex">
                              <input
                                className="radio"
                                type="radio"
                                name="inlineRadioOptions"
                                id="Gender"
                                value="female"
                                onChange={e =>
                                  this.setState({ gender: e.target.value })
                                }
                              />
                              <label
                                class="form-check-label raioLabel"
                                for="inlineCheckbox3"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                          <p className="error">
                            {this.state.error.genderErr
                              ? this.state.error.genderErr
                              : ""}
                          </p>
                        </div>

                        <div className="form-row">
                          <div className="col-md-10 col-lg-12 form-label-group input-field">
                            <label className="label">Password</label>
                            <input
                              type="password"
                              className={
                                this.state.error.passwordErr ? "wrong" : ""
                              }
                              onChange={e =>
                                this.setState({ password: e.target.value })
                              }
                            />
                            <p className="error">
                              {this.state.error.passwordErr
                                ? this.state.error.passwordErr
                                : ""}
                            </p>
                          </div>
                          <div className="col-md-10 col-lg-12 form-label-group input-field">
                            <label className="label">Confirm Password</label>
                            <input
                              type="password"
                              className={
                                this.state.error.passwordConfErr ? "wrong" : ""
                              }
                              onChange={e =>
                                this.setState({
                                  confirmPassword: e.target.value,
                                })
                              }
                            />
                            <p className="error">
                              {this.state.error.passwordConfErr
                                ? this.state.error.passwordConfErr
                                : ""}
                            </p>
                          </div>
                        </div>
                        <h3 className="mb-4 signSubTitle">
                          College Information
                        </h3>
                        <div className="form-row">
                          <div className="col-md-10 col-lg-12 form-group col-12">
                            {this.state.loading === false ? (
                              <Loader2 />
                            ) : (
                              <select
                                type="text"
                                className="form-control dep  "
                                id="departs"
                                onChange={e =>
                                  this.setState({
                                    department_id: e.target.value,
                                  })
                                }
                              >
                                <option>Please Select Your Department</option>

                                {this.state.departs.map(depart => (
                                  <option value={depart.id} key={depart.id}>
                                    {depart.dep_name}
                                  </option>
                                ))}
                              </select>
                            )}
                            {this.state.error && (
                              <p className="depError">
                                {this.state.error.departErr}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-10 col-lg-12 form-label-group input-field">
                            <label className="label">Registration Number</label>
                            <input
                              type="number"
                              className={
                                this.state.error.regnumErr ? "wrong" : ""
                              }
                              // placeholder="Registration number"
                              onChange={e =>
                                this.setState({ reg_no: e.target.value })
                              }
                            />
                            <p className="error">
                              {this.state.error.regnumErr
                                ? this.state.error.regnumErr
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 col-lg-12">
                        <Link to="/Login">
                          <p className="account">Aready have an account ?</p>
                        </Link>
                        <p className="agree ">
                          By creating an account, you agree to the
                          <Link to="/">
                            <span className="terms">
                              {"  "} Terms and Conditions{"  "}
                            </span>
                          </Link>
                          of the company.
                        </p>
                        <button
                          className="btn shadow-none submitBtn col-sm-3 col-md-4 col-lg-3 btn-outline-primary d-block text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-fluid d-none d-md-flex col-md-3 col-lg-4 ">
            <img
              src={loginBG}
              class="img-fluid bg-image-no-img h-100  "
              width="100%"
            />
          </div>

          {/* <div className="img-fluid sticky-xl-top d-none d-md-flex col-md-3 col-lg-4 bg-image "></div> */}
        </div>
      </div>
    );
  }
}

export default Registry;
