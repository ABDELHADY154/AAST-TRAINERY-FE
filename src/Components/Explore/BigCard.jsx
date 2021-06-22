import React, { Component } from "react";

import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";
import "react-step-progress-bar/styles.css";
import "../../layout/Explore.css";
import "../../layout/Home.css";

export class BigCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      saved: false,
    };
    // this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    if (this.props.saved === true) {
      this.setState({
        saved: true,
      });
    }
    if (this.props.applied === true) {
      this.setState({
        applied: true,
      });
    }
  }
  handleSave = async e => {
    this.setState({ saved: !this.state.saved ? true : false });

    await axios
      .post(`/W/student/save/${this.props.id}`)
      .then(save => {
        if (save.status === 200) {
          this.setState({
            saved: true,
          });
          console.log(save, "save");
        }
      })
      .catch(error => {
        if (
          error.response.data.status === 401 ||
          error.response.data.status === 404
        ) {
          sessionStorage.clear("token");
          sessionStorage.clear("status");
          this.setState({ loggedIn: false });
          window.location.reload();
        }
      });
  };
  handleUnSave = async e => {
    this.setState({ saved: !this.state.saved ? true : false });

    await axios
      .post(`/W/student/unsave/${this.props.id}`)
      .then(save => {
        if (save.status === 200) {
          this.setState({
            saved: false,
          });
          console.log(save, "unsave");
        }
      })
      .catch(error => {
        if (
          error.response.data.status === 401 ||
          error.response.data.status === 404
        ) {
          sessionStorage.clear("token");
          sessionStorage.clear("status");
          this.setState({ loggedIn: false });
          window.location.reload();
        }
      });
  };

  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="">
              <div className="">
                {this.props.post_type == "advisorPost" ? (
                  <div>
                    <div className=" col-md-6 col-6 col-sm-7 d-flex align-items-center">
                      <Link to={`/advisorProfile/${this.props.advisor.id}`}>
                        <img
                          alt={this.props.advisor.name}
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
                  alt={this.props.company_name}
                  className=" me-1 rounded"
                  id="comlogo"
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
                <div className="wrapSalary d-flex flex-row d-flex align-items-center">
                  <Link
                    to={`/Opportunity/${this.props.id}`}
                    className="  col-md-11 col-10 col-sm-10 col-xs-10  d-flex align-items-center"
                  >
                    <h6 className="fw-bold mb-0">
                      {this.props.post_type === "adsPost"
                        ? this.props.company_name
                        : this.props.title}
                    </h6>
                  </Link>
                  <small
                    id="goldtab"
                    className="salaryme mb-0 d-flex flex-row-reverse col-md-2 col-lg-1 col-2 d-flex align-items-center"
                  >
                    {/* {this.props.salary ? this.props.salary : ""} */}
                    {this.props.salary == "Paid" ? "Paid" : "Unpaid"}
                  </small>
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
                      ? this.props.departments.map(x => {
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

            <p className="card-text mt-2 mb-0 Lines">
              {this.props.description}
            </p>

            {this.props.post_type === "adsPost" ? (
              <div className=" mb-0">
                <img
                  alt="AAST Trainery sponsored image"
                  className="adsImg img-fluid mt-0 d-flex flex-column col-md-6 col-2 me-1 w-100"
                  // height="100"
                  style={{ height: 270 }}
                  src={this.props.sponsor_image}
                />
                <div className="mt-1 d-flex flex-row flex-nowrap smallres">
                  <div
                    id="promoted"
                    className="  d-flex flex-row col-12 col-md-2 fs-7 fw-bold"
                  >
                    <RiAdvertisementLine className="me-2 fs-5" fill="#cd8930" />
                    <p id="gold" className=" mb-0">
                      ADS
                    </p>
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
            {this.props.post_type !== "adsPost" ? (
              <div className=" mt-2 mb-1 col-12  col-md-12">
                {this.props.tags
                  ? this.props.tags.map((x, i) => {
                      return (
                        <a
                          // href="#"
                          className=" ms-1"
                          id="tagsipad"
                          alt="AAST Trainery post tags"
                        >
                          {x.interest ? x.interest : ""}
                        </a>
                      );
                    })
                  : ""}
              </div>
            ) : (
              ""
            )}
            <div
              className="d-flex flex-row justify-content-between smallres align-items-end "
              id="bottom"
            >
              <div className="d-flex flex-row">
                <div className=" col-10 col-md-12 col-sm-4 col-lg-12">
                  <small className=" ">
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
                    {this.state.saved == true ? (
                      <BsFillBookmarkFill
                        alt="AAST Trainery saved internship opportunity post"
                        id="BsBookmark"
                        fill="#1e4274"
                        className="fs-2 align-self-center col-md-2 col-4"
                        // style={{ marginTop: -5 }}
                        onClick={() => {
                          this.handleUnSave();
                        }}
                        path="0px"
                      />
                    ) : this.state.saved == false ? (
                      <BsBookmark
                        alt="AAST Trainery save internship opportunity post for later"
                        id="BsBookmark"
                        fill="#1e4274"
                        className="fs-2 align-self-center col-md-2 col-4"
                        path="0px"
                        onClick={() => {
                          this.handleSave();
                        }}
                      />
                    ) : (
                      ""
                    )}
                    {this.props.status == "achieved" ? (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center appliedBtn px-1 py-0 col-md-4 col-lg-6 col-8 col-sm-8"
                      >
                        Achieved
                      </Link>
                    ) : this.props.status == "accepted" ? (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center appliedBtn px-1 py-0 col-md-4 col-lg-6 col-8 col-sm-8"
                      >
                        Accepted
                      </Link>
                    ) : this.props.status == "applied" ? (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center appliedBtn px-1 py-0 col-md-4 col-lg-6 col-8 col-sm-8"
                      >
                        Applied
                      </Link>
                    ) : (
                      <Link
                        to={`/Opportunity/${this.props.id}`}
                        className="text-center applyBtn px-1 py-0 col-md-4 col-lg-6 col-8 col-sm-8"
                      >
                        Apply
                      </Link>
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
