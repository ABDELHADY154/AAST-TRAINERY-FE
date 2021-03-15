import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Components/assests/icons/Main-Logo.png";
import { AvatarLoader } from "../../loader";
import { IoIosNotificationsOutline } from "react-icons/io";
import { resolve } from "../../Api/Resolvers/resolver";
import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";
import { axios } from "../../Api/axios";
import { RiEdit2Fill } from "react-icons/ri";
import {
  MdInfoOutline,
  MdFlashOn,
  MdAssignment,
  MdSettings,
  MdPermPhoneMsg,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import "../../layout/Nav.css";
import "../../layout/Main.css";

class AuthNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      status: sessionStorage.getItem("status"),
      loading: false,
      isLoggedIn: false,
      fullname: "",

      // number: 0,
    };

    if (this.state.token) {
      this.setState({ loading: true });
    }
  }
  // handleUpdate = () => {
  //   this.componentDidMount;
  // };
  handleLogout = () => {
    sessionStorage.clear("token");
    sessionStorage.clear("status");
    this.props.setUser(false);
  };

  componentDidMount = async () => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + sessionStorage.getItem("token");

    await resolve(
      axios
        .get("/W/studentImg")
        .then((res) => {
          if (res.status === 200) {
            this.setState({
              user: res.data.response.data,
              avatar: res.data.response.data.image,
              fullname: res.data.response.data.fullName,
            });
          }
        })

        .catch((error) => {
          if (error.response.data.status === 401) {
            sessionStorage.clear("token");
            sessionStorage.clear("status");
            this.setState({ validToken: false });
          }
        })
    );

    if (this.props.updated == true) {
      console.log("1");
      return this.setState({ loggedIn: true });
    } else {
      console.log("11");
    }
    let token = sessionStorage.getItem("token");
    let status = sessionStorage.getItem("status");
    if (status && token) {
      return this.setState({ loggedIn: true });
    }
  };
  render() {
    if (this.props.updated == true) {
      window.location = window.location;
    }
    return (
      <div className='navBottom pb-1'>
        <nav className='navbar navbar-expand-lg navBg fixed-top'>
          <div className='container'>
            <Link className='navbar-brand mx-2' renderAs='button' to='/Home'>
              <img
                className='navbar-brand profileImage'
                src={logo}
                width='170'
                alt=''
              ></img>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarScroll'
              aria-controls='navbarScroll'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse ' id='navbarScroll'>
              <ul className='navbar-nav mt-1'>
                <li className='nav-item '>
                  <Link className='nav-link item navPage mt-2' to='/Home'>
                    Explore
                    <span className='sr-only' />
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link item navPage mt-2'
                    to='#'
                    // onClick={this.handleLogout}
                  >
                    Career Coaching
                  </Link>
                </li>
              </ul>
              <ul className='navbar-nav me-auto my-2'>
                <li className='nav-item'></li>

                <li className='nav-item'>
                  <a className='nav-link disabled' href='#' aria-disabled='true'></a>
                </li>
              </ul>
              {/* notification */}
              <div className='d-flex justify-content-center '>
                <ul className='nav my-1 mx-3 col-auto  dropstart '>
                  <div>
                    <a className='nav-item item col-6 ' href='#'>
                      <a
                        className='dropdown-toggle'
                        id='dropdownMenu2'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <IoIosNotificationsOutline
                          value={{
                            color: "#007BC2",
                            className: "global-class-name mt-0",
                          }}
                          className='noti mt-2 d-inline-block'
                        />
                      </a>
                      <ul
                        className='dropdown-menu notificationMenu col-sm-6 col-md-6'
                        lass='dropdown-menu'
                        aria-labelledby='dropdownMenu2'
                      >
                        <p className='text-center  mb-2 notificationTitle'>Notications</p>
                        {/* Notication 1 */}
                        <div class='alert itemAlert ' role='alert'>
                          <div className=' row NoticationContent '>
                            <div className='row col-2 notificationStyle d-flex align-items-center'>
                              <div
                                class='alertLine'
                                style={{
                                  backgroundColor: "#f44336",
                                }}
                              >
                                <AiOutlineWarning
                                  style={{ fill: "red" }}
                                  // color="#F44336"
                                  className='notificationIcon me-1 ms-2 d-flex align-items-center'
                                  animation='tada'
                                  size='18px'
                                  pull='left'
                                />
                              </div>
                            </div>

                            <div className='notificationText col-10 '>
                              <h4 className='  '>
                                Unfortunately, you were rejected in the applied internship
                              </h4>
                              <h5 className=''>Tap for more information</h5>
                            </div>
                          </div>
                        </div>
                        {/* Notication 2 */}
                        <div class='alert itemAlert ' role='alert'>
                          <div className=' row NoticationContent '>
                            <div className='row col-2 notificationStyle d-flex align-items-center'>
                              <div
                                class='alertLine '
                                style={{
                                  backgroundColor: "#007BC2",
                                }}
                              >
                                <MdInfoOutline
                                  style={{ fill: "#007BC2" }} // color="red"
                                  className='notificationIcon me-1 ms-2 d-flex align-items-center'
                                  animation='tada'
                                  size='18px'
                                  pull='left'
                                />
                              </div>
                            </div>

                            <div className='notificationText col-10 mt-2'>
                              <h4 className='  '>Review your finished session</h4>
                              <h5 className=''>Tap for more information</h5>
                            </div>
                          </div>
                        </div>
                        {/* Notication 3 */}
                        <div class='alert itemAlert ' role='alert'>
                          <div className=' row NoticationContent '>
                            <div className='row col-2 notificationStyle d-flex align-items-center'>
                              <div
                                class='alertLine '
                                style={{
                                  backgroundColor: "#007BC2",
                                }}
                              >
                                <MdInfoOutline
                                  style={{ fill: "#007BC2" }}
                                  // color="red"
                                  className='notificationIcon me-1 ms-2 d-flex align-items-center'
                                  animation='tada'
                                  size='18px'
                                  pull='left'
                                />
                              </div>
                            </div>

                            <div className='notificationText col-10 '>
                              <h4 className='  '>
                                You have a recomendation to apply for an internship
                              </h4>
                              <h5 className=''>Tap for more information</h5>
                            </div>
                          </div>
                        </div>
                        {/* Notication 4 */}
                        <div class='alert itemAlert ' role='alert'>
                          <div className=' row NoticationContent '>
                            <div className='row col-2 notificationStyle d-flex align-items-center'>
                              <div
                                class='alertLine '
                                style={{
                                  backgroundColor: "#4CAF50",
                                }}
                              >
                                <AiOutlineCheckCircle
                                  style={{ fill: "#4CAF50" }}
                                  // color="green"
                                  className='notificationIcon me-1 ms-2 d-flex align-items-center'
                                  animation='tada'
                                  size='18px'
                                  pull='left'
                                />
                              </div>
                            </div>

                            <div className='notificationText col-10 '>
                              <h4 className='  '>
                                Congratulations you got accepted in the applied internship
                              </h4>
                              <h5 className=''>Tap for more information</h5>
                            </div>
                          </div>
                        </div>
                        {/* Notication 5 */}
                        <div class='alert itemAlert ' role='alert'>
                          <div className=' row NoticationContent '>
                            <div className='row col-2 notificationStyle d-flex align-items-center'>
                              <div
                                class='alertLine '
                                style={{
                                  backgroundColor: "#4CAF50",
                                }}
                              >
                                <AiOutlineCheckCircle
                                  style={{ fill: "#4CAF50" }}
                                  // color="green"
                                  className='notificationIcon me-1 ms-2 d-flex align-items-center'
                                  animation='tada'
                                  size='18px'
                                  pull='left'
                                />
                              </div>
                            </div>

                            <div className='notificationText col-10 '>
                              <h4 className='  '>
                                Your session has been booked successfully
                              </h4>
                              <h5 className=''>Tap for more information</h5>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </a>
                    {/* profile */}
                    <div class='btn-group '>
                      <a
                        type='button'
                        class=' dropdown-toggle'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        {this.state.avatar ? (
                          <img
                            src={this.state.avatar}
                            alt='Avatar'
                            width='40'
                            height='40'
                            className='avatar'
                            role='menuitem'
                          />
                        ) : (
                          <AvatarLoader />
                        )}
                      </a>
                      <ul class='dropdown-menu profileMenu '>
                        <li className='row profileHeader d-flex justify-content-center'>
                          <a
                            class='dropdown-item d-flex flex-row'
                            href='/Profile'
                            style={{
                              fontSize: 18,
                              fontFamily: "SF med",
                              color: " #1e4274",
                            }}
                          >
                            <div className='col-4'>
                              {this.state.avatar ? (
                                <img
                                  src={this.state.avatar}
                                  alt='Avatar'
                                  width='40'
                                  height='40'
                                  className='avatar me-2'
                                  role='menuitem'
                                />
                              ) : (
                                <AvatarLoader />
                              )}
                            </div>
                            <div className='col-10'>
                              <span
                                className='nameText  text-wrap'
                                // style={{
                                //   flexDirection: "column",
                                //   flexWrap: "wrap",
                                // }}
                              >
                                {this.state.fullname}
                                <br />
                                <span
                                  className='text-muted ms-1'
                                  style={{
                                    fontSize: 14,
                                    fontFamily: "SF light",
                                    marginLeft: 125,
                                    // marginTop: -40,
                                  }}
                                >
                                  View Profile
                                </span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <Link
                            class='row '
                            // href="/GenaeralInfo"
                            to='/Profile/General'
                            renderAs='button'
                          >
                            <RiEdit2Fill
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>Edit Profile</p>
                          </Link>
                        </li>
                        <li>
                          <a class='row ' href='#'>
                            <MdFlashOn
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>Activity</p>
                          </a>
                        </li>
                        <li>
                          <a class='row ' href='#'>
                            <MdAssignment
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>Portfolio</p>
                          </a>
                        </li>

                        <hr class='dropdown-divider profileHr' />

                        <li>
                          <a class='row ' href='#'>
                            <MdInfoOutline
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>About Us</p>
                          </a>
                        </li>
                        <li>
                          <a class='row ' href='#'>
                            <MdSettings
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-9'>Account setting</p>
                          </a>
                        </li>
                        <li>
                          <a class='row ' href='#'>
                            <MdPermPhoneMsg
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>Contact Us</p>
                          </a>
                        </li>

                        <hr class='dropdown-divider profileHr' />

                        <li>
                          <Link class='row ' href='#' onClick={this.handleLogout}>
                            <FiLogOut
                              color='red'
                              className='col-3 mt-1 ms-2'
                              animation='tada'
                              size='18px'
                              pull='left'
                            />
                            <p className='col-7'>Log Out</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default AuthNav;
