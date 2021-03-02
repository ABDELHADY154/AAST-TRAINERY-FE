import React, { Component, useState } from "react";
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
  render() {
    const { country, region } = this.state;

    return (
      <div className='Education'>
        <form class='text-start g-3 '>
          <div class='col-md-8'>
            <label for='validationServer03' class='form-label'>
              City <span className='bg-red'> *</span>
            </label>
            <input
              type='text'
              class='form-control is-invalid'
              id='validationServer03'
              aria-describedby='validationServer03Feedback'
              required
            />
            <div id='validationServer03Feedback' class='invalid-feedback'>
              Please provide a valid city.
            </div>
          </div>
          <div className='row g-3'>
            <div class='col-md-4'>
              <label for='validationServer04' class='form-label'>
                State
              </label>{" "}
              <CountryDropdown
                value={country}
                onChange={(val) => this.selectCountry(val)}
                class='form-select'
                id='validationServer04'
                aria-describedby='validationServer04Feedback'
                required
              />
            </div>
            <div class='col-md-4'>
              <label for='validationServer05' class='form-label'>
                Zip
              </label>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
                class='form-select is-invalid'
                id='validationServer04'
                aria-describedby='validationServer04Feedback'
                required
              />
            </div>
            <div class='input-group date' data-provide='datepicker'>
              <input type='text' class='form-control' />
              <div class='input-group-addon'>
                <span class='glyphicon glyphicon-th'></span>
              </div>
            </div>

            <div class='col-12'>
              <button class='btn btn-primary' type='submit'>
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EducationForm;
