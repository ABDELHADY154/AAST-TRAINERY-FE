import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class CoursesForm extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      CourseName: this.state.CourseName,
      CourseTitle: this.state.CourseTitle,
      from: this.state.From,
      to: this.state.To,
      CourseUrl: this.state.CourseUrl,
    };
    // return await axios
    //   .post("/W/student/profile/education", data)
    //   .then((response) => {
    //     sessionStorage.setItem("token", response.data.response.data.token);
    //     sessionStorage.setItem("status", response.statusText);
    //     this.props.setUser(true);
    //     this.setState({
    //       loggedIn: true,
    //     });
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     if (error.response.data.errors) {
    //       this.setState({
    //         error: {
    //           emailErr: error.response.data.errors.email,
    //           passwordErr: error.response.data.errors.password,
    //         },
    //       });
    //     }
    //   });
  };
  render() {
    return (
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
              onChange={(e) => this.setState({ CourseName: e.target.value })}
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
              onChange={(e) => this.setState({ CourseTitle: e.target.value })}
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
          <div class="col-12 col-md-6  fullwidth ">
            <label for="inputGPA" className="form-label editLabel">
              Grade / GPA
            </label>
            <input
              type="text"
              className="form-control editInput halfInput fullwidth"
              id="fullname"
              placeholder="Please enter your full name"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <span className="red py-3">Please fill all the required info *</span>
          <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn me-2 my-2 cancelBtn shadow-none">
              Cancel
            </button>
            <button type="submit" class="btn doneBtn shadow-none my-2 ">
              Add
            </button>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 my-2  shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none my-2 ">
              Update
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default CoursesForm;
