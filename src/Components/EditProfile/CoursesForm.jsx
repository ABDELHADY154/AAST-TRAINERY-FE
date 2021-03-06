import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { FiUpload } from "react-icons/fi";
import { Redirect } from "react-router-dom";

class CoursesForm extends Component {
  state = {
    startDate: new Date(),
  };

  // componentDidMount = async () => {
  //   if (this.props.match.params.id) {
  //     await axios
  //       .get(`/W/student/profile/education/${this.props.match.params.id}`)
  //       .then((res) => {
  //         console.log(res);
  //         this.setState({
  //           id: this.state.id,
  //           course_name: this.state.CourseName,
  //           course_provider: this.state.CourseProv,
  //           from: this.state.From,
  //           to: this.state.To,
  //           cred_url: this.state.CourseUrl,
  //         });
  //       })
  //       .catch((error) => {
  //         if (error.response.data.status === 401) {
  //           sessionStorage.clear("token");
  //           sessionStorage.clear("status");
  //           this.setState({ loggedIn: false });
  //           window.location.reload();
  //         }
  //       });
  //   }
  // };
  // handleChange = (startDate) => {
  //   this.setState({
  //     startDate,
  //   });
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     id: this.state.id,
  //     course_name: this.state.CourseName,
  //     course_provider: this.state.CourseProv,
  //     from: this.state.From,
  //     to: this.state.To,
  //     cred_url: this.state.CourseUrl,
  //   };
  //   if (this.props.match.params.id) {
  //     return await axios
  //       .post("/W/student/profile/education", data)
  //       .then((response) => {
  //         this.setState({
  //           loggedIn: false,
  //         });
  //         // console.log(response);
  //       })
  //       .catch((error) => {
  //         if (error.response.data.status === 401) {
  //           sessionStorage.clear("token");
  //           sessionStorage.clear("status");
  //           this.setState({ loggedIn: false });
  //           window.location.reload();
  //         }
  //         this.setState({
  //           error: {
  //             schoolNameErr: error.response.data.errors.school_name,
  //             countryErr: error.response.data.errors.country,
  //             cityErr: error.response.data.errors.city,
  //             fromErr: error.response.data.errors.from,
  //             toErr: error.response.data.errors.to,
  //           },
  //         });
  //         console.log(this.state.error);
  //       });
  //   }
  // };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/Profile" />;
    }
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
              <div class="col-12 fullwidth">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Name <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control editInput halfInput fullwidth"
                  id="fullname"
                  placeholder="Graphic Design Mastery: The FULL Branding & Design Process"
                  onChange={(e) =>
                    this.setState({ CourseName: e.target.value })
                  }
                />
              </div>
              <div class="col-12 fullwidth">
                <label for="inputfullname" class="form-label editLabel ">
                  Course Title / Provider <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control editInput halfInput fullwidth"
                  id="fullname"
                  placeholder="IT"
                  onChange={(e) =>
                    this.setState({ CourseProv: e.target.value })
                  }
                />
              </div>

              <div className="col-12 col-md-6 fullwidth ">
                <label for="bdaymonth" className="form-label editLabel ">
                  From
                </label>
                <input
                  type="date"
                  id="bdaymonth"
                  className="form-control editInput halfInput fullwidth"
                  onChange={(e) => this.setState({ From: e.target.value })}
                />
              </div>
              <div class="col-12 col-md-6  fullwidth">
                <label for="bdaymonth" className="form-label editLabel ">
                  To <span className="red">*</span>
                </label>
                <input
                  type="date"
                  id="bdaymonth"
                  className=" form-control editInput halfInput fullwidth"
                  onChange={(e) => this.setState({ To: e.target.value })}
                />
              </div>
              <div class="col-12 col-md-6  fullwidth ">
                <label for="inputTerm" className="form-label editLabel">
                  Credential URL <span className="red">*</span>
                </label>
                <input
                  type="text"
                  className="form-control editInput halfInput fullwidth"
                  id="fullname"
                  placeholder="Please enter your full name"
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
                    accept="image/png"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </label>
              </div>
              <span className="red py-3">
                Please fill all the required info *
              </span>
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
