import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";

class Skills extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form class="row g-3 mb-3" onSubmit={this.handleSubmit}>
          <div class="col-12">
            <label for="inputSkill" class="form-label editLabel ">
              Skills
            </label>
            <input
              type="text"
              className="form-control editInput longInput"
              id="fullname"
              placeholder="Please enter your Skills "
            />
          </div>
          <div class="col-12 ">
            <select
              id="inputSkillYears"
              className="form-select editInput longInput"
            >
              <option selected>Years of Experience ...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-12 d-flex justify-content-end ">
            <button type="submit" class="btn me-2 cancelBtn shadow-none">
              Cancel
            </button>
            <button type="submit" class="btn doneBtn shadow-none">
              Add
            </button>
          </div>
          {/* <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
        </form>
        <form class="row g-3 mb-3" onSubmit={this.handleSubmit}>
          <hr className="hrSkills ms-2" />
          <div className="col-12">
            <label for="inputRegNum" class="form-label editLabel">
              Intrests
            </label>
            <input
              type="number"
              className="form-control editInput longInput"
              id="RegNum"
              placeholder="Please enter your Intrests"
            />
          </div>

          <div class="col-12 d-flex justify-content-end ">
            <button type="submit" class="btn me-2 cancelBtn shadow-none">
              Cancel
            </button>
            <button type="submit" class="btn doneBtn shadow-none">
              Add
            </button>
          </div>
          {/* <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
        </form>
        <form class="row g-3 mb-3" onSubmit={this.handleSubmit}>
          <hr className="hrSkills ms-2" />

          <div className="col-12">
            <label for="inputRegNum" class="form-label editLabel">
              Level
            </label>
            {/* <input
              type="number"
              className="form-control editInput longInput"
              id="RegNum"
              placeholder="Please enter your Registration Number"
            /> */}
          </div>
          <div class="col-12 d-flex justify-content-end ">
            <button type="submit" class="btn me-2 cancelBtn shadow-none">
              Cancel
            </button>
            <button type="submit" class="btn doneBtn shadow-none">
              Add
            </button>
          </div>
          {/* <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn deleteBtn me-2 shadow-none ">
              Delete
            </button>
            <button type="submit" class="btn updateBtn shadow-none">
              Update
            </button>
          </div> */}
        </form>
      </div>
    );
  }
}
export default Skills;
