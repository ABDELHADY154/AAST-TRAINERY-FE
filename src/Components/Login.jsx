/** @format */
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import loginBG from "../Components/assests/imgs/login.jpg";
import "../layout/Sign.css";
import { MdWarning } from "react-icons/md";
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
        console.log(error.response.data.errors);
        if (error.response.data.errors) {
          this.setState({
            error: {
              emailErr: error.response.data.errors.email,
              passwordErr: error.response.data.errors.password,
            },
          });
        }
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

    if (this.state.error) {
      Invaldemail = (
        <div>
          <div className="col-md-11 col-lg-12 form-label-group input-field field">
            <label className="label">Student Email</label>
            <input
              type="email"
              class="wrong"
              // required
              onChange={(e) => (this.Email = e.target.value)}
            />
            {/* <label title='Email' /> */}
            {this.state.error && (
              <p className="error">{this.state.error.emailErr}</p>
            )}
          </div>

          <div className="col-md-11 col-lg-12 form-label-group input-field field">
            <label className="label">Password</label>
            <input
              type="password"
              class="wrong"
              // required
              onChange={(e) => (this.Password = e.target.value)}
            />
            {<p className="error">{this.state.error.passwordErr}</p>}
          </div>
        </div>
      );
    } else {
      var Invaldemail = (
        <div>
          <div className="col-md-11 col-lg-12 form-label-group input-field field">
            <label className="label">Student Email</label>
            <input
              type="email"
              // required
              onChange={(e) => (this.Email = e.target.value)}
            />
            {/* <label title='Email' /> */}
          </div>

          <div className="col-md-11 col-lg-12 form-label-group input-field field">
            <label className="label">Password</label>
            <input
              type="password"
              // required
              onChange={(e) => (this.Password = e.target.value)}
            />
            {/* <label title='Password' /> */}
          </div>
        </div>
      );
    }

    if (this.state.loggedIn === true) {
      return <Redirect to="/Home" />;
    } else {
      return (
        <div className="container-fluid h-100">
          <div className="row no-gutter ">
            <div className="col-md-11 col-lg-9 ">
              <div className=" d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-11 col-lg-9 mx-auto signup h-100">
                      <h3 className=" mb-5 signTitle">Sign In </h3>
                      <form
                        className="col-md-8 col-lg-10"
                        onSubmit={this.handleSubmit}
                      >
                        {Invaldemail}
                        <div className="col-md-10 col-lg-12">
                          <Link to="/Register">
                            <p className="account">Don’t have an account ?</p>
                          </Link>
                          <Link to="/Forget">
                            <p className="agree">Forgot Password ?</p>
                          </Link>
                          <button
                            className="btn shadow-none submitBtn col-sm-3 col-md-4 col-lg-3 btn-outline-primary d-block text-uppercase font-weight-bold mb-2"
                            type="submit"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-fluid d-none d-md-flex col-md-3 col-lg-4 ">
              <img
                src={loginBG}
                class="img-fluid bg-image-no-img h-100  "
                width="100%"
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
