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
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../layout/Explore.css";

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
    };
    this.toggleSave = this.toggleSave.bind(this);
  }

  //   async componentDidMount() {
  //     await resolve(
  //       axios
  //         .get("/W/student/get-profile")
  //         .then((res) => {
  //           if (res.status === 200) {
  //             // sessionStorage.setItem("avatar", res.data.response.data.image);
  //             this.setState({
  //               user: res.data.response.data,
  //               loading: true,
  //               code: "200",
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           this.setState({
  //             error: {
  //               usernameErr: error.response.status,
  //             },
  //           });
  //           if (this.state.error.usernameErr === 401) {
  //             window.location.reload();
  //           }
  //         })
  //     );
  //   }
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
          <div className='fs-3 mt-5 mb-3'>Search </div>
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
          <h3 className=' d-flex justify-content-start ' id='gold'>
            {" "}
            Filter your result
          </h3>
          <div className='primarycolor1 mb-3 '></div>
          <ul className='nav  infoTabsUl nav-tabs' id='myTab' role='tablist'>
            <li className='nav-item infoTabs' role='presentation'>
              <a
                className='nav-link tabBtn active'
                id='General-tab'
                href='/Profile/General'
              >
                Department
              </a>
            </li>
            <li className='nav-item infoTabs' role='presentation'>
              <a
                className='nav-link tabBtn '
                id='Education-tab'
                href='/Profile/Education'
              >
                State
              </a>
            </li>
            <li class='nav-item infoTabs' role='presentation'>
              <a
                className='nav-link tabBtn '
                id='Experiance-tab'
                href='/Profile/Experience'
              >
                Payment
              </a>
            </li>
          </ul>
          <div className='row mb-4'>
            <div className='col-md-6'>
              <div className='card '>
                <div className='card-body '>
                  <div className='d-flex flex-row'>
                    <img
                      className=' mt-0 d-flex flex-column col-md-9 col-6 me-1'
                      id='imgicon'
                      src={img2}
                    />
                    <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>Ux</div>
                    <div id='goldtab2' className='  mt-2  col-2 col-md-1'>
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
                  <div className='d-flex flex-row flex-wrap '>
                    <div
                      className='d-flex flex-column  col-4 col-md-2  justify-space-between me-1'
                      id='firsttagipad'
                    >
                      <a href='#' className='tagsipad' id='tags'>
                        Finance
                      </a>
                    </div>
                    <div
                      className='d-flex flex-column  col-4 col-md-2 justify-space-between me-1'
                      id='firsttagipad'
                    >
                      <a href='#' className='tagsipad  ' id='tags'>
                        Banking
                      </a>
                    </div>
                    <div
                      id='drop'
                      className='d-flex flex-column col-md-3 col-7 
                             justify-space-between'
                    >
                      <p>Deadline {"        "}11 Dec 2021</p>
                    </div>
                    <div className=' d-flex flex-row col-6 col-md-2  '>
                      <BsArrowUpRight className='mb-1 ' color='#cd8930' fill='#cd8930' />
                      <p id='gold'>Promoted</p>
                    </div>
                    <div className='  d-flex flex-row col-6 col-md-2 mx-auto '>
                      {/* <div className="col-md-4"></div> */}
                      <BsBookmark
                        id='BsBookmark'
                        color='#1e4274'
                        className='fs-1 align-self-center col-md-4 col-4'
                        path='0px'
                      />
                      <button className='applyBtn px-1 py-0 col-md-12 col-6'>
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card '>
                <div className='card-body '>
                  <div className='d-flex flex-row flex-wrap'>
                    {" "}
                    <img
                      className=' mt-0 d-flex flex-column col-md-4 col-2 me-3'
                      id='imgicon'
                      src={img2}
                    />
                    <p id='' className='card-title fs-5 mt-2'>
                      Dr. Rehab ElBadrawy
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex flex-row'>
                    <img
                      className=' mt-0 d-flex flex-column col-md-9 col-6 me-1'
                      id='imgicon'
                      src={img2}
                    />
                    <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>UI</div>
                    <div id='goldtab2' className=' mt-2  col-2 col-md-1'>
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
                  <div className='d-flex flex-row flex-wrap '>
                    <div
                      className='d-flex flex-column  col-4 col-md-1 ml-5  justify-space-between '
                      id='firsttagipad'
                    >
                      <a href='#' className='tagsipad' id='tags'>
                        Finance
                      </a>
                    </div>
                    <div
                      className='d-flex flex-column  col-4 col-md-1  mx-5 '
                      id='firsttagipad'
                    >
                      <a href='#' className='tagsipad  ' id='tags'>
                        Banking
                      </a>
                    </div>
                    <div
                      id='drop'
                      className='d-flex flex-column col-md-3 col-7 
                            '
                    >
                      <p>Deadline {"        "}11 Dec 2021</p>
                    </div>
                    <div className=' d-flex flex-row col-6 col-md-2  '>
                      <BsArrowUpRight className='mb-1 ' color='#cd8930' fill='#cd8930' />
                      <p id='gold'>Promoted</p>
                    </div>
                    <div className='  d-flex flex-row col-6 col-md-2 mx-auto '>
                      {/* <div className="col-md-4"></div> */}
                      <BsBookmark
                        id='BsBookmark'
                        color='#1e4274'
                        className='fs-1 align-self-center col-md-4 col-4'
                        path='0px'
                      />
                      <button className='applyBtn px-1 py-0 col-md-12 col-10'>
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
export default Search;
