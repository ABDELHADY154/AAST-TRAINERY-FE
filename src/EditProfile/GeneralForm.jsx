import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class GeneralForm extends Component {
  render() {
    return (
      <div className="container text-center">
        <div class="col-12">
          <label for="inputFullname" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control editInput"
            id="inputFullname"
            placeholder="Full Name"
          />
        </div>
      </div>
    );
  }
}
export default GeneralForm;
