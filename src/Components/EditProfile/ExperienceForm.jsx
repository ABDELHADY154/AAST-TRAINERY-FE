import React, { Component } from "react";
import { axios } from "../../Api/axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import EditNav from "./EditNav";
import Footer2 from "../Common/Footer2";
import { Link, Redirect } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      error: "",
      image: "",
      imageURL: "",
      currently_work: "",
      company_website: "",
      cred_url: "",
      error: {
        Cred_URLErr: [],
        countryErr: [],
        cityErr: [],
        FromErr: [],
        ToErr: [],
      },
    };
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(event) {
    var filename = event.target.value.replace(/^.*[\\\/]/, "");
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      imageURL: filename,
    });
  }
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
          if (error.response.data.status === 401 || error.response.data.status === 404) {
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
    var formBody = new FormData();
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
      currently_work: this.state.currently_work == "on" ? 0 : 1,
      image: this.state.imageURL ? this.state.imageURL : this.state.image,
    };
    if (this.state.imageURL) {
      formBody.append(
        "image",
        this.state.imageURL ? this.state.imageURL : this.state.image
      );
    }
    formBody.append("experience_type", data.experience_type);
    formBody.append("job_title", data.job_title);
    formBody.append("company_website", data.company_website);
    formBody.append("company_name", data.company_name);
    formBody.append("city", data.city);
    formBody.append("country", data.country);
    formBody.append("from", data.from);
    formBody.append("to", data.to);
    formBody.append("currently_work", data.currently_work);
    if (this.state.cred_url !== "") {
      formBody.append("cred_url", data.cred_url);
    }

    if (this.props.match.params.id) {
      return await axios({
        method: "post",
        url: `/W/student/profile/experience/${this.props.match.params.id}`,
        data: formBody,
        headers: { "Content-Type": "multipart/form-data" },
      })
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
    } else {
      return await axios({
        method: "post",
        url: "/W/student/profile/experience",
        data: formBody,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.setState({
            done: true,
          });
          console.log(this.state.currently_work);
        })
        .catch((error) => {
          if (error.response.data.status === 401 || error.response.data.status === 404) {
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
  handleDelete = async (e) => {
    await axios
      .delete(`/W/student/profile/experience/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          done: true,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            loggedIn: false,
            // error: true,
          });
        }
        window.location.reload();
      });
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
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0'>
                <label for='inputfullname' class='form-label editLabel '>
                  Experience Type
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.ExperienceTypeErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
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

              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputfullname' class='form-label editLabel '>
                  Job Title <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.JobTitlErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
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
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputfullname' class='form-label editLabel '>
                  Company / Organization Name
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.CompanyNameErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
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
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputfullname' class='form-label editLabel '>
                  Company Website
                  <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className={
                    this.state.error && this.state.error.CompanyWebsiteErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  id='fullname'
                  placeholder='Http://www.Example.com'
                  onChange={(e) => this.setState({ CompanyWebsite: e.target.value })}
                  value={this.state.CompanyWebsite ? this.state.CompanyWebsite : ""}
                />
                <p className='red'>
                  {this.state.error ? this.state.error.CompanyWebsiteErr : ""}
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
                    this.state.error && this.state.error.countryErr.length > 0
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
                    this.state.error && this.state.error.cityErr.length > 0
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
                    this.state.error && this.state.error.FromErr.length > 0
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  onChange={(e) => this.setState({ From: e.target.value })}
                  value={this.state.From ? this.state.From : ""}
                />
                <p className='red'>{this.state.error ? this.state.error.FromErr : ""}</p>

                <input
                  type='checkbox'
                  id='vehicle1'
                  name='vehicle1'
                  className='checkBoxExpert'
                  defaultChecked='checked'
                  value='on'
                  onChange={(e) => this.setState({ currently_work: e.target.value })}
                />
                <label for='vehicle1' classname='radioform-check-label raioLabel  '>
                  currently work here
                </label>
              </div>
              <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                <label for='bdaymonth' className='form-label editLabel '>
                  To <span className='red'>*</span>
                </label>
                <input
                  type='date'
                  id='bdaymonth'
                  className={
                    this.state.error && this.state.error.ToErr.length > 0
                      ? "form-control editInput wrong "
                      : "form-control editInput"
                  }
                  onChange={(e) => this.setState({ To: e.target.value })}
                  value={this.state.To ? this.state.To : ""}
                />
                <p className='red'>{this.state.error ? this.state.error.ToErr : ""}</p>
              </div>
              <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                <label for='inputTerm' className='form-label editLabel'>
                  Credential URL <span className='red'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control editInput'
                  id='fullname'
                  onChange={(e) => this.setState({ Cred_URL: e.target.value })}
                  placeholder={this.state.Cred_URL}
                />
              </div>
              <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12  '>
                <label
                  htmlFor='files'
                  className='form-control editInput uploadBtn d-flex'
                >
                  Upload
                  <FiUpload className='uploadIcon ms-auto ' />
                  <input
                    className='form-control editInput'
                    hidden
                    type='file'
                    id='files'
                    accept='pdf'
                    onChange={(e) =>
                      this.setState({
                        imageURL: e.target.files[0],
                        image: e.target.files[0],
                      })
                    }
                  />
                </label>
              </div>

              {this.props.match.params.id ? (
                <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
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
                <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
                  <Link class='btn me-2 my-2 cancelBtn shadow-none' to='/Profile'>
                    Cancel
                  </Link>
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
export default ExperienceForm;
