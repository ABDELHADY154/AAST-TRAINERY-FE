import React, { Component } from "react";
import SearchNav from "./SearchNav";
import { BsSearch } from "react-icons/bs";
import search from "../../Components/assests/imgs/search.png";
import Footer2 from "../Common/Footer2";
import { axios } from "../../Api/axios";
import BigCard from "../Explore/BigCard";
import BounceLoader from "react-spinners/BounceLoader";
import LoadingOverlay from "react-loading-overlay";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch-dom";
const searchClient = algoliasearch(
  "EC3VZ4G3BR",
  "fb9c194ef7916f92cd83a53640839c34",
);

const getAdvisor = async id => {
  await axios.get(`/W/student/advisor/${id}`).then(res => {
    console.log(res.id);
  });
};
const App = () => (
  <InstantSearch searchClient={searchClient} indexName="posts_index">
    <div className="container">
      <SearchBox autoFocus showLoadingIndicator />
      <div className="mt-3">
        <div className="col-12 d-flex flex-row nav">
          <Hits
            hitComponent={data => {
              return (
                <BigCard
                  title={data.hit.internship_title}
                  company_logo={data.hit.company.company_logo}
                  salary={data.hit.salary}
                  company_name={data.hit.company.company_name}
                  departments={data.hit.departments}
                  description={data.hit.desc}
                  tags={data.hit._tags}
                  application_deadline={data.hit.application_deadline}
                  advisor={data.hit.advisor}
                  post_type={data.hit.post_type}
                  sponsor_image={data.hit.sponsor_image}
                  key={data.hit.id}
                  // reviewed={data.hit.reviewed}
                  status={data.hit.status}
                  id={data.hit.id}
                  company_id={data.hit.company_id}
                />
              );
            }}
          />
          <Pagination
            // Optional parameters
            defaultRefinement={1}
            // showFirst={boolean}
            // showPrevious={boolean}
            // showNext={boolean}
            // showLast={boolean}
            // padding={number}
            // totalPages={number}
            // translations={object}
          />
        </div>
      </div>
    </div>
  </InstantSearch>
);
export class SearchD extends Component {
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
      size: 10,
      page: 1,
      currPage: null,
      disabled: true,
      FormLoading: false,
      checked: false,
      dep: "all",
    };
    window.scrollTo(0, 0);
  }

  createEcardElement = data => (
    <BigCard
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
      advisor={data.advisor}
      post_type={data.post_type}
      sponsor_image={data.sponsor_image}
      reviewed={data.reviewed}
      status={data.status}
      id={data.id}
      company_id={data.company_id}
      className="col-md-6 col-12"
    />
  );
  async componentDidMount() {
    this.setState({
      FormLoading: true,
    });
    await axios.get("/departments").then(dep => {
      this.setState({
        departs: dep.data.response.data,
        loading: true,
      });
    });
    if (
      this.props.location.params &&
      this.props.location.params.value !== undefined
    ) {
      this.setState({ Search: this.props.location.params.value });
      await axios
        .get(`/W/student/search/${this.props.location.params.value}`)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
            });
          }
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
      this.props.location.params = null;
    } else {
      this.setState({ FormLoading: false });
    }
  }

  handleChange = e => {
    this.setState({ Search: e.target.value });
  };
  handleFormSubmit = async e => {
    e.preventDefault();
    if (this.state.dep !== "all") {
      var data = { department_id: this.state.dep };
    } else {
      var data = { department_id: 1 };
    }
    this.setState({ FormLoading: true });

    if (
      this.state.dep != "all" ||
      (this.state.Search != undefined && this.state.Search.length !== 0)
    ) {
      this.setState({ Search: this.state.Search.trim() });
      console.log(this.state.Search);

      await axios
        .post(`/W/student/filterDep/${this.state.Search}?page=1`, data)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
            });
          }
          console.log(data);
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else if (
      this.state.dep === "all" &&
      this.state.Search !== undefined
      // this.state.Search.length !== 0
    ) {
      this.setState({ Search: this.state.Search.trim() });
      console.log(this.state.Search);
      await axios
        .get(`/W/student/search/${this.state.Search}`)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
              Error: "Search AAST-Trainery",
            });
          }
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else {
      this.setState({ Error: "Search AAST-Trainery", FormLoading: false });
    }
  };
  handleSubmit = async e => {
    this.state.dep = e;
    this.setState({ FormLoading: true });
    var data = { department_id: this.state.dep };
    if (
      this.state.dep != undefined &&
      this.state.dep != "all" &&
      this.state.Search != undefined &&
      this.state.Search.length !== 0
    ) {
      this.setState({ Search: this.state.Search.trim() });

      await axios
        .post(`/W/student/filterDep/${this.state.Search}?page=1`, data)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
            });
          }
          // console.log(data);
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else if (
      this.state.dep === "all" &&
      this.state.Search !== undefined &&
      this.state.Search.length !== 0
    ) {
      this.setState({ Search: this.state.Search.trim() });

      await axios
        .get(`/W/student/search/${this.state.Search}`)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
              Error: "Search AAST-Trainery",
            });
          }
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else {
      this.setState({ Error: "Search AAST-Trainery", FormLoading: false });
    }
  };
  previousPage = async e => {
    if (this.state.page > 1) {
      const newPage = this.state.page - 1;
      this.setState({
        posts: [],
        page: newPage,
        FormLoading: true,
      });
      var data = { department_id: this.state.dep };
      if (
        this.state.dep != undefined &&
        this.state.dep != "all" &&
        this.state.Search != undefined &&
        this.state.Search.length !== 0
      ) {
        this.setState({ Search: this.state.Search.trim() });

        await axios
          .post(
            `/W/student/filterDep/${this.state.Search}?page=${newPage}`,
            data,
          )
          .then(res => {
            if (res.status === 200) {
              this.setState({
                posts: res.data.response.data,
                FormLoading: false,
              });
            }
          })
          .catch(error => {
            this.setState({
              Error: "Search AAST-Trainery",
              FormLoading: false,
            });
          });
      } else if (
        this.state.dep === "all" &&
        this.state.Search !== undefined &&
        this.state.Search.length !== 0
      ) {
        this.setState({ Search: this.state.Search.trim() });

        await axios
          .get(`/W/student/search/${this.state.Search}`)
          .then(res => {
            if (res.status === 200) {
              this.setState({
                posts: res.data.response.data,
              });
            }
          })
          .catch(error => {
            this.setState({
              Error: "Search AAST-Trainery",
              FormLoading: false,
            });
          });
      } else {
        this.setState({ Error: "Search AAST-Trainery" });
      }
    }
  };
  nextPage = async e => {
    const newPage = this.state.page + 1;
    this.setState({
      posts: [],
      page: newPage,
      FormLoading: true,
    });
    var data = { department_id: this.state.dep };
    if (
      this.state.dep != undefined &&
      this.state.dep != "all" &&
      this.state.Search != undefined &&
      this.state.Search.length !== 0
    ) {
      this.setState({ Search: this.state.Search.trim() });

      await axios
        .post(`/W/student/filterDep/${this.state.Search}?page=${newPage}`, data)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
            });
          }
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else if (
      this.state.dep === "all" &&
      this.state.Search !== undefined &&
      this.state.Search.length !== 0
    ) {
      this.setState({ Search: this.state.Search.trim() });

      await axios
        .get(`/W/student/search/${this.state.Search}`)
        .then(res => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
            });
          }
        })
        .catch(error => {
          this.setState({
            Error: "Search AAST-Trainery",
            FormLoading: false,
          });
        });
    } else {
      this.setState({ Error: "Search AAST-Trainery" });
    }
  };
  render() {
    return (
      <div>
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          className="mx-5"
          styles={{
            overlay: base => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container-fluid mt-5 ">
            <div className="container">
              <div
                className="fs-3 mt-5 mb-3 "
                id="gold"
                id={this.state.Error ? "gold" : ""}
              >
                {this.state.Error ? this.state.Error : "Search"}
              </div>{" "}
              {/* <div id="custom-search-input" className="my-4"> */}
              {/* <form onSubmit={this.handleFormSubmit} id="fromSearch">
                  <div class="input-group col-md-12 ">
                    <input
                      type="text"
                      class="form-control input-lg"
                      onChange={this.handleChange}
                      value={this.state.Search ? this.state.Search : ""}
                      required
                    />

                    <div class="input-group-btn">
                      <span class="input-group-btn">
                        <button
                          class="btn border-left btn-lg primarycolor22"
                          type="submit"
                        >
                          <BsSearch value={{ color: "blue" }} />
                        </button>
                      </span>
                    </div>
                  </div>
                </form> */}
              {/* </div>{" "} */}
              {/* <h3 className=" d-flex justify-content-start " id="gold">
                Filter your result
              </h3>{" "}
              <SearchNav value={this.state.Search} />
              <form onSubmit={this.handleSubmit} id="depFrom">
                <ul
                  className="nav   text-nowrap nomargin align-items-center py-2"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item infoTabs" role="presentation">
                    <label class="radio ">
                      <input
                        name="inlineRadio1"
                        className="me-1 checked"
                        id="radio signInput "
                        type="radio"
                        value="all"
                        onClick={e => this.handleSubmit(e.target.value)}
                      />
                      All
                    </label>
                  </li>
                  {this.state.departs &&
                    this.state.departs.map(departs => (
                      <li
                        className="nav-item infoTabs"
                        role="presentation"
                        key={departs.id}
                      >
                        <input
                          className="me-1 "
                          name="inlineRadio1"
                          type="radio"
                          value={departs.id}
                          onClick={e => this.handleSubmit(e.target.value)}
                        />
                        {departs.dep_name}
                      </li>
                    ))}
                </ul>
              </form> */}
            </div>
            <div className="container">
              {/* <div className="   ">
                <div className=" col-12 d-flex flex-row nav">
                  {this.state.posts != null &&
                    this.state.posts.map(this.createEcardElement)}
                </div>
              </div> */}
            </div>
          </div>
          {/* {this.state.posts.length == 0 ? (
            <div className="col-12">
              <img className="row center img-fluid mt-4 mb-5" src={search} />
            </div>
          ) : (
            <div className="text-center stext  my-4">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li
                    class={
                      this.state.page > 1 ? "page-item " : "page-item disabled"
                    }
                  >
                    <button
                      class="page-link"
                      onClick={this.previousPage}
                      tabindex="-1"
                      style={{ color: "#1E4274" }}
                    >
                      Previous
                    </button>
                  </li>

                  <li class="page-item">
                    <button
                      class="page-link"
                      onClick={this.nextPage}
                      style={{ color: "#1E4274" }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )} */}
          <App />
        </LoadingOverlay>

        <Footer2 />
      </div>
    );
  }
}

export default SearchD;
