import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/CareerCoaching.css";
import Footer2 from "../Common/Footer2";
import img from "../assests/imgs/img4.png";
import ReactStars from "react-rating-stars-component";
import DateTimePicker from "react-datetime-picker";
import { axios } from "../../Api/axios";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CareerCoaching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      FormLoading: true,
      data: {},
      id: 0,
      title: "",
      desc: "",
      price: 0,
      image: "",
      status: "",
      booking_date: "",
      review: [],
      rate: 0,
      fullName: "",
      comment: "",
      session_type: "",
    };
    window.scrollTo(0, 0);
    this.setDate = this.setDate.bind(this);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get(`/W/session/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          status: res.data.response.data.status,
          data: res.data.response.data,
          id: res.data.response.data.id,
          title: res.data.response.data.title,
          image: res.data.response.data.image,
          desc: res.data.response.data.desc,
          price: res.data.response.data.price,
          FormLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
    await axios
      .get(`/W/student/sessionReview/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          review: res.data.response.data,
        });
        // console.log(res.data.response.data.errors);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setDate = (date) => {
    var today = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    this.setState({ booking_date: today });
  };
  book = async () => {
    const datas = {
      booking_date: this.state.booking_date,
      status: this.state.status,
    };
    return await axios({
      method: "POST",
      url: `/W/bookSession/${this.props.match.params.id}`,
      data: datas,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        this.setState({
          status: "booked",
          booking_date: this.state.booking_date,
        });
        console.log("BOOKED!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  unbook = async () => {
    const datas = {
      // booking_date: this.state.booking_date,
      status: this.state.status,
    };
    return await axios({
      method: "POST",
      url: `/W/bookSession/cancelBooking/${this.props.match.params.id}`,
      data: datas,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        this.setState({
          status: "unbooked",
        });
        console.log("UNBOOKED!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  review = async (e) => {
    const review = {
      comment: this.state.comment,
      rate: this.state.rate,
      fullName: this.state.fullName,
      session_type: this.state.session_type,
    };

    return await axios
      .post(`/W/student/sessionReview/${this.props.match.params.id}`, review)
      .then(() => {
        this.setState({ status: "reviewed" });
      })
      .catch((err) => {
        // console.log(err, "not reviewed!");
        this.setState({
          status: "reviewed",
        });
      });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    console.log(this.state.status);
    return (
      <div className="container-fluid ">
        {" "}
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
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
                      {this.state.status == "booked" ? (
                        " "
                      ) : (
                        <>
                          <DatePicker setDateFn={this.setDate} />
                        </>
                      )}
                    </div>
                    <div className="d-flex flex-row flex-wrap mt-2">
                      <div className=" mb-4 d-flex mt-1 flex-row col-12 col-md-7 justify-content-start ">
                        <p id="gold">Please check your email for all details</p>
                      </div>
                      <div className=" mb-4 d-flex flex-row mt-1 col-4 col-md-3 justify-content-end  ">
                        <p id="gold">{this.state.price} L.E</p>
                      </div>
                      {this.state.status == "booked" ? (
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button
                            className="appliedBtn px-4 py-0 "
                            onClick={this.unbook}
                          >
                            Booked
                          </button>
                        </div>
                      ) : (
                        <div className=" d-flex flex-row col-6 col-md-2 justify-content-end">
                          <button
                            className="appliedBtn px-4 py-0 "
                            onClick={this.book}
                          >
                            Book
                          </button>
                        </div>
                      )}
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
                {/* {this.state.status == "reviewed" ||
                "booked" ||
                "accepted" ||
                "unbooked" ? (
                  <>
                    <Slider {...settings} className="mb-5">
                      {this.state.review.map((data) => {
                        return (
                          <CarouselReviews
                            comment={data.comment}
                            fullName={data.fullName}
                            session_type={data.session_type}
                            rate={data.rate}
                          />
                        );
                      })}
                    </Slider>
                  </>
                ) : */}
                {this.state.status == "achieved" ? (
                  <>
                    <div className="d-flex flex-row ">
                      <div className="d-flex flex-column col-md-7 me-2  text-wrap bg-none me-5 ">
                        <div className="fs-3 mb-0" id="Title">
                          Add Your Review
                        </div>
                        <ReactStars
                          className="reviewstars"
                          count={5}
                          onChange={(rate) => {
                            this.setState({ rate: rate });
                            // console.log(`${rate}`);
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
                        onChange={(e) =>
                          this.setState({ comment: e.target.value })
                        }
                        value={this.state.comment}
                        className="reviewbox d-flex flex-column col-md-12 col-12 pt-2  px-3"
                      ></textarea>
                    </div>
                    <div className="d-flex flex-row mb-5 justify-content-end ">
                      <button
                        className="applyBtn px-1 py-0 col-md-1 col-4 "
                        onClick={this.review}
                      >
                        Review
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Slider {...settings} className="mb-5">
                      {this.state.review.map((data) => {
                        return (
                          <CarouselReviews
                            comment={data.comment}
                            fullName={data.fullName}
                            session_type={data.session_type}
                            rate={data.rate}
                          />
                        );
                      })}
                    </Slider>
                  </>
                )}
              </>
            )}
          </div>
          <Footer2 />
        </LoadingOverlay>
      </div>
    );
  }
}

function DatePicker(props) {
  const [value, onChange] = useState(new Date());
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
class CarouselReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <div className="d-flex flex-row justify-content-center">
            <div className=" carouselCaption text-center col-md-11 mb-2 col-11">
              <p className="txtCarousel lh-sm">{this.props.comment}</p>
            </div>
          </div>
          <center>
            <hr className="hrReview   " />
          </center>
          <div className="d-flex flex-row col-12 col-md-12 text-center fs-5  ">
            <div className="d-flex flex-column col-12 col-md-12">
              <center>
                <p className="txtName">{this.props.fullName}</p>
              </center>
            </div>
          </div>
          <div className="d-flex flex-row  col-12 col-md-12 text-center fs-5  ">
            <div className="d-flex flex-column col-12 col-md-12">
              <center>
                <p className="txtRole">{this.props.session_type}</p>
              </center>
            </div>
          </div>
          <div className="d-flex flex-row  col-12 col-md-12 text-center justify-content-center  mb-2 starsReview">
            <div className="d-flex flex-column justify-content-center col-md-12 align-items-center">
              <ReactStars
                count={5}
                value={this.props.rate}
                edit={false}
                size={23}
                activeColor="#F2A23A"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
