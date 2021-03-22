import React, { Component } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import EditNav from "./EditNav";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      id: 0,
      interests: [],
      error: {},
      FormLoading: false,
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id == "update") {
      this.setState({ FormLoading: true });
      await axios
        .get(`/W/student/profile/interest`)
        .then((res) => {
          this.setState({
            interests: res.data.response.data,
            FormLoading: false, // interest: res.data.response.data.interest,
          });
          // console.log(res.data.response.data.interests);
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
          });
        });

      var tagsArr = [];
      this.state.interests.forEach((el) => {
        // console.log();
        tagsArr.push(el.interest);
      });
      this.setState({ tags: tagsArr });
    }
  }

  handleSubmiInterest = async (e) => {
    this.setState({ FormLoading: true });
    e.preventDefault();
    const data = {
      // id: this.state.id,
      interests: [],
    };
    this.state.tags.forEach((element) => {
      data.interests.push({ interest: element });
    });
    if (this.props.match.params.id == "update") {
      await axios
        .put(`/W/student/profile/interest`, data)
        .then((response) => {
          this.setState({
            loggedIn: true,
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
              interestsErr: error.response.data.errors.interests,
            },
          });
        });
    } else {
      await axios
        .post("/W/student/profile/interest", data)
        .then((response) => {
          this.setState({
            loggedIn: true,
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
              interestsErr: error.response.data.errors.interests,
            },
          });
          // console.log(error.response.data.errors.interests);
        });
    }
  };

  render() {
    // console.log(this.state.tags);
    if (this.state.loggedIn === true) {
      return <Redirect to='/Profile' />;
    }
    return (
      <div>
        <div className='container wrapper'>
          <div>
            <form className='row g-3 mb-3 mt-1' onSubmit={this.handleSubmiInterest}>
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
                <EditNav setactive={"Interest"} />
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                  <label for='inputRegNum' className='form-label editLabel'>
                    Interests
                  </label>
                  <ReactTag
                    className='editLabel'
                    tags={(e) => this.setState({ tags: e })}
                    value={this.state.tags}
                  />
                  {/* <p>{this.state.interests}</p> */}
                  {this.state.error && this.state.error.interestsErr ? (
                    <p className='editerror text-capitalize'>
                      {this.state.error.interestsErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {this.props.match.params.id ? (
                  <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5 '>
                    <a
                      type='button'
                      className='btn me-2 cancelBtn shadow-none '
                      href='/Profile'
                    >
                      Cancel
                    </a>
                    <button type='submit' class='btn updateBtn shadow-none'>
                      Update
                    </button>
                  </div>
                ) : (
                  <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end mt-5 '>
                    <a
                      type='button'
                      className='btn me-2 cancelBtn shadow-none '
                      href='/Profile'
                    >
                      Cancel
                    </a>
                    <button type='submit' className='btn doneBtn shadow-none'>
                      Add
                    </button>
                  </div>
                )}
              </LoadingOverlay>
            </form>
          </div>
        </div>
        <Footer2 className='interestFooter' />
      </div>
    );
  }
}
export default Interest;

class ReactTag extends Component {
  state = {
    tags: [],
  };
  setTags = (e) => {
    this.setState({ tags: e });
    this.props.tags(e);
  };

  render() {
    return (
      <ReactTagInput
        tags={this.props.value}
        editable={true}
        removeOnBackspace={true}
        onChange={(newTags) => this.setTags(newTags)}
      />
    );
  }
}
