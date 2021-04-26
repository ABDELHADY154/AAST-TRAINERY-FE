import React, { Component } from "react";
import Ecard from "./Ecard";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";

import "../../layout/Home.css";
import { BsCheck, BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../layout/Explore.css";
import search from "../../Components/assests/imgs/search.png";

import { RiAdvertisementLine } from "react-icons/ri";

import { GrSearch } from "react-icons/gr";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
      alert: true,
      saved: false,
      isloading: false,
      posts: [],
      searchdep: [],

      // val: this.props,
    };
    this.toggleSave = this.toggleSave.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  createEcardElement = (data) => (
    <Ecard
      key={data.id}
      title={data.title}
      company_logo={data.company_logo}
      salary={data.salary}
      company_name={data.company_name}
      departments={data.departments}
      description={data.description}
      tags={data.tags}
      application_deadline={data.application_deadline}
      post_type={data.post_type}
      advisor={[data.advisor]}
      post_type={data.post_type}
      sponsor_image={data.sponsor_image}
      className="col-md-6 col-12"
    />
  );
  async componentDidMount() {
    if (
      this.props.location.params &&
      this.props.location.params !== undefined
    ) {
      this.setState({ Search: this.props.location.params.val });
      await axios
        .get(`/W/student/search/${this.props.location.params.val}`)
        .then((res) => {
          if (res.status === 200) {
            // this.setState({ posts: res.data.response.data, isloading: true });
            this.wfuction(res.data.response.data);
          }
        });
      this.props.location.params.val = undefined;
    }
  }
  toggleSave = () => {
    this.setState({ saved: !this.state.saved ? true : false });
    console.log(this.state.saved);
  };
  handleChange = (e) => {
    this.setState({ Search: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    await axios.get(`/W/student/search/${this.state.Search}`).then((res) => {
      if (res.status === 200) {
        this.setState({
          posts: res.data.response.data,
        });
        // console.log(this.state.posts);
      }
    });
  };
  wfuction = (comp) => {
    // comp.map((e) => {
    //   // console.log(e);
    //   this.state.posts = e;
    // }); // this.setState({ posts: comp });
    var wf = this;

    wf.setState({ posts: comp }, function () {
      console.log("ITEMS : ", wf.state.posts);
    });
  };

  onChangeValue = (event) => {
    if (this.state.posts !== undefined) {
      this.state.posts &&
        this.state.posts.forEach((req) => {
          if (req.departments !== 0) {
            req.departments.forEach((rec) => {
              if (rec.dep_name == event) {
                this.state.searchdep = [];
                this.state.searchdep.push(req);
                this.wfuction(this.state.searchdep);
              } else {
                console.log("error 1 ");
              }
            });
          } else {
            console.log("error 2 ");
          }
        });
    }
  };

  render() {
    if (this.state.user.profile_updated === false) {
      var Alert =
        this.state.alert == true ? (
          <div id="alerting" className="d-flex flex-row  flex-wrap py-2  mb-3 ">
            <div className="container d-flex flex-row  flex-wrap ">
              <div
                id="alertingtitle"
                className="d-flex flex-column col-md-6 col-12 mt-1"
              >
                Here to help, Update your profile information to get the best
                matching opportunities.
              </div>
              <div className="d-flex flex-column col-md-4 col-12  mt-1">
                <Link
                  className="texttt fs-3 col-12 col-md-12 "
                  renderAs="button"
                  id="redlink"
                  className=" shadow-none  "
                  to="/Profile/General"
                >
                  Update Now
                </Link>
              </div>
              <div className="d-flex flex-column col-md-2">
                <button
                  onClick={() => {
                    this.setState({ alert: false });
                  }}
                  id="closed"
                  className="btn p-0"
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
        <div className="container">
          <div className="fs-3 mt-5 mb-3">Search </div>
          <div id="custom-search-input" className="my-4">
            <form onSubmit={this.handleSubmit} id="fromSearch">
              <div class="input-group col-md-12 ">
                <input
                  type="text"
                  class="form-control input-lg"
                  onChange={this.handleChange}
                  value={this.state.Search ? this.state.Search : ""}
                />

                <div class="input-group-btn">
                  <span class="input-group-btn">
                    <button class="btn border-left btn-lg" type="button">
                      <GrSearch fill="#1E4274" color="#1E4274" />
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <h3 className=" d-flex justify-content-start " id="gold">
            Filter your result
          </h3>
          <div className="primarycolor1 mb-3 "></div>
          <ul className="nav  infoTabsUl nav-tabs" id="myTab" role="tablist">
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn active"
                id="General-tab"
                // href='/Profile/General'
              >
                Department
              </a>
            </li>
            <li className="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn "
                id="Education-tab"
                // href='/Profile/Education'
              >
                State
              </a>
            </li>
            <li class="nav-item infoTabs" role="presentation">
              <a
                className="nav-link tabBtn "
                id="Experiance-tab"
                // href='/Profile/Experience'
              >
                Payment
              </a>
            </li>
          </ul>
          {/* onSubmit={this.formSubmit} */}
          <form>
            <ul
              className="nav  infoTabsUl text-nowrap nomargin align-items-center py-2"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    name="inlineRadio1"
                    className="me-1"
                    id="radio signInput"
                    value="option1"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  All
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    type="radio"
                    value="Business Information Systems"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  BIS/IT
                </label>
              </li>
              <li class="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Accounting"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Accounting
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Marketing"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Marketing
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Media Management"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Media Management
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Finance"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Finance
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Humanities"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Humanities
                </label>
              </li>

              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Political Science"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Political science
                </label>
              </li>
              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Language and translation"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Language and translation
                </label>
              </li>

              <li className="nav-item infoTabs" role="presentation">
                <label class="radio-inline">
                  <input
                    className="me-1"
                    name="inlineRadio1"
                    id="radio signInput"
                    value="Media"
                    type="radio"
                    onChange={(e) => this.onChangeValue(e.target.value)}
                  />
                  Media
                </label>
              </li>
            </ul>
          </form>

          <div className="">
            <div className="   ">
              <div className=" col-12 d-flex flex-row nav">
                {this.state.posts != null &&
                  this.state.posts.map(this.createEcardElement)}
              </div>
            </div>
          </div>
        </div>

        {this.state.posts.length == 0 ? (
          <div className="col-12">
            <img className="row center img-fluid mt-4 mb-5" src={search} />
          </div>
        ) : (
          <div className="text-center stext  my-4">
            <a>Load More...</a>
          </div>
        )}

        <Footer2 />
      </div>
    );
  }
}
export default Search;
