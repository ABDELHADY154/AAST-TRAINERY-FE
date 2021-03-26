import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/img1.png";
import ReactStars from "react-rating-stars-component";
import DateTimePicker from "react-datetime-picker";

export default class CareerCoaching extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="container">
          <div className="d-flex flex-row fs-2 pagetitlec mb-5">
            <div>Career Coaching</div>
          </div>
          <div className="d-flex flex-row mt-5">
            <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-3 ">
              <div className="fs-3 " id="Title">
                CV Writing Service
              </div>
              <div className="fs-6 mt-3">
                Our aim is to make you 100% satisfied with your CV; that’s why
                we offer a first draft that you approve before you receive the
                final version of your document.
                <br />
                Now you can get expert feedback on your CV and profile, Perfect
                your CV & profile to better reflect your skills, and Refine your
                job search strategy.
              </div>{" "}
              <div className="d-flex flex-row flex-wrap mt-5">
                <DatePicker />
              </div>
              <div className="d-flex flex-row flex-wrap mt-3">
                <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                  <p id="gold">Please check your email for all details</p>
                </div>
                <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                  <p id="gold">150 L.E</p>
                </div>
                <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                  <Link
                  //   to="/CvWriting"
                  >
                    <button
                      className="applyBtn px-2 py-0 "
                      // to="/CvWriting"
                    >
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="Experienceimg"
              className="d-flex flex-column col-md-1 d-none d-md-flex "
            >
              <img className="h-75 w-100 careercourseimg" src={img} />
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-5 ">
              <div className="fs-3 mb-0" id="Title">
                Add Your Review
              </div>
              <ReactStars
                className="reviewstars"
                count={5}
                value="3"
                onChange={(value) => {
                  this.setState({ value: value });
                  // console.log(`${value}`);
                }}
                size={28}
                activeColor="#F2A23A"
                edit={true}
              />
            </div>
          </div>
          <div className="d-flex flex-row mt-3 mb-5 ">
            <textarea
              placeholder="Enter Your Review Here..."
              type="text"
              name="name"
              className="reviewbox d-flex flex-column col-md-12 col-12 pt-2  px-3"
            ></textarea>
          </div>
          <div className="d-flex flex-row mb-5 justify-content-end ">
            <button
              className="applyBtn px-1 py-0 col-md-1 col-4 "
              // onClick="/CvWriting"
            >
              Review
            </button>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
function DatePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}
