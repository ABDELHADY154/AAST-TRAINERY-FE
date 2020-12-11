/** @format */

import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../Components/assests/imgs/logo.png";
import "../layout/Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      // number: 0,
    };
  }
  handleLogout() {
    sessionStorage.clear();
  }
  // componentDidMount() {
  //   this.setState({
  //     token: sessionStorage.getItem("token"),
  //     status: sessionStorage.getItem("status"),
  //   });
  //   if (this.props.setUser === true) {
  //     this.setState({
  //       loggedIn: this.props.setUser,
  //     });
  //   }
  // }

  // counter = () => {
  //   this.setState({
  //     token: sessionStorage.getItem("token"),
  //     status: sessionStorage.getItem("status"),
  //     loggedIn: this.props.setUser,
  //   });
  // };
  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    console.log(this.props.setUser);

    if (status && token) {
      return this.setState({ loggedIn: true });
    }
    //     loggedIn: this.props.setUser,
  };
  render() {
    if (this.props.setUser == true) {
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
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item '>
                  <Link className='nav-link' to='/Home'>
                    Home
                    <span className='sr-only' />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/Landing'
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>{" "}
            </div>
          </nav>
          {/* <Link add</Link> */}
          {/* <h1>{this.props.login}</h1> */}
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
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <Link to='/Landing' />
                <li className='nav-item'>
                  <Link className='nav-link' to='/Login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/Register'>
                    Register
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
