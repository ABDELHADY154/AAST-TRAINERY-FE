import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";

export default class StudentWorkExp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          id="lightfont"
          className="d-flex flex-row  fs-5 "
          style={{ textTransform: "capitalize" }}
        >
          <div className="d-flex flex-column col-10 col-md-10 fs-6 plus ">
            {this.props.interest}
          </div>
        </div>
      </>
    );
  }
}
