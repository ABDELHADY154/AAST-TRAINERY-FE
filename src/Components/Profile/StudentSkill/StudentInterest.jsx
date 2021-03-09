import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";

export default class StudentWorkExp extends Component {
  constructor(props) {
    super(props);
  }

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
            {this.props.interest}
          </div>
        </div>
      </>
    );
  }
}
