/** @format */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import App from "../App";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  async componentDidMount() {
    await axios.get("/W/get-profile").then((res) => {
      this.setState({
        user: res.data.response.data,
        loggedIn: true,
      });
    });
  }
  render() {
    // Profile
    // console.log(this.state.user);
    if (this.state.user) {
      // <App user={this.state.user} />;

      return (
        <div className='container text-center'>
          <h2> hi {this.state.user.name}</h2>
          <h2> {this.state.user.email}</h2>
          <h2> {this.state.user.department}</h2>
        </div>
      );
    }
    return <h2> hi {this.state.user.name}</h2>;
  }
}
export default Home;
