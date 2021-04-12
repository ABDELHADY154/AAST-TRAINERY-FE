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
    };
    this.toggleSave = this.toggleSave.bind(this);
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/student/posts")
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              posts: res.data.response.data,
              loading: true,
            });
            // res.data.response.data.map((data, i) => {
            //   //   console.log(data);
            //   this.setState({
            //     advisor: [data.advisor],
            //     departments: [data.departments],
            //     tags: [data.tages],
            //   });
            // console.log(this.state.posts);
            // });
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
  }
  toggleSave = () => {
    this.setState({ saved: !this.state.saved ? true : false });
    console.log(this.state.saved);
  };

  render() {
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
            <div class='input-group col-md-12 '>
              <input
                type='text'
                class='form-control input-lg'
                placeholder='Write some thing'
              />
              <span class='input-group-btn'>
                <button class='btn btn-info btn-lg' type='button'>
                  {/* <i class='IoClose glyphicon-search'></i> */}
                  <GrSearch />
                </button>
              </span>
            </div>
          </div>
          <div className='flex-column mb-4'>
            <div className='col-md-12'>
              <div className='col-md-12'>
                {/* Adviosr posts */}
                {/* {this.state.posts.map((v, i) => {
                  return (
                    
                  );
                })} */}
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
                        />
                      );
                    })
                  : ""}

                {/* <div className='card '>
                  <div className='card-body '>
                    <div className='d-flex flex-row justify-content-between'>
                      <div className='d-flex'>
                        <img
                          className=' mt-0 d-flex flex-column col-md-4 col-2 me-3'
                          id='imgicon'
                          src={img2}
                        />
                        <p id='' className='card-title fs-5 mt-2'>
                          Dr. Rehab ElBadrawy
                        </p>
                      </div>

                      <div className='d-flex flex-row-reverse'>
                        <div class='gray'>2 min ago</div>
                      </div>
                    </div>

                    <hr />
                    <div className='d-flex flex-row '>
                      <img
                        className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                        id='imgicon'
                        src={img2}
                      />
                      <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>UI</div>
                      <div id='goldtab' className=' fs-6 mt-2  col-2 col-md-1'>
                        Paid
                      </div>
                    </div>
                    <div id='job' className='d-flex flex-row ms-5 '>
                      <div className='d-flex ms-3 flex-column'>CIB</div>
                      <div id='gold' className='d-flex ms-2 flex-column'>
                        Finance
                      </div>
                    </div>
                    <p className='card-text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                      repudiandae aut possimus. Repellendus at nostrum iste doloremque. Ea
                      omnis ipsam, eum nam tempore culpa illum consequuntur quis nobis
                      adipisci et?
                    </p>
                    <div className='d-flex flex-row flex-wrap ww'>
                      <div className='s'>
                        <div
                          className='d-flex flex-column  col-4 col-md-1 me-4 ss'
                          id='firsttagipad'
                        >
                          <a href='#' className='tagsipad' id='tags'>
                            Finance
                          </a>
                        </div>
                        <div
                          className='d-flex flex-column col-4  col-md-1 me-4 mb-1 '
                          id='firsttagipad'
                        >
                          <a href='#' className='tagsipad  ' id='tags'>
                            Banking
                          </a>
                        </div>
                        <div
                          id='drop'
                          className='d-flex flex-column col-md-3  
                             justify-space-between'
                        >
                          <p>Deadline 11 Dec 2021</p>
                        </div>
                      </div>

                      <div className='  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement'>
                        <div className='col-md-4'></div>
                        <BsBookmark
                          id='BsBookmark'
                          color='#1e4274'
                          className='fs-2 align-self-center mb-5  col-md-2 col-4'
                          path='0px'
                        />
                        <button className='applyBtn px-1 py-0 col-md-3 col-8'>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div> */}
              </div>
              {/* <div className='card '>
                  <div className='card-body '>
                    <div className='d-flex flex-row'>
                      <img
                        className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                        id='imgicon'
                        src={img2}
                      />
                      <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>testtts22</div>
                    </div>

                    <p className='card-text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                      repudiandae aut possimus. Repellendus at nostrum iste doloremque. Ea
                      omnis ipsam, eum nam tempore culpa illum consequuntur quis nobis
                      adipisci et?
                    </p>
                    <div className='d-flex flex-row flex-wrap '>
                      <img
                        className=' mt-0 d-flex flex-column col-md-12 col-12 me-1'
                        // id='imgicon'
                        src={img3}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className='text-center stext  my-4'>
          <a>Load More...</a>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default Explore;
