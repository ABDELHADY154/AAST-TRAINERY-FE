import React, { Component, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import ReactDOM from "react-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import EditNav from "./EditNav";

// import { Redirect } from "react-router-dom";
import { axios } from "../../Api/axios";
// import { Link } from "react-router-dom";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillId: 0,
      skill: "",
      yearsExp: 0,
      Language: "",
      LanguageId: 0,
      LanguageLevel: 0,
      tags: [],
      interestId: 0,
      interests: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("/W/student/profile/skill")
      .then((res) => {
        this.setState({
          skill: res.data.response.data.skill_name,
          skillId: res.data.response.data.id,
          yearsExp: res.data.response.data.years_of_exp,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      skill_name: this.state.skill,
      id: this.state.skillId,
      years_of_exp: this.state.yearsExp,
    };
    await axios
      .post("/W/student/profile/skill", data)
      .then((res) => {
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSubmitLanguage = async (e) => {
    e.preventDefault();
    const data = {
      language: this.state.language,
      level: this.state.LanguageLevel,
    };
    await axios
      .post("/W/student/profile/language", data)
      .then((res) => {
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err.response.data.errors.language);
      });
  };
  handleSubmiInterest = async (e) => {
    e.preventDefault();
    const data = {
      interests: [],
    };
    this.state.interests.forEach((element) => {
      data.interests.push({ interest: element });
    });
    await axios
      .post("/W/student/profile/interest", data)
      .then((res) => {
        console.log(res.data.response.data);
      })
      .catch((err) => {
        console.log(err.response.data.errors.interests);
      });
  };

  render() {
    return (
      <div>
        <div className="container ">
          <EditNav setactive={"Skills"} />
          <div>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputSkill" className="form-label editLabel ">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control editInput "
                  id="fullname"
                  placeholder="Please enter your Skills "
                />
              </div>
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 ">
                <select id="inputSkillYears" className="form-select editInput ">
                  <option selected>Years of Experience ...</option>
                  <option>...</option>
                </select>
                <label for="inputLevel" className="form-label editLabel mt-2">
                  Level
                </label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor="#F2A23A"
                />
              </div>
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none">
                  Update
                </button>
              </div>{" "}
              */}
            </form>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <hr className="hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12" />
              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputRegNum" className="form-label editLabel">
                  Intrests
                </label>
                {/* <input
                type="number"
                className="form-control editInput "
                id="RegNum"
                placeholder="Please enter your Intrests"
              /> */}
                <ReactTag
                  className="editLabel"
                  tags={(e) => this.setState({ interests: e })}
                  // onChange={e => {
                  //   this.setState({ interests: e.target.value });
                  // }}
                />
              </div>

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type="submit" class="btn updateBtn shadow-none">
                  Update
                </button>
              </div>
            </form>
            <form className="row g-3 mb-3" onSubmit={this.handleSubmit}>
              <hr className="hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12" />

              <div className="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12">
                <label for="inputSkill" className="form-label editLabel ">
                  Language
                </label>
                <input
                  type="text"
                  className="form-control editInput "
                  id="language"
                  placeholder="Please enter your Skills "
                  onChange={(e) => this.setState({ language: e.target.value })}
                  value={this.state.language}
                />
                {/* <select id="inputSkillYears" className="form-select editInput "
                onChange={(e)=>{
                  this.setState({language:e.target.value});
                }}>
                  <option selected>Language ...</option>
                  <option>Arabic</option>
                  <option>English</option>
                  <option>French</option>
                </select> */}
                <label for="inputRegNum" className="form-label editLabel mt-3">
                  Level
                </label>
                {/* <ReactStars
                  count={5}
                  value={4}
                  edit={false}
                  size={28}
                  activeColor="#F2A23A"
                /> */}
                <ReactStars
                  count={5}
                  value={1}
                  onChange={(newValue) => {
                    this.setState({ LanguageLevel: `${newValue}` });
                    console.log(` ${newValue}`);
                  }}
                  size={28}
                  activeColor="#F2A23A"
                  edit={true}
                />
              </div>
              <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end ">
                <button
                  type="submit"
                  className="btn me-2 cancelBtn shadow-none"
                >
                  Cancel
                </button>
                <button type="submit" className="btn doneBtn shadow-none">
                  Add
                </button>
              </div>
              {/* <div class="col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end">
                <button type="submit" class="btn deleteBtn me-2 shadow-none ">
                  Delete
                </button>
                <button type='submit' class='btn updateBtn shadow-none'>
                  Update
                </button>
              </div> */}
            </form>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Skills;

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
        tags={this.state.tags}
        editable={true}
        removeOnBackspace={true}
        onChange={(newTags) => this.setTags(newTags)}
      />
    );
  }
}
