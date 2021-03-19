import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

export default class StudentEdu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.id;
    return (
      <>
        <div
          id="lightfont"
          className="flex-row d-flex fs-5 col-12 col-md-12 "
          style={{ textTransform: "capitalize" }}
        >
          <div className=" skillname d-flex flex-row col-10 col-md-11 col-xs-10 me-3">
            {this.props.schoolName}
          </div>
          <div
            // id="hiddenhover"
            className="d-flex flex-column col-md-1 col-1 col-xs-1   "
          >
            <Link to={`/Profile/Education/${id}`}>
              <BiPencil
                id="skillnamepen"
                className="skillnamepencil"
                fill="#cd8930"
                color="#cd8930"
              />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-row fs-6 ">
          <div className=" d-flex flex-row col-12 col-md-12">
            {this.props.city}, {this.props.country}.
          </div>
        </div>
        <div className="d-flex flex-row fs-6 ">
          <div className=" d-flex flex-row col-12 col-md-12">
            {this.props.fromDate} to {this.props.toDate} ·
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap fs-6 mt-2 ">
          <div className="d-flex flex-column col-md-2 col-12 mb-1">
            <a
              id="goldcredentials"
              renderAs="button"
              href={this.props.cred}
              target="_blank"
            >
              See credentials
            </a>
          </div>
          <div id="docicon" className="d-flex flex-column col-md-2 col-12 mb-1">
            <a
              id="docicon"
              href={this.props.credential}
              renderAs="button"
              target="_blank"
            >
              <CgFileDocument
              size="20px"
                id="docicon"
                fill="#cd8930"
                color="#cd8930"
              ></CgFileDocument>
            </a>
          </div>
        </div>

        <hr />
      </>
    );
  }
}
{
  /* {diffDays} Years */
}
// to="/Register"
