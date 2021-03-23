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

import EducationForm from "./Components/EditProfile/EducationForm";
import AccountsForm from "./Components/EditProfile/AccountsForm";
import CoursesForm from "./Components/EditProfile/CoursesForm";
import ExperienceForm from "./Components/EditProfile/ExperienceForm";
import GeneralForm from "./Components/EditProfile/GeneralForm";
import SkillsForm from "./Components/EditProfile/SkillsForm";
import Interest from "./Components/EditProfile/InterestForm";
import Language from "./Components/EditProfile/LanguageForm";

import CompanyProfile from "./Components/Profiles/CompanyProfile"
import advisorProfile from "./Components/Profiles/advisorProfile"
import { AuthRoute } from "./Components/Auth/AuthRoute";

// import Skills from "./EditProfile/Skills";
// import Education from "./EditProfile/Education";

import "./layout/Footer.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: sessionStorage.getItem("status"),
      token: sessionStorage.getItem("token"),
      loggedIn: false,
      avatar: "",
    };
    if (this.state.token && this.state.status) {
      this.state = {
        loggedIn: true,
      };
    }
    window.scrollTo(0, 0);
  }

  setUser = (data) => {
    return this.setState({ loggedIn: data });
  };
  setAvatar = (data) => {
    this.setState({ avatar: data });
    if (this.state.avatar) {
    }
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.loggedIn == true ? (
          <AuthNav
            setUser={this.setUser}
            updated={this.state.avatar ? true : false}
          />
        ) : (
          <Nav />
        )}
        <div className="app">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* <== Home for Guest */}
                <Route
                  exact
                  path="/"
                  component={() => <Landing loggedIn={this.state.loggedIn} />}
                />
                <Route
                  exact
                  path="/Login"
                  component={() => <Login setUser={this.setUser} />}
                />
                <Route
                  exact
                  path="/Register"
                  component={() => <Registry setUser={this.setUser} />}
                />
                <Route exact path="/Forget" component={Forget} />
                <AuthRoute
                  exact
                  path="/Home"
                  component={() => {
                    return <Home setUser={this.setUser} />;
                  }}
                />
                <AuthRoute exact path="/Profile" component={Profile} />
                {/* <AuthRoute exact path="/GeneralInfo" component={GeneralInfo} /> */}
                <AuthRoute
                  exact
                  path="/Profile/General"
                  component={() => <GeneralForm setAvatar={this.setAvatar} />}
                />
                <AuthRoute
                  exact
                  path="/Profile/Education"
                  component={EducationForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Education/:id"
                  component={EducationForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Experience"
                  component={ExperienceForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Experience/:id"
                  component={ExperienceForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Courses"
                  component={CoursesForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Courses/:id"
                  component={CoursesForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Skills"
                  component={SkillsForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Skills/:id"
                  component={SkillsForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Language"
                  component={Language}
                />
                <AuthRoute
                  exact
                  path="/Profile/Language/:id"
                  component={Language}
                />
                <AuthRoute
                  exact
                  path="/Profile/Interest/:id"
                  component={Interest}
                  render={(Interests) => <Interest {...Interests} />}
                />
                <AuthRoute
                  exact
                  path="/Profile/Interest"
                  component={Interest}
                />
                <AuthRoute
                  exact
                  path="/Profile/Accounts"
                  component={AccountsForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Accounts/:id"
                  component={AccountsForm}
                />
                    <AuthRoute
                  exact
                  path="/CompanyProfile"
                  component={CompanyProfile}
                />
                  <AuthRoute
                  exact
                  path="/advisorProfile"
                  component={advisorProfile}
                />
                <Route exact path="*" component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
