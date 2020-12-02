/** @format */
import { axios } from "./axios";
import React, { Component } from "react";
import ContentLoader, { Facebook } from "react-content-loader";
// const MyFacebookLoader = () => <Facebook />;
import { Loader2 } from "../loader";

class Registry extends React.Component {
  state = {
    error: "",
    departs: [],
    loading: false,
  };

  async componentDidMount() {
    await axios.get("/departments").then((dep) => {
      this.setState({
        departs: dep.data.response.data,
        loading: true,
      });
      console.log(this.state);
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    const data = {
      name: this.username,
      email: this.Email,
      password: this.Password,
      reg_no: this.RegNum,
      department_id: this.depart,
    };

    await axios
      .post("/register", data)
      .then((response) => {
        // console.log(response.status);
        if (response.status == "200") {
          window.alert("Sent Successfully");
        }
      })
      .catch((error) => {
        this.setState({
          error: {
            usernameErr: error.response.data.errors.name,
            emailErr: error.response.data.errors.email,
            regnumErr: error.response.data.errors.reg_no,
            departErr: error.response.data.errors.department_id,
            passwordErr: error.response.data.errors.password,
          },
        });
        // console.log(error.response.data.errors);
      });

    // console.table(this.state.error.departErr);
  };
  render() {
    // if (this.state.loading == false) {
    //   return (

    //   );
    // } else if (this.state.loading == true) {
    return (
      <div className=' container-md m-auto'>
        <div className='mx-auto'>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div className='form-row'>
              <div className='form-group col-6'>
                <input
                  type='name'
                  placeholder='Enter your Full Name.'
                  className='form-control'
                  id='Lyear'
                  onChange={(e) => (this.username = e.target.value)}
                />
                <div className='alert-info'>
                  {this.state.error && (
                    <p className='error'> {this.state.error.usernameErr} </p>
                  )}
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-6'>
                <input
                  type='email'
                  className='form-control'
                  id='Email'
                  placeholder='Enter Your Sudent Email'
                  onChange={(e) => (this.Email = e.target.value)}
                />
                <div className='alert-info'>
                  {this.state.error && (
                    <p className='error'> {this.state.error.emailErr} </p>
                  )}
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-6'>
                <input
                  type='password'
                  class='form-control'
                  placeholder='Enter your password'
                  onChange={(e) => (this.Password = e.target.value)}
                />
                <div className='alert-info'>
                  {this.state.error && (
                    <p className='error'> {this.state.error.passwordErr} </p>
                  )}
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-6'>
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
              <div className='form-group col-6'>
                {this.state.loading == false ? (
                    <Loader2 />
                ) : (
                  <select
                    type='text'
                    placeholder='Enter your ....'
                    className='form-control'
                    id='departs'
                    onChange={(e) => (this.depart = e.target.value)}
                  >
                    {this.state.departs.map((depart) => (
                      <option value={depart.id}>{depart.dep_name}</option>
                    ))}
                  </select>
                )}
                {this.state.error && (
                  <p className='error'> {this.state.error.departErr} </p>
                )}{" "}
              </div>
            </div>

            <button type='submit' className='btn btn-primary btn-block'>
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registry;
