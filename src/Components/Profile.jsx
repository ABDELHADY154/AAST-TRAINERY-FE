/** @format */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";

class Profile extends Component {
  render() {
    // Profile
    // console.log(this.state.user);
    // if (this.state.user) {
    //   // <App user={this.state.user} />;

    //   return (
    //     <div className='container text-center'>
    //       <h2> hi {this.state.user.name}</h2>
    //       <h2> {this.state.user.email}</h2>
    //       <h2> {this.state.user.department}</h2>
    //     </div>
    //   );
    // }
    return (
      <div className='container text-center'>
        <h1>profile</h1>
        <h2> hi {localStorage.getItem("data.name")}</h2>
      </div>
    );
  }
}
export default Profile;
