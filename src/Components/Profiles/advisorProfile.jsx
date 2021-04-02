import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import "../../layout/Profiless.css";
import img from "../../Components/assests/imgs/rec2.png";
import img2 from "../../Components/assests/imgs/cib.png";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import { FiPhone, FiSearch, FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineGlobal, AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
export default class advisorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      data: {},
      internshipPosts: [],
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
      .get(`/W/student/advisor/${10}`)
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          internshipPosts: res.data.response.data.internshipPosts,
          FormLoading: false,
        });
        console.log(res.data.response.data.internshipPosts);
        // console.log(res.data.response.data.internshipPosts.description);
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
  }

  render() {
    return (
      <div>
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
          <div className="container ">
            <div className="row ">
              <img
                // src={img}
                src={this.state.data.image}
                className="ms-3 me-2 col-3 rounded-circle companyImg"
              />
              <div className="col-6  mt-3 ">
                <h4 className="companyName ">
                  {this.state.data.name}
                  {/* Dr. Rehab Elbadrawy */}
                </h4>
                <p className="">
                  {/* BIS  */}
                  {this.state.data.title}
                  {"   "}
                  Training advisor
                </p>
              </div>
              <div className="mt-4">
                <h5 className="companyTitel">Advisor Profile</h5>
                <p className="companyDesc">{this.state.data.bio}</p>
              </div>
              <div className="mt-1">
                <h5 className="companyTitel">Advisor Info</h5>
                <div className="row mt-3">
                  <p className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt">
                    <a
                      href={`mailto:${this.state.data.email}`}
                      // ?subject = Feedback&body = Message"
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
                  <p
                    className="col-lg-2 col-2 col-md-6 col-sm-12 col-xs-12 companyInfoTxt"
                    style={{ color: "#1E4274" }}
                  >
                    <FiUsers
                      className="me-2 "
                      color="#CD8930"
                      size="20"
                      style={{ color: "#cd8930 " }}
                    />
                    {this.state.data.university}
                  </p>
                  <p
                    className="col-lg-3 col-3 col-md-6 col-sm-12 col-xs-12 companyInfoTxt"
                    style={{ color: "#1E4274" }}
                  >
                    <FiUsers
                      className="me-2 "
                      color="#CD8930"
                      size="20"
                      style={{ color: "#cd8930 ", size: 10 }}
                    />
                    {this.state.data.department}
                  </p>
                </div>
                <div>
                  <h4 className="companyTitel">Published Internship</h4>

                  {this.state.internshipPosts.map((item) => {
                    return (
                      <CompanyPost
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        company_name={item.company_name}
                        application_deadline={item.application_deadline}
                        salary={item.salary}
                        departments={item.departments}
                        tags={item.tags}
                      />
                    );
                  })}
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

class CompanyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <img
                  className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                  id="imgicon"
                  src={img2}
                />
                <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                  {/* UI/UX Designer */}
                  {this.props.title}
                </div>
                <div id="goldtab" className=" fs-6 mt-2 col-2 col-md-1">
                  {this.props.salary}
                  {/* Paid */}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="d-flex ms-3 flex-column">
                  {/* CIB */}
                  {this.props.company_name}
                </div>
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
                {/* <div id="gold" className="  d-flex ms-2 flex-column">
                Finance
              </div> */}
              </div>
              <p className="card-text mt-2">
                {this.props.description}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam repudiandae aut possimus. Repellendus at
              nostrum iste doloremque. Ea omnis ipsam, eum nam
              tempore culpa illum consequuntur quis nobis adipisci
              et? */}
              </p>

              <div className="d-flex flex-row flex-wrap ">
                {this.props.tags.map((item) => {
                  return (
                    <Interest
                      id={item.id}
                      key={item.id}
                      interest={item.interest}
                    />
                  );
                })}
                {/* <div
                  className="d-flex flex-column col-4 col-md-1 me-4 "
                  id="firsttagipad"
                >
                  <a href="#" className="tagsipad  " id="tags">
                    Banking
                  </a>
                </div> */}
                <div
                  id="drop"
                  className="d-flex flex-column col-md-3  
                 justify-space-between"
                >
                  <p>
                    Deadline {"        "}
                    {this.props.application_deadline}
                    {/* 11 Dec 2021 */}
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
      <div id="gold" className="  d-flex ms-2 flex-column">
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
      <div className=" me-4 tags " id="firsttagipad">
        <a href="#" className="tagsipad tagsP " id="tags">
          {this.props.interest}
        </a>
      </div>
    );
  }
}
