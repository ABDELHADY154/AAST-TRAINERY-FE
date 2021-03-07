import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import EditNav from "./EditNav";
import Footer2 from "../Common/Footer2";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ExperianceForm extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "", error: "" };
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
  setactive(val) {
    this.setState({ experience: val });
  }
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      await axios
        .get(`/W/student/profile/experience/${this.props.match.params.id}`)
        .then((res) => {
          // console.log(res.data.response.data);
          this.setState({
            // id: res.data.response.data.id,
            ExperienceType: res.data.response.data.experience_type,
            JobTitle: res.data.response.data.job_title,
            CompanyWebsite: res.data.response.data.company_website,
            CompanyName: res.data.response.data.company_name,
            region: res.data.response.data.city,
            country: res.data.response.data.country,
            From: res.data.response.data.from,
            To: res.data.response.data.to,
            Cred_URL: res.data.response.data.cred_url,
          });
          // console.log(this.state);
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
      experience_type: this.state.ExperienceType,
      job_title: this.state.JobTitle,
      company_website: this.state.CompanyWebsite,
      company_name: this.state.CompanyName,
      city: this.state.region,
      country: this.state.country,
      from: this.state.From,
      to: this.state.To,
      cred_url: this.state.Cred_URL,
      currently_work: 1,
    };
    if (this.props.match.params.id) {
      return await axios
        .post(`/W/student/profile/experience/${this.props.match.params.id}`, data)
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
              ExperienceTypeErr: error.response.data.errors.experience_type,
              JobTitlErr: error.response.data.errors.job_title,
              CompanyWebsiteErr: error.response.data.errors.company_website,
              CompanyNameErr: error.response.data.errors.company_name,
              Cred_URLErr: error.response.data.errors.cred_url,
              schoolNameErr: error.response.data.errors.school_name,
              countryErr: error.response.data.errors.country,
              cityErr: error.response.data.errors.city,
              FromErr: error.response.data.errors.from,
              ToErr: error.response.data.errors.to,
            },
          });
          console.log(error);
        });
    } else {
      return await axios
        .post("/W/student/profile/experience", data)
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
              ExperienceTypeErr: error.response.data.errors.experience_type,
              JobTitlErr: error.response.data.errors.job_title,
              CompanyWebsiteErr: error.response.data.errors.company_website,
              CompanyNameErr: error.response.data.errors.company_name,
              Cred_URLErr: error.response.data.errors.cred_url,
              schoolNameErr: error.response.data.errors.school_name,
              countryErr: error.response.data.errors.country,
              cityErr: error.response.data.errors.city,
              FromErr: error.response.data.errors.from,
              ToErr: error.response.data.errors.to,
            },
          });
        });
    }
  };
  render() {
    const { country, region } = this.state;
    if (this.state.loggedIn === false) {
      return <Redirect to='/Login' />;
    }
    if (this.state.done === true) {
      return <Redirect to='/Profile' />;
    }
    return (
      <div>
        <div className='container '>
          <EditNav setactive={"experience"} />
          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            <div className=' row'>
              <div class='col-12 fullwidth'>
                <label for='inputfullname' class='form-label editLabel '>
                  Experience Type
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.ExperienceTypeErr
                      ? "form-control editInput halfInput fullwidth wrong "
                      : "form-control editInput halfInput fullwidth"
                  }
                  id='fullname'
                  placeholder='Internship'
                  onChange={(e) => this.setState({ ExperienceType: e.target.value })}
                  value={this.state.ExperienceType ? this.state.ExperienceType : ""}
                />
                <p className='red'>
                  {this.state.error.ExperienceTypeErr
                    ? this.state.error.ExperienceTypeErr
                    : ""}
                </p>
              </div>

              <div class='col-12 fullwidth'>
                <label for='inputfullname' class='form-label editLabel '>
                  Job Title <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.JobTitlErr
                      ? "form-control editInput halfInput fullwidth wrong "
                      : "form-control editInput halfInput fullwidth"
                  }
                  id='fullname'
                  placeholder='Web Developer'
                  onChange={(e) => this.setState({ JobTitle: e.target.value })}
                  value={this.state.JobTitle ? this.state.JobTitle : ""}
                />
                <p className='red'>
                  {this.state.error.JobTitlErr ? this.state.error.JobTitlErr : ""}
                </p>
              </div>
              <div class='col-12 fullwidth'>
                <label for='inputfullname' class='form-label editLabel '>
                  Company / Organization Name
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.CompanyNameErr
                      ? "form-control editInput halfInput fullwidth wrong "
                      : "form-control editInput halfInput fullwidth"
                  }
                  id='fullname'
                  placeholder='Qowwa Technologies'
                  onChange={(e) => this.setState({ CompanyName: e.target.value })}
                  value={this.state.CompanyName ? this.state.CompanyName : ""}
                />
                <p className='red'>
                  {this.state.error ? this.state.error.CompanyNameErr : ""}
                </p>
              </div>
              <div class='col-12 fullwidth'>
                <label for='inputfullname' class='form-label editLabel '>
                  Company Website
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.Cred_URLErr
                      ? "form-control editInput halfInput fullwidth wrong "
                      : "form-control editInput halfInput fullwidth"
                  }
                  id='fullname'
                  placeholder='Http://www.Example.com'
                  onChange={(e) => this.setState({ CompanyWebsite: e.target.value })}
                  value={this.state.CompanyWebsite ? this.state.CompanyWebsite : ""}
                />
                <p className='red'>
                  {this.state.error ? this.state.error.Cred_URLErr : ""}
                </p>
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
                <p className='red'>
                  {this.state.error ? this.state.error.countryErr : ""}
                </p>
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
                <p className='red'>{this.state.error ? this.state.error.cityErr : ""}</p>
              </div>
              <div className='col-12 col-md-6 fullwidth '>
                <label for='bdaymonth' className='form-label editLabel '>
                  From
                </label>
                <input
                  type='date'
                  id='bdaymonth'
                  className={
                    this.state.error && this.state.error.FromErr
                      ? "form-select editInput halfInput fullwidth wrong "
                      : "form-select editInput halfInput fullwidth"
                  }
                  onChange={(e) => this.setState({ From: e.target.value })}
                  value={this.state.From ? this.state.From : ""}
                />
                <p className='red'>{this.state.error ? this.state.error.FromErr : ""}</p>
              </div>
              <div class='col-12 col-md-6  fullwidth'>
                <label for='bdaymonth' className='form-label editLabel '>
                  To <span className='red'>*</span>
                </label>
                <input
                  type='date'
                  id='bdaymonth'
                  className={
                    this.state.error && this.state.error.ToErr
                      ? "form-select editInput halfInput fullwidth wrong "
                      : "form-control editInput halfInput fullwidth"
                  }
                  onChange={(e) => this.setState({ To: e.target.value })}
                  value={this.state.To ? this.state.To : ""}
                />
                <p className='red'>{this.state.error ? this.state.error.ToErr : ""}</p>
              </div>
              <div class='col-12 col-md-6  fullwidth '>
                <label for='inputTerm' className='form-label editLabel'>
                  Credential URL <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control editInput halfInput fullwidth'
                  id='fullname'
                  onChange={(e) => this.setState({ Cred_URL: e.target.value })}
                  placeholder={this.state.Cred_URL}
                />
              </div>
              <div class='col-12 col-md-6  fullwidth '>
                <label for='inputGPA' className='form-label editLabel'>
                  uplaod{" "}
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
                  <button class='btn me-2 my-2 cancelBtn shadow-none' href='/'>
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
export default ExperianceForm;
