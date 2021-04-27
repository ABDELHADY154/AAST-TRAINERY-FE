import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ActivityNavbar from "./Navbar";
import none from "../../Components/assests/imgs/none.png";
import { BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import "../../layout/EditInfo.css";
import { axios } from "../../Api/axios";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import "../../layout/Footer.css";

class Accepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      data: [],
      advisor: {},
      saved: false,
      FormLoading: true,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get("/A/student/studentApplied")
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          advisor: res.data.response.data.advisor,
          FormLoading: false,
        });
        // console.log(res.data.response.data.advisor.name);
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        console.log(err);
      });
  }
  render() {
    // console.log(this.state.data.length);
    return (
      <div id="page-container">
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
          <Link to="/Profile/Activity/Accepted" />
          <div className="container">
            <ActivityNavbar setactive={"Applied"} />

            {this.state.data.length == 0 ? (
              <div className="col-12">
                <Link
                  className="row mb-5 mt-2 d-flex justify-content-center explore"
                  to="/Explore"
                >
                  Explore our new internship
                  <span className="sr-only" />
                </Link>

                <img className="row center img-fluid" src={none} />
              </div>
            ) : (
              this.state.data.map((item) => {
                return item.post_type == "advisorPost" ? (
                  <AdvisorPost
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    company_name={item.company_name}
                    company_logo={item.company_logo}
                    description={item.description}
                    application_deadline={item.application_deadline}
                    salary={item.salary}
                    advisor={item.advisor}
                    post_type={item.post_type}
                    departments={item.departments}
                    tags={item.tags}
                    saved={item.saved}
                  />
                ) : item.post_type == "companyPost" ? (
                  <CompanyPost
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    company_name={item.company_name}
                    company_logo={item.company_logo}
                    description={item.description}
                    application_deadline={item.application_deadline}
                    salary={item.salary}
                    advisor={item.advisor}
                    post_type={item.post_type}
                    departments={item.departments}
                    tags={item.tags}
                    saved={item.saved}
                  />
                ) : item.post_type == "promotedPost" ? (
                  <PromptedPost
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    company_name={item.company_name}
                    company_logo={item.company_logo}
                    description={item.description}
                    application_deadline={item.application_deadline}
                    salary={item.salary}
                    advisor={item.advisor}
                    post_type={item.post_type}
                    departments={item.departments}
                    tags={item.tags}
                    saved={item.saved}
                  />
                ) : (
                  "gf"
                );
              })
            )}
          </div>
          <Footer2 />
        </LoadingOverlay>
      </div>
    );
  }
}
export default Accepted;

class CompanyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <Link to={`/CompanyProfile`}>
                  <img
                    className="rounded mt-0 d-flex flex-column col-md-4 col-2 me-1"
                    id="imgicon"
                    src={this.props.company_logo}
                  />
                </Link>
                <Link
                  to={`/Opportunity`}
                  className="fs-5 mt-2 ms-2 col-md-10 col-8 align-items-center"
                >
                  <h5 style={{ marginRight: 24 }}>{this.props.title}</h5>
                </Link>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  {this.props.salary}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="column">
                  <Link to={`/CompanyProfile`}>
                    {" "}
                    <div className="d-flex ms-3 flex-column">
                      {this.props.company_name}
                    </div>
                  </Link>

                  <div className="mt-1 ms-2 departments d-flex flex-row flex-wrap ">
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
              </div>
              <p className="card-text mt-2 Lines">{this.props.description}</p>
              <div className="d-flex flex-row flex-wrap ">
                <div className="d-flex flex-row flex-wrap " id="firsttagipad">
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
              </div>
              <div className="row mt-1">
                <div className="col-12 col-md-7 " style={{ marginRight: 38 }}>
                  <p>
                    Deadline {"        "} {this.props.application_deadline}
                  </p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {this.props.saved == true ? (
                    <BsFillBookmarkFill
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                      onClick={() => {
                        this.setState({
                          saved: this.props.saved,
                        });
                      }}
                    />
                  ) : this.props.saved == false ? (
                    <BsBookmark
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                      onClick={() => {
                        this.setState({
                          saved: this.props.saved,
                        });
                      }}
                    />
                  ) : (
                    ""
                  )}

                  <button className="appliedBtn px-1 py-0 col-md-5 col-8 col-sm-5">
                    Applied
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PromptedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <Link to={`/CompanyProfile`}>
                  <img
                    className="rounded mt-0 d-flex flex-column col-md-4 col-2 me-1"
                    id="imgicon"
                    src={this.props.company_logo}
                  />
                </Link>
                <Link
                  to={`/Opportunity`}
                  className="fs-5 mt-2 ms-2 col-md-10 col-8 align-items-center"
                >
                  <h5 style={{ marginRight: 24 }}>{this.props.title}</h5>
                </Link>
                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  {this.props.salary}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="column">
                  <Link to={`/CompanyProfile`}>
                    {" "}
                    <div className="d-flex ms-3 flex-column">
                      {this.props.company_name}
                    </div>
                  </Link>

                  <div className="mt-1 ms-2 departments d-flex flex-row flex-wrap ">
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
              </div>
              <p className="card-text mt-2">{this.props.description}</p>
              <div className="d-flex flex-row flex-wrap ">
                <div className="d-flex flex-row flex-wrap " id="firsttagipad">
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
              </div>
              <div className="row mt-1 ms-3">
                <div
                  className="d-flex flex-column col-4 col-md-2 mt-3 "
                  style={{ marginRight: 38 }}
                >
                  <p>
                    Deadline {"        "} {this.props.application_deadline}
                  </p>
                </div>
                <div className=" mb-3 d-flex flex-row col-8 col-md-9 justify-content-end ms-5 mt-3 ">
                  <BsArrowUpRight
                    className="me-2"
                    color="#cd8930"
                    fill="#cd8930"
                  />
                  <p id="gold">Promoted</p>
                  {this.props.saved == true ? (
                    <BsFillBookmarkFill
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                    />
                  ) : this.props.saved == false ? (
                    <BsBookmark
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                      onClick={() => {
                        this.setState({
                          saved: this.props.saved,
                        });
                      }}
                    />
                  ) : (
                    ""
                  )}

                  <button className="appliedBtn px-1 py-0 col-md-2 col-4 col-sm-5">
                    Applied
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class AdvisorPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      tags: [],
    };
  }
  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row flex-wrap">
                <Link to={`/advisorProfile`}>
                  <img
                    className=" me-1 rounded"
                    id="advisorlogo"
                    style={{ height: 55, width: 55 }}
                    src={this.props.advisor.image}
                  />
                </Link>
                <Link to={`/advisorProfile`}>
                  <p id="" className="card-title fs-6 mt-2 ms-2">
                    {this.props.advisor.name}
                  </p>
                </Link>
              </div>
              <hr />
              <div className="d-flex flex-row">
                <Link to={`/CompanyProfile`}>
                  <img
                    className="rounded mt-0 d-flex flex-column col-md-4 col-2 me-1"
                    id="imgicon"
                    src={this.props.company_logo}
                  />
                </Link>
                <Link
                  to={`/Opportunity`}
                  className="fs-5 mt-2 ms-2 col-md-10 col-8 align-items-center"
                >
                  <h5 style={{ marginRight: 24 }}>{this.props.title}</h5>
                </Link>

                <div id="goldtab" className=" fs-6 mt-2  col-2 col-md-1">
                  {this.props.salary}
                </div>
              </div>
              <div id="job" className="d-flex flex-row ms-5 ">
                <div className="column">
                  <Link to={`/CompanyProfile`}>
                    {" "}
                    <div className="d-flex ms-3 flex-column">
                      {this.props.company_name}
                    </div>
                  </Link>

                  <div className="mt-1 ms-2 departments d-flex flex-row flex-wrap ">
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
              </div>
              <p className="card-text mt-2">{this.props.description}</p>
              <div className="d-flex flex-row flex-wrap ">
                <div className="d-flex flex-row flex-wrap " id="firsttagipad">
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
              </div>
              <div className="row mt-1">
                <div className="col-12 col-md-7 " style={{ marginRight: 38 }}>
                  <p>
                    Deadline {"        "} {this.props.application_deadline}
                  </p>
                </div>
                <div className="  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement">
                  {this.props.saved == true ? (
                    <BsFillBookmarkFill
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                    />
                  ) : this.props.saved == false ? (
                    <BsBookmark
                      id="BsBookmark"
                      fill="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      style={{ marginTop: -10 }}
                      path="0px"
                      onClick={() => {
                        this.setState({
                          saved: this.props.saved,
                        });
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <button className="appliedBtn px-1 py-0 col-md-5 col-8 col-sm-5">
                    Applied
                  </button>
                </div>
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
