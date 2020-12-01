/** @format */
import { axios } from "./axios";
import React from "react";
import "../styles/auth.css";
class Login extends React.Component {
  state = {
    data: [],
    error: "",
  };
  handleS;
  handleSubmit = (e) => {
    e.preventDefault();

    const Login = {
      email: this.email,
      password: this.Password,
    };
    axios
      .post("/login", Login)
      .then((response) => {
        console.log(response.status);
        localStorage.setItem("token", response.data.response.data.token);
        if (response.status == "201") {
          window.alert("Sent Successfully");
          // console.log(response.data.response.data.token);
        }
      })
      .catch((error) => {
        e.preventDefault();
        this.setState({
          error: {
            emailErr: error.response.data.errors.email,
          },
        });
      });
  };
  render() {
    console.log(this.state.error);

    return (
      <div className='container p2'>
        <div className='container p2'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Email address</label>
              <div className='invalid-feedback'>{this.state.error.emailErr}</div>

              <input
                type='email'
                className='form-control'
                id='email'
                aria-describedby='emailHelp'
                onChange={(e) => (this.email = e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
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
