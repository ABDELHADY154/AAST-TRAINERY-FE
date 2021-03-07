import React, { Component, useState } from "react";
// import { axios } from "../../Api/axios";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import EditNav from "./EditNav";
export default class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }
  state = {
    startDate: new Date(),
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };
  handleDelete = async (e) => {
    if (this.props.match.params.id) {
      await axios
        .delete(`/W/student/profile/education/${this.props.match.params.id}`)
        .then((response) => {
          this.setState({
            loggedIn: true,
          });
        })
        .catch((error) => {
          if (error.response) {
            this.setState({
              done: true,
            });
          }
          window.location.reload();
        });
    } else
      this.setState({
        loggedIn: false,
      });
  };
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      await axios
        .get(`/W/student/profile/education/${this.props.match.params.id}`)
        .then((res) => {
          console.log(res);
          this.setState({
            id: res.data.response.data.id,
            SchoolName: res.data.response.data.school_name,
            region: res.data.response.data.city,
            country: res.data.response.data.country,
            From: res.data.response.data.from,
            To: res.data.response.data.to,
            cred_url: res.data.response.data.credential_url,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
        });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      school_name: this.state.SchoolName,
      city: this.state.region,
      country: this.state.country,
      from: this.state.From,
      to: this.state.To,
      cred_url: this.state.SchoolUrl,
    };
    if (this.props.match.params.id) {
      return await axios
        .post(`/W/student/profile/education/${this.props.match.params.id}`, data)
        .then((response) => {
          this.setState({
            done: true,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }

          this.setState({
            error: {
              schoolNameErr: error.response.data.errors.school_name,
              countryErr: error.response.data.errors.country,
              cityErr: error.response.data.errors.city,
              fromErr: error.response.data.errors.from,
              toErr: error.response.data.errors.to,
            },
          });
        });
    } else {
      return await axios
        .post("/W/student/profile/education", data)
        .then((response) => {
          this.setState({
            done: true,
          });
          // console.log(response);
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }

          this.setState({
            error: {
              schoolNameErr: error.response.data.errors.school_name,
              countryErr: error.response.data.errors.country,
              cityErr: error.response.data.errors.city,
              fromErr: error.response.data.errors.from,
              toErr: error.response.data.errors.to,
            },
          });
          console.log(this.state.error);
        });
    }
  };
  setactive(val) {
    this.setState({ Education: val });
  }
  render() {
    const { country, region } = this.state;
    if (this.state.loggedIn === false) {
      return <Redirect to='/Profile' />;
    }
    if (this.state.done === true) {
      return <Redirect to='/Profile' />;
    }
    // console.log(this.state);
    return (
      <div>
        <div className='container '>
          <EditNav setactive={"Education"} />

          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            <div className=' row'>
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                <label for='inputfullname' class='form-label editLabel '>
                  School Name <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.schoolNameErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  id='fullname'
                  placeholder='Please enter your full name'
                  onChange={(e) => this.setState({ SchoolName: e.target.value })}
                  value={this.state.SchoolName ? this.state.SchoolName : ""}
                />
                <p className='red'>
                  {this.state.error ? this.state.error.schoolNameErr : ""}
                </p>
              </div>
              <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                <label for='inputCountry' className='form-label editLabel'>
                  Country
                </label>
                <CountryDropdown
                  value={this.state.country ? this.state.country : country}
                  onChange={(val) => this.selectCountry(val)}
                  className={
                    this.state.error && this.state.error.countryErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  id='validationServer04'
                  aria-describedby='validationServer04Feedback'
                />
                <p className='red'>
                  {this.state.error ? this.state.error.countryErr : ""}
                </p>
              </div>
              <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                <label for='inputCity' className='form-label editLabel'>
                  City
                </label>
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)}
                  className={
                    this.state.error && this.state.error.cityErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  id='validationServer04'
                  aria-describedby='validationServer04Feedback'
                  // value={(e) => this.setState({ City: e.target.value })}
                />
                <p className='red'>{this.state.error ? this.state.error.cityErr : ""}</p>
              </div>
              <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                <label for='bdaymonth' className='form-label editLabel '>
                  From
                </label>
                <input
                  type='date'
                  id='bdaymonth'
                  className={
                    this.state.error && this.state.error.fromErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  onChange={(e) => this.setState({ From: e.target.value })}
                  value={this.state.From ? this.state.From : ""}
                />
                {this.state.error ? this.state.error.fromErr : ""}
              </div>
              <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                <label for='bdaymonth' className='form-label editLabel '>
                  To <span className='red'>*</span>
                </label>
                <input
                  type='date'
                  id='bdaymonth'
                  className={
                    this.state.error && this.state.error.toErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  onChange={(e) => this.setState({ To: e.target.value })}
                  value={this.state.To ? this.state.To : ""}
                />
                <p className='red'>{this.state.error ? this.state.error.toErr : ""}</p>
              </div>
              <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                <label for='inputTerm' className='form-label editLabel'>
                  Credential URL <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control editInput'
                  id='fullname'
                  onChange={(e) => this.setState({ SchoolUrl: e.target.value })}
                  placeholder={this.state.cred_url}
                />
              </div>
              <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                <label for='inputGPA' className='form-label editLabel'>
                  Grade / GPA
                </label>
                <input
                  type='text'
                  className='form-control editInput'
                  id='fullname'
                  placeholder='Please enter your full name'
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              {this.state.error ? (
                <span className='red py-3'>Please fill all the info *</span>
              ) : (
                <span className='red py-3'></span>
              )}
              {this.props.match.params.id ? (
                <div class='col-12 d-flex justify-content-end'>
                  <button
                    // type={this.handleDelete}
                    class='btn deleteBtn me-2 my-2  shadow-none  '
                    onClick={() => this.handleDelete()}
                    value='deleted'
                  >
                    Delete
                  </button>
                  <button type='submit' class='btn updateBtn shadow-none my-2 '>
                    Update
                  </button>
                </div>
              ) : (
                <div class='col-12 d-flex justify-content-end'>
                  <button type='submit' class='btn me-2 my-2 cancelBtn shadow-none'>
                    Cancel
                  </button>
                  <button type='submit' class='btn doneBtn shadow-none my-2 '>
                    Add
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
// export default EducationForm;
