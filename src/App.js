/** @format */

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registry from "./authentication/Registry";
import Home from "./authentication/Home";
import Login from "./authentication/Login";
import Nav from "./authentication/Nav";
import { axios } from "./authentication/axios";

export default class App extends Component {
  // state = {};
  // componentDidMount = () => {
  //   axios.get("/W/get-profile").then(
  //     (response) => {
  //       this.setuser(response.data.response.data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // };
  // setuser = (user) => {
  //   this.setState({
  //     user: user,
  //   });
  // };
  render() {
    return (
      <BrowserRouter>
        <Nav />

        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/Home' component={() => <Home />} />
                <Route exact path='/Register' component={Registry} />

                <Route exact path='/Login' component={() => <Login />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
