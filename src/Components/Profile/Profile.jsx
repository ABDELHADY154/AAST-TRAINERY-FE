import React, { Component } from "react";
import profileimg from "../../Components/assests/imgs/pp.jpg";
import "../../layout/Profile.css";
import { Link } from "react-router-dom";
import { MdSettingsPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import StudentEducation from "./StudentEducation/StudentEdu";
import StudentWorkExp from "./StudentWorkExp/StudentWorkExp";
import StudentCourses from "./StudentCourses/StudentCourses";
import StudentSkill from "./StudentSkill/StudentInterest";
import Studentinterest from "./StudentSkill/StudentInterest";

import studentAccount from "./StudentAccount/StudentAccount";
import Footer2 from "../Common/Footer2";

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
    gpa: null,
    nationality: "",
    country: "",
    city: "",
    profile_updated: false,
    profile_score: 0,
    university: "",
    phone_number: "",
    educations: [],
    work_experience: [],
    courses: [],
    skills: [],
    interests: [],
    // studentAccount: [],
  };
  async componentDidMount() {
    await axios
      .get("/W/student/get-profile")
      .then((res) => {
        this.setState({
          id: res.data.response.data.name.id,
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
          educations: res.data.response.data.educations,
          work_experience: res.data.response.data.work_experience,
          courses: res.data.response.data.courses,
          skills: res.data.response.data.skills,
          interests: res.data.response.data.interests,

          // studentAccount: res.data.response.data.studentAccount,
        });
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
              src={this.state.image}
            ></img>
            <div className="d-flex flex-column col-7 col-md-4 mt-1 me-5">
              <div
                className="d-flex flex-row flex-wrap fs-4"
                style={{ textTransform: "capitalize" }}
              >
                {this.state.name}
              </div>
              <div
                className="d-flex flex-row flex-wrap"
                style={{ textTransform: "capitalize" }}
              >
                {this.state.university}
              </div>
              <div
                className="d-flex flex-row flex-wrap "
                style={{ textTransform: "capitalize" }}
              >
                {this.state.department}
                <span id="gpa" className=" ms-2">
                  {this.state.gpa}
                </span>
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
                    to="/Profile/General"
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
                  {this.state.city}, {this.state.country}.
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
                  className="ms-3 plus"
                  // onClick={(e) => this.handleClick(e)}
                  to="Profile/Education"
                  // onclick="openCity(event, 'Tokyo')"
                >
                  +
                </Link>
              </div>
              {this.state.educations.map((item) => {
                return (
                  <StudentEducation
                    id={item.id}
                    key={item.id}
                    schoolName={item.school_name}
                    city={item.city}
                    country={item.country}
                    fromDate={item.from}
                    toDate={item.to}
                    cred={item.credential_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div id="education" className="card mt-5">
            <div className="card-body">
              <div className="d-flex flex-row titlecard fs-4 mb-2">
                Work Experience
                <Link
                  renderAs="button"
                  className="  ms-3 plus"
                  // to="Profile/e"
                  // to="/Register"
                >
                  +
                </Link>
              </div>
              {this.state.work_experience.map((item) => {
                return (
                  <StudentWorkExp
                    key={item.id}
                    id={item.id}
                    job_title={item.job_title}
                    experience_type={item.experience_type}
                    company_name={item.company_name}
                    city={item.city}
                    country={item.country}
                    from={item.from}
                    to={item.to}
                    cred={item.cred}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div id="education" className="card mt-5">
            <div className="card-body">
              <div className="d-flex flex-row titlecard fs-4 mb-2">
                Courses
                <Link
                  renderAs="button"
                  className="  ms-3 plus"
                  to="Profile/Courses"
                >
                  +
                </Link>
              </div>
              {this.state.courses.map((item) => {
                return (
                  <StudentCourses
                    key={item.id}
                    id={item.id}
                    course_name={item.course_name}
                    course_provider={item.course_provider}
                    cred={item.cred}
                    cred_url={item.cred_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div id="education" className="card mt-5">
            <div className="card-body">
              <div className="d-flex flex-row titlecard fs-4 mb-2">
                Skills
                <Link
                  renderAs="button"
                  className="  ms-3 plus"
                  // to="/Register"
                >
                  +
                </Link>
              </div>
              <div className=" d-flex flex-row flex-wrap col-2 mb-2 col-md-12 me-1 fs-5">
                Tools and Fields of Expertise
              </div>

              {this.state.skills.map((item) => {
                return (
                  <StudentSkill
                    key={item.id}
                    id={item.id}
                    skill_name={item.skill_name}
                    years_of_exp={item.years_of_exp}
                  />
                );
              })}
              <hr />
              <div className=" d-flex flex-row flex-wrap col-12 col-md-12 me-1">
                <div className="d-flex flex-column col-6 col-md-10 fs-5 ">
                  Interests
                  <div
                    id="hiddenhover"
                    className="d-flex flex-column col-2 col-md-2 p-0"
                  >
                    <Link
                      renderAs="button"

                      // to="/Register"
                    >
                      <BiPencil fill="#cd8930" color="#cd8930" />
                    </Link>
                  </div>
                </div>
              </div>

              {this.state.interests.map((i) => {
                return (
                  <Studentinterest key={i.id} id={i.id} interest={i.interest} />
                );
              })}

              <hr />
            </div>
          </div>
        </div>
        {/*<div className='container'>
          <div id='education' className='card mt-5'>
            <div className='card-body'>
              <div className='d-flex flex-row titlecard fs-4 mb-2'>
                Accounts
                <Link
                  renderAs='button'
                  className='  ms-3 plus'
                  // to="/Register"
                >
                  +
                </Link>
              </div>
              {this.state.courses.map((item) => {
                return (
                  <studentAccount
                    key={item.id}
                    courseProviderName={item.school_name}
                    courseName={item.courseName}
                    Coursecred={item.courseCredential_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div id="education" className="card mt-5">
            <div className="card-body">
              <div className="d-flex flex-row titlecard fs-4 mb-2">
                Reviews
                <Link
                  renderAs="button"
                  className="  ms-3 plus"
                  // to="/Register"
                >
                  +
                </Link>
              </div>
              {this.state.courses.map((item) => {
                return (
                  <studentAccount
                    key={item.id}
                    courseProviderName={item.school_name}
                    courseName={item.courseName}
                    Coursecred={item.courseCredential_url}
                  />
                );
              })}
            </div>
          </div>
        </div> */}
        <Footer2 />
      </div>
    );
  }
}
export default Profile;
