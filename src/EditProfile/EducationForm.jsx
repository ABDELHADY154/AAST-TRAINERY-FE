import React, { Component, useState } from "react";
import { axios } from "../Api/axios";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

class EducationForm extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      school_name: this.state.SchoolName,
      city: this.state.region,
      country: this.state.country,
      from: this.state.From,
      to: this.state.To,
      cred_url: this.state.SchoolUrl,
    };
    return await axios
      .post("/W/student/profile/education", data)
      .then((response) => {
        // sessionStorage.setItem("token", response.data.response.data.token);
        // sessionStorage.setItem("status", response.statusText);
        // // this.props.setUser(true);
        // this.setState({
        //   loggedIn: true,
        // });
        console.log(response);
      })
      .catch((error) => {
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
  render() {
    const { country, region } = this.state;

    return (
      <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
        <div className=' row'>
          <div class='col-12 fullwidth'>
            <label for='inputfullname' class='form-label editLabel '>
              School Name <span className='red'>*</span>
            </label>
            <input
              type='text'
              className='form-control editInput halfInput fullwidth'
              id='fullname'
              placeholder='Please enter your full name'
              onChange={(e) => this.setState({ SchoolName: e.target.value })}
            />
          </div>
          <div className='col-12 col-md-6   fullwidth'>
            <label for='inputCountry' className='form-label editLabel'>
              Country
            </label>
            <CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)}
              className='form-select editInput halfInput fullwidth'
              id='validationServer04'
              aria-describedby='validationServer04Feedback'
              required
            />
          </div>
          <div className='col-12 col-md-6   fullwidth '>
            <label for='inputCity' className='form-label editLabel'>
              City
            </label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)}
              className=' form-select editInput halfInput fullwidth '
              id='validationServer04'
              aria-describedby='validationServer04Feedback'
              // value={(e) => this.setState({ City: e.target.value })}
            />
          </div>
          <div className='col-12 col-md-6 fullwidth '>
            <label for='bdaymonth' className='form-label editLabel '>
              From
            </label>
            <input
              type='date'
              id='bdaymonth'
              className='form-control editInput halfInput fullwidth'
              onChange={(e) => this.setState({ From: e.target.value })}
            />
          </div>
          <div class='col-12 col-md-6  fullwidth'>
            <label for='bdaymonth' className='form-label editLabel '>
              To <span className='red'>*</span>
            </label>
            <input
              type='date'
              id='bdaymonth'
              className=' form-control editInput halfInput fullwidth'
              onChange={(e) => this.setState({ To: e.target.value })}
            />
          </div>
          <div class='col-12 col-md-6  fullwidth '>
            <label for='inputTerm' className='form-label editLabel'>
              Credential URL <span className='red'>*</span>
            </label>
            <input
              type='text'
              className='form-control editInput halfInput fullwidth'
              id='fullname'
              placeholder='Please enter your full name'
              onChange={(e) => this.setState({ SchoolUrl: e.target.value })}
            />
          </div>
          <div class='col-12 col-md-6  fullwidth '>
            <label for='inputGPA' className='form-label editLabel'>
              Grade / GPA
            </label>
            <input
              type='text'
              className='form-control editInput halfInput fullwidth'
              id='fullname'
              placeholder='Please enter your full name'
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <span className='red py-3'>Please fill all the required info *</span>
          <div class='col-12 d-flex justify-content-end'>
            <button type='submit' class='btn me-2 my-2 cancelBtn shadow-none'>
              Cancel
            </button>
            <button type='submit' class='btn doneBtn shadow-none my-2 '>
              Add
            </button>
          </div>
          <div class='col-12 d-flex justify-content-end'>
            <button type='submit' class='btn deleteBtn me-2 my-2  shadow-none '>
              Delete
            </button>
            <button type='submit' class='btn updateBtn shadow-none my-2 '>
              Update
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default EducationForm;
