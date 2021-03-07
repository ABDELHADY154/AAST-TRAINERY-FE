import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";

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
          className="d-flex flex-row  fs-5 "
          style={{ textTransform: "capitalize" }}
        >
          <div className=" d-flex flex-row flex-wrap col-6 col-md-2 me-1 mt-2  fs-6">
            {this.props.language}
          </div>
          <div
            id=""
            className=" d-flex flex-row flex-wrap col-0 col-md-0  fs-6 "
          ></div>
          <div id="" className=" d-flex flex-row  col-6 col-md-8 fs-6">
            <ReactStars
              count={5}
              value={this.props.level}
              edit={false}
              size={25}
              activeColor="#F2A23A"
            />
          </div>
        </div>
      </>
    );
  }
}
