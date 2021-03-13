import React, { Component } from "react";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";
import { Loader } from "../../loader";
import img from "../../Components/assests/imgs/girlavi.png";
import MaleAvatar from "../../Components/assests/imgs/boyavi.png";
import img2 from "../../Components/assests/imgs/cib.png";
import rec1 from "../../Components/assests/imgs/rec1.png";
import rec2 from "../../Components/assests/imgs/rec2.png";
import rec3 from "../../Components/assests/imgs/rec3.png";
import "../../layout/Home.css";
import { BsCheck, BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsBookmark } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
      alert: true,
    };
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/student/get-profile")
        .then((res) => {
          if (res.status === 200) {
            // sessionStorage.setItem("avatar", res.data.response.data.image);
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
  }

  // handleRemove(){
  //   var alert = document.getElementsBy("navBottom")[0].remove(alert);

  // }

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
                <a id='redlink' href='#'>
                  Update Now
                </a>
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
          <div className='d-flex flex-row '>
            <div id='' className='d-flex flex-column text-wrap bg-none'>
              <div className='fs-3' id='bold'>
                Track Your Profile
              </div>
              <div className='fs-6 col-md-8 col-sm-12' id=''>
                We help you track your profile success and update to reach out the best
                matching opportunity. Check out these steps for a successful experience:
              </div>

              <div className='d-flex flex-row flex-wrap mt-5 '>
                <div id='small' className='col-12 col-md-10 d-flex '>
                  <div className='col-8 col-md-3 d-flex fs-4  '>Steps to Success</div>
                  <div className='d-flex flex-row d-md-none mt-3 ms-5'>
                    <div className='d-flex flex-column col-8 ms-5'>
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
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
                                <BsCheck color='#ffffff' fill='#ffffff' />
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Step>
                      </ProgressBar>
                    </div>
                  </div>
                  <div id='big' className='d-flex flex-column  col-md-8 mt-3'>
                    <ProgressBar
                      percent={
                        this.state.user.profile_score ? this.state.user.profile_score : 0
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
                              <BsCheck color='#ffffff' fill='#ffffff' />
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
            <div className='d-flex flex-column d-none d-md-flex col-md-2 '>
              {this.state.user.gender ? (
                <img
                  id='girl'
                  className=''
                  src={this.state.user.gender == "female" ? img : MaleAvatar}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='card mt-2 mt-5 w-70 mb-2 '>
            <div className='card-body'>
              <h5 id='tabtitle' className='card-title fs-3 my-3'>
                Your Activities
              </h5>
              <div id='tabcard' className='row'>
                <div className='col-md-6' id='tabcontainer'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex flex-row '>
                        <img
                          className=' mt-0 d-flex flex-column  col-2 '
                          id='imgicon'
                          src={img2}
                        />
                        <div className=' fs-5 mt-2 ms-2 col-md-10 col-8 '>
                          UI/UX Designer
                        </div>
                        <div id='gold' className=' fs-6 mt-2  col-2 col-md-2'>
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
                        repudiandae aut possimus. Repellendus at nostrum iste doloremque.
                        Ea omnis ipsam, eum nam tempore culpa illum consequuntur quis
                        nobis adipisci et?
                      </p>
                      <div className='d-flex flex-row flex-wrap '>
                        <div className='d-flex flex-column col-4 col-md-2'>
                          <a href='#' className=' ' id='tags'>
                            Finance
                          </a>
                        </div>
                        <div className='d-flex flex-column col-4 me-3 col-md-2  mb-1'>
                          <a href='#' className='' id='tags'>
                            Banking
                          </a>
                        </div>
                        <div
                          id='drop'
                          className='d-flex flex-column me-4  col-md-5  
                             justify-space-between'
                        >
                          <p>Deadline {"        "}11 Dec 2021</p>
                        </div>
                        <div
                          id='promoted'
                          className='  d-flex flex-row col-12 col-md-2  '
                        >
                          <BsArrowUpRight className='me-2' fill='#cd8930' />
                          <p id='gold'>Promoted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6' id='tabcontainer'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-flex flex-row '>
                        <img
                          className=' mt-0 d-flex flex-column  col-2 '
                          id='imgicon'
                          src={img2}
                        />
                        <div className=' fs-5 mt-2 ms-2 col-md-10 col-8 '>
                          UI/UX Designer
                        </div>
                        <div id='gold' className=' fs-6 mt-2  col-2 col-md-2'>
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
                        repudiandae aut possimus. Repellendus at nostrum iste doloremque.
                        Ea omnis ipsam, eum nam tempore culpa illum consequuntur quis
                        nobis adipisci et?
                      </p>
                      <div className='d-flex flex-row flex-wrap '>
                        <div className='d-flex flex-column col-4 col-md-2'>
                          <a href='#' className=' ' id='tags'>
                            Finance
                          </a>
                        </div>
                        <div className='d-flex flex-column col-4 me-3 col-md-2  mb-1'>
                          <a href='#' className='' id='tags'>
                            Banking
                          </a>
                        </div>
                        <div
                          id='drop'
                          className='d-flex flex-column me-4  col-md-5  
                             justify-space-between'
                        >
                          <p>Deadline {"        "}11 Dec 2021</p>
                        </div>
                        <div
                          id='promoted'
                          className='  d-flex flex-row col-12 col-md-2  '
                        >
                          <BsArrowUpRight className='me-2' fill='#cd8930' />
                          <p id='gold'>Promoted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='breakliner mb-3' />
            <a href='#' id='gold' className='align-self-center pb-2 '>
              See all activities
            </a>
          </div>
          <div className='fs-3 mt-5 mb-3' id=''>
            Explore recommended opportunities
          </div>
          {/* BIG CARD WITH ADVISOR */}

          <div className='row mb-4'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
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
                      className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                      id='imgicon'
                      src={img2}
                    />
                    <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>UI/UX Designer</div>
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
                  <div className='d-flex flex-row flex-wrap '>
                    <div className='d-flex flex-column col-4 col-md-1'>
                      <a href='#' className=' ' id='tags'>
                        Finance
                      </a>
                    </div>
                    <div className='d-flex flex-column col-4  col-md-1 mb-1'>
                      <a href='#' className='  ' id='tags'>
                        Banking
                      </a>
                    </div>
                    <div
                      id='drop'
                      className='d-flex flex-column col-md-2  
                             justify-space-between'
                    >
                      <p>Deadline {"        "}11 Dec 2021</p>
                    </div>
                    <div className='  d-flex flex-row col-12 col-md-6  '>
                      <BsArrowUpRight className='me-2' color='#cd8930' fill='#cd8930' />
                      <p id='gold'>Promoted</p>
                    </div>
                    <div className='  d-flex flex-row col-12 col-md-2  '>
                      <div className='col-md-4'></div>
                      <BsBookmark
                        id='BsBookmark'
                        color='#1e4274'
                        className='fs-2 align-self-center mb-4 col-md-2 col-4'
                        path='0px'
                      />
                      <button className='applyBtn px-1 py-0 col-md-6 col-8'>Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BIG CARD */}

          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex flex-row'>
                    <img
                      className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                      id='imgicon'
                      src={img2}
                    />
                    <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>UI/UX Designer</div>
                    <div id='goldtab' className=' fs-6 mt-2 col-2 col-md-1'>
                      Paid
                    </div>
                  </div>
                  <div id='job' className='d-flex flex-row ms-5 '>
                    <div className='d-flex ms-3 flex-column'>CIB</div>
                    <div id='gold' className='  d-flex ms-2 flex-column'>
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
                    <div className='d-flex flex-column col-4 col-md-1'>
                      <a href='#' className=' ' id='tags'>
                        Finance
                      </a>
                    </div>
                    <div className='d-flex flex-column col-4  col-md-1 mb-1'>
                      <a href='#' className='  ' id='tags'>
                        Banking
                      </a>
                    </div>
                    <div
                      id='drop'
                      className='d-flex flex-column col-md-2  
                             justify-space-between'
                    >
                      <p>Deadline {"        "}11 Dec 2021</p>
                    </div>
                    <div className=' mb-4 d-flex flex-row col-12 col-md-6  '>
                      <BsArrowUpRight className='me-2' color='#cd8930' fill='#cd8930' />
                      <p id='gold'>Promoted</p>
                    </div>
                    <div className='  d-flex flex-row col-12 col-md-2  '>
                      <div className='col-md-4'></div>
                      <BsBookmark
                        id='BsBookmark'
                        color='#1e4274'
                        className='fs-2 align-self-center mb-5 col-md-2 col-4'
                        path='0px'
                      />
                      <button className='applyBtn px-1 py-0 col-md-6 col-8'>Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-row d-flex mt-3'>
            <div className='d-flex flex-column col-md-11'></div>
            <a href='#' id='exploreall' className='d-flex flex-column col-md-1 fs-5 '>
              Explore All
            </a>
          </div>
          <div className='fs-3 mt-5' id=''>
            Check our career coaching services
          </div>
          <div className='d-flex flex-row flex-wrap text-wrap text-center justify-content-center'>
            <div id='widths' className=' mt-3 containerrr  col-md-3 col-12 '>
              <img id='imagehover' src={rec1} />
              <div class='overlay'>
                <a id='linksss' href='#' class='texttt fs-3 col-12 col-md-12 '>
                  CV Review
                </a>
              </div>
            </div>
            {/* <div className="col-1 d-flex"></div> */}
            <div id='widths' className=' mt-3 containerrr  col-md-3 col-12 '>
              <img id='imagehover' src={rec2} />
              <div class='overlay'>
                <a id='linksss' href='#' class='texttt fs-3 col-12 col-md-12 '>
                  Career Coaching Path
                </a>
              </div>
            </div>
            {/* <div className="col-1 d-flex"></div> */}
            <div id='widths' className=' mt-3 containerrr  col-md-3 col-12 '>
              <img id='imagehover' src={rec3} />
              <div class='overlay'>
                <a id='linksss' href='#' class='texttt fs-3 col-12 col-md-12 '>
                  Interview Preperation
                </a>
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
