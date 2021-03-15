import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Footer2 from "../Common/Footer2";
import EditNav from "./EditNav";
import { EditImgLoader } from "../../loader";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      imageURL: "",
      department: "",
      name: "",
      phoneNumber: 0,
      university: "",
      city: "",
      regNo: 0,
      gender: "",
      depId: 0,
      country: "",
      nationality: "",
      dob: "",
      startYear: "",
      endYear: "",
      period: 0,
      gpa: 0,
      dep: [],
      periodNumArr: [3, 4, 5, 6, 7, 8],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ city: val });
  }
  async componentDidMount() {
    await axios
      .get("/departments")
      .then((res) => {
        this.setState({ dep: res.data.response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get("/W/student/profile/general")
      .then((res) => {
        // Jacky was here?
        this.setState({
          image: res.data.response.data.image,
          name: res.data.response.data.fullName,
          phoneNumber: res.data.response.data.phoneNumber,
          university: res.data.response.data.university,
          city: res.data.response.data.city,
          regNo: res.data.response.data.regNumber,
          gender: res.data.response.data.gender,
          department: res.data.response.data.department,
          country: res.data.response.data.country,
          nationality: res.data.response.data.nationality,
          dob: res.data.response.data.dob,
          startYear: res.data.response.data.startYear,
          endYear: res.data.response.data.endYear,
          period: res.data.response.data.period,
          gpa: res.data.response.data.GPA,
        });
        // console.log(res.data.response.data);
        // console.log(res.data.response);
        this.state.dep.forEach((element) => {
          if (element.dep_name == this.state.department) {
            this.setState({ depId: element.id });
          }
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
  handleChange(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      imageURL: event.target.files[0],
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    var formBody = new FormData();

    const data = {
      image: this.state.imageURL,
    };
    if (this.state.imageURL) {
      formBody.append("image", this.state.imageURL ? this.state.imageURL : null);
    }
    formBody.append("phone_number", this.state.phoneNumber);
    formBody.append("city", this.state.city);
    formBody.append("university", this.state.university);
    formBody.append("name", this.state.name);
    formBody.append("reg_no", this.state.regNo);
    formBody.append("gender", this.state.gender);
    formBody.append("country", this.state.country);
    formBody.append("department_id", this.state.depId);
    formBody.append("nationality", this.state.nationality);
    formBody.append("date_of_birth", this.state.dob);
    formBody.append("start_year", this.state.startYear);
    formBody.append("end_year", this.state.endYear);
    formBody.append("period", this.state.period);
    formBody.append("gpa", this.state.gpa);
    await axios({
      method: "post",
      url: "/W/student/profile/general",
      data: formBody,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        this.setState({
          done: true,
        });
        this.props.setAvatar(this.state.imageURL);
      })
      .catch((error) => {
        if (error.response.data.status === 401) {
          sessionStorage.clear("token");
          sessionStorage.clear("status");
          this.setState({ loggedIn: false });
        }
        this.setState({
          error: {
            nameErr: error.response.data.errors.name,
            phoneErr: error.response.data.errors.phone_number,
            universityErr: error.response.data.errors.university,
            cityErr: error.response.data.errors.city,
            regNoErr: error.response.data.errors.reg_no,
            genderErr: error.response.data.errors.gender,
            countryErr: error.response.data.errors.country,
            depErr: error.response.data.errors.department_id,
            nationalityErr: error.response.data.errors.nationality,
            dobErr: error.response.data.errors.date_of_birth,
            gpaErr: error.response.data.errors.gpa,
            periodErr: error.response.data.errors.period,
            startyearErr: error.response.data.errors.start_year,
            endyearErr: error.response.data.errors.end_year,
          },
        });
      });
  };

  render() {
    const city = this.state.city;
    if (this.state.loggedIn === false) {
      return <Redirect to='/Profile' push />;
    }
    if (this.state.done === true) {
      return <Redirect to='/Profile' />;
    }
    // console.log(this.props);
    return (
      <div>
        <div className='container '>
          <EditNav setactive={"General"} />
          <form className='row g-3 mb-3' onSubmit={this.handleSubmit}>
            <div className='col-11 mb-4 mt-4'>
              <div className='row '>
                {this.state.image ? (
                  <img
                    src={this.state.image}
                    className='col-3 profieImg rounded-circle'
                  />
                ) : (
                  <EditImgLoader
                    className='col-3 profieImg rounded-circle'

                    // style={{ paddingBottom: 10, paddingRight: 10 }}
                  />
                )}

                <div className='col-10 '>
                  <label className='form-label fs-5 mt-2 imgLabel' for='customFile'>
                    Profile Photo
                  </label>
                  <p className='fw-light'>
                    You can upload a .jpg, .png, or .gif photo with max size of 10MB.
                  </p>

                  <div className='UploadBtnDiv'>
                    <button className='UploadBtn'>Upload</button>
                    <input
                      type='file'
                      className='imgUploadBtn'
                      accept='image/x-png,image/gif,image/jpeg'
                      onChange={
                        (e) => this.handleChange(e)
                        // this.setState({
                        //   imageURL: e.target.files[0],
                        //   image: e.target.files[0],
                        // })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputfullname' className='form-label editLabel'>
                Full Name<span className='text-danger ms-2'>*</span>
              </label>
              <input
                type='text'
                className={
                  this.state.error && this.state.error.nameErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                id='fullname'
                placeholder='Please enter your full name'
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
              />
              {this.state.error && this.state.error.nameErr ? (
                <p className='editerror'>{this.state.error.nameErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
              <label for='inputEmail4' className='form-label editLabel'>
                Gender<span className='text-danger ms-2'>*</span>
              </label>
              <div className='row '>
                <div className='male col-4 col-lg-3 col-md-4 col-sm-4 col-xs-3 form-check form-check-inline d-flex'>
                  {this.state.gender == "male" ? (
                    <input
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='male'
                      className={
                        this.state.error && this.state.error.genderErr
                          ? "radio editInput wrong"
                          : "radio editInput "
                      }
                      onChange={(e) => {
                        this.setState({ gender: e.target.value });
                      }}
                      checked
                    />
                  ) : (
                    <input
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='male'
                      className={
                        this.state.error && this.state.error.genderErr
                          ? "radio editInput wrong"
                          : "radio editInput "
                      }
                      onChange={(e) => {
                        this.setState({ gender: e.target.value });
                      }}
                    />
                  )}
                  <label className='form-check-label raioLabelEdit' for='inlineCheckbox3'>
                    Male
                  </label>{" "}
                  {this.state.error && this.state.error.genderErr ? (
                    <p className='editerror'>{this.state.error.genderErr}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className=' female col-4 col-lg-3 col-md-4 col-sm-5 col-xs-3 checkbox form-check-inline d-flex'>
                  {this.state.gender == "female" ? (
                    <input
                      className={
                        this.state.error && this.state.error.genderErr
                          ? "radio editInput wrong"
                          : "radio editInput "
                      }
                      type='radio'
                      name='inlineRadioOptions'
                      id='Gender'
                      value='female'
                      onChange={(e) => {
                        this.setState({ gender: e.target.value });
                      }}
                      checked
                    />
                  ) : (
                    <input
                      className={
                        this.state.error && this.state.error.genderErr
                          ? "radio editInput wrong"
                          : "radio editInput "
                      }
                      type='radio'
                      name='inlineRadioOptions'
                      id='Gender'
                      value='female'
                      onChange={(e) => {
                        this.setState({ gender: e.target.value });
                      }}
                    />
                  )}
                  <label
                    className='form-check-label raioLabelEdit '
                    for='inlineCheckbox3'
                  >
                    Female
                  </label>{" "}
                  {this.state.error && this.state.error.genderErr ? (
                    <p className='editerror'>{this.state.error.genderErr}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='inputDOB' className='form-label editLabel '>
                Date of birth<span className='text-danger ms-2'>*</span>
              </label>
              <input
                type='date'
                className={
                  this.state.error && this.state.error.dobErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                id='DOB'
                onChange={(e) => {
                  this.setState({ dob: e.target.value });
                }}
                value={this.state.dob}
              />
              {this.state.error && this.state.error.dobErr ? (
                <p className='editerror'>{this.state.error.dobErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='ol-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputNationaity' className='form-label editLabel '>
                Nationaity<span className='text-danger ms-2'>*</span>
              </label>
              <input
                type='text'
                className={
                  this.state.error && this.state.error.nationalityErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                id='nationaity'
                placeholder='Please enter your Nationaity'
                onChange={(e) => {
                  this.setState({ nationality: e.target.value });
                }}
                value={this.state.nationality}
              />
              {this.state.error && this.state.error.nationalityErr ? (
                <p className='editerror'>{this.state.error.nationalityErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
              <label for='inputCountry' className='form-label editLabel'>
                Country<span className='text-danger ms-2'>*</span>
              </label>
              <CountryDropdown
                value={this.state.country ? this.state.country : this.state.country}
                onChange={(val) => this.selectCountry(val)}
                className={
                  this.state.error && this.state.error.countryErr
                    ? "wrong form-select signSelect editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                    : " form-select signSelect editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                }
                id='validationServer04'
                aria-describedby='validationServer04Feedback'
              />
              {this.state.error && this.state.error.countryErr ? (
                <p className='editerror'>{this.state.error.countryErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='inputCity' className='form-label editLabel'>
                City<span className='text-danger ms-2'>*</span>
              </label>
              <RegionDropdown
                country={this.state.country}
                value={city}
                onChange={(val) => this.selectRegion(val)}
                className={
                  this.state.error && this.state.error.cityErr
                    ? "wrong form-select signSelect editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                    : " form-select signSelect editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                }
                id='validationServer04'
                aria-describedby='validationServer04Feedback'
              />
              {this.state.error && this.state.error.cityErr ? (
                <p className='editerror'>{this.state.error.cityErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputPhone' className='form-label editLabel'>
                Phone Number<span className='text-danger ms-2'>*</span>
              </label>
              <input
                type='text'
                className={
                  this.state.error && this.state.error.phoneErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                id='phone'
                placeholder='Please enter your Phone Number'
                onChange={(e) => {
                  this.setState({ phoneNumber: e.target.value });
                }}
                value={this.state.phoneNumber}
              />{" "}
              {this.state.error && this.state.error.phoneErr ? (
                <p className='editerror'>{this.state.error.phoneErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='inputuni' className='form-label editLabel'>
                University / Institution
                <span className='text-danger ms-2'>*</span>
              </label>
              <select
                id='inputuni'
                className={
                  this.state.error && this.state.error.universityErr
                    ? "form-control editInput signSelect wrong"
                    : "form-control editInput signSelect"
                }
                onChange={(e) => {
                  this.setState({ university: e.target.value });
                }}
              >
                <option selected>Choose your University / Institution ...</option>
                <option value='AAST CMT'>AAST CMT</option>
                <option value='AAST clc'>AAST clc</option>
              </select>
              {this.state.error && this.state.error.universityErr ? (
                <p className='editerror'>{this.state.error.universityErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='inputDep' className='form-label editLabel'>
                Field of study / Department
                <span className='text-danger ms-2'>*</span>
              </label>
              <select
                id='inputDep'
                className={
                  this.state.error && this.state.error.depErr
                    ? "form-control editInput signSelect wrong"
                    : "form-control editInput signSelect"
                }
                onChange={(e) => {
                  this.setState({ depId: e.target.value });
                }}
              >
                <option>Choose your Field of study / Department...</option>
                {this.state.dep
                  ? this.state.dep.map((item) => {
                      return this.state.department === item.dep_name ? (
                        <option value={item.id} key={item.id} selected>
                          {item.dep_name}
                        </option>
                      ) : (
                        <option key={item.id} value={item.id}>
                          {item.dep_name}
                        </option>
                      );
                    })
                  : ""}
              </select>
              {this.state.error && this.state.error.depErr ? (
                <p className='editerror'>{this.state.error.depErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
              <label for='inputRegNum' className='form-label editLabel'>
                Registration Number<span className='text-danger ms-2'>*</span>
              </label>
              <input
                type='number'
                className={
                  this.state.error && this.state.error.regNoErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                id='RegNum'
                placeholder='Please enter your Registration Number'
                onChange={(e) => {
                  this.setState({ regNo: e.target.value });
                }}
                value={this.state.regNo}
              />
              {this.state.error && this.state.error.regNoErr ? (
                <p className='editerror'>{this.state.error.regNoErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
              <label for='inputTerm' className='form-label editLabel'>
                Term<span className='text-danger ms-2'>*</span>
              </label>
              <select
                id='inputTerm'
                className={
                  this.state.error && this.state.error.periodErr
                    ? "form-control editInput signSelect wrong "
                    : "form-control editInput signSelect"
                }
                onChange={(e) => {
                  this.setState({ period: e.target.value });
                }}
                value={this.state.period}
              >
                <option>Choose your Term ...</option>
                <span className='text-danger ms-2'>*</span>

                {this.state.periodNumArr.map((num) => {
                  // console.log(num);
                  return this.state.period == num ? (
                    <option value={num} key={num} selected>
                      {num}
                    </option>
                  ) : (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>{" "}
              {this.state.error && this.state.error.periodErr ? (
                <p className='editerror'>{this.state.error.periodErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='inputGPA' className='form-label editLabel'>
                Grade / GPA<span className='text-danger ms-2'>*</span>
              </label>
              <input
                id='inputGPA'
                className={
                  this.state.error && this.state.error.gpaErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                type='number'
                step='.01'
                name=''
                onChange={(e) => {
                  this.setState({ gpa: e.target.value });
                }}
                value={this.state.gpa}
              />
              {this.state.error && this.state.error.gpaErr ? (
                <p className='editerror'>{this.state.error.gpaErr}</p>
              ) : (
                ""
              )}
              {/* <select id="inputGPA" className="form-select editInput ">
                <option selected>Choose your Grade / GPA...</option>
                <option></option>
              </select> */}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
              <label for='bdaymonth' className='form-label editLabel'>
                Start Year<span className='text-danger ms-2'>*</span>
              </label>
              <input
                // type="month"
                id='bdaymonth'
                className={
                  this.state.error && this.state.error.startyearErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                onChange={(e) => {
                  this.setState({ startYear: e.target.value });
                }}
                value={this.state.startYear}
              />{" "}
              {this.state.error && this.state.error.startyearErr ? (
                <p className='editerror'>{this.state.error.startyearErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
              <label for='bdaymonth' className='form-label editLabel'>
                Expected end Year<span className='text-danger ms-2'>*</span>
              </label>
              <input
                // type="month"
                id='bdaymonth'
                className={
                  this.state.error && this.state.error.endyearErr
                    ? "form-control editInput wrong"
                    : "form-control editInput "
                }
                onChange={(e) => {
                  this.setState({ endYear: e.target.value });
                }}
                value={this.state.endYear}
              />
              {this.state.error && this.state.error.endyearErr ? (
                <p className='editerror'>{this.state.error.endyearErr}</p>
              ) : (
                ""
              )}
            </div>
            <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
              <Link
                type='button'
                className='btn me-2 cancelBtn shadow-none '
                to='/profile'
                push
              >
                Cancel
              </Link>
              <button type='submit' className='btn updateBtn shadow-none' href='/Profile'>
                Update
              </button>
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default GeneralForm;
