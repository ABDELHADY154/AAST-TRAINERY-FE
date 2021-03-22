import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import "@pathofdev/react-tag-input/build/index.css";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import EditNav from "./EditNav";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillId: 0,
      skill: "",
      yearsExp: 0,
      error: {},
      FormLoading: false,
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ FormLoading: true });
      await axios
        .get(`/W/student/profile/skill/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            skill: res.data.response.data.skill_name,
            skillId: res.data.response.data.id,
            yearsExp: res.data.response.data.years_of_exp,
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
  }
  handleSubmitSkills = async (e) => {
    this.setState({ FormLoading: true });
    e.preventDefault();
    const data = {
      skill_name: this.state.skill,
      id: this.state.skillId,
      years_of_exp: this.state.yearsExp,
    };
    if (this.props.match.params.id) {
      return await axios
        .put(`/W/student/profile/skill/${this.props.match.params.id}`, data)
        .then((response) => {
          this.setState({
            loggedIn: true,
            FormLoading: false,
          });
          // console.log(this.response.data);
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
              skillErr: error.response.data.errors.skill_name,
              yearsExpErr: error.response.data.errors.years_of_exp,
              skillIdErr: error.response.data.errors.id,
            },
            FormLoading: false,
          });
        });
    } else {
      return await axios
        .post("/W/student/profile/skill", data)
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
            error: {
              skillErr: error.response.data.errors.skill_name,
              yearsExpErr: error.response.data.errors.years_of_exp,
              skillIdErr: error.response.data.errors.id,
            },
            FormLoading: false,
          });
        });
    }
  };
  handleDelete = async (e) => {
    this.setState({ FormLoading: true });
    await axios
      .delete(`/W/student/profile/skill/${this.props.match.params.id}`)
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
    return (
      <div>
        <div className='container wrapper'>
          <div>
            <form className='row g-3 mb-3 mt-1' onSubmit={this.handleSubmitSkills}>
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
                <EditNav setactive={"Skills"} />

                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 mt-3 mt-sm-0'>
                  <label for='quantity' className='form-label editLabel '>
                    Skills
                  </label>
                  <input
                    type='text'
                    className={
                      this.state.error && this.state.error.nameErr
                        ? "form-control editInput wrong"
                        : "form-control editInput "
                    }
                    id='fullname'
                    placeholder='Please enter your Skills '
                    onChange={(e) => this.setState({ skill: e.target.value })}
                    value={this.state.skill}
                  />
                  {this.state.error && this.state.error.skillErr ? (
                    <p className='editerror text-capitalize'>
                      {this.state.error.skillErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                  <label for='inputRegNum' className='form-label editLabel mt-2'>
                    Level
                  </label>
                  {this.props.match.params.id ? (
                    this.state.yearsExp ? (
                      <ReactStars
                        count={5}
                        value={this.state.yearsExp}
                        className={
                          this.state.error && this.state.error.yearsExpErr ? "wrong" : " "
                        }
                        onChange={(yearsExp) => {
                          this.setState({ yearsExp: yearsExp });
                          // console.log(`${yearsExp}`);
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
                      value={this.state.yearsExp}
                      className={
                        this.state.error && this.state.error.yearsExpErr ? "wrong" : " "
                      }
                      onChange={(yearsExp) => {
                        this.setState({ yearsExp: yearsExp });
                        // console.log(`${yearsExp}`);
                      }}
                      size={28}
                      activeColor='#F2A23A'
                      edit={true}
                    />
                  )}
                  {this.state.error && this.state.error.yearsExpErr ? (
                    <p className='editerror text-capitalize'>
                      {this.state.error.yearsExpErr}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                {this.props.match.params.id ? (
                  <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end'>
                    <button
                      onClick={() => this.handleDelete()}
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
        </div>
      </div>
    );
  }
}
export default Skills;
