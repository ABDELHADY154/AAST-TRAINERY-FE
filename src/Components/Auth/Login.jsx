/** @format */
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import loginBG from "../../Components/assests/imgs/login.jpg";
import "../../layout/Sign.css";
import { MdWarning } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      email: "",
      error: {},
      hidden: true,
      password: "",
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    return await axios
      .post("/login", data)
      .then((response) => {
        sessionStorage.setItem("token", response.data.response.data.token);
        sessionStorage.setItem("status", response.statusText);
        this.props.setUser(true);
        this.setState({
          loggedIn: true,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            error: {
              emailErr: error.response.data.errors.email,
              passwordErr: error.response.data.errors.password,
            },
          });
        }
      });
  };
  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {
    if (this.state.loggedIn === true) {
      return <Redirect push to="/Home" />;
    } else {
      return (
        <div className="container-fluid h-100">
          <div className="row no-gutter ">
            <div className="col-md-11 col-lg-9 ">
              <div className=" d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-11 col-lg-9 mx-auto signup h-100">
                      <h1 className=" mb-5 signTitle">Sign In </h1>
                      <form
                        className="col-md-8 col-lg-10"
                        onSubmit={this.handleSubmit}
                      >
                        <div>
                          <div className="col-md-11 col-lg-11 form-label-group input-field field">
                            <label className="label">Student Email</label>
                            <input
                              alt="enter your email  "
                              type="email"
                              className={
                                this.state.error.emailErr
                                  ? "wrong signInput"
                                  : "signInput"
                              }
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            />
                            {this.state.error.emailErr && (
                              <p className="error">
                                {this.state.error.emailErr}
                              </p>
                            )}
                          </div>

                          <div className="col-md-11 col-lg-11 form-label-group input-field field">
                            <label className="label">Password</label>
                            <div className="d-flex">
                              <input
                                alt="enter your password  "
                                type={this.state.hidden ? "password" : "text"}
                                onChange={this.handlePasswordChange}
                                className={
                                  this.state.error.passwordErr
                                    ? "wrong signInput "
                                    : " signInput"
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

                            {this.state.error.passwordErr && (
                              <p className="error">
                                {this.state.error.passwordErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-md-10 col-lg-11">
                          <Link to="/Register">
                            <p className="account">Don’t have an account ?</p>
                          </Link>
                          <Link to="/Forget">
                            <p className="agree">Forgot Password ?</p>
                          </Link>
                          <button
                            className="btn shadow-none submitBtn col-sm-3 col-md-4 col-lg-3 btn-outline-primary d-block text-uppercase font-weight-bold mb-2"
                            type="submit"
                          >
                            Sign in
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
                alt="silhouette of undergraduate unversity students throwing their caps in an arc shape in a landscape"
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
