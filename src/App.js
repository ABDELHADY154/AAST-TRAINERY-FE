/** @format */

import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Registry from "./Components/Registry";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Nav/Nav";
import Landing from "./Components/Landing";
import Profile from "./Components/Profile";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  const data = localStorage.getItem("data");
  if (!token || !data) {

    return false;
  }
  // this.setState.isLoggedin = { isLoggedin: true };
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (checkAuth() ? <Component /> : <Redirect to='/Login' />)}
  />
);
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                {/* <== Home for Guest */}
                <Route exact path='/' component={Landing} />
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
                <AuthRoute path='/Profile' component={Profile} />
                <Route path='/Landing' component={Landing} />

                {/* <Route path='*' component={Landing} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>

      //  <BrowserRouter>
      //  <Nav user={} />

      //  <div className='app'>
      //    <div className='auth-wrapper'>
      //      <div className='auth-inner'>
      //        <Switch>
      //          <Route
      //            exact
      //            path='/Home'
      //            component={() => <Home user={this.state.user} />}
      //          />
      //          <Route exact path='/Register' component={Registry} />

      //          <Route
      //            exact
      //            path='/Login'
      //            component={() => <Login user={this.setuser.user} />}
      //          />
      //        </Switch>
      //      </div>
      //    </div>
      //  </div>
      // </BrowserRouter>
    );
  }
}
