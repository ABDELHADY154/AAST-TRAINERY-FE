import React, { Component } from "react";
import { axios } from "../../Api/axios";
import "../../layout/Home.css";
import Footer2 from "../Common/Footer2";
import "react-step-progress-bar/styles.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../layout/Explore.css";
import search from "../../Components/assests/imgs/search.png";
import { BsSearch } from "react-icons/bs";
import BigCard from "../Explore/BigCard";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import SearchNav from "./SearchNav";
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
      size: 10,
      page: 1,
      currPage: null,
      redirect: false,
      disabled: true,
      FormLoading: false,
      Search: "",
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
    if (this.props.location.params && this.props.location.params !== undefined) {
      this.setState({ Search: this.props.location.params.val });
      await axios
        .get(`/W/student/search/${this.props.location.params.val}?page=1`)
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              FormLoading: false,
              size: 5,
              page: 1,
            });
          }
        });
      this.props.location.params.val = null;
    }
  }

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
      }
    });
  };


  previousPage = async (e) => {
    if (this.state.page > 1) {
      const newPage = this.state.page - 1;
      this.setState({
        posts: [],
        page: newPage,
        FormLoading: true,
      });
      await axios
        .get(`/W/student/search/${this.state.Search}?page=${newPage}`)
        .then((todos) => {
          if (todos.status === 200) {
            this.setState({
              posts: todos.data.response.data,
              FormLoading: false,
            });
          }
        })
        .catch((error) => {
          if (error.response.data.status === 401 || error.response.data.status === 404) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
        });
    }
  };
  nextPage = async (e) => {
    const newPage = this.state.page + 1;
    this.setState({
      posts: [],
      page: newPage,
      FormLoading: true,
    });
    await axios
      // /W/student/search/{val}?page={pageNumber}
      .get(`/W/student/search/${this.state.Search}?page=${newPage}`)
      .then((todos) => {
        if (todos.status === 200) {
          this.setState({
            posts: todos.data.response.data,
            FormLoading: false,
          });
        }
      })
      .catch((error) => {
        if (error.response.data.status === 401 || error.response.data.status === 404) {
          sessionStorage.clear("token");
          sessionStorage.clear("status");
          this.setState({ loggedIn: false });
          window.location.reload();
        }
      });
  };

  render() {
    return (
      <div className='container-fluid mt-5 '>
        <div className='container'>
          <LoadingOverlay
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
          >
            <div className='fs-3 mt-5 mb-3'>Search </div>
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

            <SearchNav value={this.state.Search} />

            <div className=''>
              <div className='   '>
                <div className=' col-12 d-flex flex-row nav'>
                  {this.state.posts != null &&
                    this.state.posts.map(this.createEcardElement)}
                </div>
              </div>
            </div>
          </LoadingOverlay>
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
export default Search;
