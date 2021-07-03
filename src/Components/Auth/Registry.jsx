/** @format */
import { axios } from "../../Api/axios";
import React from "react";
// const MyFacebookLoader = () => <Facebook />;
import { Loader2 } from "../../loader";
import { Redirect } from "react-router-dom";
import "../../layout/Sign.css";
import loginBG from "../../Components/assests/imgs/login.jpg";
import PasswordStrengthBar from "react-password-strength-bar";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { Link } from "react-router-dom";

class Registry extends React.Component {
  constructor(props) {
    super(props);
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
      reg_no: "",
      department_id: "",
      error: {
        fullName: "",
        emailErr: "",
        regnumErr: "",
        departErr: "",
        passwordErr: [],
        passwordConfErr: [],
        genderErr: "",
      },
      hidden: true,
    };
    if (sessionStorage.getItem("token")) {
      this.setState({ loggedIn: true });
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  async componentDidMount() {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
    await axios.get("/departments").then(dep => {
      this.setState({
        departs: dep.data.response.data,
        loading: true,
      });
    });
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
        this.props.setUser(true);
      })
      .catch(error => {
        this.setState({
          error: {
            fullName: error.response.data.errors.name,
            emailErr: error.response.data.errors.email,
            regnumErr: error.response.data.errors.reg_no,
            departErr: error.response.data.errors.department_id,
            passwordErr: error.response.data.errors.password
              ? error.response.data.errors.password
              : null,

            genderErr: error.response.data.errors.gender,
          },
        });
        // console.log(error.response.data.errors);
      });
  };
  render() {
    let redirect = null;

    const { password } = this.state;
    if (this.state.loggedIn === true) {
      return <Redirect push to="/Home" />;
    }

    return (
      <div className="container-fluid ">
        <div className="row no-gutter ">
          <div className="col-md-11 col-lg-9 ">
            <div className=" d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-11 col-lg-9 mx-auto signup h-100">
                    <h1 className="mb-5 signTitle">Sign Up</h1>
                    <form
                      className="col-md-8 col-lg-10"
                      onSubmit={this.handleSubmit}
                    >
                      <div>
                        <div className="form-row">
                          <h3 className="mb-5 signSubTitle">
                            Personal Information
                          </h3>
                          <div className="col-md-10 col-lg-11 form-label-group input-field">
                            <label className="label">Full Name</label>
                            <input
                              alt="  enter your full name"
                              type="name"
                              className={
                                this.state.error.fullName
                                  ? "wrong signInput"
                                  : "signInput"
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
                          <div className="col-md-10 col-lg-11 form-label-group input-field">
                            <label className="label">Student Email</label>
                            <input
                              alt="  enter your student Email"
                              type="email"
                              id="Email"
                              className={
                                this.state.error.emailErr
                                  ? "wrong signInput"
                                  : "signInput"
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
                            <div class="col-4 col-lg-5 col-md-4 col-sm-4 col-xs-3 male form-check form-check-inline d-flex">
                              <input
                                alt="gender male "
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="male"
                                className="radio signInput"
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
                            <div class=" female col-4 col-lg-5 col-md-4 col-sm-5 col-xs-3 checkbox form-check-inline d-flex">
                              <input
                                alt="gender female "
                                className="radio signInput"
                                type="radio"
                                name="inlineRadioOptions"
                                id="Gender"
                                value="female"
                                onChange={e =>
                                  this.setState({ gender: e.target.value })
                                }
                              />
                              <label
                                class="form-check-label raioLabel "
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
                          <div className="col-md-10 col-lg-11 form-label-group input-field">
                            <label className="label">Password</label>
                            <div className="d-flex">
                              <input
                                alt="  enter your password"
                                type={this.state.hidden ? "password" : "text"}
                                onChange={this.handlePasswordChange}
                                className={
                                  this.state.error.passwordErr
                                    ? "wrong signInput mb-0"
                                    : " signInput mb-0"
                                }
                              />
                              {this.state.hidden ? (
                                <AiOutlineEye
                                  alt="show password"
                                  color="red"
                                  className=" ico"
                                  animation="tada"
                                  size="22px"
                                  pull="left"
                                  onClick={this.toggleShow}
                                />
                              ) : (
                                <AiOutlineEyeInvisible
                                  alt="hide password"
                                  color="red"
                                  className=" ico"
                                  animation="tada"
                                  size="22px"
                                  pull="left"
                                  onClick={this.toggleShow}
                                />
                              )}
                            </div>
                            <PasswordStrengthBar
                              password={`${this.state.password}`}
                              minLength="8"
                              className="mt-2"
                            />

                            {this.state.error.passwordErr !== "" &&
                              this.state.error.passwordErr.map(name => (
                                <p className="red d-inline"> {name} </p>
                              ))}
                          </div>
                          <div className="col-md-10 col-lg-11 form-label-group input-field">
                            <label className="label">Confirm Password</label>
                            <input
                              alt="  enter your confirmed password"
                              type={this.state.hidden ? "password" : "text"}
                              className={
                                this.state.error.passwordConfErr
                                  ? "wrong signInput"
                                  : "signInput"
                              }
                              onChange={e =>
                                this.setState({
                                  confirmPassword: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <h3 className="mb-4 signSubTitle">
                          College Information
                        </h3>
                        <div className="form-row">
                          <div className="col-md-10 col-lg-11 form-group col-12">
                            {this.state.loading === false ? (
                              <Loader2 />
                            ) : (
                              <select
                                type="text"
                                className="form-control dep signSelect "
                                id="departs"
                                onChange={e =>
                                  this.setState({
                                    department_id: e.target.value,
                                  })
                                }
                              >
                                <option>Please Select Your Department</option>

                                {this.state.departs.map(depart => (
                                  <option
                                    value={depart.id}
                                    key={depart.id}
                                    alt={depart.dep_name}
                                  >
                                    {depart.dep_name}
                                  </option>
                                ))}
                              </select>
                            )}
                            {this.state.error && (
                              <p className="depError mb-5">
                                {this.state.error.departErr}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-10 col-lg-11 form-label-group input-field">
                            <label className="label">Registration Number</label>
                            <input
                              alt="  enter your registration number"
                              type="number"
                              className={
                                this.state.error.regnumErr
                                  ? "wrong signInput"
                                  : "signInput"
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
                      <div className="col-md-10 col-lg-11">
                        <Link to="/Login">
                          <p className="account">Already have an account ?</p>
                        </Link>
                        <p className="agree ">
                          By creating an account, you agree to the
                          <Link to="/TermsandConditions">
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
          <div className="img-fluid d-md-flex col-md-3 col-lg-4 ">
            <img
              alt="silhouette of unversity undergraduate students throwing their caps in an arc shape in a landscape"
              src={loginBG}
              class="img-fluid bg-image-no-img h-100  d-none  d-sm-block"
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
