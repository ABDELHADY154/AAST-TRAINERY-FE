/** @format */
import { axios } from "../Api/axios";
import React from "react";
// const MyFacebookLoader = () => <Facebook />;
import { Loader2 } from "../loader";
import { Redirect } from "react-router-dom";
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
    });
    const token = sessionStorage.getItem("token");
    const status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
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
        sessionStorage.setItem("token", response.data.response.data.token);
        sessionStorage.setItem("status", response.statusText);
        this.setState({
          token: sessionStorage.getItem("token"),
          status: sessionStorage.getItem("status"),
          loggedIn: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: {
            usernameErr: error.response.data.errors.name,
            emailErr: error.response.data.errors.email,
            regnumErr: error.response.data.errors.reg_no,
            departErr: error.response.data.errors.department_id,
            passwordErr: error.response.data.errors.password,
          },
        });
      });
  };
  render() {
    if (
      this.state.error ||
      this.state.error.usernameErr ||
      this.state.error.emailErr ||
      this.state.error.regnumErr ||
      this.state.error.departErr ||
      this.state.error.passwordErr
    ) {
      let Invaldedata = (
        <div>
          <div className='form-label-group'>
            <input
              type='name'
              placeholder='Enter your Full Name.'
              className='form-control is-invalid error-input'
              id='Lyear'
              onChange={(e) => (this.username = e.target.value)}
            />
            <div>
              {this.state.error && (
                <p className='error'> {this.state.error.usernameErr} </p>
              )}
            </div>
          </div>
          <div className='form-label-group'>
            <input
              type='text'
              className='form-control is-invalid error-input'
              id='validationServer05'
              placeholder='Student Email'
              required
            />
            <div>
              {this.state.error && (
                <p className='error'> {this.state.error.emailErr} </p>
              )}
            </div>
          </div>

          <div className='form-label-group'>
            <input
              type='password'
              id='inputPassword'
              className='form-control is-invalid error-input'
              placeholder='Password'
              required
              onChange={(e) => (this.Password = e.target.value)}
            />
            <div>
              {this.state.error && (
                <p className='error'> {this.state.error.passwordErr} </p>
              )}
            </div>
          </div>
          <h3 className='login-heading mb-5'>College Information</h3>

          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='text'
                className='form-control is-invalid error-input'
                id='Reg-num'
                placeholder='Enter your Registration number'
                onChange={(e) => (this.RegNum = e.target.value)}
              />
              <div>
                {this.state.error && (
                  <p className='error'> {this.state.error.regnumErr} </p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      var Invaldedata = (
        <div>
          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='name'
                placeholder='Enter your Full Name.'
                className='form-control'
                id='Lyear'
                onChange={(e) => (this.username = e.target.value)}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='email'
                className='form-control'
                id='Email'
                placeholder='Enter Your Sudent Email'
                onChange={(e) => (this.Email = e.target.value)}
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                onChange={(e) => (this.Password = e.target.value)}
              />
            </div>
          </div>
          <h3 className='login-heading mb-5'>College Information</h3>

          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='text'
                className='form-control'
                id='Reg-num'
                placeholder='Enter your Registration number'
                onChange={(e) => (this.RegNum = e.target.value)}
              />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className='container-fluid'>
          <div className='row no-gutter'>
            <div className='col-md-9 col-lg-7 '>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7 col-lg-7 mx-auto signup h-100'>
                      <h3 className='login-heading mb-5'>Sign Up</h3>
                      <form onSubmit={this.handleSubmit}>
                        {Invaldedata}

                        <div className='form-row'>
                          <div className='form-group col-12'>
                            {this.state.loading === false ? (
                              <Loader2 />
                            ) : (
                              <select
                                type='text'
                                className='form-control'
                                id='departs'
                                onChange={(e) => (this.depart = e.target.value)}
                              >
                                <option>Please Select Your Department</option>

                                {this.state.departs.map((depart) => (
                                  <option value={depart.id} key={depart.id}>
                                    {depart.dep_name}
                                  </option>
                                ))}
                              </select>
                            )}
                            {this.state.error && (
                              <p className='error'>
                                {this.state.error.departErr}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          className='btn btn-lg col-sm-5 btn-outline-primary d-block text-uppercase font-weight-bold mb-2'
                          type='submit'
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='img-fluid d-none d-md-flex col-md-5 col-lg-5 bg-image rounded'></div>
          </div>
        </div>
      );
    }
  }
}

export default Registry;
