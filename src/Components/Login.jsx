/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { login } from "../Api/AuthApi";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      data: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email: this.Email,
      password: this.Password,
    });
    this.setState({
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
    });
  };

  render() {
    console.log(this.peops);

    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (!token && !status) {
      return (
        <div className='container p2'>
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
    } else {
      return <Redirect to='/Home' />;
    }
  }
}

export default Login;
