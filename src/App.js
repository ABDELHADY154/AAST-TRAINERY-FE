import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Registry from "./Components/Auth/Registry";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Nav from "./Components/Common/Nav";
import AuthNav from "./Components/Common/AuthNav";
import Landing from "./Components/Landing/Landing";
import Profile from "./Components/Profile/Profile";
import Forget from "./Components/Auth/ForgetPassword";
import ErrorPage from "./Components/Auth/ErrorPage404";
import GeneralInfo from "./EditProfile/GeneralInfo";
import EducationForm from "./EditProfile/EducationForm";
import GeneralForm from "./EditProfile/GeneralForm";

// import Skills from "./EditProfile/Skills";
// import Education from "./EditProfile/Education";

import "./layout/Footer.css";

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
                <AuthRoute exact path='/Profile/General' component={GeneralForm} />
                {/* <Route exact path="/Skills" component={Skills} /> */}
                <AuthRoute exact path='/Profile/Education' component={EducationForm} />
                <AuthRoute exact path='/Profile/Experiance' component={EducationForm} />
                <AuthRoute exact path='/Profile/Courses' component={EducationForm} />
                <AuthRoute exact path='/Profile/Skills' component={EducationForm} />
                <AuthRoute exact path='/Profile/Accounts' component={EducationForm} />

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
