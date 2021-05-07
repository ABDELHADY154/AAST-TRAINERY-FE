import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SearchNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: "",
    };
  }
  setactive(val) {
    this.setState({ test: val });
  }
  // componentDidMount() {
  //   if (this.props.value != null) {
  //     this.setState({ value: this.props.value });
  //   }
  // }

  render() {
    return (
      <div>
        <ul className='nav  infoTabsUl nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item infoTabs' role='presentation'>
            <NavLink
              to='/faq'
              id='General-tab'
              activeClassName='active'
              className='nav-link tabBtn '
              to={{
                pathname: "/Search/d",
                params: { value: this.props.value },
              }}
            >
              Department
            </NavLink>
          </li>
          <li className='nav-item infoTabs' role='presentation'>
            <NavLink
              to='/faq'
              id='Education-tab'
              activeClassName='active'
              className='nav-link tabBtn '
              to={{
                pathname: "/Search/s",
                params: { value: this.props.value },
              }}
            >
              State
            </NavLink>
          </li>
          <li class='nav-item infoTabs' role='presentation'>
            <NavLink
              to='/faq'
              id='Education-tab'
              activeClassName='active'
              className='nav-link tabBtn '
              to={{
                pathname: "/Search/p",
                params: { value: this.props.value },
              }}
            >
              Payment
            </NavLink>
          </li>
        </ul>

        {/* <h1 className="editTitle text-center">Edit Profile</h1>
        <h3 className="categoryTitle d-flex justify-content-start mb-3">
          Categories
        </h3>
        <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
          <li className="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "General"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="General-tab"
              href="/Profile/General"
            >
              General
            </a>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Education"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Education-tab"
              href="/Profile/Education"
            >
              Education
            </a>
          </li>
          <li class="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "experience"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Experiance-tab"
              href="/Profile/Experience"
            >
              Experience
            </a>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Courses"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Courses-tab"
              href="/Profile/Courses"
            >
              Courses
            </a>
          </li>
          <li className="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Skills"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Skills-tab"
              href="/Profile/Skills"
            >
              Skills
            </a>
          </li>
          <li class="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Interest"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Interest-tab"
              href="/Profile/Interest"
            >
              Interest
            </a>
          </li>
          <li class="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Language"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Language-tab"
              href="/Profile/Language"
            >
              Language
            </a>
          </li>
          <li class="nav-item infoTabs" role="presentation">
            <a
              className={
                this.props && this.props.setactive === "Accounts"
                  ? "nav-link tabBtn active"
                  : "nav-link tabBtn"
              }
              id="Accounts-tab"
              href="/Profile/Accounts"
            >
              Accounts
            </a>
          </li>
        </ul> */}
      </div>
    );
  }
}
export default SearchNav;
