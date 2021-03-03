import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    return (
      <form class="row g-3 mb-3">
        <label class="form-label" for="customFile">
          Default file input example
        </label>
        <div>
          <input type="file" onChange={this.handleChange} />
          <img src={this.state.file} />
        </div>
        <div class="col-12">
          <label for="inputfullname" class="form-label editLabel">
            Full Name<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="text"
            className="form-control editInput longInput"
            id="fullname"
            placeholder="Please enter your full name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" className="form-label editLabel">
            Gender<span className="text-danger ms-2">*</span>
          </label>
          <div className="row ">
            <div class="male col-4 col-lg-3 col-md-4 col-sm-4 col-xs-3 form-check form-check-inline d-flex">
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
        <div className="col-md-6 halfEdit">
          <label for="inputDOB" className="form-label editLabel ">
            Date of birth<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="date"
            className="form-control editInput halfInput "
            id="DOB"
          />
        </div>
        <div className="col-12">
          <label for="inputNationaity" class="form-label editLabel ">
            Nationaity<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="text"
            className="form-control editInput longInput "
            id="nationaity"
            placeholder="Please enter your Nationaity"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCountry" className="form-label editLabel">
            Country<span className="text-danger ms-2">*</span>
          </label>
          <select
            id="inputCountry"
            className="form-select editInput halfInput "
          >
            <option selected>Choose your Country...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 halfEdit">
          <label for="inputCity" className="form-label editLabel">
            City<span className="text-danger ms-2">*</span>
          </label>
          <select id="inputCity" className="form-select editInput halfInput ">
            <option selected>Choose your City...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-12">
          <label for="inputPhone" class="form-label editLabel">
            Phone Number<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="number"
            className="form-control editInput longInput"
            id="phone"
            placeholder="Please enter your Phone Number"
          />
        </div>
        <div className="col-md-6 ">
          <label for="inputuni" className="form-label editLabel">
            University / Institution<span className="text-danger ms-2">*</span>
          </label>
          <select id="inputuni" className="form-select editInput halfInput ">
            <option selected>Choose your University / Institution ...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 halfEdit">
          <label for="inputDep" className="form-label editLabel">
            Field of study / Department
            <span className="text-danger ms-2">*</span>
          </label>
          <select id="inputDep" className="form-select editInput  halfInput ">
            <option selected>Choose your Field of study / Department...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-12">
          <label for="inputRegNum" class="form-label editLabel">
            Registration Number<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="number"
            className="form-control editInput longInput"
            id="RegNum"
            placeholder="Please enter your Registration Number"
          />
        </div>
        <div class="col-md-6">
          <label for="inputTerm" className="form-label editLabel">
            Term<span className="text-danger ms-2">*</span>
          </label>
          <select id="inputTerm" className="form-select editInput halfInput">
            <option selected>Choose your Term ...</option>
            <span className="text-danger ms-2">*</span>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-6 halfEdit">
          <label for="inputGPA" className="form-label editLabel">
            Grade / GPA<span className="text-danger ms-2">*</span>
          </label>
          <select id="inputGPA" className="form-select editInput halfInput">
            <option selected>Choose your Grade / GPA...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="bdaymonth" className="form-label editLabel">
            Start Year<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="month"
            id="bdaymonth"
            className="form-control editInput halfInput"
          />
        </div>
        <div class="col-md-6 halfEdit">
          <label for="bdaymonth" className="form-label editLabel">
            Expected end Year<span className="text-danger ms-2">*</span>
          </label>
          <input
            type="month"
            id="bdaymonth"
            className="form-control editInput halfInput "
          />
        </div>
        <div class="col-12 d-flex justify-content-end">
          <button type="submit" class="btn me-2 cancelBtn shadow-none">
            Cancel
          </button>
          <button type="submit" class="btn doneBtn shadow-none">
            Add
          </button>
        </div>
        <div class="col-12 d-flex justify-content-end">
          <button type="submit" class="btn deleteBtn me-2 shadow-none ">
            Delete
          </button>
          <button type="submit" class="btn updateBtn shadow-none">
            Update
          </button>
        </div>
      </form>
    );
  }
}
export default GeneralForm;
