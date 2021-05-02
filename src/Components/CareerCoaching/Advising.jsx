import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/img4.png";
import ReactStars from "react-rating-stars-component";
import DateTimePicker from "react-datetime-picker";
import { axios } from "../../Api/axios";

export default class CareerCoaching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
    };
    window.scrollTo(0, 0);
    this.setDate = this.setDate.bind(this);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  state = {
    data: {},
    id: 0,
    title: "",
    desc: "",
    price: 0,
    image: "",
    booked: false,
    booking_date: "",
  };
  setDate = (date) => {
    var today = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    this.setState({ booking_date: today });
  };
  book = async () => {
    return await axios({
      method: "POST",
      url: `/W/bookSession/${this.props.match.params.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        booking_date: this.state.booking_date,
        booked: true,
      },
    })
      .then((e) => {
        this.setState({
          booked: true,
          booking_date: this.state.booking_date,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async componentDidMount() {
    await axios
      .get(`/W/session/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          data: res.data.response.data,
          id: res.data.response.data.id,
          title: res.data.response.data.title,
          image: res.data.response.data.image,
          desc: res.data.response.data.desc,
          price: res.data.response.data.price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container-fluid ">
        <div className="container">
          {!this.state.data ? (
            " "
          ) : (
            <>
              <div className="d-flex flex-row fs-2 pagetitlec mb-5">
                <div>Career Coaching</div>
              </div>
              <div className="d-flex flex-row mt-5">
                <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-3 ">
                  <div className="fs-3 " id="Title">
                    {this.state.title}
                  </div>
                  <div className="fs-6 mt-3">{this.state.desc}</div>{" "}
                  <div className="d-flex flex-row flex-wrap mt-5">
                    <DatePicker setDateFn={this.setDate} />
                  </div>
                  <div className="d-flex flex-row flex-wrap mt-2">
                    <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                      <p id="gold">Please check your email for all details</p>
                    </div>
                    <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                      <p id="gold">{this.state.price} L.E</p>
                    </div>
                    <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                      <button
                        className="applyBtn px-4 py-0 "
                        onClick={this.book}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="Experienceimg"
                  className="d-flex flex-column col-md-1 d-none d-md-flex "
                >
                  <img
                    className="h-75 w-100 careercourseimg"
                    src={this.state.image}
                  />
                </div>
              </div>
              {this.state.booked == true ? (
                <>
                  <div className="d-flex flex-row ">
                    <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-5 ">
                      <div className="fs-3 mb-0" id="Title">
                        Add Your Review
                      </div>
                      <ReactStars
                        className="reviewstars"
                        count={5}
                        // value={this.state.rating}
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
                      id="reviewbox"
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
                </>
              ) : (
                " "
              )}
            </>
          )}
        </div>
        <Footer2 />
      </div>
    );
  }
}

function DatePicker(props) {
  const [value, onChange] = useState(new Date());
  // let date = value;

  // // console.log("here");
  // props.setDateFn(today);
  // console.log(today);
  // console.log(props);
  return (
    <div>
      <DateTimePicker
        onChange={(value) => {
          onChange(value);
          props.setDateFn(value);
        }}
        value={value}
      />
    </div>
  );
}
