import React from "react";
import { Link } from "react-router-dom";
import logo from "../Components/assests/icons/Main-Logo.png";
import { AvatarLoader } from "../loader";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { resolve } from "../Api/Resolvers/resolver";
import { axios } from "../Api/axios";
import { BiErrorAlt } from "react-icons/bi";

import { BsExclamationOctagon } from "react-icons/bs";

import "../layout/Nav.css";
import "../layout/Main.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      loading: false,
      // number: 0,
    };
    if (this.state.token) {
      this.setState({ loading: true });
    }
  }
  handleLogout = () => {
    sessionStorage.clear();
    this.props.setUser(false);
  };

  componentWillMount() {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  }
  async componentDidMount() {
    if (this.state.loggedIn) {
      await resolve(
        axios.get("/W/studentImg").then(res => {
          if (res.status === 200) {
            this.setState({
              user: res.data.response.data,
              avatar: res.data.response.data.image,
            });
          }
        }),
      );
    }
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <div className="navBottom">
          <nav class="navbar navbar-expand-lg navBg fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand mx-2" href="/">
                <img
                  className="navbar-brand"
                  src={logo}
                  width="170"
                  alt=""
                ></img>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarScroll">
                <ul className="navbar-nav mt-1">
                  <li className="nav-item ">
                    <Link className="nav-link item " to="/Home">
                      Explore
                      <span className="sr-only" />
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link item"
                      to="#"
                      // onClick={this.handleLogout}
                    >
                      Career Coaching
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto my-2">
                  <li className="nav-item"></li>

                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      aria-disabled="true"
                    ></a>
                  </li>
                </ul>
                <div className="d-flex justify-content-center">
                  <ul className="nav my-1 mx-3 col-auto dropstart ">
                    <div>
                      <a className="nav-item item" href="#">
                        <a
                          className="dropdown-toggle"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <IoIosNotificationsOutline
                            value={{
                              color: "#007BC2",
                              className: "global-class-name",
                            }}
                            className="noti mt-2 d-inline-block"
                          />
                        </a>
                        <ul
                          className="dropdown-menu "
                          lass="dropdown-menu"
                          aria-labelledby="dropdownMenu2"
                        >
                          <p className="text-center  mb-2 Nottext">
                            Notications
                          </p>
                          <BsExclamationOctagon
                            color="#007BC2"
                            className="NotIcon"
                            animation="tada"
                            size="15px"
                            pull="left"
                          />
                          <div className="notice notice-info dropdown-item">
                            <div className="text">
                              <h5 className="nottext text-wrap">
                                Review your finished session{" "}
                              </h5>
                              <h5 className="nottap">
                                {" "}
                                Tap for more information
                              </h5>
                            </div>
                          </div>
                          <BiErrorAlt
                            color="red"
                            className="NotIcon"
                            animation="tada"
                            size="15px"
                            pull="left"
                          />
                          <div className="notice notice-danger dropdown-item">
                            <div className="text">
                              <h5 className="nottext  text-wrap">
                                Unfortunately, you were rejected in the applied
                                internship
                              </h5>
                              <h5 className="nottap">
                                {" "}
                                Tap for more information
                              </h5>
                            </div>
                          </div>
                          <IoCheckmarkCircleOutline
                            color="green"
                            className="NotIcon"
                            animation="tada"
                            size="15px"
                            pull="left"
                          />
                          <div className="notice notice-success dropdown-item">
                            <div className="text ">
                              <h5 className="nottext pl-5 text-wrap">
                                Congratulations you got accepted in the applied
                                internship{" "}
                              </h5>
                              <h5 className="nottap">
                                {" "}
                                Tap for more information
                              </h5>
                            </div>
                          </div>
                          <IoCheckmarkCircleOutline
                            color="green"
                            className="NotIcon"
                            animation="tada"
                            size="15px"
                            pull="left"
                          />
                          <div className="notice notice-success dropdown-item">
                            <div className="text ">
                              <h5 className="nottext pl-5 text-wrap">
                                Congratulations you got accepted in the applied
                                internship
                              </h5>
                              <h5 className="nottap">
                                {" "}
                                Tap for more information
                              </h5>
                            </div>
                          </div>
                          <IoCheckmarkCircleOutline
                            color="green"
                            className="NotIcon"
                            animation="tada"
                            size="15px"
                            pull="left"
                          />
                          <div className="notice notice-success dropdown-item">
                            <div className="text ">
                              <h5 className="nottext pl-5 text-wrap">
                                Congratulations you got accepted in the applied
                                internship{" "}
                              </h5>
                              <h5 className="nottap">
                                {" "}
                                Tap for more information
                              </h5>
                            </div>
                          </div>
                        </ul>
                      </a>
                      <a className="nav-item " href="#">
                        {this.state.avatar ? (
                          <img
                            src={this.state.avatar}
                            alt="Avatar"
                            width="40"
                            height="40"
                            className="avatar"
                            role="menuitem"
                          />
                        ) : (
                          <AvatarLoader />
                        )}
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="mb-5">
          <nav class="navbar navbar-expand-lg navBg fixed-top">
            <div className="container">
              <Link className="navbar-brand mx-2" to="/">
                <img
                  className="navbar-brand "
                  src={logo}
                  width="170"
                  alt=""
                ></img>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item"></li>

                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      aria-disabled="true"
                    />
                  </li>
                </ul>
                <div className="d-flex justify-content-center">
                  <Link
                    className="btn signIn shadow-none btn-nav col-xm-6  mx-1"
                    to="/Login"
                    renderAs="button"
                  >
                    Sign In
                  </Link>
                  <Link
                    renderAs="button"
                    className="btn btn-nav shadow-none signUp col-xm-6  mx-1"
                    to="/Register"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default Nav;
