/** @format */

import React, { Component } from "react";
import { resolve } from "../Api/Resolvers/resolver";
import { axios } from "../Api/axios";
import { Loader } from "../loader";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
    };
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/get-profile")
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("avatar", res.data.response.data.image);
            this.setState({
              user: res.data.response.data,
              loading: true,
              code: "200",
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: {
              usernameErr: error.response.status,
            },
          });
          if (this.state.error.usernameErr === 401) {
            window.location.reload();
          }
        })
    );
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div className='container text-center'>
          <Loader />
        </div>
      );
    } else {
      return (
        <div className='container text-center'>
          <h2> hi {this.state.user.name}</h2>
          <h2> {this.state.user.email}</h2>
          <h2> {this.state.user.department}</h2>
        </div>
      );
    }
  }
}
export default Home;
