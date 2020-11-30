/** @format */
import { axios } from "./axios";
import React, { Component } from "react";

class Registry extends React.Component {
  state = {
    data: [],
    error: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.Username,
      email: this.Email,
      password: this.Password,
      reg_no: this.RegNum,
      start_year: this.Fyear,
      end_year: this.Lyear,
    };
    axios
      .post("/register", data)
      .then((response) => {
        console.log(response.status);
        if (response.status == "200") {
          window.alert("Sent Successfully");
        }
      })
      .catch((error) => {
        this.setState({
          error: {
            emailErr: error.response.data.errors.email,
            regnumErr: error.response.data.errors.reg_no,
            startERR: error.response.data.errors.start_year,
            endERR: error.response.data.errors.end_year,
          },
        });
      });

    // console.table(data);
  };
  render() {
    return (
      <div className='container p2'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label>Username:</label>

              <input
                type='text'
                className='form-control'
                id='username'
                onChange={(e) => (this.Username = e.target.value)}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label>Email:</label>
              <input
                type='email'
                className='form-control'
                id='Email'
                onChange={(e) => (this.Email = e.target.value)}
              />
              <div className='alert-info'>
                {this.state.error && (
                  <p className='error'> {this.state.error.emailErr} </p>
                )}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <input
                type='password'
                class='form-control'
                placeholder='Enter your password'
                onChange={(e) => (this.Password = e.target.value)}
              />
              
            </div>
        
          </div>
          <div className='form-row pt-4'>
            <div className='form-group col-md-6'>
              <input
                type='text'
                className='form-control'
                id='Reg-num'
                placeholder='Enter your Registration number'
                onChange={(e) => (this.RegNum = e.target.value)}
              />
                 <div className='alert-info'>
                {this.state.error && (
                  <p className='error'> {this.state.error.regnumErr} </p>
                )}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label>Enter your first year in college:</label>
              <input
                type='text'
                className='form-control'
                id='Fyear'
                onChange={(e) => (this.Fyear = e.target.value)}
              />
                 <div className='alert-info'>
                {this.state.error && (
                  <p className='error'> {this.state.error.startERR} </p>
                )}
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label>when will sa</label>
              <input
                type='text'
                className='form-control'
                id='Lyear'
                onChange={(e) => (this.Lyear = e.target.value)}
              />
                 <div className='alert-info'>
                {this.state.error && (
                  <p className='error'> {this.state.error.endERR} </p>
                )}
              </div>
            </div>
          </div>
  
          <button type='submit' className='btn btn-primary btn-block'>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
export default Registry;
