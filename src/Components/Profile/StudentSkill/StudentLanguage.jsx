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
          {/* <div className=" d-flex flex-row  col-12 col-md-12 me-1 mt-1  fs-6"> */}
          <div className=" d-flex flex-column  col-3 col-md-2 me-1 mt-1  fs-6">
            {this.props.language}
          </div>

          <div id="" className=" d-flex flex-column  col-7 col-md-9 fs-6">
            <ReactStars
              count={5}
              value={this.props.level}
              edit={false}
              size={23}
              activeColor="#F2A23A"
            />
          </div>
          <div
            id="hiddenhover"
            className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
          >
            <Link renderAs="button" to={`/Profile/Skills/Language/${id}`}>
              <BiPencil fill="#cd8930" color="#cd8930" />
            </Link>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}
