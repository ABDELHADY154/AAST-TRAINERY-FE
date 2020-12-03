/** @format */

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registry from "./authentication/Registry";
import Home from "./authentication/Home";
import Login from "./authentication/Login";
import Nav from "./authentication/Nav";
import Landing from "./authentication/Landing";
import { Protected } from "./authentication/Protected";

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
                <Protected exact path='/Home' component={Home} />
                {/* <== Register Guests */}
                <Route path='/Register' component={Registry} />
                <Route path='/Login' component={Login} />
                <Route path='*' component={Landing} />

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
