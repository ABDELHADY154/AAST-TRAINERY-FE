import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Registry from "./Components/Registry";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Nav/Nav";
import AuthNav from "./Nav/AuthNav";
import Landing from "./Components/Landing/Landing";
import Profile from "./Components/Profile";
import Forget from "./Components/ForgetPassword";

import ErrorPage from "./Components/ErrorPage404";
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
    // this.forceUpdate();
    return this.setState({ loggedIn: data });
  };

  render() {
    console.log(this.state.loggedIn);
    return (
      <BrowserRouter>
        {this.state.loggedIn == true ? <AuthNav setUser={this.setUser} /> : <Nav />}
        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                {/* <== Home for Guest */}

                <Route
                  exact
                  path='/'
                  component={() => <Landing loggedIn={this.state.loggedIn} />}
                />

                <Route
                  exact
                  path='/Login'
                  component={() => <Login setUser={this.setUser} />}
                />
                <Route
                  exact
                  path='/Register'
                  component={() => <Registry setUser={this.setUser} />}
                />
                <Route exact path='/Forget' component={Forget} />
                <AuthRoute
                  exact
                  path='/Home'
                  component={() => {
                    return <Home setUser={this.setUser} />;
                  }}
                />
                <AuthRoute exact path='/Profile' component={Profile} />
                <Route exact path='*' component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
