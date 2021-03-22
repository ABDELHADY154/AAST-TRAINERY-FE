import React, { Component } from "react";
import { axios } from "../../Api/axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import EditNav from "./EditNav";
import Footer2 from "../Common/Footer2";
import { Link, Redirect } from "react-router-dom";
import { FiUpload, FiCheck } from "react-icons/fi";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

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
      SchoolUrl: "",
      JobTitle: "",
      FormLoading: false,
      done: false,
      From: "",
      To: "",
      ExperienceType: "",
      CompanyWebsite: "",
      CompanyName: "",
      error: {
        creddErr: [],
        FromErr: [],
        toErr: [],
        Cred_UplaodErr: [],
      },
    };
    this.handleChange = this.handleChange.bind(this);

    window.scrollTo(0, 0);
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

  handleChange(event) {
    var filename = event.target.value.replace(/^.*[\\\/]/, "");
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      imageURL: event.target.files[0],
      UrlName: event.target.files[0].name,
      event,
    });
  }
  setactive(val) {
    this.setState({ experience: val });
  }
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      this.setState({
        FormLoading: true,
      });
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
            SchoolUrl: res.data.response.data.cred_url,
            FormLoading: false,
          });
          // console.log(res);
        })
        .catch((error) => {
          if (error.response.data.status === 401 || error.response.data.status === 404) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false, FormLoading: false });
            window.location.reload();
          }
        });
    }
  };
  handleSubmit = async (e) => {
    this.setState({
      FormLoading: true,
    });
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
      cred_url: this.state.SchoolUrl,
      currently_work: this.state.currently_work == "on" ? 0 : 1,
      // image: this.state.imageURL ? this.state.imageURL : this.state.image,
    };
    if (this.state.imageURL) {
      formBody.append(
        "cred",
        this.state.imageURL ? this.state.imageURL : this.state.image
      );
    }
    formBody.append("experience_type", data.experience_type);
    formBody.append("job_title", data.job_title);
    formBody.append("company_website", this.state.CompanyWebsite);
    formBody.append("company_name", data.company_name);
    formBody.append("city", data.city);
    formBody.append("country", data.country);
    formBody.append("from", data.from);
    formBody.append("to", data.to);
    formBody.append("currently_work", data.currently_work);
    if (data.cred_url !== "") {
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
            FormLoading: false,
          });
        })
        .catch((error) => {
          this.setState({
            FormLoading: false,
          });
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
              Cred_UplaodErr: error.response.data.errors.cred,
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
            FormLoading: false,
          });
          // console.log(this.state.currently_work);
        })
        .catch((error) => {
          this.setState({
            FormLoading: false,
          });
          if (error.response.data.status === 401 || error.response.data.status === 404) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false, FormLoading: false });
            window.location.reload();
          }

          this.setState({
            error: {
              ExperienceTypeErr: error.response.data.errors.experience_type,
              JobTitlErr: error.response.data.errors.job_title,
              CompanyWebsiteErr: error.response.data.errors.company_website,
              CompanyNameErr: error.response.data.errors.company_name,
              Cred_URLErr: error.response.data.errors.cred_url,
              Cred_UplaodErr: error.response.data.errors.cred,
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
    this.setState({
      FormLoading: true,
    });
    await axios
      .delete(`/W/student/profile/experience/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          done: true,
          FormLoading: false,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            loggedIn: false,
            FormLoading: false,
          });
        }
        window.location = window.location;
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
          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            <LoadingOverlay
              active={this.state.FormLoading}
              spinner={<BounceLoader color='#cd8930' />}
              color={"#cd8930"}
              styles={{
                overlay: (base) => ({
                  ...base,
                  background: "rgb(255, 255, 255)",
                  stroke: "rgba(255, 0, 0, 0.5)",
                }),
              }}
            >
              <EditNav setactive={"experience"} />

              <div className=' row'>
                <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0'>
                  <label for='inputfullname' class='form-label editLabel '>
                    Experience Type
                    <span className='red'>*</span>
                  </label>

                  <select
                    id='inputuni'
                    className={
                      this.state.error && this.state.error.JobTitlErr
                        ? "form-control editInput signSelect wrong "
                        : "form-control editInput signSelect"
                    }
                    onChange={(e) => this.setState({ ExperienceType: e.target.value })}
                    value={this.state.ExperienceType ? this.state.ExperienceType : ""}
                  >
                    <option selected>Choose your Experience Type </option>
                    <option value='Internship'>Internship</option>
                    <option value='Volunteer'>Volunteer</option>
                  </select>
                  <p className='editerror'>
                    {this.state.error.ExperienceTypeErr
                      ? this.state.error.ExperienceTypeErr
                      : ""}
                  </p>
                </div>

                <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                  <label for='inputfullname' class='form-label editLabel '>
                    Experience Title <span className='red'>*</span>
                  </label>
                  <input
                    type='text'
                    className={
                      this.state.error && this.state.error.JobTitlErr
                        ? "form-control editInput wrong "
                        : "form-control editInput"
                    }
                    id='fullname'
                    onChange={(e) => this.setState({ JobTitle: e.target.value })}
                    value={this.state.JobTitle ? this.state.JobTitle : ""}
                  />

                  {this.state.error && this.state.error.JobTitlErr ? (
                    <p className='editerror'>{this.state.error.JobTitlErr}</p>
                  ) : (
                    ""
                  )}
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
                    onChange={(e) => this.setState({ CompanyName: e.target.value })}
                    value={this.state.CompanyName ? this.state.CompanyName : ""}
                  />
                  <p className='editerror'>
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
                    onChange={(e) =>
                      this.setState({
                        CompanyWebsite: e.target.value,
                      })
                    }
                    value={this.state.CompanyWebsite ? this.state.CompanyWebsite : ""}
                  />

                  {this.state.error && this.state.error.CompanyWebsiteErr ? (
                    <p className='editerror'>{this.state.error.CompanyWebsiteErr}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                  <label for='inputCountry' className='form-label editLabel'>
                    Country
                  </label>
                  <CountryDropdown
                    value={this.state.country ? this.state.country : country}
                    onChange={(val) => this.selectCountry(val)}
                    className='form-control editInput'
                    id='validationServer04'
                    aria-describedby='validationServer04Feedback'
                  />
                  <p className='editerror'>
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
                    className='form-control editInput'
                    id='validationServer04'
                    aria-describedby='validationServer04Feedback'
                    // value={(e) => this.setState({ City: e.target.value })}
                  />
                  {this.state.error && this.state.error.cityErr ? (
                    <p className='editerror'>{this.state.error.cityErr}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                  <label for='bdaymonth' className='form-label editLabel '>
                    From
                  </label>
                  <input
                    type='date'
                    id='bdaymonth'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ From: e.target.value })}
                    value={this.state.From ? this.state.From : ""}
                  />
                  {this.state.error && this.state.error.FromErr ? (
                    <p className='editerror'>{this.state.error.FromErr}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                  <label for='bdaymonth' className='form-label editLabel '>
                    To <span className='red'>*</span>
                  </label>
                  <input
                    type='date'
                    id='bdaymonth'
                    className='form-control editInput'
                    onChange={(e) => this.setState({ To: e.target.value })}
                    value={this.state.To ? this.state.To : ""}
                  />
                  {this.state.error && this.state.error.ToErr ? (
                    <p className='editerror'>{this.state.error.ToErr}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                  <label for='inputTerm' className='form-label editLabel'>
                    Credential URL <span className='red'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control editInput'
                    id='fullname'
                    onChange={(e) =>
                      this.setState({
                        SchoolUrl: e.target.value,
                      })
                    }
                    value={this.state.SchoolUrl ? this.state.SchoolUrl : ""}
                  />
                  {this.state.error && this.state.error.Cred_URLErr !== "" && (
                    <p className='editerror'> {this.state.error.Cred_URLErr}</p>
                  )}
                </div>
                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12  '>
                  <label
                    htmlFor='files'
                    className='form-control editInput uploadBtn d-flex'
                  >
                    {this.state.UrlName ? this.state.UrlName : "Upload"}
                    {this.state.UrlName ? (
                      <FiCheck className='uploadIcon ms-auto ' />
                    ) : (
                      <FiUpload className='uploadIcon ms-auto ' />
                    )}
                    <input
                      className='form-control editInput'
                      hidden
                      type='file'
                      id='files'
                      accept='pdf'
                      onChange={(e) => this.handleChange(e)}
                    />
                  </label>

                  {this.state.error && this.state.error.Cred_UplaodErr ? (
                    <p className='editerror'>{this.state.error.Cred_UplaodErr + " "}</p>
                  ) : (
                    ""
                  )}
                  {/* {this.state.error.Cred_UplaodErr !== "" &&
                    this.state.error.Cred_UplaodErr.map((name, i) => (
                      <p className='editerror d-inline' key={i}>
                        {name} <span />
                      </p>
                    ))} */}
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
            </LoadingOverlay>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default ExperienceForm;
