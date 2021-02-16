/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import "../layout/Sign.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      error: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {
      email: this.Email,
      password: this.Password,
    };
    return await axios
      .post("/login", data)
      .then((response) => {
        sessionStorage.setItem("token", response.data.response.data.token);
        sessionStorage.setItem("status", response.statusText);
        this.props.setUser(true);
        this.setState({
          loggedIn: true,
        });
      })
      .catch((error) => {
        this.setState({
          error: {
            passwrodErr: error.response.data.errors.name,
            emailErr: error.response.data.errors.email,
          },
        });
      });
  };

  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {
    // console.log(this.state.error);

    if (this.state.error && this.state.error.emailErr) {
      Invaldemail = (
        <div>
          <div className="invalid-feedback">
            {this.state.error && (
              <p className="error">{this.state.error.emailErr}</p>
            )}
          </div>
          <div className="col-md-10 col-lg-12 form-label-group input-field">
            <input
              type="text"
              // required
            />
            <label className="label">Email</label>
          </div>

          <div className="col-md-10 col-lg-12 form-label-group input-field">
            <input
              type="password"
              id="inputPassword"
              // required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <label className="label">Password</label>
          </div>
        </div>
      );
    } else {
      var Invaldemail = (
        <div className="">
          <div className="col-md-10 col-lg-12 form-label-group input-field">
            <input
              type="email"
              id="inputEmail"
              // required
              onChange={(e) => (this.Email = e.target.value)}
            ></input>
            <label className="label">Email</label>
          </div>

          <div className="col-md-10 col-lg-12 form-label-group input-field">
            <input
              type="password"
              id="inputPassword"
              // required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <label className="label">Password</label>
          </div>
        </div>
      );
    }

    if (this.state.loggedIn === true) {
      return <Redirect to="/Home" />;
    } else {
      return (
        <div className="container-fluid h-100 no-scroll">
          <div className="row no-gutter ">
            <div className="col-md-9 col-lg-7 ">
              <div className=" d-flex align-items-center p-3">
                <div className="container ">
                  <div className="row m-auto">
                    <div className="col-md-7 col-lg-7 mx-auto  h-100 rounded ">
                      <h3 className=" mb-5 signTitle">Sign In </h3>
                      <form onSubmit={this.handleSubmit}>
                        {Invaldemail}

                        <a className="account" href="/Register">
                          Dont' Have An Account ?
                        </a>

                        <div className="">
                          <a className="account agree" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <button
                          className="btn shadow-none submitBtn col-sm-5 btn-outline-primary d-block text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-fluid d-none d-md-flex col-md-3 col-lg-4 bg-image "></div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
