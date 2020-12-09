/** @format */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import { Loader } from "../loader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loading: false,
    };
  }

  async componentDidMount() {
    await axios.get("/W/get-profile").then((res) => {
      if (res.status === 200) {
        this.setState({
          user: res.data.response.data,
          loading: true,
          code: "200",
        });
      } else if (res.status === 401) {
        this.setState({
          code: "401",
        });
        
      }
    });
  }

  render() {
    // } else if (this.state.code == 401) {
    //   return <Redirect to='/Login' />;
    // }
    console.log(this.state.user);
    return (
      <div className='container text-center'>
        <h2> hi {this.state.user.name}</h2>
        <h2> {this.state.user.email}</h2>
        <h2> {this.state.user.department}</h2>
      </div>
    );
  }
}
export default Home;
