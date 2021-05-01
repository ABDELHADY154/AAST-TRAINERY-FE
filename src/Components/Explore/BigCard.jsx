import React, { Component } from "react";

import { BsArrowUpRight, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "react-step-progress-bar/styles.css";
import "../../layout/Explore.css";
import "../../layout/Home.css";

export class BigCard extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      loading: false,
      token: sessionStorage.getItem("token"),
    };
    this.toggleSave = this.toggleSave.bind(this);
  }
  toggleSave = () => {
    this.setState({ saved: !this.state.saved ? true : false });
    // console.log(this.state.saved);
  };
  componentDidMount() {
    // this.props.senddata.map((data) => {
    //   //   console.log(data);
    // this.setState({
    //   advisor: this.props.advisor,
    // });
    // });
  }
  render() {
    return (
      <div>
        <div className="card mb-2">
          <div className="card-body">
            <div className="">
              <div className="">
                {this.props.post_type == "advisorPost" ? (
                  <div>
                    <div className=" col-md-6 col-6 col-sm-7 d-flex align-items-center">
                      <Link to={`/advisorProfile/${this.props.advisor.id}`}>
                        <img
                          className=" me-1 rounded"
                          id="advisorlogo"
                          style={{ height: 36, width: 36 }}
                          src={this.props.advisor.image}
                        />
                      </Link>

                      <Link to={`/advisorProfile/${this.props.advisor.id}`}>
                        <h6 id="" className="card-title ms-2 fw-bold">
                          {this.props.advisor.name}
                        </h6>
                      </Link>
                    </div>
                    <hr style={{ marginTop: 10, marginBottom: 10 }} />
                  </div>
                ) : (
                  ""
                )}
                {/* <div className='d-flex flex-row-reverse'>
                      <div class='gray'>2 min ago</div>
                    </div> */}
              </div>
            </div>

            <div className="row ">
              <Link
                to={`/CompanyProfile/${this.props.company_id}`}
                className="col-md-1 col-sm-2 col-2 col-lg-1 titleRow"
              >
                <img
                  className=" me-1 rounded"
                  id="advisorlogo"
                  style={{ height: 48, width: 48 }}
                  src={this.props.company_logo}
                />
                {/* <img
                  className="rounded"
                  id="imgicon"
                  src={this.props.company_logo}
                  style={{ height: 44, width: 44 }}
                /> */}
              </Link>

              <div className="col-10  ">
                <div className="d-flex flex-row d-flex align-items-center">
                  <Link
                    to={`/Opportunity/${this.props.id}`}
                    className="  col-md-11 col-10 col-sm-10 col-xs-10  d-flex align-items-center"
                  >
                    <h5 className="fw-bold mb-0">
                      {this.props.post_type === "adsPost"
                        ? this.props.company_name
                        : this.props.title}
                    </h5>
                  </Link>
                  <p
                    id="goldtab"
                    className="mb-0 d-flex flex-row-reverse col-md-2 col-lg-1 col-2 d-flex align-items-center"
                  >
                    {this.props.salary ? this.props.salary : ""}
                  </p>
                </div>
                <div className="row">
                  <div id="" className="row ">
                    <Link
                      to={`/CompanyProfile/${this.props.company_id}`}
                      className="mb-0"
                    >
                      <p className="mb-0">
                        {this.props.post_type !== "adsPost"
                          ? this.props.company_name
                          : this.props.title}
                      </p>
                    </Link>
                  </div>
                  <div id="gold" className=" d-flex flex-row flex-wrap">
                    {this.props.departments
                      ? this.props.departments.map((x) => {
                          return (
                            <p
                              id="gold "
                              className="me-3 mb-0 goldenn"
                              key={x.id}
                            >
                              {x.dep_name}
                            </p>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </div>

            <p className="card-text mt-2 mb-0">{this.props.description}</p>
            {this.props.post_type === "adsPost" ? (
              <div>
                <img
                  className=" mt-0 d-flex flex-column col-md-6 col-2 me-1 w-100"
                  height="400"
                  src={this.props.sponsor_image}
                />
                <div className="d-flex flex-row flex-nowrap smallres">
                  <div
                    id="promoted"
                    className="  d-flex flex-row col-12 col-md-2 fs-5"
                  >
                    <RiAdvertisementLine className="me-2 fs-3" fill="#cd8930" />
                    <p id="gold">ADS</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* <img
              className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
              id='imgicon'
              src={this.props.sponsor_image}
            /> */}
            <div className="me-4 mb-1 col-12  col-md-12">
              {this.props.tags
                ? this.props.tags.map((x, i) => {
                    return (
                      <a href="#" className=" ms-1" id="tagsipad">
                        {x.interest ? x.interest : ""}
                      </a>
                    );
                  })
                : ""}
            </div>
            <div
              className="d-flex flex-row justify-content-between smallres align-items-end "
              id="bottom"
            >
              <div className="d-flex flex-row">
                <div className=" col-7 col-md-9 col-sm-4 col-lg-12">
                  <small className="d-flex flex-wrap ">
                    {this.props.application_deadline
                      ? "Deadline " + this.props.application_deadline
                      : ""}
                  </small>
                </div>
                {this.props.post_type == "promotedPost" ? (
                  <div className="row">
                    <div className="d-flex flex-wrap promotedPost me-auto col-4 col-md-4 col-lg-4">
                      {/* <BsArrowUpRight
                        className="m-0 "
                        color="#cd8930"
                        fill="#cd8930"
                        size={15}
                      /> */}
                      <small id="gold" className="m-0">
                        Promoted
                      </small>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {this.props.post_type !== "adsPost" ? (
                <div className="d-flex flex-row-reverse ms-auto">
                  <div
                    className=" d-flex flex-row-end col-md-12 col-8 mt-md-0 mt-3 justify-content-end align-self-end align-items-end
                  "
                  >
                    {/* <div className="col-md-4"></div> */}
                    {this.props.saved == true ? (
                      <BsFillBookmarkFill
                        id="BsBookmark"
                        fill="#1e4274"
                        className="fs-2 align-self-center col-md-2 col-4"
                        // style={{ marginTop: -5 }}
                        path="0px"
                      />
                    ) : this.props.saved == false ? (
                      <BsBookmark
                        id="BsBookmark"
                        fill="#1e4274"
                        className="fs-2 align-self-center col-md-2 col-4"
                        style={{ marginTop: -5 }}
                        path="0px"
                        onClick={() => {
                          this.setState({
                            saved: this.props.saved,
                          });
                        }}
                      />
                    ) : (
                      ""
                    )}
                    {this.props.applied == true ? (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center appliedBtn px-1 py-0 col-md-5 col-8 col-sm-5"
                      >
                        Applied
                      </Link>
                    ) : this.props.applied == false ? (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center applyBtn px-1 py-0 col-md-5 col-8 col-sm-5"
                      >
                        Apply
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;
