/** @format */

import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Registry from "./Components/Registry";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Nav/Nav";
import Landing from "./Components/Landing";
import Profile from "./Components/Profile";

const CheckAuth = () => {
  const token = sessionStorage.getItem("token");
  const status = sessionStorage.getItem("status");
  if (!token && !status) {
    return false;
  }
  return true;
};
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (CheckAuth() ? <Component /> : <Redirect to='/Login' />)}
  />
);

export default class App extends Component {
  componentDidMount() {
    if (sessionStorage.getItem("status") && sessionStorage.getItem("token")) {
      return this.setState({
        auth: true,
      });
    }
  }

  render() {
    // console.log(this.state);
    return (
      <BrowserRouter>
        <Nav auth={this.state} />
        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                {/* <== Home for Guest */}
                <Route exact path='/' component={<Login auth={this.state} />} />
                {/* <== Home for Users */}
                <AuthRoute exact path='/Home' component={Home} />
                {/* <== Register Guests */}

                <Route path='/Register' component={Registry} />
                {/* <Route path='/LoginApi' component={LoginApi} /> */}
                <Route
                  path='/Login'
                  component={() => <Login />}
                  // component={() => <Login isLoggedin={this.isLoggedin} />}
                />
                <AuthRoute exact path='/Profile' component={Profile} />
                <Route path='/Landing' component={Landing} />

                {/* <Route path='*' component={Landing} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
