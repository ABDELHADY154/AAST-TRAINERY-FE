/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../Components/assests/imgs/logo.png";
import avatar from "../Components/Home";
import "../layout/Nav.css";
import notifications from "../Components/assests/icons/alarm.svg";

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

    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {
    if (this.props.loggedIn === true) {
      return (
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light  '>
            <img
              className='navbar-brand img-rounded'
              src={logo}
              width='150'
              alt=''
            ></img>
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
                  src={notifications}
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
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <img className='navbar-brand' src={logo} width='150' alt=''></img>
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
            <div
              className='collapse navbar-collapse flex-container'
              id='navbarNav'
            >
              <ul className='nav navbar-nav btn '>
                <Link to='/Landing' />
                <li className='nav-item'>
                  <Link to='/Login'>
                    <button
                      renderAs='button'
                      className='btn btn-login btn-small btn-nav'
                    >
                      <span>Login</span>
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Register'>
                    <button
                      renderAs='button'
                      className='btn btn-outline-primary btn-small btn-nav'
                    >
                      <span>Sign up</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default Nav;
