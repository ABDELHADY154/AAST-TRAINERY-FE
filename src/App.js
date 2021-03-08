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
import ExperianceForm from "./Components/EditProfile/ExperianceForm";
import GeneralForm from "./Components/EditProfile/GeneralForm";
import SkillsForm from "./Components/EditProfile/SkillsForm";
import GeneralInfo from "./Components/EditProfile/GeneralInfo";
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
    return (
      <BrowserRouter>
        {this.state.loggedIn == true ? (
          <AuthNav setUser={this.setUser} />
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

<<<<<<< HEAD
                <AuthRoute exact path='/Profile/General' component={GeneralForm} />

                <AuthRoute exact path='/Profile/Education' component={EducationForm} />
=======
>>>>>>> parent of 6fe2cf8 (Merge pull request #73 from ABDELHADY154/Feature-StudentExperienceInfo_mohanad-magdy)
                <AuthRoute
                  exact
                  path="/Profile/General"
                  component={GeneralForm}
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
                  path="/Profile/Experiance"
                  component={ExperianceForm}
                />
<<<<<<< HEAD
                <AuthRoute exact path='/Profile/Courses' component={CoursesForm} />
                <AuthRoute exact path='/Profile/Skills' component={SkillsForm} />
                <AuthRoute exact path='/Profile/Skills/:id' component={SkillsForm} />
                <AuthRoute exact path='/Profile/Accounts' component={AccountsForm} />
=======
                <AuthRoute
                  exact
                  path="/Profile/Courses"
                  component={CoursesForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Skills"
                  component={SkillsForm}
                />
                <AuthRoute
                  exact
                  path="/Profile/Accounts"
                  component={AccountsForm}
                />
>>>>>>> parent of 6fe2cf8 (Merge pull request #73 from ABDELHADY154/Feature-StudentExperienceInfo_mohanad-magdy)

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
