import React, { Component } from "react";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";
import { Loader } from "../../loader";
import img from "../../Components/assests/imgs/girlavi.png";
import MaleAvatar from "../../Components/assests/imgs/boyavi.png";
import img2 from "../../Components/assests/imgs/cib.png";
import img3 from "../../Components/assests/imgs/cibExplore.png";
import "../../layout/Home.css";
import { BsCheck, BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import Ecard from "./Ecard";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../layout/Explore.css";
import paginate from "paginate-array";

import { GrSearch } from "react-icons/gr";

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
      alert: true,
      saved: false,
      posts: [],
      Search: "",
      title: "",
      todos: [],
      size: 10,
      page: 1,
      currPage: null,
      num: 0,
    };
    // this.toggleSave = this.toggleSave.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  async componentDidMount() {
    await resolve(
      axios
        .get(`/W/student/posts?page=${this.state.page}`)
        .then((todos) => {
          if (todos.status === 200) {
            this.setState({
              posts: todos.data.response.data,
              loading: true,
              size: this.state.size,
              page: this.state.page,
            });
          }

          // const currPage = paginate(this.state.posts, this.state.page, this.state.size);
          // this.setState({
          //   ...this.state,
          //   todos,
          //   currPage,
          // });
        })
        .catch((error) => {
          if (error.response.data.status === 401 || error.response.data.status === 404) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ loggedIn: false });
            window.location.reload();
          }
        })
    );
  }


  previousPage = async (e) => {
    if (this.state.page > 1) {
      const newPage = this.state.page - 1;
      this.setState({
        posts: [],
        page: newPage,
      });
      await resolve(
        axios
          .get(`/W/student/posts?page=${newPage}`)
          .then((todos) => {
            if (todos.status === 200) {
              this.setState({
                posts: todos.data.response.data,
                loading: true,
              });
            }
          })
          .catch((error) => {
            if (
              error.response.data.status === 401 ||
              error.response.data.status === 404
            ) {
              sessionStorage.clear("token");
              sessionStorage.clear("status");
              this.setState({ loggedIn: false });
              window.location.reload();
            }
          })
      );
    }
  };
  nextPage = async (e) => {
    const newPage = this.state.page + 1;
    this.setState({
      posts: [],
      page: newPage,
    });
    await resolve(
      axios
        .get(`/W/student/posts?page=${newPage}`)
        .then((todos) => {
          if (todos.status === 200) {
            this.setState({
              posts: todos.data.response.data,
              loading: true,
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
        })
    );
  };

  render() {
    const { page, size, currPage, totalPages } = this.state;

    if (this.state.user.profile_updated === false) {
      var Alert =
        this.state.alert == true ? (
          <div id='alerting' className='d-flex flex-row  flex-wrap py-2  mb-3 '>
            <div className='container d-flex flex-row  flex-wrap '>
              <div id='alertingtitle' className='d-flex flex-column col-md-6 col-12 mt-1'>
                Here to help, Update your profile information to get the best matching
                opportunities.
              </div>
              <div className='d-flex flex-column col-md-4 col-12  mt-1'>
                <Link
                  className='texttt fs-3 col-12 col-md-12 '
                  renderAs='button'
                  id='redlink'
                  className=' shadow-none  '
                  to='/Profile/General'
                >
                  Update Now
                </Link>
              </div>
              <div className='d-flex flex-column col-md-2'>
                <button
                  onClick={() => {
                    this.setState({ alert: false });
                  }}
                  id='closed'
                  className='btn p-0'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#alerting'
                  aria-expanded='true'
                  aria-controls='alerting'
                >
                  <IoClose fill='red' color='red' />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
    }

    return (
      <div className='container-fluid mt-5 '>
        {Alert}
        <div className='container'>
          <div className='fs-3 mt-5 mb-3 text-center'>Explore Training Opportunities</div>
          <p className='text-center mt-2 stext'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* BIG CARD WITH ADVISOR */}
          <div id='custom-search-input' className='my-4'>
            <form>
              <div class='input-group col-md-12'>
                <input
                  type='text'
                  class='form-control input-lg'
                  placeholder='Write some thing'
                  onChange={(e) => {
                    this.setState({ Search: e.target.value });
                  }}
                />
                <span class='input-group-btn'>
                  <Link
                    class='btn border-left btn-lg'
                    type='button'
                    to={{
                      pathname: "/Search",
                      params: { val: this.state.Search },
                    }}
                  >
                    <GrSearch />
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div className='flex-column mb-4'>
            <div className='col-md-12'>
              <div className='col-md-12'>
                {/* {console.log(currPage)} */}
                {this.state.posts
                  ? this.state.posts.map((data) => {
                      return (
                        <Ecard
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
                          key={data.id}
                        />
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>

        <div className='text-center stext  my-4'>
          <nav aria-label='Page navigation example'>
            <ul class='pagination justify-content-center'>
              <li class={this.state.page > 1 ? "page-item " : "page-item disabled"}>
                <button class='page-link' onClick={this.previousPage}>
                  previousPage
                </button>
              </li>

              <li class='page-item'>
                <button class='page-link' onClick={this.nextPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Explore;
