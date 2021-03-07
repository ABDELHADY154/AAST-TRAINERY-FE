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
  handleSubmit = async (e) => {
    e.preventDefault();
  };
  setactive(val) {
    this.setState({ Skills: val });
  }
  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };

    return (
      <div>
        <div className='container '>
          <EditNav setactive={"Skills"} />
          <div>
            <form className='row g-3 mb-3' onSubmit={this.handleSubmit}>
              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputSkill' className='form-label editLabel '>
                  Skills
                </label>
                <input
                  type='text'
                  className='form-control editInput '
                  id='fullname'
                  placeholder='Please enter your Skills '
                />
              </div>
              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 '>
                <select id='inputSkillYears' className='form-select editInput '>
                  <option selected>Years of Experience ...</option>
                  <option>...</option>
                </select>
                <label for='inputLevel' className='form-label editLabel mt-2'>
                  Level
                </label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor='#F2A23A'
                />
              </div>

              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
                <button type='submit' className='btn me-2 cancelBtn shadow-none'>
                  Cancel
                </button>
                <button type='submit' className='btn doneBtn shadow-none'>
                  Add
                </button>
              </div>
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end'>
                <button type='submit' class='btn deleteBtn me-2 shadow-none '>
                  Delete
                </button>
                <button type='submit' class='btn updateBtn shadow-none'>
                  Update
                </button>
              </div>
            </form>
            <form className='row g-3 mb-3' onSubmit={this.handleSubmit}>
              <hr className='hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12' />
              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputRegNum' className='form-label editLabel'>
                  Intrests
                </label>
                {/* <input
                type="number"
                className="form-control editInput "
                id="RegNum"
                placeholder="Please enter your Intrests"
              /> */}
                <ReactTag className='editLabel' />
              </div>

              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
                <button type='submit' className='btn me-2 cancelBtn shadow-none'>
                  Cancel
                </button>
                <button type='submit' className='btn doneBtn shadow-none'>
                  Add
                </button>
              </div>
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end'>
                <button type='submit' class='btn deleteBtn me-2 shadow-none '>
                  Delete
                </button>
                <button type='submit' class='btn updateBtn shadow-none'>
                  Update
                </button>
              </div>
            </form>
            <form className='row g-3 mb-3' onSubmit={this.handleSubmit}>
              <hr className='hrSkills ms-2 col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12' />

              <div className='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12'>
                <label for='inputSkill' className='form-label editLabel '>
                  Language
                </label>

                <select id='inputSkillYears' className='form-select editInput '>
                  <option selected>Language ...</option>
                  <option>...</option>
                </select>
                <label for='inputRegNum' className='form-label editLabel mt-3'>
                  Level
                </label>
                <ReactStars
                  count={5}
                  value={4}
                  edit={false}
                  size={28}
                  activeColor='#F2A23A'
                />
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={28}
                  activeColor='#F2A23A'
                />
              </div>
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end '>
                <button type='submit' className='btn me-2 cancelBtn shadow-none'>
                  Cancel
                </button>
                <button type='submit' className='btn doneBtn shadow-none'>
                  Add
                </button>
              </div>
              <div class='col-lg-10 col-11 col-md-10 col-sm-12 col-xs-12 d-flex justify-content-end'>
                <button type='submit' class='btn deleteBtn me-2 shadow-none '>
                  Delete
                </button>
                <button type='submit' class='btn updateBtn shadow-none'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Skills;

function ReactTag() {
  const [tags, setTags] = React.useState(["Add Intrests"]);
  // useEffect(() => console.log(tags), [tags]);
  // const newTags = (event) => setTags(event.target.value);

  return (
    <ReactTagInput
      tags={tags}
      editable={true}
      removeOnBackspace={true}
      // onChange={newTags}
      // onChange={(newTags) => setTags(newTags)}
      onChange={(newTags) => setTags(newTags)}
    />
  );
}
