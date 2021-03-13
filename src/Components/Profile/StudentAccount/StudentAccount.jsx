import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
export default class StudentAccount extends Component {
  render() {
    let id = this.props.id;

    return (
      <>
        <div
          id="lightfont"
          className="d-flex flex-row me-2 fs-5 "
          style={{ textTransform: "capitalize" }}
        >
          <div className=" d-flex flex-row flex-wrap col-12 col-md-12  mt-2 fs-6 plus ">
            {/* {this.props.interest} */}
          </div>
        </div>
      </>
    );
  }
}
