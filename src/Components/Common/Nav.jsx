import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Components/assests/icons/Main-Logo.png";
import "../../layout/Nav.css";
import "../../layout/Main.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navBg fixed-top">
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
              id="hamburgermenu"
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
export default Nav;
