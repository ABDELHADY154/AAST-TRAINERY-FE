/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import "../layout/Login.css";
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
            passwrodErr: error.response.data.errors.name,
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
    // console.log(this.state.error);

    if (this.state.error && this.state.error.emailErr) {
      Invaldemail = (
        <div>
          <div className='invalid-feedback'>
            {this.state.error && <p className='error'>{this.state.error.emailErr}</p>}
          </div>
          <div className='form-label-group'>
            <input
              type='text'
              className='form-control is-invalid error-input'
              id='validationServer05'
              placeholder='Student Email'
              required
            />
          </div>

          <div className='form-label-group'>
            <input
              type='password'
              id='inputPassword'
              className='form-control  is-invalid error-input'
              placeholder='Password'
              required
              onChange={(e) => (this.Password = e.target.value)}
            />
          </div>
        </div>
      );
    } else {
      var Invaldemail = (
        <div className='o-scroll'>
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

          <div className='form-label-group input-field'>
            <input
              type='password'
              id='inputPassword'
              className=''
              required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <label className='label'>Password</label>
          </div>
         
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

                        <div className='text-center py-3'>
                          <a className='small' href='#'>
                            Forgot password?
                          </a>
                        </div>
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

export default Login;
