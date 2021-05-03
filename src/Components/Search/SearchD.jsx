import React, { Component } from "react";
import SearchNav from "./SearchNav";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import search from "../../Components/assests/imgs/search.png";
import Footer2 from "../Common/Footer2";
import { axios } from "../../Api/axios";
import BigCard from "../Explore/BigCard";

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
      redirect: false,
      disabled: true,
      FormLoading: false,
    };
    window.scrollTo(0, 0);

    // this.onChangeValue = this.onChangeValue.bind(this);
  }

  createEcardElement = (data) => (
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
      saved={data.saved}
      applied={data.applied}
      id={data.id}
      company_id={data.company_id}
      className='col-md-6 col-12'
    />
  );
  async componentDidMount() {
    await axios.get("/departments").then((dep) => {
      this.setState({
        departs: dep.data.response.data,
        loading: true,
      });
    });
    if (this.props.location.params && this.props.location.params.value !== undefined) {
      var data = { department_id: this.state.dep };

      this.setState({ Search: this.props.location.params.value });
      await axios
        .post(`/W/student/filterDep/${this.props.location.params.value}?page=1`, data)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
              size: 5,
              page: 1,
            });
            //  this.wfuction(res.data.response.data);
          }
        });
      this.props.location.params = null;
    }
  }

  handleChange = (e) => {
    this.setState({ Search: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    var data = { department_id: this.state.dep };
    console.log(this.state.dep);

    if (
      this.state.dep != undefined &&
      this.state.dep != "99" &&
      this.state.Search != "" &&
      this.state.Search != undefined
    ) {
      await axios
        .post(`/W/student/filterDep/${this.state.Search}?page=1`, data)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
            });
          }
          console.log(data);
        });
    } else if (this.state.dep == "99" || this.state.Search != undefined) {
      await axios
        .get(`/W/student/search/${this.state.Search}`)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ Error: "Search AAST-Trainery" });
    }
  };
  //   onChangeValue = (event) => {
  //     if (this.state.posts !== undefined) {
  //       this.setState({
  //         dep: event,
  //       });
  //     }
  //   };
  render() {
    return (
      <div>
        <div className='container-fluid mt-5 '>
          <div className='container'>
            {/* <LoadingOverlay
              active={this.state.FormLoading}
              spinner={<BounceLoader color='#cd8930' />}
              color={"#cd8930"}
              className='mx-5'
              styles={{
                overlay: (base) => ({
                  ...base,
                  background: "rgb(255, 255, 255)",
                  stroke: "rgba(255, 0, 0, 0.5)",
                }),
              }}
            > */}
            <div
              className='fs-3 mt-5 mb-3 '
              id='gold'
              id={this.state.Error ? "gold" : ""}
            >
              {this.state.Error ? this.state.Error : "Search"}
            </div>
            <div id='custom-search-input' className='my-4'>
              <form onSubmit={this.handleSubmit} id='fromSearch'>
                <div class='input-group col-md-12 '>
                  <input
                    type='text'
                    class='form-control input-lg'
                    onChange={this.handleChange}
                    value={this.state.Search ? this.state.Search : ""}
                  />

                  <div class='input-group-btn'>
                    <span class='input-group-btn'>
                      <button class='btn border-left btn-lg primarycolor22' type='submit'>
                        <BsSearch value={{ color: "blue" }} />
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <h3 className=' d-flex justify-content-start ' id='gold'>
              Filter your result
            </h3>
            <SearchNav />
            <form>
              <ul
                className='nav  infoTabsUl text-nowrap nomargin align-items-center py-2'
                id='myTab'
                role='tablist'
              >
                <li className='nav-item infoTabs' role='presentation'>
                  <label class='radio-inline' onChange={this.handleSubmit}>
                    <input
                      name='inlineRadio1'
                      className='me-1'
                      id='radio signInput'
                      value='option1'
                      type='radio'
                      value='99'
                      onChange={(e) =>
                        this.setState({
                          dep: e.target.value,
                        })
                      }
                    />
                    All
                  </label>
                </li>
                {this.state.departs &&
                  this.state.departs.map((departs) => (
                    <li
                      className='nav-item infoTabs'
                      role='presentation'
                      key={departs.id}
                    >
                      <label class='radio-inline' onChange={this.handleSubmit}>
                        <input
                          className='me-1'
                          name='inlineRadio1'
                          id='radio signInput'
                          type='radio'
                          value={departs.id}
                          onChange={(e) =>
                            this.setState({
                              dep: e.target.value,
                            })
                          }
                        />
                        {departs.dep_name}
                      </label>
                    </li>
                  ))}
              </ul>
            </form>
          </div>
          <div className='container'>
            <div className='   '>
              <div className=' col-12 d-flex flex-row nav'>
                {this.state.posts != null &&
                  this.state.posts.map(this.createEcardElement)}
              </div>
            </div>
          </div>
        </div>
        {this.state.posts.length == 0 ? (
          <div className='col-12'>
            <img className='row center img-fluid mt-4 mb-5' src={search} />
          </div>
        ) : (
          <div className='text-center stext  my-4'>
            <nav aria-label='Page navigation example'>
              <ul class='pagination justify-content-center'>
                <li class={this.state.page > 1 ? "page-item " : "page-item disabled"}>
                  <button
                    class='page-link'
                    onClick={this.previousPage}
                    tabindex='-1'
                    style={{ color: "#1E4274" }}
                  >
                    Previous
                  </button>
                </li>

                <li class='page-item'>
                  <button
                    class='page-link'
                    onClick={this.nextPage}
                    style={{ color: "#1E4274" }}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <Footer2 />
      </div>
    );
  }
}

export default SearchD;
