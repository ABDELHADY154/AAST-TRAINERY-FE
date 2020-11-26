/** @format */
import { axios } from "./axios";
import React, { Component } from "react";

class Registry extends React.Component {
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
      .catch((errors) => {
        e.preventDefault();
        console.log(errors);
        // window.location.reload();
      });
    console.log(data);
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
            {/* <div className='col'>
              <input
                type='password'
                className='form-control'
                placeholder='re-enter password'
              />
            </div> */}
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
            </div>
          </div>
          {/* <div className='form-group'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='gridCheck'
              />
              <label className='form-check-label' for='gridCheck'>
                Check me out
              </label>
            </div>
          </div> */}
          <button type='submit' className='btn btn-primary btn-block'>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
export default Registry;
