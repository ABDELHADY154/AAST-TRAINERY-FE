import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "@pathofdev/react-tag-input/build/index.css";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

// import { Link } from "react-router-dom";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      id: 0,
      error: {},
      FormLoading: false,
      curpw: "",
      newpw: "",
      newpw2: "",
    };
  }
  async componentDidMount() {
      this.setState({ FormLoading: true });
      await axios
        .get("/W/student/studentAccount")
        .then((res) => {
          this.setState({
            email: res.data.response.data.email,
            subscribed : res.data.response.data.subscribed,
            FormLoading: false 
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({ FormLoading: false });
        });
    
    // console.log(this.props.match.params.id);
  }
  handleupdateEmail = async (e) => {
    this.setState({ FormLoading: true });

    e.preventDefault();
    const data = {
      email: this.state.email1,
  
    };
    // if (this.props.match.params.id) {
      await axios
        .put("/W/student/updateEmail", data)
        .then((response) => {
          this.setState({
            loggedIn: true,
            FormLoading: false,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({
            FormLoading: false,

            error: {
              emailErr: error.response.data.errors.email,
            },
          });
          console.log(error);
        });
    // }
  };
  handlechangepassword =async (e ) => {
e.preventDefault();
this.setState({ FormLoading: true });
const data = {
  old_password: this.state.curpw,
  password: this.state.nwpw,
  password_confirmation: this.state.nwpw2,

};

await axios
.put("/W/student/updatePassword", data)
.then((response) => {
  this.setState({
    FormLoading: false,
    loggedIn: true,

  });
})
.catch((error) => {
  if (error.response.data.status === 401) {
    sessionStorage.clear("token");
    sessionStorage.clear("status");
    this.setState({ loggedIn: false });
    window.location.reload();
  }
  this.setState({
    FormLoading: false,
    error: {
      curpwErr: error.response.data.errors.old_password,
      nwpwErr: error.response.data.errors.password,
    },
  });
});
  }





  handleSubscription = async (e) => {
    this.setState({ FormLoading: true });
    e.preventDefault();
 
    if (this.state.subscribed == false) {
      await axios
        .get("/W/student/subscribe")
        .then((response) => {
          this.setState({
            FormLoading: false,
            subscribe:false,    loggedIn: true,

          });    
        }).catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: true    ,         FormLoading: false,
            });
            window.location.reload();
          }
    
        });
        
       
    }
  };
  
  handleunSubscription = async (e) => {
    this.setState({ FormLoading: true });
    e.preventDefault();
 
    if (this.state.subscribed == true) {
      await axios
        .get("/W/student/unsubscribe")
        .then((response) => {
          this.setState({
            loggedIn: true    ,             FormLoading: false,
            subscribe:true,
          });
        }).catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false  });
            window.location.reload();
          }
          this.setState({
            FormLoading: false,
            loggedIn: true    , 
              });
        });
       }
  };
  handleDelete = async (e) => {
    this.setState({ FormLoading: true });
    e.preventDefault();
   var  data = {
      password: this.state.currpw,
      password_confirmation :  this.state.currpw,
    }
      await axios
        .post("/W/student/deleteAccount", data)
        .then((response) => {
          this.setState({
            loggedIn: true    ,       
            FormLoading: false,
            subscribe:true,
          });
        }).catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false  });
            window.location.reload();
          }
          this.setState({
            FormLoading: false,
            // loggedIn: true    , 
            currpwErr : error.response.data.errors.password
              });
        });
       

    
  }






  handlechangepassword = async (e) => {
    this.setState({ FormLoading: true });
    const data = {
      old_password: this.state.curpw,
      password: this.state.newpw,
      password_confirmation: this.state.newpw2,
    };
    await axios
      .put("/W/student/updatePassword", data)
      .then((res) => {
        this.setState({
          loggedIn: true,
          FormLoading: false,
        });
        console.log(res);
      })

      .catch((err) => {
        this.setState({
          error: {
            curpwErr: err.response.data.errors.old_password,
            newpwErr: err.response.data.errors.password,
          },
          FormLoading: false,
        });
        console.log(this.state.error.curpwErr);
      });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/Profile" />;
    }
    // console.log(this.state.level);
    return (
      <div>
        <div className="container wrapper">
          <div>
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold "
                  >
                    Change Password
                  </label>
                  <p>
                    To change your account password, enter your current
                    password, then enter your new password and confirm it.
                  </p>
                  <input
                    type="Password"
                    className={
                      this.state.error && this.state.error.curpwErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    placeholder="Current Password"

                    onChange={(e) =>
                      this.setState({ curpw: e.target.value })
                    }
                  />
                  {this.state.error && this.state.error.curpwErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.curpwErr}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    style={{ marginTop: 10 }}
                    type="Password"
                    className={
                      this.state.error && this.state.error.nwpwErr
                        ? " form-control editInput wrong"
                        : "form-control editInput "
                    }

                    placeholder="New Password"
                    onChange={(e) =>
                      this.setState({ nwpw: e.target.value })
                    }
                  />
                  {this.state.error && this.state.error.nwpwErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.nwpwErr}
                    </p>
                  ) : (
                    ""
                  )}
                  <input
                    style={{ marginTop: 10 }}
                    type="Password"
                    className={
                      this.state.error && this.state.error.languageErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    placeholder="Confirm Password  "
                    onChange={(e) =>
                      this.setState({ nwpw2: e.target.value })
                    }
                  />
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none" onClick={this.handlechangepassword}>
                    Update
                  </button>
                </div>
              </LoadingOverlay>
            </form>
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Account Email
                  </label>
                  <p>
                    You are already registered with the following email:{" "}
                    <span style={{ color: "#cd8930" }} className="text-wrap">
                     {this.state.email+ " "} 
                    </span> 
                    If you would like to sign-in and receive emails on a
                    different address, write this new email here:
                  </p>
                  <input
                    type="email"
                    className={
                      this.state.error && this.state.error.emailErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id="email"
                    placeholder="new email must be @student.aast.edu"
                    onChange={(e) => this.setState({ email1: e.target.value })}
                  />
                  {this.state.error && this.state.error.emailErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.error.emailErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none" onClick={this.handleupdateEmail}>
                    Update
                  </button>
                </div>
              </LoadingOverlay>
            </form>
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    My Subscriptions
                  </label>
                  <p>
                    You will receive emails containing the latest jobs which
                    match your preferences.
                  </p>
             
                    {this.state.subscribed === true ?     
                    <div className="">
 <input
                    type="checkbox"
                    name="inlineRadioOptions"
                    style={{ marginBottom: 5 }}
                    className="checkbox signInput"
                    checked

                    />
                    <label class="form-check-label mx-2" for="inlineCheckbox3">   Receive Newsletter
</label>


                    </div>
                                            
                    : (

<div className=""> <input
                      type="checkbox"
                      name="inlineRadioOptions"
                      style={{ marginBottom: 5 }}
                      className="checkbox signInput"
                                            /> 
                                                           <label class="form-check-label mx-2" for="inlineCheckbox3">   Receive Newsletter</label></div>
                                            
                                            
                                            )
                                            }
            
                </div>
                <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  {this.state.subscribed == true ? (   
                       <button type="submit" class="btn updateBtn shadow-none" onClick={this.handleunSubscription}>
                    Unsubscribe
                  </button>
                  ):
                  <button type="submit" class="btn updateBtn shadow-none" onClick={this.handleSubscription}>
                  Update
                </button>
                
                }
            
                </div>
              </LoadingOverlay>
            </form>{" "} {/*
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Ad-Cancellation
                  </label>
                  <p>Monthly pay to advois seeing Ads</p>
                </div>
                <div class="mt-1 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn updateBtn shadow-none hide">
                    Up
                  </button>
                </div> 
              </LoadingOverlay>
            </form>{" "}*/}
            <hr className="w-75 " />
            <form
              className="row g-3 mb-3 mt-1"
              onSubmit={this.handleSubmitLanguage}
            >
              <LoadingOverlay
                active={this.state.FormLoading}
                spinner={<BounceLoader color="#cd8930" />}
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgb(255, 255, 255)",
                  }),
                }}
              >
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0">
                  <label
                    for="inputSkill"
                    className="form-label editLabel fw-bold"
                  >
                    Delete Account
                  </label>
                  <p>Permanently delete my account</p>
                  <input
                    type="Password"
                    className={
                       this.state.currpwErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    placeholder="Please Enter Your Password"
                    onChange={(e) =>
                      this.setState({ currpw: e.target.value })
                    }
                  />
                       { this.state.currpwErr ? (
                    <p className="editerror text-capitalize">
                      {this.state.currpwErr}
                    </p>
                  ) : (
                    ""
                  )}
                  
                </div>
                <div class="mt-5 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button type="submit" class="btn deleteBtn shadow-none" onClick={this.handleDelete}>
                    Delete
                  </button>
                </div>
              </LoadingOverlay>
            </form>
          </div>
        </div>
        <div>
          <Footer2 />
        </div>{" "}
      </div>
    );
  }
}
export default Setting;
