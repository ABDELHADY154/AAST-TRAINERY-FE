/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import "../layout/Login.css";
class Forget extends React.Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      error: "",
      forgot: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const data = {
      email: this.Email,
    };
    return await axios
      .post("/forgot", data)
      .then((response) => {
        this.setState({
          forgot: true,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.errors.message) {
          // console.log(error.response.data.errors.message);
          this.setState({
            error: {
              emailErr: error.response.data.errors.message,
            },
          });
        }
      });
  };

  // });

  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {

    if (this.state.error && this.state.error.emailErr) {
      Invaldemail = (
        <div>
          <div className='form-label-group input-field'>
            <input
              type='email'
              id='inputEmail'
              className=''
              required
              onChange={(e) => (this.Email = e.target.value)}
            ></input>
            <label className='label'>Email</label>
            <div className='alert alert-danger' role='alert'>
              {this.state.error.emailErr}
            </div>
          </div>
        </div>
      );
    } else {
      var Invaldemail = (
        <div>
          {this.state.forgot ? (
            <div>
              <div class='alert alert-success' role='alert'>
                An Email Has Been Sent
              </div>
            </div>
          ) : (
            <div className='form-label-group input-field'>
              <input
                type='email'
                id='inputEmail'
                className=''
                required
                onChange={(e) => (this.Email = e.target.value)}
              ></input>
              <label className='label'>Email</label>
            </div>
          )}
        </div>
      );
    }

    if (this.state.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className='container-fluid h-100 no-scroll'>
          <div className='row no-gutter '>
            <div className='col-md-9 col-lg-7 '>
              <div className='login d-flex align-items-center p-3'>
                <div className='container '>
                  <div className='row m-auto'>
                    <div className='col-md-7 col-lg-7 mx-auto login h-100 rounded '>
                      <h3 className='login-heading'>Sign In </h3>
                      <form onSubmit={this.handleSubmit}>
                        {Invaldemail}
                        <button
                          className='btn btn-lg col-sm-5 btn-outline-primary d-block text-uppercase font-weight-bold mb-2 py-3'
                          type='submit'
                        >
                          Sign in
                        </button>
                        <a className='color-orange py-3' href='/Register'>
                          Dont' Have An Account ?
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-8 col-md-8 col-xl-6 align-self-end bg-image rounded'></div>
          </div>
        </div>
      );
    }
  }
}

export default Forget;
