import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { FiUpload } from "react-icons/fi";

class CoursesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "",
      courseProvider: "",
      fromDate: "",
      toDate: "",
      CourseUrl: "",
      // image: "",
    };
  }
  async componentDidMount() {
    await axios
      .get("/W/student/profile/course")
      .then((cList) => {
        // console.log(cList.data.response.data);
        this.setState({
          courses: cList.data.response.data,
        });
        console.log(cList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      course_name: this.state.courseName,
      course_provider: this.state.courseProvider,
      from: this.state.fromDate,
      to: this.state.toDate,
      cred_url: this.state.CourseUrl,

      // cred: this.state.image,
    };
    await axios
      .post("/W/student/profile/course", data)
      .then((e) => {
        console.log(e);
        this.setState({
          done: true,
        });
      })
      .catch((error) => {
        if (error.response.data.status === 401) {
          sessionStorage.clear("token");
          sessionStorage.clear("status");
          this.setState({ loggedIn: false });
          window.location.reload();
        }
        this.setState({
          error: {
            courseNameErr: error.response.data.errors.course_name,
            courseProviderErr: error.response.data.errors.course_provider,
            fromDateErr: error.response.data.errors.from,
            toDateErr: error.response.data.errors.to,
            CourseUrlErr: error.response.data.errors.cred_url,
          },
        });
        console.log(error.response.data.id);
      });
  };
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/Profile" />;
    }
    if (this.state.done === true) {
      return <Redirect to="/Profile" />;
    }
    // console.log(this.state.image);
    return (
      <div>
        {" "}
        <div className="container ">
          <h1 className="editTitle text-center">Edit Profile</h1>
          <h3 className="categoryTitle d-flex justify-content-start mb-3">
            Categories
          </h3>
          <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  "
                id="General-tab"
                href="/Profile/General"
              >
                General
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link  tabBtn  "
                id="Education-tab"
                href="/Profile/Education"
              >
                Education
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn "
                id="Experiance-tab"
                href="/Profile/Experiance"
              >
                Experiance
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn active"
                id="Courses-tab"
                href="/Profile/Courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Skills-tab"
                href="/Profile/Skills"
              >
                Skills
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn"
                id="Accounts-tab"
                href="/Profile/Accounts"
              >
                Accounts
              </a>
            </li>
          </ul>
          <form class="g-3 mb-3 text-left " onSubmit={this.handleSubmit}>
            <div className=" row">
              <div className="col-12 fullwidth">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Name <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className={
                    this.state.error && this.state.error.courseNameErr
                      ? "form-control editInput  halfInput fullwidth wrong "
                      : "form-control editInput  halfInput fullwidth"
                  }
                  id="fullname"
                  placeholder="Graphic Design Mastery: The FULL Branding & Design Process"
                  onChange={(e) =>
                    this.setState({ courseName: e.target.value })
                  }
                />
                <p className="red">
                  {this.state.error ? this.state.error.courseNameErr : ""}
                </p>
              </div>
              <div class="col-12 fullwidth">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Title / Provider <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className={
                    this.state.error && this.state.error.courseProviderErr
                      ? "form-control editInput  halfInput fullwidth wrong "
                      : "form-control editInput  halfInput fullwidth"
                  }
                  id="fullname"
                  placeholder="IT"
                  onChange={(e) =>
                    this.setState({ courseProvider: e.target.value })
                  }
                />
                <p className="red">
                  {this.state.error ? this.state.error.courseProviderErr : ""}
                </p>
              </div>

              <div className="col-12 col-md-6 fullwidth ">
                <label for="bdaymonth" className="form-label editLabel ">
                  From
                </label>
                <input
                  type="date"
                  id="bdaymonth"
                  className={
                    this.state.error && this.state.error.fromDateErr
                      ? "form-control editInput  halfInput fullwidth wrong "
                      : "form-control editInput  halfInput fullwidth"
                  }
                  onChange={(e) => this.setState({ fromDate: e.target.value })}
                />
                <p className="red">
                  {this.state.error ? this.state.error.fromDateErr : ""}
                </p>
              </div>
              <div class="col-12 col-md-6  fullwidth">
                <label for="bdaymonth" className="form-label editLabel ">
                  To <span className="red">*</span>
                </label>
                <input
                  type="date"
                  id="bdaymonth"
                  className={
                    this.state.error && this.state.error.toDateErr
                      ? "form-control editInput  halfInput fullwidth wrong "
                      : "form-control editInput  halfInput fullwidth"
                  }
                  onChange={(e) => this.setState({ toDate: e.target.value })}
                />
                <p className="red">
                  {this.state.error ? this.state.error.toDateErr : ""}
                </p>
              </div>
              <div class="col-12 col-md-6  fullwidth ">
                <label for="inputTerm" className="form-label editLabel">
                  Credential URL <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control editInput halfInput fullwidth"
                  id="fullname"
                  placeholder="Course URL Here!"
                  onChange={(e) => this.setState({ CourseUrl: e.target.value })}
                />
              </div>
              <div className="col-12 col-md-6  fullwidth resBtnMargin ">
                <label
                  htmlFor="files"
                  className="form-control editInput halfInput fullwidth uploadBtn d-flex"
                >
                  Upload
                  <FiUpload className="icon justify-content-end align-items-end " />
                  <input
                    hidden
                    type="file"
                    id="files"
                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                    text/plain, application/pdf, image/*"
                    // onChange={(e) =>
                    //   this.setState({ image: e.target.files[0] })
                    // }
                  />
                </label>
              </div>
              {this.state.error ? (
                <span className="red py-3">Please fill all the info *</span>
              ) : (
                <span className="red py-3"></span>
              )}
              <div class="col-12 d-flex justify-content-end">
                <button
                  type="submit"
                  class="btn me-2 my-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" class="btn doneBtn shadow-none my-2 ">
                  Add
                </button>
              </div>
              <div class="col-12 d-flex justify-content-end">
                <button
                  type="submit"
                  class="btn deleteBtn me-2 my-2  shadow-none "
                >
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none my-2 ">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default CoursesForm;
