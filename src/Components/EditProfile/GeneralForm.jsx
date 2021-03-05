import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import ReactFlagsSelect from "react-flags-select";
import Footer2 from "../Common/Footer2";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
    this.state = { country: "", region: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  async componentDidMount() {
    await axios
      .get("/W/student/profile/general")
      .then((res) => {
        this.setState({
          image: res.data.response.data.image,
        });
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    const { country, region } = this.state;

    return (
      <div>
        {" "}
        <div className="container ">
          <h1 className="editTitle text-center">Edit Profile</h1>
          <h3 className="categoryTitle d-flex justify-content-start mb-3">
            Categories
          </h3>
          <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  active"
                id="General-tab"
                href="/Profile/General"
              >
                General
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  "
                id="Education-tab"
                href="/Profile/Education"
              >
                Education
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Experiance-tab"
                href="/Profile/Experiance"
              >
                Experiance
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Courses-tab"
                href="/Profile/Courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Skills-tab"
                href="/Profile/Skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Accounts-tab"
                href="/Profile/Accounts"
              >
                Accounts
              </a>
            </li>
          </ul>
          <form className="row g-3 mb-3">
            <div className="col-11 mb-4 mt-4">
              <div className="row ">
                <img
                  src={this.state.image}
                  className="col-3 profieImg rounded-circle"
                />
                <div className="col-10 ">
                  <label
                    className="form-label fs-5 mt-2 imgLabel"
                    for="customFile"
                  >
                    Profile Photo
                  </label>
                  <p className="fw-light">
                    You can upload a .jpg, .png, or .gif photo with max size of
                    10MB.
                  </p>

                  <input
                    type="file"
                    className="imgUploadBtn"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
              <label for="inputfullname" className="form-label editLabel">
                Full Name<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="text"
                className="form-control editInput "
                id="fullname"
                placeholder="Please enter your full name"
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12">
              <label for="inputEmail4" className="form-label editLabel">
                Gender<span className="text-danger ms-2">*</span>
              </label>
              <div className="row ">
                <div className="male col-4 col-lg-3 col-md-4 col-sm-4 col-xs-3 form-check form-check-inline d-flex">
                  <input
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="male"
                    className="radio editInput "
                  />
                  <label
                    className="form-check-label raioLabelEdit"
                    for="inlineCheckbox3"
                  >
                    Male
                  </label>
                </div>
                <div className=" female col-4 col-lg-3 col-md-4 col-sm-5 col-xs-3 checkbox form-check-inline d-flex">
                  <input
                    className="radio editInput"
                    type="radio"
                    name="inlineRadioOptions"
                    id="Gender"
                    value="female"
                  />
                  <label
                    className="form-check-label raioLabelEdit "
                    for="inlineCheckbox3"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="inputDOB" className="form-label editLabel ">
                Date of birth<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="date"
                className="form-control editInput  "
                id="DOB"
              />
            </div>
            <div className="ol-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
              <label for="inputNationaity" className="form-label editLabel ">
                Nationaity<span className="text-danger ms-2">*</span>
              </label>
              <FlagsSelect />
              <input
                type="text"
                className="form-control editInput  "
                id="nationaity"
                placeholder="Please enter your Nationaity"
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12">
              <label for="inputCountry" className="form-label editLabel">
                Country<span className="text-danger ms-2">*</span>
              </label>
              <CountryDropdown
                value={this.state.country ? this.state.country : country}
                onChange={(val) => this.selectCountry(val)}
                className={
                  this.state.error && this.state.error.countryErr
                    ? "wrong form-select editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                    : " form-select editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                }
                id="validationServer04"
                aria-describedby="validationServer04Feedback"
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="inputCity" className="form-label editLabel">
                City<span className="text-danger ms-2">*</span>
              </label>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
                className={
                  this.state.error && this.state.error.cityErr
                    ? "wrong form-select editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                    : " form-select editInput col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12"
                }
                id="validationServer04"
                aria-describedby="validationServer04Feedback"
                // value={(e) => this.setState({ City: e.target.value })}
              />
            </div>
            <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
              <label for="inputPhone" className="form-label editLabel">
                Phone Number<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="number"
                className="form-control editInput "
                id="phone"
                placeholder="Please enter your Phone Number"
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="inputuni" className="form-label editLabel">
                University / Institution
                <span className="text-danger ms-2">*</span>
              </label>
              <select id="inputuni" className="form-select editInput  ">
                <option selected>
                  Choose your University / Institution ...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="inputDep" className="form-label editLabel">
                Field of study / Department
                <span className="text-danger ms-2">*</span>
              </label>
              <select id="inputDep" className="form-select editInput   ">
                <option selected>
                  Choose your Field of study / Department...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
              <label for="inputRegNum" className="form-label editLabel">
                Registration Number<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="number"
                className="form-control editInput "
                id="RegNum"
                placeholder="Please enter your Registration Number"
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12">
              <label for="inputTerm" className="form-label editLabel">
                Term<span className="text-danger ms-2">*</span>
              </label>
              <select id="inputTerm" className="form-select editInput ">
                <option selected>Choose your Term ...</option>
                <span className="text-danger ms-2">*</span>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="inputGPA" className="form-label editLabel">
                Grade / GPA<span className="text-danger ms-2">*</span>
              </label>
              <select id="inputGPA" className="form-select editInput ">
                <option selected>Choose your Grade / GPA...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12">
              <label for="bdaymonth" className="form-label editLabel">
                Start Year<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="month"
                id="bdaymonth"
                className="form-control editInput "
              />
            </div>
            <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
              <label for="bdaymonth" className="form-label editLabel">
                Expected end Year<span className="text-danger ms-2">*</span>
              </label>
              <input
                type="month"
                id="bdaymonth"
                className="form-control editInput  "
              />
            </div>
            <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5">
              <button type="submit" className="btn me-2 cancelBtn shadow-none">
                Cancel
              </button>
              <button type="submit" className="btn updateBtn shadow-none">
                Update
              </button>
            </div>
            {/* <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5">
            <button type="submit" class="btn me-2 cancelBtn shadow-none">
              Cancel
            </button>
            <button type="submit" class="btn doneBtn shadow-none">
              Add
            </button>
          </div>
          <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default GeneralForm;
function FlagsSelect() {
  const [selected, setSelected] = useState("");
  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => setSelected(code)}
    />
  );
}
