/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <h1 className='navbar-brand'>Logo</h1>
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
              <li className='nav-item active'>
                <Link className='nav-link' to='/Home'>
                  Home<span className='sr-only'>(current)</span>
                </Link>
              </li>
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
export default Nav;
