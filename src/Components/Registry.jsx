/** @format */
import { axios } from "../Api/axios";
import React from "react";
// const MyFacebookLoader = () => <Facebook />;
import { Loader2 } from "../loader";
import { Redirect } from "react-router-dom";
import "../layout/Registry.css";
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
    // e.target.reset();

    const data = {
      name: this.username,
      email: this.Email,
      password: this.Password,
      password_confirmation: this.password_confirmation,
      gender: this.gender,
      reg_no: this.RegNum,
      department_id: this.depart,
    };
    console.log(data);
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
        console.log(response);
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
            passwordConfErr: error.response.data.errors.password,
            genderErr: error.response.data.errors.gender,
          },
        });
      });
  };
  render() {
    if (this.state.error) {
      Invaldedata = (
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
              {this.state.error && (
                <p className='error'>{this.state.error.usernameErr}</p>
              )}
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
              {this.state.error && <p className='error'>{this.state.error.emailErr}</p>}
            </div>
          </div>

          <div className='form-label-group'>
            <h2>Gender</h2>
            <div class='form-check form-check-inline'>
              <input
                class=''
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio1'
                value='male'
                onChange={(e) => (this.gender = e.target.value)}
              />
              <label class='form-check-label' for='inlineCheckbox3'>
                Male
              </label>
            </div>
            <div class='checkbox form-check-inline'>
              <input
                class=''
                type='radio'
                name='inlineRadioOptions'
                id='Gender'
                value='female'
                onChange={(e) => (this.gender = e.target.value)}
              />
              <label class='form-check-label' for='inlineCheckbox3'>
                Female
              </label>
            </div>
            {this.state.error && <p className='error'>{this.state.error.genderErr}</p>}
          </div>

          <div className='form-row'>
            <div className='form-group col-12'>
              <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                onChange={(e) => (this.Password = e.target.value)}
              />
              <p className='error'> {this.state.error.passwordConfErr} </p>
            </div>
            <div className='form-group col-12'>
              <input
                type='password'
                className='form-control'
                placeholder='ReEnter your password'
                onChange={(e) => (this.password_confirmation = e.target.value)}
              />
              <p className='error'> {this.state.error.passwordConfErr} </p>
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
              {this.state.error && (
                <p className='error'> {this.state.error.regnumErr} </p>
              )}
            </div>
          </div>

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
              {this.state.error && <p className='error'>{this.state.error.departErr}</p>}
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

          <div className='form-label-group'>
            <h2>Gender</h2>
            <div class='form-check form-check-inline'>
              <input
                class=''
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio1'
                value='male'
                onChange={(e) => (this.gender = e.target.value)}
              />
              <label class='form-check-label' for='inlineCheckbox3'>
                Male
              </label>
            </div>
            <div class='checkbox form-check-inline'>
              <input
                class=''
                type='radio'
                name='inlineRadioOptions'
                id='Gender'
                value='female'
                onChange={(e) => (this.gender = e.target.value)}
              />
              <label class='form-check-label' for='inlineCheckbox3'>
                Female
              </label>
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
            <div className='form-group col-12'>
              <input
                type='password'
                className='form-control'
                placeholder='ReEnter your password'
                onChange={(e) => (this.password_confirmation = e.target.value)}
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
              {this.state.error && <p className='error'>{this.state.error.departErr}</p>}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.loggedIn === "0000") {
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

                        <button
                          className='btn btn-lg col-sm-5 btn-outline-primary d-block text-uppercase font-weight-bold mb-2'
                          type='submit'
                        >
                          Sign up
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
