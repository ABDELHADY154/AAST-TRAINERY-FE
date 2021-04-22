import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import { BiPencil } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

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
          <div className=" d-flex skillname flex-row flex-wrap col-4 col-md-5 me-1">
            {this.props.job_title} at {this.props.company_name}
          </div>
          <div className="col-3 col-md-1 ">
            <div id="worktag">
              <p className="d-flex justify-content-center align-items-center flex-row flex-wrap fs-6 ">
                {this.props.experience_type}
              </p>
            </div>
          </div>

          <div
            // id="worktag"
            className=" d-flex flex-row flex-wrap col-3 col-md-5 "
          ></div>
          <div
            id="hiddenhover"
            className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
          >
            <Link renderAs="button" to={`/Profile/Experience/${id}`}>
              <BiPencil
                className="skillnamepencil"
                id="skillnamepen"
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
            {this.props.from} to {this.props.to} ·{/* {diffDays} Years */}
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap fs-6 mt-2 ">
          {this.props.cred_url == null ? (
            "  "
          ) : (
            <div className="d-flex flex-column col-md-2 col-12 mb-1">
              <a
                id="goldcredentials"
                renderAs="button"
                href={this.props.cred_url}
                target="_blank"
              >
                See credentials
              </a>
            </div>
          )}
          {this.props.cred == null ? (
            "  "
          ) : (
            <div
              id="docicon"
              className="d-flex flex-column col-md-2 col-12 mb-1"
            >
              <a
                id="docicon"
                href={this.props.cred}
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
          )}
        </div>
        <hr />
      </>
    );
  }
}
