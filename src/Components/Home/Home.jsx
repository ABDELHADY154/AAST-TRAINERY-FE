import React, { Component } from "react";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";
import { Loader } from "../../loader";
import img from "../../Components/assests/imgs/girlavi.png";
import MaleAvatar from "../../Components/assests/imgs/boyavi.png";
import rec1 from "../../Components/assests/imgs/rec1.png";
import rec2 from "../../Components/assests/imgs/rec2.png";
import rec3 from "../../Components/assests/imgs/rec3.png";
import "../../layout/Home.css";
import {
  BsCheck,
  BsArrowUpRight,
  BsBookmark,
  BsFillBookmarkFill,
} from "react-icons/bs";

import Footer2 from "../Common/Footer2";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import BigCard from "../Explore/BigCard";
import SmallCard from "../Explore/SmallCard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
      data: [],
      alert: true,
      explorePosts: [],
    };
    window.scrollTo(0, 0);
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/student/get-profile")
        .then((res) => {
          if (res.status === 200) {
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
    await axios
      .get("/W/activity")
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          advisor: res.data.response.data.advisor,
          FormLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
    await axios
      .get("/W/student/posts")
      .then((res) => {
        this.setState({
          explorePosts: res.data.response.data,
        });
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
  }

  // handleRemove(){
  //   var alert = document.getElementsBy("navBottom")[0].remove(alert);

  // }

  render() {
    console.log(this.state.data);
    if (this.state.user.profile_updated === false) {
      var Alert =
        this.state.alert == true ? (
          <div id="alerting" className="d-flex flex-row  flex-wrap py-2  mb-3 ">
            <div className="container d-flex flex-row  flex-wrap ">
              <div
                id="alertingtitle"
                className="d-flex flex-column col-md-10 col-9 mt-1"
              >
                Here to help, Update your profile information to get the best
                matching opportunities.
              </div>
              <div className="d-flex flex-column col-md-1 col-2   mt-1">
                <Link
                  className="texttt fs-3 col-5 col-md-1 justify-content-start "
                  renderAs="button"
                  id="redlink"
                  className=" shadow-none  text-end"
                  to="/Profile/General"
                >
                  Update Now
                </Link>
              </div>
              <div className="d-flex flex-column  col-md-1 col-1">
                <button
                  onClick={() => {
                    this.setState({ alert: false });
                  }}
                  id="closed"
                  className="btn p-0 text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#alerting"
                  aria-expanded="true"
                  aria-controls="alerting"
                >
                  <IoClose fill="red" color="red" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
    }

    return (
      <div className="container-fluid mt-5 ">
        {Alert}
        <div className="container mb-4">
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

              <div className="d-flex flex-row flex-wrap mt-5 ">
                <div id="small" className="col-12 col-md-10 d-flex ">
                  <div className="col-8 col-md-3 d-flex fs-4  ">
                    Steps to Success
                  </div>
                  <div className="d-flex flex-row d-md-none mt-3 ms-5">
                    <div className="d-flex flex-column col-8 ms-5">
                      <ProgressBar
                        percent={
                          this.state.user.profile_score
                            ? this.state.user.profile_score
                            : 0
                        }
                      >
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                        <Step>
                          {({ accomplished }) => (
                            <div
                              className={`indexedStep ${
                                accomplished ? "accomplished" : null
                              }`}
                            >
                              {accomplished ? (
                                <BsCheck color="#ffffff" fill="#ffffff" />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                      </ProgressBar>
                    </div>
                  </div>
                  <div id="big" className="d-flex flex-column  col-md-8 mt-3">
                    <ProgressBar
                      percent={
                        this.state.user.profile_score
                          ? this.state.user.profile_score
                          : 0
                      }
                    >
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                      <Step>
                        {({ accomplished }) => (
                          <div
                            className={`indexedStep ${
                              accomplished ? "accomplished" : null
                            }`}
                          >
                            {accomplished ? (
                              <BsCheck color="#ffffff" fill="#ffffff" />
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                      </Step>
                    </ProgressBar>
                  </div>
                </div>

                <div className="col-12 col-md-6 d-flex mt-2 ">
                  <Link to={`/Profile/General`} className="generalinfolink">
                    Complete Your General Information
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column d-none d-md-flex col-md-2 ">
              {this.state.user.gender ? (
                <img
                  id="girl"
                  className=""
                  src={this.state.user.gender == "female" ? img : MaleAvatar}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card mt-2 mt-5  mb-2 ">
            <h5 id="tabtitle" className="card-title fs-3 my-3 ms-3">
              Your Activities
            </h5>
            <div
              className=" d-flex justify-content-between"
              style={{ paddingLeft: 5, paddingRight: 5 }}
            >
              <div id="tabcard" className="d-flex flex-row">
                {this.state.data.length == 0 ? (
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <p className="text-center">No Activity</p>
                  </div>
                ) : (
                  this.state.data.map((data) => {
                    return (
                      <SmallCard
                        title={data.title}
                        company_logo={data.company_logo}
                        salary={data.salary}
                        company_name={data.company_name}
                        departments={data.departments}
                        description={data.description}
                        tags={data.tags}
                        application_deadline={data.application_deadline}
                        advisor={data.advisor}
                        post_type={data.post_type}
                        sponsor_image={data.sponsor_image}
                        key={data.id}
                        saved={data.saved}
                        applied={data.applied}
                        id={data.id}
                        company_id={data.company_id}
                        accepted={data.accepted}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <hr className="breakliner mb-3" />
            <a
              href="/Profile/Activity/Applied"
              id="gold"
              className="d-flex text-center justify-content-center pb-2 "
            >
              See all activities
            </a>
          </div>
          <div className="fs-3 mt-5 mb-3" id="">
            Explore recommended opportunities
          </div>
          {/* recomended */}

          <div className="row">
            <div className="col-md-12">
              {this.state.explorePosts &&
              this.state.explorePosts.length !== 0 &&
              this.state.explorePosts.length !== 1 ? (
                <>
                  <BigCard
                    id={this.state.explorePosts[0].id}
                    company_id={this.state.explorePosts[0].company_id}
                    advisor={this.state.explorePosts[0].advisor}
                    key={this.state.explorePosts[0].id}
                    title={this.state.explorePosts[0].title}
                    company_name={this.state.explorePosts[0].company_name}
                    company_logo={this.state.explorePosts[0].company_logo}
                    description={this.state.explorePosts[0].description}
                    application_deadline={
                      this.state.explorePosts[0].application_deadline
                    }
                    salary={this.state.explorePosts[0].salary}
                    advisor={this.state.explorePosts[0].advisor}
                    post_type={this.state.explorePosts[0].post_type}
                    departments={this.state.explorePosts[0].departments}
                    tags={this.state.explorePosts[0].tags}
                    saved={this.state.explorePosts[0].saved}
                    applied={this.state.explorePosts[0].applied}
                    accepted={this.state.explorePosts[0].accepted}
                  />

                  <BigCard
                    id={this.state.explorePosts[1].id}
                    company_id={this.state.explorePosts[1].company_id}
                    advisor={this.state.explorePosts[1].advisor}
                    key={this.state.explorePosts[1].id}
                    title={this.state.explorePosts[1].title}
                    company_name={this.state.explorePosts[1].company_name}
                    company_logo={this.state.explorePosts[1].company_logo}
                    description={this.state.explorePosts[1].description}
                    application_deadline={
                      this.state.explorePosts[1].application_deadline
                    }
                    salary={this.state.explorePosts[1].salary}
                    advisor={this.state.explorePosts[1].advisor}
                    post_type={this.state.explorePosts[1].post_type}
                    departments={this.state.explorePosts[1].departments}
                    tags={this.state.explorePosts[1].tags}
                    saved={this.state.explorePosts[1].saved}
                    applied={this.state.explorePosts[1].applied}
                    accepted={this.state.explorePosts[0].accepted}
                  />
                </>
              ) : (
                <p className="text-center">No Recommended Posts</p>
              )}
            </div>
          </div>
          {/* cards end */}
          <div className="flex-row d-flex mt-3">
            <div className="d-flex flex-column col-md-11"></div>
            <a
              href="/Explore"
              id="exploreall"
              className="d-flex flex-column col-md-1 fs-5 "
            >
              Explore All
            </a>
          </div>
          <div className="fs-3 mt-5" id="">
            Check our career coaching services
          </div>
          <div className="d-flex flex-row flex-wrap text-wrap text-center justify-content-center">
            <div id="widths" className=" mt-3 containerrr  col-md-3 col-12 ">
              <img id="imagehover" src={rec1} />
              <div class="overlay">
                <Link
                  to="/CareerCoaching/CvWriting"
                  id="linksss"
                  href="#"
                  class="texttt fs-3 col-12 col-md-12 "
                >
                  CV Review
                </Link>
              </div>
            </div>
            <div id="widths" className=" mt-3 containerrr  col-md-3 col-12 ">
              <img id="imagehover" src={rec3} />
              <div class="overlay">
                <Link
                  to="/CareerCoaching/CareerMove"
                  id="linksss"
                  href="#"
                  class="texttt fs-3 col-12 col-md-12 "
                >
                  Career Coaching Path
                </Link>
              </div>
            </div>
            <div id="widths" className=" mt-3 containerrr  col-md-3 col-12 ">
              <img id="imagehover" src={rec2} />
              <div class="overlay">
                <Link
                  to="/CareerCoaching/InterviewCoaching"
                  id="linksss"
                  href="#"
                  class="texttt fs-3 col-12 col-md-12 "
                >
                  Interview Preperation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Home;

class AppliedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" mt-2 col-md-6" id="tabcontainer">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row ">
              <Link to={`/CompanyProfile/${this.props.company_id}`}>
                <img
                  className=" mt-0 d-flex flex-column  col-2 rounded"
                  id="imgicon"
                  src={this.props.company_logo}
                />
              </Link>
              <Link
                to={`/Opportunity/${this.props.id}`}
                className=" fs-5 mt-2 ms-2 col-md-9 col-7 mb-2"
              >
                <div>{this.props.title}</div>
              </Link>
              <div id="gold" className=" fs-6 mt-2  col-2 col-md-2">
                {this.props.salary}
              </div>
            </div>
            <div id="job" className=" d-flex flex-row ms-5 flex-wrap  ">
              <Link to={`/CompanyProfile/${this.props.company_id}`}>
                <div className="d-flex ms-3 flex-row">
                  {this.props.company_name}
                </div>
              </Link>

              <div
                id="gold"
                className=" ms-2 departments d-flex flex-row flex-wrap "
              >
                {this.props.departments.map((item) => {
                  return (
                    <Departments
                      id={item.id}
                      key={item.id}
                      departments={item.departments}
                      dep_name={item.dep_name}
                    />
                  );
                })}
              </div>
            </div>
            <p className="card-text mt-2 Lines">{this.props.description}</p>

            <div className="d-flex flex-row flex-wrap " id="">
              {this.props.tags.map((item) => {
                return (
                  <Interest
                    id={item.id}
                    key={item.id}
                    interest={item.interest}
                  />
                );
              })}
            </div>
            <div className="d-flex flex-row flex-wrap ">
              <div
                id="drop"
                className="d-flex flex-column me-4  col-md-5  
                             justify-space-between"
              >
                <p>
                  Deadline {"        "}
                  {this.props.application_deadline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="gold" className="ms-2 ">
        {this.props.dep_name}
      </div>
    );
  }
}
class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" me-2 tags  mt-1 mb-1" id="firsttagipad">
        <a
          href="#"
          className="tagsipad tagsP"
          id="tags"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          {this.props.interest}
        </a>
      </div>
    );
  }
}

const ExploreCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-row flex-wrap">
          <Link to={`/advisorProfile/${props.id}`}>
            <img
              className=" me-1 rounded"
              id="advisorlogo"
              style={{ height: 55, width: 55 }}
              src={props.advisor.image}
            />
          </Link>
          <Link to={`/advisorProfile/${props.advisor_id}`}>
            <p id="" className="card-title fs-6 mt-2 ms-2">
              {props.advisor.name}
            </p>
          </Link>
        </div>
        <hr />
        <div className="d-flex flex-row">
          <Link to={`/CompanyProfile/${props.advisor_id}`}>
            <img
              className=" mt-0 d-flex flex-row  col-md-1 col-2 me-1 rounded"
              id="imgicon"
              src={props.company_logo}
            />
          </Link>
          <Link
            to={`/Opportunity/${props.id}`}
            className="card-title ms-2 mt-2 col-md-8 col-7 col-sm-6 col-xs-7 d-flex align-items-center"
          >
            <h5 style={{ marginRight: 24 }}>{props.title}</h5>
          </Link>
          <div
            id="goldtab"
            className=" d-flex flex-row-reverse align-items-center col-md-2 col-2"
          >
            {props.salary}
          </div>
        </div>
        <div id="job" className="d-flex flex-row ms-5 ">
          <Link to={`/CompanyProfile/${props.company_id}`}>
            {" "}
            <div className="d-flex ms-3 flex-column">{props.company_name}</div>
          </Link>
          <div id="gold" className="d-flex ms-2 flex-column">
            Finance
          </div>
        </div>
        <p className="card-text mt-2 Lines">{props.description}</p>
        <div className="d-flex flex-row flex-wrap ">
          <div
            className="d-flex flex-column  col-4 col-md-1 me-4 "
            id="firsttagipad"
          >
            <a href="#" className="tagsipad" id="tags">
              Finance
            </a>
          </div>
          <div
            className="d-flex flex-column col-4  col-md-1 me-4 mb-1 "
            id="firsttagipad"
          >
            <a href="#" className="tagsipad  " id="tags">
              Banking
            </a>
          </div>
          <div id="drop" className="d-flex  flex-wrap col-6 col-md-2">
            <p>Deadline {"        "}11 Dec 2021</p>
          </div>
          <div className="d-flex  flex-wrap promotedPost me-auto col-5 col-md-3">
            <BsArrowUpRight className="me-2" color="#cd8930" fill="#cd8930" />
            <p id="gold">Promoted</p>
          </div>
          <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
            {/* <div className="col-md-4"></div> */}
            {props.saved == true ? (
              <BsFillBookmarkFill
                id="BsBookmark"
                fill="#1e4274"
                className="fs-2 align-self-center col-md-2 col-4"
                style={{ marginTop: -14 }}
                path="0px"
              />
            ) : props.saved == false ? (
              <BsBookmark
                id="BsBookmark"
                fill="#1e4274"
                className="fs-2 align-self-center col-md-2 col-4"
                style={{ marginTop: -10 }}
                path="0px"
                onClick={() => {
                  this.setState({
                    saved: props.saved,
                  });
                }}
              />
            ) : (
              ""
            )}
            {props.applied == true ? (
              <Link
                to={`/Opportunity`}
                className="text-center appliedBtn px-1 py-0 col-md-5 col-8 col-sm-5"
              >
                Applied
              </Link>
            ) : props.applied == false ? (
              <Link
                to={`/Opportunity`}
                className="text-center applyBtn px-1 py-0 col-md-5 col-8 col-sm-5"
              >
                Apply
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
