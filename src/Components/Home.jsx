/** @format */

import React, { Component } from "react";
import { resolve } from "../Api/Resolvers/resolver";
import { axios } from "../Api/axios";
import { Loader } from "../loader";
import img from "../Components/assests/imgs/girl.png";
import img2 from "../Components/assests/imgs/cib.png";
import rec1 from "../Components/assests/imgs/rec1.png";
import rec2 from "../Components/assests/imgs/rec2.png";
import rec3 from "../Components/assests/imgs/rec3.png";
import "../layout/Home.css";
import { BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Components/Footer2";
// import { ProgressBar } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
    };
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/get-profile")
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("avatar", res.data.response.data.image);
            this.setState({
              user: res.data.response.data,
              loading: true,
              code: "200",
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: {
              usernameErr: error.response.status,
            },
          });
          if (this.state.error.usernameErr === 401) {
            window.location.reload();
          }
        })
    );
  }

  render() {
    if (this.state.loading === false) {
      return <div className="container text-center">{/* <Loader /> */}</div>;
    } else {
      return (
        <div className="container-fluid ">
          <div className="p-5">
            <div className="d-flex flex-row ">
              <div id="" className="d-flex flex-column text-wrap bg-none">
                <div className="fs-3" id="bold">
                  Track Your Profile
                </div>
                <div className="fs-6 col-md-8 col-sm-12" id="">
                  We help you track your profile success and update to reach out
                  the best matching opportunity. Check out these steps for a
                  successful experience:
                </div>

                <div className="d-flex flex-row flex-wrap mt-5 justify-content-between">
                  <div className="col-12 col-md-10 d-flex ">
                    <div className="col-8 col-md-4 d-flex fs-4 mt-1 me-1">
                      Steps to Success
                    </div>

                    <div class="progress col-4 col-md-6 d-flex me-5  mt-3">
                      <div
                        class="progress-bar bg-warning w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex mt-2 ">
                    Complete Your General Information
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column d-none d-md-flex col-md-2 ">
                <img id="girl" className="" src={img} />
              </div>
            </div>
            <div className="card mt-2 mt-5 w-70 mb-2 ">
              <div className="card-body">
                <h5 id="" className="card-title fs-3">
                  Your Activities
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row">
                          <img
                            className="d-flex mt-0 col-md-1 col-2"
                            id=""
                            width="60em"
                            src={img2}
                          />
                          <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                            UI/UX Designer
                          </div>
                          <div
                            id="gold"
                            className=" fs-6 mt-2 ms-2 col-2 col-md-1"
                          >
                            Paid
                          </div>
                        </div>
                        <div className="d-flex flex-row ms-5">
                          <div className="d-flex ms-3 flex-column">CIB</div>
                          <div id="gold" className="d-flex ms-2 flex-column">
                            Finance
                          </div>
                        </div>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam repudiandae aut possimus. Repellendus at
                          nostrum iste doloremque. Ea omnis ipsam, eum nam
                          tempore culpa illum consequuntur quis nobis adipisci
                          et?
                        </p>
                        <div className="d-flex flex-row ">
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className=" me-3 d-flex flex-column "
                              id="tags"
                            >
                              Finance
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className=" d-flex flex-column me-5 "
                              id="tags"
                            >
                              Banking
                            </a>
                          </div>
                          <div className="d-flex flex-row">
                            <p className="d-flex flex-column col-6 col-md-3 ">
                              Deadline
                            </p>
                            <p className="d-flex flex-column col-6 col-md-6 me-4">
                              11 Dec 2021
                            </p>

                            <div className=" ms-5 d-flex flex-row col-12 col-md-5 mt-1 ">
                              <BsArrowUpRight
                                className="d-flex flex-column  me-1"
                                fill="#cd8930"
                              />
                              <div
                                className="d-flex flex-column col-12 col-md-8 "
                                id="gold"
                              >
                                Promoted
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row">
                          <img
                            className="d-flex mt-0 col-md-1 col-2"
                            id=""
                            width="60em"
                            src={img2}
                          />
                          <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                            UI/UX Designer
                          </div>
                          <div
                            id="gold"
                            className=" fs-6 mt-2 ms-2 col-2 col-md-1"
                          >
                            Paid
                          </div>
                        </div>
                        <div className="d-flex flex-row ms-5">
                          <div className="d-flex ms-3 flex-column">CIB</div>
                          <div id="gold" className="d-flex ms-2 flex-column">
                            Finance
                          </div>
                        </div>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam repudiandae aut possimus. Repellendus at
                          nostrum iste doloremque. Ea omnis ipsam, eum nam
                          tempore culpa illum consequuntur quis nobis adipisci
                          et?
                        </p>
                        <div className="d-flex flex-row ">
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className=" me-3 d-flex flex-column "
                              id="tags"
                            >
                              Finance
                            </a>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className=" d-flex flex-column me-5 "
                              id="tags"
                            >
                              Banking
                            </a>
                          </div>
                          <div className="d-flex flex-row">
                            <p className="d-flex flex-column col-6 col-md-3 ">
                              Deadline
                            </p>
                            <p className="d-flex flex-column col-6 col-md-6 me-4">
                              11 Dec 2021
                            </p>

                            <div className=" ms-5 d-flex flex-row col-12 col-md-5 mt-1 ">
                              <BsArrowUpRight
                                className="d-flex flex-column  me-1"
                                fill="#cd8930"
                              />
                              <div
                                className="d-flex flex-column col-12 col-md-8 "
                                id="gold"
                              >
                                Promoted
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" id="gold" className="align-self-center pb-1 ">
                See all activities
              </a>
            </div>
            <div className="fs-3 mt-5" id="">
              Explore reccomended opportunities
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <img
                    className="d-flex mt-0 col-md-1 col-2"
                    id=""
                    width="10em"
                    src={img2}
                  />
                  <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                    UI/UX Designer
                  </div>
                  <div id="gold" className=" fs-6 mt-2 ms-2 col-2 col-md-1">
                    Paid
                  </div>
                </div>
                <div className="d-flex flex-row ms-5">
                  <div className="d-flex ms-3 flex-column">CIB</div>
                  <div id="gold" className="d-flex ms-2 flex-column">
                    Finance
                  </div>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  repudiandae aut possimus. Repellendus at nostrum iste
                  doloremque. Ea omnis ipsam, eum nam tempore culpa illum
                  consequuntur quis nobis adipisci et?
                </p>
                <div className="d-flex flex-row ">
                  <div className="d-flex flex-column">
                    <a href="#" className=" me-3 d-flex flex-column " id="tags">
                      Finance
                    </a>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="#" className=" d-flex flex-column me-5 " id="tags">
                      Banking
                    </a>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="d-flex flex-column col-6 col-md-3 ">
                      Deadline
                    </p>
                    <p className="d-flex flex-column col-6 col-md-6 me-4">
                      11 Dec 2021
                    </p>

                    <div className=" ms-5 d-flex flex-row col-12 col-md-5 mt-1 ">
                      <BsArrowUpRight
                        className="d-flex flex-column  me-1"
                        fill="#cd8930"
                      />
                      <div
                        className="d-flex flex-column col-12 col-md-8 "
                        id="gold"
                      >
                        Promoted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fs-3 mt-5" id="">
              Check our career coaching services
            </div>
            <div className="d-flex flex-row flex-wrap   justify-content-around">
              <div className=" mt-3  col-md-3 col-12">
                <img
                  className="cardImg img-responsive "
                  src={rec1}
                  height="150"
                />
              </div>
              <div className=" mt-3   col-md-4 col-12">
                <img
                  className="cardImg img-responsive "
                  src={rec2}
                  height="150"
                />
              </div>
              <div className=" mt-3  col-md-3 col-12">
                <img
                  className="cardImg img-responsive "
                  src={rec3}
                  height="150"
                />
              </div>
            </div>
          </div>
          <Footer2 />
        </div>
      );
    }
  }
}
export default Home;
