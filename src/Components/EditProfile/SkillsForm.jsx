import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import ReactDOM from "react-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";
import EditNav from "./EditNav";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillId: 0,
      skill: "",
      yearsExp: 0,
      error: {},
    };
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      await axios
        .get(`/W/student/profile/skill/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            skill: res.data.response.data.skill_name,
            skillId: res.data.response.data.id,
            yearsExp: res.data.response.data.years_of_exp,
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

    console.log(this.props.match.params.id);
  }
  handleSubmitSkills = async (e) => {
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
          });
        });
    } else {
      return await axios
        .post("/W/student/profile/skill", data)
        .then((response) => {
          this.setState({
            loggedIn: true,
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
          });
          // console.log(this.state.error);
        });
    }
  };
  handleDelete = async (e) => {
    await axios
      .delete(`/W/student/profile/skill/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          loggedIn: true,
        });
      })
      .catch((error) => {
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
      return <Redirect to='/Profile' />;
    }
    return (
      <div>
        <div className='container wrapperLang'>
          <EditNav setactive={"Skills"} />
          <div>
            <form className='row g-3 mb-3 mt-1' onSubmit={this.handleSubmitSkills}>
              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
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
                  <p className='editerror text-capitalize'>{this.state.error.skillErr}</p>
                ) : (
                  ""
                )}
              </div>
              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                <label for='inputRegNum' className='form-label editLabel mt-3'>
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
                        console.log(`${yearsExp}`);
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
                      console.log(`${yearsExp}`);
                    }}
                    size={28}
                    activeColor='#F2A23A'
                    edit={true}
                  />
                )}
                {this.state.error && this.state.error.yearsExpErr ? (
                  <p className='editerror text-capitalize'>{this.state.error.yearsExpErr}</p>
                ) : (
                  ""
                )}
              </div>
              {/* <label for="quantity" className="form-label editLabel ">
                  Years of Experiance
                </label>
                <input
                  type="number"
                  id="quantity"
                  className={
                    this.state.error && this.state.error.nameErr
                      ? "form-control editInput wrong"
                      : "form-control editInput "
                  }
                  placeholder="Please enter your years of Experience"
                  onChange={(e) => this.setState({ yearsExp: e.target.value })}
                  value={this.state.yearsExp}
                />
                {this.state.error && this.state.error.yearsExpErr ? (
                  <p className="editerror">{this.state.error.yearsExpErr}</p>
                ) : (
                  ""
                )}
              </div> */}
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
            </form>
          </div>
        </div>
        <Footer2 className='interestFooter'/>
      </div>
    );
  }
}
export default Skills;
