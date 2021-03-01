/** @format */

import React, { Component } from "react";
import profileimg from "../../Components/assests/imgs/pp.jpg";
import "../../layout/Profile.css";
import { Link } from "react-router-dom";
import { MdSettingsPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";

// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";

class Profile extends Component {
  state = {
    name: "",
    image: "",
    email: "",
    department: "",
    start_year: 0,
    end_year: 0,
    date_of_birth: "",
    age: 0,
    reg_no: 0,
    gender: "",
    period: 0,
    gpa: 0,
    nationality: "",
    country: "",
    city: "",
    profile_updated: false,
    profile_score: 0,
    university: "",
    phone_number: "",
  };
  async componentDidMount() {
    await axios
      .get("/W/student/get-profile")
      .then((res) => {
        this.setState({
          name: res.data.response.data.name,
          image: res.data.response.data.image,
          email: res.data.response.data.email,
          department: res.data.response.data.department,
          start_year: res.data.response.data.start_year,
          end_year: res.data.response.data.end_year,
          date_of_birth: res.data.response.data.date_of_birth,
          age: res.data.response.data.age,
          reg_no: res.data.response.data.reg_no,
          gender: res.data.response.data.gender,
          period: res.data.response.data.period,
          gpa: res.data.response.data.gpa,
          nationality: res.data.response.data.nationality,
          country: res.data.response.data.country,
          city: res.data.response.data.city,
          profile_updated: res.data.response.data.profile_updated,
          profile_score: res.data.response.data.profile_score,
          university: res.data.response.data.university,
          phone_number: res.data.response.data.phone_number,
        });
        // console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container-fluid ">
        <div className="container  ">
          <div className="d-flex flex-row flex-wrap">
            <img
              className="d-flex flex-column col-2 col-md-1 me-4"
              id="profilepp"
              src={profileimg}
            ></img>
            <div className="d-flex flex-column col-7 col-md-4 mt-1 me-5">
              <div className="d-flex flex-row flex-wrap">{this.state.name}</div>
              <div className="d-flex flex-row flex-wrap">
                {this.state.university}
              </div>
              <div className="d-flex flex-row flex-wrap ">
                {this.state.department} <span className="ms-2">3.9</span>
              </div>
              <div className="d-flex flex-row flex-wrap">
                {this.state.start_year} - {this.state.end_year}
              </div>
            </div>
            <div className="d-flex flex-column col-md-3 "></div>
            <div
              id="topbtns"
              className="d-flex flex-column col-12 col-md-3 mt-1"
            >
              <div className="d-flex flex-row">
                <div className="d-flex flex-column col-6 col-md-6">
                  <Link
                    renderAs="button"
                    className="btn shadow-none bluebtn bluebtn1 "
                    // to="/Register"
                  >
                    Generate CV
                  </Link>
                </div>
                <div className="d-flex flex-column col-6 col-md-6">
                  <Link
                    renderAs="button"
                    className="btn shadow-none bluebtn "
                    // to="/Register"
                  >
                    Update Info
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <div className="d-flex flex-column col-4 col-md-2">
                  <Link
                    renderAs="button"
                    className="btn shadow-none goldbtn"
                    // to="/Register"
                  >
                    My Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="blueribbon" className="container-fluid">
          <div className="container">
            <div className="d-flex flex-row flex-wrap">
              <div className="d-flex flex-column col-12 col-md-3 me-4">
                <div id="orangetitle" className="d-flex flex-row fs-4">
                  General Information:
                </div>
                <div
                  className="d-flex flex-row info"
                  style={{ textTransform: "capitalize" }}
                >
                  Gender: {"  "}
                  {this.state.gender}
                </div>
                <div className="d-flex flex-row info">
                  {" "}
                  Age: {"  "}
                  {this.state.age} {"  "}years
                </div>
                <div
                  className="d-flex flex-row info"
                  style={{ textTransform: "capitalize" }}
                >
                  Nationality: {"  "}
                  {this.state.nationality}
                </div>
                <div
                  className="d-flex flex-row info"
                  style={{ textTransform: "capitalize" }}
                >
                  Address: {"  "}
                  {this.state.city}, {this.state.country}
                </div>
              </div>
              <div className="d-flex flex-column col-12 col-md-5 me-5"></div>
              <div className="d-flex flex-column col-12 col-md-3">
                <div
                  id="orangetitle"
                  className="d-flex flex-row fs-4 orangetitle2"
                >
                  Contact Information:
                </div>
                <div className="d-flex flex-row info">
                  <MdSettingsPhone
                    fill="white"
                    color="white"
                    className="me-2 icon"
                  />
                  {this.state.phone_number}
                </div>
                <div
                  className="d-flex flex-row info"
                  style={{ textTransform: "capitalize" }}
                >
                  <HiOutlineMail
                    fill="white"
                    color="white"
                    className="me-2 icon"
                  />
                  {this.state.email}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="education" className="card mt-5">
            <div className="card-body">
              <div className="d-flex flex-row titlecard fs-4 mb-2">
                Education
                <Link
                  renderAs="button"
                  className="  ms-3 plus"
                  // to="/Register"
                >
                  +
                </Link>
              </div>
              <div
                id="lightfont"
                className="d-flex flex-row  fs-5 "
                style={{ textTransform: "capitalize" }}
              >
                <div className=" d-flex flex-row col-10 col-md-11">
                  Sidi Gaber Language School (SLS)
                </div>
                <div
                  id="hiddenhover"
                  className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
                >
                  <Link
                    renderAs="button"

                    // to="/Register"
                  >
                    <BiPencil fill="#cd8930" color="#cd8930" className="" />
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row fs-6 ">
                <div className=" d-flex flex-row col-12 col-md-12">
                  Alexandria Governorate, Egypt
                </div>
              </div>
              <div className="d-flex flex-row fs-6 ">
                <div className=" d-flex flex-row col-12 col-md-12">
                  Sep 2007 to Jun 2017 · 12 Years
                </div>
              </div>
              <div className="d-flex flex-row fs-6 mt-2 ">
                <Link
                  id="goldcredentials"
                  renderAs="button"
                  className="  mb-1   d-flex flex-row col-12 col-md-3"
                  // to="/Register"
                >
                  See credentials
                </Link>
              </div>
              <hr />
              <div
                id="lightfont"
                className="d-flex flex-row  fs-5 "
                style={{ textTransform: "capitalize" }}
              >
                <div className=" d-flex flex-row col-10 col-md-11">
                  Arab Academy For Science And Technology{" "}
                </div>
                <div
                  id="hiddenhover"
                  className=" d-flex flex-row col-2 col-md-1 p-0 ms-3"
                >
                  <Link
                    renderAs="button"
                    className=" shadow-none "
                    // to="/Register"
                  >
                    <BiPencil fill="#cd8930" color="#cd8930" className="" />
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row fs-6 ">
                <div className=" d-flex flex-row col-12 col-md-12">
                  Alexandria Governorate, Egypt
                </div>
              </div>
              <div className="d-flex flex-row fs-6 ">
                <div className=" d-flex flex-row col-12 col-md-12">
                  Sep 2017 to Jun 2021 · 4 Years{" "}
                </div>
              </div>
              <div className="d-flex flex-row fs-6 mt-2 ">
                <Link
                  id="goldcredentials"
                  renderAs="button"
                  className=" shadow-none mb-1   d-flex flex-row col-12 col-md-12"
                  // to="/Register"
                >
                  See credentials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
