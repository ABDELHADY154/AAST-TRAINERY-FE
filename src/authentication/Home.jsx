/** @format */

import React, { Component } from "react";
import { axios } from "./axios";
import ContentLoader, { Facebook } from "react-content-loader";
import { Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    console.log(this.props);
    if (this.props.user) {
      return (
        <div className='container'>
          <h2>hi {this.props.user.name}</h2>
        </div>
      );
    }

    return <Redirect to='/login' />;
  }
}
export default Home;
