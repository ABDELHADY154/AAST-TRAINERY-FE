/** @format */

import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Registry from "./Components/Registry";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Nav/Nav";
import Landing from "./Components/Landing/Landing";
import Profile from "./Components/Profile";
import "./layout/Footer.css";

// import Maintains from "./Components/Maintains";
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: sessionStorage.getItem("status"),
      token: sessionStorage.getItem("token"),
      loggedIn: false,
    };
    if (this.state.token && this.state.status) {
      this.state = {
        loggedIn: true,
      };
    }
  }

  setUser = (data) => {
    return this.setState({ loggedIn: data });
  };
  render() {
    // console.log(this.state.loggedIn);
    return (
      <BrowserRouter>
        <Nav loggedIn={this.state.loggedIn} setUser={this.setUser} />
        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                {/* <== Home for Guest */}
                <Route exact path='/' component={Landing} />
                {/* <Route exact path='/'>
                  <Redirect to='/Login' />
                </Route> */}
                <Route path='/Login' component={() => <Login setUser={this.setUser} />} />

                {/* <== Home for Users */}
                <AuthRoute exact path='/Home' component={Home} />
                {/* <== Register Guests */}

                <Route path='/Register' component={Registry} />
                {/* //component={() => <Login isLoggedin={this.isLoggedin} />} */}

                <AuthRoute exact path='/Profile' component={Profile} />
                <Route
                  path='/Landing'
                  component={() => <Landing loggedIn={this.state.loggedIn} />}
                />

                {/* <Route exact path='*' component={Profile} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
