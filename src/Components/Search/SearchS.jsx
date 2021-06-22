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
  PoweredBy,
  HitsPerPage,
  RefinementList,
  NumericMenu,
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
const App = props => (
  <InstantSearch searchClient={searchClient} indexName="posts_index">
    <div className="container">
      <div
        className="row w-100"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div className="col-md-10 col-12">
          <SearchBox autoFocus showLoadingIndicator />
        </div>
        <div className="col-md-2 col-12">
          <PoweredBy />
        </div>
      </div>
      <h3 className=" d-flex justify-content-start mt-3" id="gold">
        Filter your result
      </h3>{" "}
      <SearchNav value={props.value} />
      <RefinementList attribute={"type"} operator="and" />
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
                  tags={data.hit.tags}
                  application_deadline={data.hit.application_deadline}
                  advisor={data.hit.advisor}
                  post_type={data.hit.post_type}
                  sponsor_image={data.hit.ad}
                  key={data.hit.id}
                  // reviewed={data.hit.reviewed}
                  status={data.hit.status}
                  id={data.hit.id}
                  company_id={data.hit.company_id}
                />
              );
            }}
          />
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <Pagination defaultRefinement={1} />
      </div>
    </div>
  </InstantSearch>
);
class SearchD extends Component {
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

  async componentDidMount() {
    this.setState({
      FormLoading: true,
    });

    if (
      this.props.location.params &&
      this.props.location.params.value !== undefined
    ) {
      this.setState({
        Search: this.props.location.params.value,
        FormLoading: false,
      }); // await axios
      //   .get(`/W/student/search/${this.props.location.params.value}`)
      //   .then(res => {
      //     if (res.status === 200) {
      //       this.setState({
      //         posts: res.data.response.data,
      //         FormLoading: false,
      //       });
      //     }
      //   })
      //   .catch(error => {
      //     this.setState({
      //       Error: "Search AAST-Trainery",
      //       FormLoading: false,
      //     });
      //   });

      this.props.location.params = null;
    } else {
      this.setState({ FormLoading: false });
    }
  }

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
            </div>
            <div className="container"></div>
          </div>

          <App value={this.state.Search} />
        </LoadingOverlay>

        <Footer2 />
      </div>
    );
  }
}

export default SearchD;
