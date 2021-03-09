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
          className="d-flex flex-row  fs-5 mt-1"
          style={{ textTransform: "capitalize" }}
        >
          <div className=" d-flex flex-row flex-wrap col-4 col-md-3 me-1  fs-6">
            {this.props.skill_name}
          </div>
          <div
            id=""
            className=" d-flex flex-row flex-wrap col-0 col-md-0  fs-6 "
          ></div>
          <div id="" className=" d-flex flex-row   col-6 col-md-8 fs-6">
            Years Of Experience: {this.props.years_of_exp}
          </div>
          <div
            id="hiddenhover"
            className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
          >
            <Link renderAs="button" to={`/Profile/Skills/${id}`}>
              <BiPencil fill="#cd8930" color="#cd8930" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
