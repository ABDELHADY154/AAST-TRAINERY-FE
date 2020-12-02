/** @format */
import { axios } from "./axios";
import React from "react";
import "../styles/auth.css";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  state = {
    loggedIn: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const Login = {
      email: this.email,
      password: this.Password,
    };
    await axios
      .post("/login", Login)
      .then((response) => {
        // console.log(response.status);
        localStorage.setItem("token", response.data.response.data.token);
        this.setState({
          loggedIn: true,
        });
        console.log(this.state.loggedIn, 22);

        // if (response.status == "422") {
        //   this.setState({
        //     error: {
        //       emailErr: "",
        //     },
        //   });
        // }
      })
      .catch((error) => {
        this.setState({
          emailErr: error.response.data.errors.email,
        });
      });
  };

  render() {
    if ((this.state.loggedIn = true)) {
      // return <Redirect user={this.state.user} />;
    }
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
                onChange={(e) => (this.email = e.target.value)}
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
export default Login;
