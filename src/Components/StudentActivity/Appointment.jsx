import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityNavbar from "./Navbar";
import img from "../../Components/assests/imgs/none.png";

import Footer2 from "../Common/Footer2";

import career from "../assests/imgs/career.png";
import { axios } from "../../Api/axios";

import "../../layout/EditInfo.css";
class Appointment extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    await axios
      .get("/W/student/studentSessions")
      .then((res) => {
        this.setState({
          data: res.data.response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Link to="/Profile/Activity/Appointment" />
        <div className="container ">
          <ActivityNavbar setactive={"Appointment"} />
          {this.state.data.length == 0 ? (
            <div className="col-12">
              <Link
                className="row mb-5 mt-2 d-flex justify-content-center explore"
                to="/CareerCoaching"
              >
                Explore career coaching sessions
                <span className="sr-only" />
              </Link>

              <img className="row center img-fluid" src={img} />
            </div>
          ) : (
            this.state.data.map((data) => {
              return (
                <Link to={`/CareerCoaching/Advising/${data.id}`}>
                  <div class="card mb-3 mt-3">
                    <div class="row ">
                      <div class="d-flex flex-column col-md-2 col-sm-3 col-1 d-none d-sm-flex ms-3">
                        <img
                          className="d-flex justify-content-center align-self-center align-items-center col-md-9 col-sm-12 mt-3"
                          src={data.image}
                        />
                      </div>

                      <div class="col-md-8 col-sm-7 col-8 mt-3">
                        <h5 class="fw-bold ">{data.title}</h5>
                        <div className="d-flex flex-row ">
                          <p className="me-3 mb-0">Date Booked</p>
                          <p className="mb-0">15 Oct 2020</p>
                        </div>
                        <div className="d-flex flex-row mb-0">
                          <p className="me-3 mb-0">Time Booked</p>
                          <p className="mb-0">9:00 AM</p>
                        </div>

                        <p class="">
                          {/* <small id="gold">Resend this email</small> */}
                        </p>
                      </div>
                      <div className="row ">
                        <div className="d-flex justify-content-end mb-2">
                          {/* <button className="applyBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2">
                            Contact
                          </button> */}
                          {data.status == "achieved" ? (
                            <button className="applyBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2">
                              Review
                            </button>
                          ) : (
                            <button
                              disabled
                              className=" disabledBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2"
                            >
                              Review
                            </button>
                          )}

                          {/* <button className="applyBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2">
                            Review
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
          {/* {!this.state.data
            ? ""
            : this.state.data.map((data) => {
                return (
                  <Link to={`/CareerCoaching/Advising/${data.id}`}>
                    <div class="card mb-3 mt-3">
                      <div class="row ">
                        <div class="d-flex flex-column col-md-2 col-sm-3 col-1 d-none d-sm-flex ms-3">
                          <img
                            className="d-flex justify-content-center align-self-center align-items-center col-md-9 col-sm-12 mt-3"
                            src={data.image}
                          />
                        </div>

                        <div class="col-md-8 col-sm-7 col-8 mt-3">
                          <h5 class="fw-bold ">{data.title}</h5>
                          <div className="d-flex flex-row ">
                            <p className="me-3 mb-0">Date Booked</p>
                            <p className="mb-0">15 Oct 2020</p>
                          </div>
                          <div className="d-flex flex-row mb-0">
                            <p className="me-3 mb-0">Time Booked</p>
                            <p className="mb-0">9:00 AM</p>
                          </div>
                          <p class="">
                            <small id="gold">Resend this email</small>
                          </p>
                        </div>
                        <div className="row ">
                          <div className="d-flex justify-content-end mb-2">
                            <button className="applyBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2">
                              Contact
                            </button>
                            <button className="applyBtn col-md-2 col-lg-1 col-sm-2 col-4  me-2">
                              Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })} */}
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Appointment;
