import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "@pathofdev/react-tag-input/build/index.css";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import EditNav from "./EditNav";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

// import { Link } from "react-router-dom";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      id: 0,
      level: 0,
      error: {},
      FormLoading: false,
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ FormLoading: true });
      await axios
        .get(`/W/student/profile/language/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            language: res.data.response.data.language,
            level: res.data.response.data.level,
            id: res.data.response.data.id,
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
          this.setState({ FormLoading: false });
        });
    }
    // console.log(this.props.match.params.id);
  }
  handleSubmitLanguage = async (e) => {
    this.setState({ FormLoading: true });

    e.preventDefault();
    const data = {
      language: this.state.language,
      level: this.state.level,
      id: this.state.id,
    };
    if (this.props.match.params.id) {
      await axios
        .put(`/W/student/profile/language/${this.props.match.params.id}`, data)
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
              languageErr: error.response.data.errors.language,
              LanguageLevelErr: error.response.data.errors.level,
              LanguageIdErr: error.response.data.errors.id,
            },
          });
        });
    } else {
      await axios
        .post("/W/student/profile/language", data)
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
              languageErr: error.response.data.errors.language,
              LanguageLevelErr: error.response.data.errors.level,
              LanguageIdErr: error.response.data.errors.id,
            },
          });
        });
    }
  };
  handleDeleteLanguage = async (e) => {
    this.setState({ FormLoading: true });
    await axios
      .delete(`/W/student/profile/language/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          loggedIn: true,
          FormLoading: false,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            loggedIn: false,
            error: true,
            FormLoading: false,
          });
        }
        window.location.reload();
      });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to='/Profile' />;
    }
    // console.log(this.state.level);
    return (
      <div>
        <div className='container wrapper'>
          <div>
            <form className='row g-3 mb-3 mt-1' onSubmit={this.handleSubmitLanguage}>
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
                <EditNav setactive={"Language"} />

                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0'>
                  <label for='inputSkill' className='form-label editLabel '>
                    Language
                  </label>
                  <input
                    type='text'
                    className={
                      this.state.error && this.state.error.languageErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id='language'
                    placeholder='Please enter your languages '
                    onChange={(e) => this.setState({ language: e.target.value })}
                    value={this.state.language}
                  />
                  {this.state.error && this.state.error.LanguageLevelErr ? (
                    <p className='editerror text-capitalize'>
                      {this.state.error.LanguageLevelErr}
                    </p>
                  ) : (
                    ""
                  )}
                  <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                    <label for='inputRegNum' className='form-label editLabel mt-4'>
                      Level
                    </label>
                    {this.props.match.params.id ? (
                      this.state.level ? (
                        <ReactStars
                          count={5}
                          value={this.state.level}
                          className={
                            this.state.error && this.state.error.LanguageLevelErr
                              ? "wrong"
                              : " "
                          }
                          onChange={(level) => {
                            this.setState({ level: level });
                            // console.log(`${level}`);
                          }}
                          size={28}
                          activeColor='#F2A23A'
                          edit={true}
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      <ReactStars
                        count={5}
                        value={this.state.level}
                        className={
                          this.state.error && this.state.error.LanguageLevelErr
                            ? "wrong"
                            : " "
                        }
                        onChange={(level) => {
                          this.setState({ level: level });
                          // console.log(`${level}`);
                        }}
                        size={28}
                        activeColor='#F2A23A'
                        edit={true}
                      />
                    )}
                    {this.state.error && this.state.error.LanguageLevelErr ? (
                      <p className='editerror text-capitalize'>
                        {this.state.error.LanguageLevelErr}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {this.props.match.params.id ? (
                  <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end'>
                    <button
                      onClick={() => this.handleDeleteLanguage()}
                      type='submit'
                      class='btn deleteBtn me-2 shadow-none '
                    >
                      Delete
                    </button>
                    <button type='submit' class='btn updateBtn shadow-none'>
                      Update
                    </button>
                  </div>
                ) : (
                  <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
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
        <div className='fixed-bottom'>
          <Footer2 />
        </div>{" "}
      </div>
    );
  }
}
export default Language;
