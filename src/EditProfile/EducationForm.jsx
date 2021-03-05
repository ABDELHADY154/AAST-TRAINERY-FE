import React, { Component, useState } from "react";
import { axios } from "../Api/axios";
import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

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
    await axios
      .delete(`/W/student/profile/education/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          loggedIn: false,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            loggedIn: false,
            error: true,
          });
        }
        window.location.reload();
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
            loggedIn: false,
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
            loggedIn: false,
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
  render() {
    const { country, region } = this.state;
    if (this.state.loggedIn === false) {
      return <Redirect push to='/Login' />;
    }
    // console.log(this.state);
    return (
      <div className='container '>
        <h1 className='editTitle text-center'>Edit Profile</h1>
        <h3 className='categoryTitle d-flex justify-content-start mb-3'>Categories</h3>
        <ul className='nav  infoTabsUl nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link  tabBtn ' id='General-tab' href='/Profile/General'>
              General
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a
              className='nav-link active tabBtn  '
              id='Education-tab'
              href='/Profile/Education'
            >
              Education
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Experiance-tab' href='/Profile/Experiance'>
              Experiance
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Courses-tab' href='/Profile/Courses'>
              Courses
            </a>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Skills-tab' href='/Profile/Skills'>
              Skills
            </a>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <a className='nav-link tabBtn' id='Accounts-tab' href='/Profile/Accounts'>
              Accounts
            </a>
          </li>
        </ul>
        <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
          <div className=' row'>
            <div class='col-12 fullwidth'>
              <label for='inputfullname' class='form-label editLabel '>
                School Name <span className='red'>*</span>
              </label>
              <input
                type='text'
                className={
                  this.state.error && this.state.error.schoolNameErr
                    ? "form-control editInput halfInput fullwidth wrong "
                    : "form-control editInput halfInput fullwidth"
                }
                id='fullname'
                placeholder='Please enter your full name'
                onChange={(e) => this.setState({ SchoolName: e.target.value })}
                value={this.state.SchoolName ? this.state.SchoolName : ""}
              />
            </div>
            <div className='col-12 col-md-6   fullwidth'>
              <label for='inputCountry' className='form-label editLabel'>
                Country
              </label>
              <CountryDropdown
                value={this.state.country ? this.state.country : country}
                onChange={(val) => this.selectCountry(val)}
                className={
                  this.state.error && this.state.error.countryErr
                    ? "form-select editInput halfInput fullwidth wrong "
                    : "form-select editInput halfInput fullwidth"
                }
                id='validationServer04'
                aria-describedby='validationServer04Feedback'
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
                className={
                  this.state.error && this.state.error.cityErr
                    ? "form-select editInput halfInput fullwidth wrong "
                    : "form-select editInput halfInput fullwidth"
                }
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
                className={
                  this.state.error && this.state.error.fromErr
                    ? "form-select editInput halfInput fullwidth wrong "
                    : "form-select editInput halfInput fullwidth"
                }
                onChange={(e) => this.setState({ From: e.target.value })}
                value={this.state.From ? this.state.From : ""}
              />
            </div>
            <div class='col-12 col-md-6  fullwidth'>
              <label for='bdaymonth' className='form-label editLabel '>
                To <span className='red'>*</span>
              </label>
              <input
                type='date'
                id='bdaymonth'
                className={
                  this.state.error && this.state.error.toErr
                    ? "form-select editInput halfInput fullwidth wrong "
                    : "form-control editInput halfInput fullwidth"
                }
                onChange={(e) => this.setState({ To: e.target.value })}
                value={this.state.To ? this.state.To : ""}
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
                onChange={(e) => this.setState({ SchoolUrl: e.target.value })}
                placeholder={this.state.cred_url}
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
    );
  }
}
// export default EducationForm;
