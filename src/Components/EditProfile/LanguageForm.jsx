import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import "@pathofdev/react-tag-input/build/index.css";
import ReactDOM from "react-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
import EditNav from "./EditNav";

// import { Link } from "react-router-dom";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      id: 0,
      level: 0,
      error: {},
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      await axios
        .get(`/W/student/profile/language/${this.props.match.params.id}`)
        .then(res => {
          this.setState({
            language: res.data.response.data.language,
            level: res.data.response.data.level,
            id: res.data.response.data.id,
          });
          console.log(res.data.response.data);
        })
        .catch(error => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
        });
    }
    console.log(this.props.match.params.id);
  }
  handleSubmitLanguage = async e => {
    e.preventDefault();
    const data = {
      language: this.state.language,
      level: this.state.level,
      id: this.state.id,
    };
    if (this.props.match.params.id) {
      await axios
        .put(`/W/student/profile/language/${this.props.match.params.id}`, data)
        .then(response => {
          this.setState({
            loggedIn: true,
          });
        })
        .catch(error => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({
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
        .then(response => {
          this.setState({
            loggedIn: true,
          });
          console.log(response.data.response.data);
        })
        .catch(error => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
          this.setState({
            error: {
              languageErr: error.response.data.errors.language,
              LanguageLevelErr: error.response.data.errors.level,
              LanguageIdErr: error.response.data.errors.id,
            },
          });
          console.log(this.state.error);
        });
    }
  };
  handleDeleteLanguage = async e => {
    await axios
      .delete(`/W/student/profile/language/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          loggedIn: true,
        });
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            loggedIn: false,
            error: true,
          });
        }
        window.location.reload();
      });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/Profile" />;
    }
    console.log(this.state.level);
    return (
      <div>
        <div className="container ">
          <EditNav setactive={"Language"} />
          <div>
            <form className="row g-3 mb-3 mt-1" onSubmit={this.handleSubmitLanguage}>

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputSkill" className="form-label editLabel ">
                  Language
                </label>
                <input
                  type="text"
                  className={
                    this.state.error && this.state.error.languageErr
                      ? "form-control editInput wrong"
                      : "form-control editInput "
                  }
                  id="language"
                  placeholder="Please enter your languages "
                  onChange={e => this.setState({ language: e.target.value })}
                  value={this.state.language}
                />
                {this.state.error && this.state.error.LanguageLevelErr ? (
                  <p className="editerror text-capitalize">
                    {this.state.error.LanguageLevelErr}
                  </p>
                ) : (
                  ""
                )}
                <label for="inputRegNum" className="form-label editLabel mt-3">
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
                      onChange={level => {
                        this.setState({ level: level });
                        console.log(`${level}`);
                      }}
                      size={28}
                      activeColor="#F2A23A"
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
                    onChange={level => {
                      this.setState({ level: level });
                      console.log(`${level}`);
                    }}
                    size={28}
                    activeColor="#F2A23A"
                    edit={true}
                  />
                )}
                {this.state.error && this.state.error.LanguageLevelErr ? (
                  <p className="editerror text-capitalize">
                    {this.state.error.LanguageLevelErr}
                  </p>
                ) : (
                  ""
                )}
              </div>
              {this.props.match.params.id ? (
                <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <button
                    onClick={() => this.handleDeleteLanguage()}
                    type="submit"
                    class="btn deleteBtn me-2 shadow-none "
                  >
                    Delete
                  </button>
                  <button type="submit" class="btn updateBtn shadow-none">
                    Update
                  </button>
                </div>
              ) : (
                <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                  <a
                    type="button"
                    className="btn me-2 cancelBtn shadow-none "
                    href="/Profile"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn doneBtn shadow-none">
                    Add
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Language;
