import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import EditNav from "./EditNav";

class CoursesForm extends Component {
  setactive(val) {
    this.setState({ Courses: val });
  }
  render() {
    return (
      <div>
        <div className='container '>
          <EditNav setactive={"Courses"} />

          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            hola from Courses
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default CoursesForm;
