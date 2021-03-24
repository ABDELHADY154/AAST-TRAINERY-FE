import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../layout/EditInfo.css";

class ActivityNavbar extends Component {
  render() {
    return (
      <div>
        <Link to="/Profile/Activity" />
        <div>
          <h1 className="editTitle text-center">Activity</h1>

          <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className={
                  this.props && this.props.setactive === "Applied"
                    ? "nav-link tabBtn active"
                    : "nav-link tabBtn"
                }
                //   id="General-tab"
                href="/Activity/Applied"
              >
                Applied
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className={
                  this.props && this.props.setactive === "Accepted"
                    ? "nav-link tabBtn active"
                    : "nav-link tabBtn"
                }
                //   id="Education-tab"
                href="/Activity/Accepted"
              >
                Accepted
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className={
                  this.props && this.props.setactive === "Saved"
                    ? "nav-link tabBtn active"
                    : "nav-link tabBtn"
                }
                //   id="Experiance-tab"
                href="/Activity/Saved"
              >
                Saved
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className={
                  this.props && this.props.setactive === "Appointment"
                    ? "nav-link tabBtn active"
                    : "nav-link tabBtn"
                }
                //   id="Courses-tab"
                href="/Activity/Appointment"
              >
                Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ActivityNavbar;
