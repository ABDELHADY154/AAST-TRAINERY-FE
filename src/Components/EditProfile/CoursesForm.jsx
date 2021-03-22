import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import EditNav from "./EditNav";
import { FiUpload, FiCheck } from "react-icons/fi";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

class CoursesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "",
      courseProvider: "",
      fromDate: "",
      toDate: "",
      CourseUrl: "",
      image: "",
      imageURL: "",
      FormLoading: false,
    };
  }
  componentDidMount = async () => {
    if (this.props.match.params.id) {
      this.setState({
        FormLoading: true,
      });
      await axios
        .get(`/W/student/profile/course/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            courseName: res.data.response.data.course_name,
            courseProvider: res.data.response.data.course_provider,
            fromDate: res.data.response.data.from,
            toDate: res.data.response.data.to,
            CourseUrl: res.data.response.data.cred_url,
            image: res.data.response.data.cred,
            FormLoading: false,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false, FormLoading: false });
            window.location.reload();
          }
        });
    }
  };

  async componentDidMount() {
    await axios
      .get("/W/student/profile/course")
      .then((res) => {
        this.setState({
          courses: res.data.response.data,
        });
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  handleDelete = async (e) => {
    this.setState({
      FormLoading: true,
    });
    if (this.props.match.params.id) {
      await axios
        .delete(`/W/student/profile/course/${this.props.match.params.id}`)
        .then(this.setState({ done: true, FormLoading: false }));
    }
  };
  handleChange(event) {
    var filename = event.target.value.replace(/^.*[\\\/]/, "");

    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      imageURL: event.target.files[0],
      UrlName: event.target.files[0].name,
    });
  }
  handleSubmit = async (e) => {
    this.setState({
      FormLoading: true,
    });
    e.preventDefault();
    var formBody = new FormData();
    const data = {
      course_name: this.state.courseName,
      course_provider: this.state.courseProvider,
      from: this.state.fromDate,
      to: this.state.toDate,
      cred_url: this.state.CourseUrl,
      cred: this.state.imageURL ? this.state.imageURL : this.state.image,
    };
    if (this.state.imageURL) {
      formBody.append(
        "cred",
        this.state.imageURL ? this.state.imageURL : this.state.image
      );
    }
    formBody.append("course_name", data.course_name);
    formBody.append("course_provider", data.course_provider);
    formBody.append("from", data.from);
    formBody.append("to", data.to);
    if (data.cred_url !== "") {
      formBody.append("cred_url", data.cred_url);
    }
    if (this.props.match.params.id) {
      return await axios({
        method: "post",
        url: `/W/student/profile/course/${this.props.match.params.id}`,
        data: formBody,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          this.setState({
            loggedIn: false,
            FormLoading: false,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false, FormLoading: false });
            window.location.reload();
          }
          this.setState({
            FormLoading: false,

            error: {
              courseNameErr: error.response.data.errors.course_name,
              courseProviderErr: error.response.data.errors.course_provider,
              fromDateErr: error.response.data.errors.from,
              toDateErr: error.response.data.errors.to,
              CourseUrlErr: error.response.data.errors.cred_url,
              credErr: error.response.data.errors.cred,
            },
          });
        });
    } else
      return await axios({
        method: "post",
        url: "/W/student/profile/course",
        data: formBody,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((e) => {
          this.setState({
            done: true,
            FormLoading: false,
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
            FormLoading: false,

            error: {
              courseNameErr: error.response.data.errors.course_name,
              courseProviderErr: error.response.data.errors.course_provider,
              fromDateErr: error.response.data.errors.from,
              toDateErr: error.response.data.errors.to,
              CourseUrlErr: error.response.data.errors.cred_url,
              credErr: error.response.data.errors.cred,
            },
          });
        });
  };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to='/login' />;
    }
    if (this.state.done === true) {
      return <Redirect to='/Profile' />;
    }

    return (
      <div>
        <div className='container '>
          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            <LoadingOverlay
              active={this.state.FormLoading}
              spinner={<BounceLoader color='#cd8930' />}
              styles={{
                overlay: (base) => ({
                  ...base,
                  background: "rgb(255, 255, 255)",
                }),
              }}
            >
              <EditNav setactive={"Courses"} />

              <div className=' row '>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0'>
                  <label for='inputfullname' class='form-label editLabel '>
                    Course Name <span className='red'>*</span>
                  </label>
                  <input
                    value={this.state.courseName ? this.state.courseName : ""}
                    type='text'
                    className={
                      this.state.error && this.state.error.courseNameErr
                        ? "form-control editInput wrong "
                        : "form-control editInput "
                    }
                    id='fullname'
                    onChange={(e) => this.setState({ courseName: e.target.value })}
                    placeholder='Enter Course Name '
                  />
                  <p className='editerror'>
                    {this.state.error ? this.state.error.courseNameErr : ""}
                  </p>
                </div>

                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                  <label for='inputfullname' class='form-label editLabel '>
                    Course Title / Provider <span className='red'>*</span>
                  </label>
                  <input
                    value={this.state.courseProvider ? this.state.courseProvider : ""}
                    type='text'
                    className={
                      this.state.error && this.state.error.courseProviderErr
                        ? "form-control editInput wrong "
                        : "form-control editInput"
                    }
                    id='fullname'
                    onChange={(e) => this.setState({ courseProvider: e.target.value })}
                    placeholder='Enter Course Provider '
                  />
                  <p className='editerror'>
                    {this.state.error ? this.state.error.courseProviderErr : ""}
                  </p>
                </div>

                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                  <label for='bdaymonth' className='form-label editLabel '>
                    From <span className='red'>*</span>
                  </label>
                  <input
                    value={this.state.fromDate ? this.state.fromDate : ""}
                    type='date'
                    id='bdaymonth'
                    className='form-control editInput '
                    onChange={(e) => this.setState({ fromDate: e.target.value })}
                  />
                  <p className='editerror'>
                    {this.state.error ? this.state.error.fromDateErr : ""}
                  </p>
                </div>

                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12'>
                  <label for='bdaymonth' className='form-label editLabel '>
                    To <span className='red'>*</span>
                  </label>
                  <input
                    value={this.state.toDate ? this.state.toDate : ""}
                    type='date'
                    id='bdaymonth'
                    className='form-control editInput '
                    onChange={(e) => this.setState({ toDate: e.target.value })}
                  />
                  <p className='editerror'>
                    {this.state.error ? this.state.error.toDateErr : ""}
                  </p>
                </div>

                <div class='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12 '>
                  <label for='inputTerm' className='form-label editLabel'>
                    Credential URL
                  </label>
                  <input
                    value={this.state.CourseUrl ? this.state.CourseUrl : ""}
                    type='text'
                    id='fullname'
                    className={
                      this.state.error && this.state.error.CourseUrlErr
                        ? "form-control editInput  wrong "
                        : "form-control editInput "
                    }
                    onChange={(e) => this.setState({ CourseUrl: e.target.value })}
                    placeholder='Enter Credential URL'
                  />
                  <p className='editerror'>
                    {this.state.error ? this.state.error.CourseUrlErr : ""}
                  </p>
                </div>

                <div className='col-lg-5 col-11 col-md-5 col-sm-12 col-xs-12  '>
                  <label
                    htmlFor='files'
                    className='form-control editInput uploadBtn d-flex'
                  >
                    {this.state.UrlName ? this.state.UrlName : "Upload"}
                    {this.state.UrlName ? (
                      <FiCheck className='uploadIcon ms-auto ' />
                    ) : (
                      <FiUpload className='uploadIcon ms-auto ' />
                    )}
                    <input
                      className='form-control editInput'
                      hidden
                      type='file'
                      id='files'
                      accept=' image/*,file_extension/
                    .crt,.cer,.ca-bundle,.p7b,.p7c,.p7s,.pem,.pdf'
                      onChange={(e) => this.handleChange(e)}
                    />
                  </label>
                  {this.state.error && this.state.error.credErr !== "" && (
                    <p className='red d-inline'> {this.state.error.credErr}</p>
                  )}
                </div>

                {this.props.match.params.id ? (
                  <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
                    <button
                      class='btn deleteBtn me-2 my-2  shadow-none '
                      onClick={() => this.handleDelete()}
                    >
                      Delete
                    </button>
                    <button
                      onClick={this.handleSubmit}
                      class='btn updateBtn shadow-none my-2 '
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5'>
                    <a href='/Profile'>
                      <button type='button' class='btn me-2 my-2 cancelBtn shadow-none'>
                        Cancel
                      </button>
                    </a>
                    <button type='submit' class='btn doneBtn shadow-none my-2 '>
                      Add
                    </button>
                  </div>
                )}
              </div>
            </LoadingOverlay>
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default CoursesForm;
