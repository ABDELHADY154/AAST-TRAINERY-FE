/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import loginBG from "../Components/assests/imgs/login.jpg";
import "../layout/Sign.css";
import { MdWarning } from "react-icons/md";
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
        console.log(error.response.data.errors);

        if (error.response.data.errors) {
          this.setState({
            error: {
              emailErr: error.response.data.errors.email,
              passwordErr: error.response.data.errors.password,
            },
          });
        }
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
          <div className='col-md-10 col-lg-12 form-label-group input-field field'>
            <input
              type='email'
              class='wrong'
              required
              onChange={(e) => (this.Email = e.target.value)}
            />
            <label title='Email' />
            {this.state.error && <p className='error'>{this.state.error.emailErr}</p>}
          </div>

          <div className='col-md-10 col-lg-12 form-label-group input-field field'>
            <input
              type='password'
              class='wrong'
              required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <label title='Password' />
            {this.state.error && <p className='error'>{this.state.error.passwordErr}</p>}
          </div>
        </div>
      );
    } else {
      var Invaldemail = (
        <div className=''>
          <div className='col-md-10 col-lg-12 form-label-group input-field field'>
            <input
              type='email'
              required
              onChange={(e) => (this.Email = e.target.value)}
            />
            <label title='Email' />
          </div>

          <div className='col-md-10 col-lg-12 form-label-group input-field field'>
            <input
              type='password'
              required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <label title='Password' />
          </div>
        </div>
      );
    }

    if (this.state.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className='container-fluid h-100'>
          <div className='row no-gutter'>
            <div className='col-md-10 col-lg-8 '>
              <div className='d-flex align-items-center py-2'>
                <div className='container my-5'>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto  h-100'>
                      <h3 className=' mb-5 signTitle'>Login</h3>
                      <form className='col-md-8' onSubmit={this.handleSubmit}>
                        {Invaldemail}
                        <div className='col-md-10 col-lg-12'>
                          <a href='/Register'>
                            <p className='account'>Don’t have an account ?</p>
                          </a>
                          <a href='/Forget'>
                            <p className='agree'>Forgot Password ?</p>
                          </a>
                          <button
                            className='btn shadow-none submitBtn col-sm-5 col-5 col-md-4 col-xs-5 btn-outline-primary d-block text-uppercase font-weight-bold mb-2'
                            type='submit'
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='img-fluid d-none d-md-flex col-md-3 col-lg-4 '>
              <img src={loginBG} class='img-fluid bg-image-no-img h-100 ' width='100%' />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
