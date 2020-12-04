/** @format */
import React, { Component } from "react";
import { login } from "../Auth/AuthApi";

class Login extends React.Component {
  // constructor() {
  //   super();
  state = {};

  // }
  handleSubmit = async (e) => {
    e.preventDefault();
    login({
      "email": this.Email,
      "password": this.Password,
    });

  };

  // async login() {
  //   const user = await login(this.props);
  //   console.log(this.props);
  // if (user.error) this.setState({ error: user.error });
  // else this.setState({ user: user.data });
  // }
  // if (this.state.loggedIn === true) {

  render() {
    // if (this.state.loggedIn) {
    //   return <Redirect to='/Home' />;
    // }

    return (
      <div className='container p2'>
        <div className='container p2'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Email address</label>
              <div className='alert-info'>
                {this.state.emailErr && (
                  <p className='error'> {this.state.emailErr} </p>
                )}
              </div>
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
            <button
              type='submit'
              className='btn btn-primary'
              // onClick={() => {
              //   Auth.Login(() => {
              //     this.props.history.push("/Home");
              //   });
              // }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
