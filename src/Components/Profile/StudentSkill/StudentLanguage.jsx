import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";

export default class StudentWorkExp extends Component {
  render() {
    return (
      <>
        <div
          id="lightfont"
          className="d-flex flex-row  fs-5 "
          style={{ textTransform: "capitalize" }}
        >
          <div className=" d-flex flex-row flex-wrap col-4 col-md-5 me-1">
            {this.props.skill_name}
          </div>
          <div
            id="worktag"
            className=" d-flex flex-row flex-wrap col-3 col-md-1  fs-6 "
          >
            {this.props.worktag}
          </div>
          <div
            id="worktag"
            className=" d-flex flex-row flex-wrap col-3 col-md-5 "
          >
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={28}
              activeColor="#F2A23A"
            />
          </div>
          <div
            id="hiddenhover"
            className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
          >
            <Link
              renderAs="button"

              // to="/Register"
            >
              <BiPencil fill="#cd8930" color="#cd8930" />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row fs-6 ">
          <div className=" d-flex flex-row col-12 col-md-12">
            {this.props.workCity}, {this.props.workCountry}.
          </div>
        </div>
        <div className="d-flex flex-row fs-6 ">
          <div className=" d-flex flex-row col-12 col-md-12">
            {this.props.fromWork} to {this.props.toWork} ·
            {/* {diffDays} Years */}
          </div>
        </div>
        <div className="d-flex flex-row fs-6 mt-2 ">
          <a
            id="goldcredentials"
            renderAs="button"
            href={this.props.workCredential_url}
            className="  mb-1   d-flex flex-row col-12 col-md-3"
            // to="/Register"
          >
            See credentials
          </a>
        </div>
        <hr />
      </>
    );
  }
}
