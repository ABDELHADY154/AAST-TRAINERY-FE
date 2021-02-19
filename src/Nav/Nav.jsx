/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../Components/assests/icons/Main-Logo.png";
import avatar from "../Components/Home";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { BiErrorAlt } from "react-icons/bi";

import { BsExclamationOctagon } from "react-icons/bs";

import "../layout/Nav.css";
import "../layout/Main.css";

// import notifications from "../Components/assests/icons/alarm.svg";
const options = ["one", "two", "three"];
const defaultOption = options[0];

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      // number: 0,
    };
  }
  handleLogout = () => {
    sessionStorage.clear();
    this.props.setUser(false);
  };

  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    const avatar = sessionStorage.getItem("avatar");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {
    if (this.props.loggedIn === true) {
      return (
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <a className='navbar-brand mx-5' href='#'>
                <img className='navbar-brand ml-5' src={logo} width='170' alt=''></img>
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarScroll'
                aria-controls='navbarScroll'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse ' id='navbarScroll'>
                <ul className='navbar-nav mt-1'>
                  <li className='nav-item '>
                    <Link className='nav-link item ' to='/Home'>
                      Explore
                      <span className='sr-only' />
                    </Link>
                  </li>
                  <li className='nav-item '>
                    <Link
                      className='nav-link item'
                      to='#'
                      // onClick={this.handleLogout}
                    >
                      Career Coaching
                    </Link>
                  </li>
                </ul>
                <ul className='navbar-nav me-auto my-2'>
                  <li className='nav-item'></li>

                  <li className='nav-item'>
                    <a
                      className='nav-link disabled'
                      href='#'
                      tabindex='-1'
                      aria-disabled='true'
                    ></a>
                  </li>
                </ul>
                <div className='d-flex justify-content-center'>
                  <ul className='nav my-1 mx-3 col-auto dropstart '>
                    <a className='nav-item item' href='#'>
                      <a
                        className='dropdown-toggle'
                        id='dropdownMenu2'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <IoIosNotificationsOutline
                          value={{
                            color: "#007BC2",
                            className: "global-class-name",
                          }}
                          className='noti mt-2 d-inline-block'
                        />
                      </a>
                      <ul
                        className='dropdown-menu '
                        lass='dropdown-menu'
                        aria-labelledby='dropdownMenu2'
                      >
                        <p className='text-center  mb-2 Nottext'>Notications</p>
                        <BsExclamationOctagon
                          color='#007BC2'
                          className='sssaa'
                          animation='tada'
                          size='15px'
                          pull='left'
                        />
                        <div className='notice notice-info dropdown-item'>
                          <div className='text'>
                            <h5 className='nottext'>Review your finished session </h5>
                            <h5 className='nottap'> Tap for more information</h5>
                          </div>
                        </div>
                        <BiErrorAlt
                          color='red'
                          className='sssaa'
                          animation='tada'
                          size='15px'
                          pull='left'
                        />
                        <div className='notice notice-danger dropdown-item'>
                          <div className='text'>
                            <h5 className='nottext'>
                              Unfortunately, you were rejected in the applied internship
                            </h5>
                            <h5 className='nottap'> Tap for more information</h5>
                          </div>
                        </div>
                        <IoCheckmarkCircleOutline
                          color='green'
                          className='sssaa'
                          animation='tada'
                          size='15px'
                          pull='left'
                        />
                        <div className='notice notice-success dropdown-item'>
                          <div className='text '>
                            <h5 className='nottext pl-5'>
                              Congratulations you got accepted in the applied internship{" "}
                            </h5>
                            <h5 className='nottap'> Tap for more information</h5>
                          </div>
                        </div>
                        <IoCheckmarkCircleOutline
                          color='green'
                          className='sssaa'
                          animation='tada'
                          size='15px'
                          pull='left'
                        />
                        <div className='notice notice-success dropdown-item'>
                          <div className='text '>
                            <h5 className='nottext pl-5'>
                              Congratulations you got accepted in the applied internship{" "}
                            </h5>
                            <h5 className='nottap'> Tap for more information</h5>
                          </div>
                        </div>{" "}
                        <IoCheckmarkCircleOutline
                          color='green'
                          className='sssaa'
                          animation='tada'
                          size='15px'
                          pull='left'
                        />
                        <div className='notice notice-success dropdown-item'>
                          <div className='text '>
                            <h5 className='nottext pl-5'>
                              Congratulations you got accepted in the applied internship{" "}
                            </h5>
                            <h5 className='nottap'> Tap for more information</h5>
                          </div>
                        </div>
                      </ul>
                    </a>
                    <a className='nav-item ' href='#'>
                      <img
                        src={sessionStorage.getItem("avatar")}
                        alt='Avatar'
                        width='40'
                        height='40'
                        className='avatar'
                        role='menuitem'
                      />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* <nav className='navbar navbar-expand-lg navbar-light bg-light  '>
            <img className='navbar-brand img-rounded' src={logo} width={170}></img>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse ' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item '>
                  <Link className='nav-link item' to='/Home'>
                    Explore
                    <span className='sr-only' />
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link item'
                    to='#'
                    // onClick={this.handleLogout}
                  >
                    Career Coaching
                  </Link>
                </li>
              </ul>
            </div>
            <ul className='nav  pt-3'>
              <li className='nav-item  pt-1'>
                <img
                  // src={notifications}
                  alt='Avatar'
                  width='21'
                  height='18'
                  className='avatar'
                />
              </li>
              <li className='nav-item'>
                <img
                  src={sessionStorage.getItem("avatar")}
                  alt='Avatar'
                  width='40'
                  height='40'
                  className='avatar'
                />
              </li>
            </ul>
          </nav> */}
        </div>
      );
    } else {
      return (
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <a className='navbar-brand mx-5' href='#'>
                <img className='navbar-brand ml-5' src={logo} width='170' alt=''></img>
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarScroll'
                aria-controls='navbarScroll'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarScroll'>
                <ul
                  className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'
                  // style='--bs-scroll-height: 100px;'
                >
                  <li className='nav-item'>
                    {/* <a className='nav-link active' aria-current='page' href='#'>
                      Home
                    </a> */}
                  </li>

                  <li className='nav-item'>
                    <a
                      className='nav-link disabled'
                      href='#'
                      tabindex='-1'
                      aria-disabled='true'
                    ></a>
                  </li>
                </ul>
                <form className='d-flex'>
                  <a
                    className='btn btn-login btn-small btn-nav  '
                    type='submit'
                    href='/Login'
                  >
                    Login
                  </a>
                  <a
                    renderAs='button'
                    className='btn shadow-none submitBtn col-sm-5 btn-outline-primary d-block text-uppercase font-weight-bold  mx-4'
                    href='/Register'
                  >
                    Sigup
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default Nav;
