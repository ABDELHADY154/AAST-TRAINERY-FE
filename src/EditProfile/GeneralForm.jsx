import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class GeneralForm extends Component {
  render() {
    return (
      <div className='container text-center'>
        <div class='col-8'>
          <label for='inputFullname' class='form-label'>
            Fullname
          </label>
          <input
            type='text'
            class='form-control'
            id='inputFullname'
            placeholder='Fullname'
          />
        </div>
      </div>
    );
  }
}
export default GeneralForm;
