import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/Profiless.css";
import img1 from "../../Components/assests/imgs/rec2.png";
import img2 from "../../Components/assests/imgs/cib.png";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import { BsCheck, BsArrowUpRight } from "react-icons/bs";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineGlobal, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import BigCard from "../Explore/BigCard";

export default class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      data: {},
      internshipPosts: [],
      openedPosts: [],
      endedPosts: [],
      FormLoading: true,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get(`/W/student/company/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          openedPosts: res.data.response.data.internshipPosts.open,
          endedPosts: res.data.response.data.internshipPosts.ended,
          FormLoading: false,
        });
        // console.log(res.data.response.data.internshipPosts.ended);
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
  }

  render() {
    let id = this.props.id;
    console.log(this.state.internshipPosts.open);
    return (
      <div className="">
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container profileMT">
            <div>
              <div className="d-flex flex-row">
                <img
                  // src={img1}
                  src={this.state.data.logo}
                  className="ms-1 me-3 col-2 rounded-circle companyImg"
                />
                <div className="col-8 mt-3 ">
                  <div className=" w-10">
                    <h4 className="companyName ">
                      {this.state.data.company_name}
                    </h4>
                    <p className="">{this.state.data.company_field}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h5 className="companyTitel">Company Profile</h5>
                <p className="companyDesc">{this.state.data.company_desc}</p>
              </div>
              <div className="mt-1">
                <h5 className="companyTitel">Company Info</h5>
                <div className="row mt-3">
                  <p className="col-lg-2 col-2 col-md-2 col-sm-12 col-xs-12 companyInfoTxt ">
                    <a
                      href={`tel:${this.state.data.phone_number}`}
                      className="websiteLink"
                      target="_blank"
                    >
                      <AiOutlinePhone
                        id="iconss"
                        className="me-2 "
                        size="20"
                        style={{ color: "#cd8930 " }}
                      />
                      {this.state.data.phone_number}
                    </a>
                  </p>
                  <p className="col-lg-3 col-3 col-md-3 col-sm-12 col-xs-12 companyInfoTxt  align-items-start">
                    <a
                      // href={this.state.data.address}
                      href={`http://maps.google.com/?q=1200:${this.state.data.address}`}
                      className="websiteLink"
                      target="_blank"
                    >
                      <GoLocation
                        id="iconss"
                        className="me-2 "
                        size="20"
                        style={{ color: "#cd8930 " }}
                      />
                      {this.state.data.address}
                    </a>
                  </p>
                  <p className="col-lg-2 col-2 col-md-2 col-sm-12 col-xs-12 companyInfoTxt align-items-start">
                    <a
                      href={this.state.data.website}
                      className="websiteLink"
                      target="_blank"
                    >
                      <AiOutlineGlobal
                        id="iconss"
                        className="me-2 "
                        size="20"
                        style={{ color: "#cd8930 ", size: 10 }}
                      />
                      Website Link
                    </a>
                  </p>
                  <p className="col-xl-4 col-lg-4 col-4 col-md-4 col-sm-12 col-xs-12 companyInfoTxt text-break text-wrap">
                    <a
                      href={`mailto:${this.state.data.email}`}
                      className="websiteLink"
                      target="_blank"
                    >
                      <AiOutlineMail
                        id="iconss"
                        className="me-2 "
                        color="#CD8930"
                        size="21"
                        style={{ color: "#cd8930 ", size: 10 }}
                      />
                      {this.state.data.email}
                    </a>
                  </p>
                </div>
                <div className="">
                  <h4 className="companyTitel" style={{ marginLeft: -2 }}>
                    Opened Internship
                  </h4>
                  {this.state.openedPosts.length == 0 ? (
                    <div className="col-12">
                      <p
                        className="row mb-5 mt-2 d-flex justify-content-center explore"
                        to="/Explore"
                      >
                        No Opened Internships
                      </p>
                    </div>
                  ) : (
                    this.state.openedPosts.map((data) => {
                      return (
                        <BigCard
                          title={data.title}
                          company_logo={data.company_logo}
                          salary={data.salary}
                          company_name={data.company_name}
                          departments={data.departments}
                          description={data.description}
                          tags={data.tags}
                          application_deadline={data.application_deadline}
                          // post_type={data.post_type}
                          sponsor_image={data.sponsor_image}
                          key={data.id}
                          saved={data.saved}
                          applied={data.applied}
                          id={data.id}
                          company_id={data.company_id}
                          accepted={data.accepted}
                        />
                      );
                    })
                  )}
                </div>
                <div>
                  <h4 className="companyTitel mt-4">Ended Internships</h4>
                  {this.state.endedPosts.length == 0 ? (
                    <div className="col-12">
                      <p
                        className="row mb-5 mt-2 d-flex justify-content-center explore"
                        to="/Explore"
                      >
                        No Ended Internships
                      </p>
                    </div>
                  ) : (
                    this.state.endedPosts.map((data) => {
                      return (
                        <BigCard
                          title={data.title}
                          company_logo={data.company_logo}
                          salary={data.salary}
                          company_name={data.company_name}
                          departments={data.departments}
                          description={data.description}
                          tags={data.tags}
                          application_deadline={data.application_deadline}
                          post_type={data.post_type}
                          sponsor_image={data.sponsor_image}
                          reviewed={data.reviewed}
                          status={data.status}
                          key={data.id}
                          id={data.id}
                          company_id={data.company_id}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
        </LoadingOverlay>
      </div>
    );
  }
}

class CompanyPostADS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    let id = this.props.id;
    return (
      <>
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <img
                    className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                    id="imgicon"
                    src={this.props.company_logo}
                  />
                  <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                    {this.props.company_name}
                  </div>
                </div>
                <p className="card-text mt-2">{this.props.description}</p>
                <img
                  className=" mt-0 adsImg col-md-11 col-11 me-1 w-100"
                  src={this.props.sponsor_image}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
class CompanyPostPromoted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    let id = this.props.id;
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              {/* <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-4 col-2 me-1"
                  id="imgicon"
                  src={this.props.company_logo}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  <p
                    id=""
                    className="card-title fw-bold"
                    style={{ fontSize: 18 }}
                  ></p>
                </div>
                <div
                  id="graytab"
                  className=" fs-6 mt-2 text-muted col-2 col-md-1"
                >
                  2 min ago
                </div>
              </div>
              <hr /> */}
              <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-4 col-2 me-1"
                  id="imgicon"
                  src={this.props.company_logo}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  <p
                    id=""
                    className="card-title fw-bold"
                    style={{ fontSize: 18 }}
                  >
                    {this.props.title}
                  </p>
                </div>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  {this.props.salary}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="column">
                  <div className="d-flex ms-3 flex-column">
                    {this.props.company_name}
                  </div>

                  <div className="mt-1 ms-2 departments d-flex flex-row flex-wrap ">
                    {this.props.departments.map((item) => {
                      return (
                        <Departments
                          id={item.id}
                          key={item.id}
                          departments={item.departments}
                          dep_name={item.dep_name}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="card-text mt-2">{this.props.description}</p>
              <div className="d-flex flex-row flex-wrap ">
                <div className="d-flex flex-row flex-wrap " id="firsttagipad">
                  {this.props.tags.map((item) => {
                    return (
                      <Interest
                        id={item.id}
                        key={item.id}
                        interest={item.interest}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12 col-md-5 " style={{ marginRight: 38 }}>
                  <p>
                    Deadline {"        "} {this.props.application_deadline}
                  </p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-2 justify-content-start me-1">
                  <BsArrowUpRight
                    className="me-2"
                    color="#cd8930"
                    fill="#cd8930"
                  />
                  <p id="gold">Promoted</p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {this.props.saved == true ? (
                    <BsFillBookmarkFill
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                      onClick={() => {
                        this.setState({
                          saved: this.props.saved,
                        });
                      }}
                    />
                  ) : this.props.saved == false ? (
                    <BsBookmark
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
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

                  <button className="applyBtn px-1 py-0 col-md-5 col-8 col-sm-5">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CompanyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    let id = this.props.id;
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-4 col-2 me-1"
                  id="imgicon"
                  src={this.props.company_logo}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  <p
                    id=""
                    className="card-title fw-bold"
                    style={{ fontSize: 18 }}
                  >
                    {this.props.title}
                  </p>
                </div>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  {this.props.salary}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="column">
                  <div className="d-flex ms-3 flex-column">
                    {this.props.company_name}
                  </div>
                  <div className="mt-1 ms-2 departments d-flex flex-row flex-wrap ">
                    {this.props.departments.map((item) => {
                      return (
                        <Departments
                          id={item.id}
                          key={item.id}
                          departments={item.departments}
                          dep_name={item.dep_name}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="card-text mt-2">{this.props.description}</p>
              <div className="d-flex flex-row flex-wrap ">
                <div className="d-flex flex-row flex-wrap " id="firsttagipad">
                  {this.props.tags.map((item) => {
                    return (
                      <Interest
                        id={item.id}
                        key={item.id}
                        interest={item.interest}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-12 col-md-7 " style={{ marginRight: 38 }}>
                  <p>
                    Deadline {"        "} {this.props.application_deadline}
                  </p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {this.props.saved == true ? (
                    <BsFillBookmarkFill
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                    />
                  ) : this.props.saved == false ? (
                    <BsBookmark
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
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

                  <button className="applyBtn px-1 py-0 col-md-5 col-8 col-sm-5">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ms-2 " id="gold">
        {this.props.dep_name}
      </div>
    );
  }
}

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" me-4 mt-1 mb-1 tags " id="firsttagipad">
        <a href="#" className="tagsipad tagsP " id="tags">
          {this.props.interest}
        </a>
      </div>
    );
  }
}
