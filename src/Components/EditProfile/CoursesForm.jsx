import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
  // get list item by id
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      await axios
        .get(`/W/student/profile/course/${this.props.match.params.id}`)
        .then((res) => {
          // console.log(res);
          this.setState({
            courseName: res.data.response.data.course_name,
            courseProvider: res.data.response.data.course_provider,
            fromDate: res.data.response.data.from,
            toDate: res.data.response.data.to,
            CourseUrl: res.data.response.data.cred_url,
          });
          console.log(res.data.response.data);
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
        });
    }
  };

  // read all list

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
  // delete
  handleDelete = async (e) => {
    if (this.props.match.params.id) {
      await axios
        .delete(`/W/student/profile/course/${this.props.match.params.id}`)
        .then(this.setState({ done: true }));
    }
  };
  //create and update

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
    if (this.props.match.params.id) {
      return await axios
        .post(`/W/student/profile/course/${this.props.match.params.id}`, data)
        .then((response) => {
          this.setState({
            loggedIn: false,
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
        });
    } else
      return await axios
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
          console.log(error.response.data);
        });
  };

  render() {
    console.log(this.state.error);
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
            <div className=" row ">
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Name <span className="red">*</span>
                </label>
                <input
                  value={this.state.courseName ? this.state.courseName : ""}
                  type="text"
                  className={
                    this.state.error && this.state.error.courseNameErr
                      ? "form-control editInput wrong "
                      : "form-control editInput "
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
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Title / Provider <span className="red">*</span>
                </label>
                <input
                  value={
                    this.state.courseProvider ? this.state.courseProvider : ""
                  }
                  type="text"
                  className={
                    this.state.error && this.state.error.courseProviderErr
                      ? "form-control editInput wrong "
                      : "form-control editInput"
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

              <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
                <label for="bdaymonth" className="form-label editLabel ">
                  From <span className="red">*</span>
                </label>
                <input
                  value={this.state.fromDate ? this.state.fromDate : ""}
                  type="date"
                  id="bdaymonth"
                  className={
                    this.state.error && this.state.error.fromDateErr
                      ? "form-control editInput  wrong "
                      : "form-control editInput "
                  }
                  onChange={(e) => this.setState({ fromDate: e.target.value })}
                />
                <p className="red">
                  {this.state.error ? this.state.error.fromDateErr : ""}
                </p>
              </div>
              <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12">
                <label for="bdaymonth" className="form-label editLabel ">
                  To <span className="red">*</span>
                </label>
                <input
                  value={this.state.toDate ? this.state.toDate : ""}
                  type="date"
                  id="bdaymonth"
                  className={
                    this.state.error && this.state.error.toDateErr
                      ? "form-control editInput  wrong "
                      : "form-control editInput "
                  }
                  onChange={(e) => this.setState({ toDate: e.target.value })}
                />
                <p className="red">
                  {this.state.error ? this.state.error.toDateErr : ""}
                </p>
              </div>
              <div class="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 ">
                <label for="inputTerm" className="form-label editLabel">
                  Credential URL
                </label>
                <input
                  value={this.state.CourseUrl ? this.state.CourseUrl : ""}
                  type="text"
                  id="fullname"
                  placeholder={this.state.cred_url}
                  className={
                    this.state.error && this.state.error.CourseUrlErr
                      ? "form-control editInput  wrong "
                      : "form-control editInput "
                  }
                  onChange={(e) => this.setState({ CourseUrl: e.target.value })}
                />
                <p className="red">
                  {this.state.error ? this.state.error.CourseUrlErr : null}
                </p>
              </div>
              <div className="col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12  ">
                <label
                  htmlFor="files"
                  className="form-control editInput uploadBtn d-flex"
                >
                  Upload
                  <FiUpload className="uploadIcon ms-auto " />
                  <input
                    className="form-control editInput"
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

              {this.props.match.params.id ? (
                <div class="col-12 d-flex justify-content-end">
                  <button
                    class="btn deleteBtn me-2 my-2  shadow-none "
                    onClick={() => this.handleDelete()}
                  >
                    Delete
                  </button>
                  <button
                    onClick={this.handleSubmit}
                    class="btn updateBtn shadow-none my-2 "
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div class="col-12 d-flex justify-content-end">
                  <a href="/Profile">
                    <button
                      type="button"
                      class="btn me-2 my-2 cancelBtn shadow-none"
                    >
                      Cancel
                    </button>
                  </a>
                  <button type="submit" class="btn doneBtn shadow-none my-2 ">
                    Add
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default CoursesForm;
