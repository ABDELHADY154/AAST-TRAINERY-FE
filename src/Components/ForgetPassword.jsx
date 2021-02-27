/** @format */
import React from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../Api/axios";
import "../layout/Sign.css";
import loginBG from "../Components/assests/imgs/login.jpg";
import { Link } from "react-router-dom";

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
    e.target.reset(e);
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
        this.setState({
          error: {
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
    if (this.state.loggedIn === true) {
      return <Redirect to='/Home' />;
    }
    return (
      <div className='container-fluid h-100 '>
        <div className='row no-gutter'>
          <div className='col-md-11 col-lg-9 '>
            <div className='d-flex align-items-center py-2'>
              <div className='container my-5'>
                <div className='row'>
                  <div className='col-md-11 col-lg-9 mx-auto  h-100'>
                    <h3 className=' mb-5 signTitle'>Forget Password</h3>
                    <form className='col-md-8 col-lg-10' onSubmit={this.handleSubmit}>
                      <div className='col-md-10 col-lg-12 form-label-group input-field field'>
                        {this.state.forgot ? (
                          <div>
                            <div class='alert alert-success' role='alert'>
                              An Email Has Been Sent
                            </div>
                          </div>
                        ) : (
                          <div>
                            <label className='label'>Student Email</label>
                            <input
                              type='text'
                              className={this.state.error.emailErr ? "wrong" : ""}
                              onChange={(e) => (this.Email = e.target.value)}
                            />
                            {this.state.error && (
                              <p className='error'>{this.state.error.emailErr}</p>
                            )}
                          </div>
                        )}
                      </div>
                      <div className='col-md-10 col-lg-11 '>
                        <Link to='/Register'>
                          <p className='account'>Don’t have an account ?</p>
                        </Link>
                        <button
                          className='btn shadow-none submitBtn col-sm-3 col-md-4 col-lg-3 btn-outline-primary d-block font-weight-bold mb-2'
                          type='submit'
                        >
                          Reset
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

export default Forget;
