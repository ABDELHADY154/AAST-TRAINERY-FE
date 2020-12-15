/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";

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
            usernameErr: error.response.data.errors.name,
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
    if (this.state.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className='conta¬iner p2'>
          <div className='container p2'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label>Email address</label>

                <input
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  onChange={(e) => (this.Email = e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='Password'
                  onChange={(e) => (this.Password = e.target.value)}
                />
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label'>Check me out</label>
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
