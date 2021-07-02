import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Components/assests/icons/Main-Logo.png";
import { AvatarLoader } from "../../loader";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
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
      active: false,
      fallback: "",
      notifications: [],
    };

    if (this.state.token) {
      this.setState({ loading: true });
    }
  }
  handleLogout = () => {
    sessionStorage.clear("token");
    sessionStorage.clear("status");
    this.props.setUser(false);
  };
handleNotifications = async (e) => {
e.preventDefault();
      await axios
  .get("/W/student/notifications")
  .then((res) => {
    this.setState({
      notifications: res.data.response.data,
    });
  })
  .catch((err) => {
    console.log(err);
  });
}
  componentDidMount = async () => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + sessionStorage.getItem("token");

    await resolve(
      axios
        .get("/W/studentImg")
        .then((res) => {
          if (res.status === 200) {
            this.setState({
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
    await axios
  .get("/W/student/notifications")
  .then((res) => {
    this.setState({
      notifications: res.data.response.data,
    });


  })
  .catch((err) => {
    console.log(err);
  });

    if (this.props.fallbackVal) {
      this.props.fallback(true);
      this.setState({ fallback: this.props.fallbackVal });
    }
    if (this.props.updated == true) {
      // window.location.reload(true);
      // return this.setState({ user: true });
    } else {
      // console.log("11");
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
      <div className="">
        {this.state.fallback == true ? (
          ""
        ) : (
          <div className="navBottom pb-1">
            <nav className="navbar navbar-expand-lg navBg fixed-top">
              <div className="container ">
                <Link
                  className="navbar-brand mx-2"
                  renderAs="button"
                  to="/Home"
                  alt="AAST Trainery Logo"
                >
                  <img
                    alt="AAST Trainery Logo"
                    className="navbar-brand profileImage"
                    src={logo}
                    width="170"
                  ></img>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse flex-sm-row d-inherit  flex-column-reverse"
                  id="navbarScroll"
                >
                  <ul className="navbar-nav mt-1">
                    <li className="nav-item ">
                      <NavLink
                        to="/faq"
                        activeClassName="navActive"
                        className="nav-link item navPage mt-2 "
                        to="/Explore"
                      >
                        Explore
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to="/faq"
                        activeClassName="navActive"
                        className="nav-link item navPage mt-2 "
                        to="/CareerCoaching"
                      >
                        Career Coaching
                      </NavLink>
                    </li>
                  </ul>
            
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarScroll"
                  >
                    <ul className="nav my-1 mx-3 col-auto  dropstart justify-content-end">
                      <div className="justify-self-end">
                        <a className="nav-item item col-6 " href="#">
                          <a
                            className="dropdown"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <IoIosNotificationsOutline
                              alt="notifications"
                              value={{
                                color: "#007BC2",
                                className: "global-class-name mt-0",

                              }}

                              className="noti mt-2 d-inline-block"
                              id="not"
                            />
                          </a>
                          <ul
                            className="dropdown-menu notificationMenu col-sm-12 col-md-6"
                            lass="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            <p className="text-center  mb-2 notificationTitle ">
                              Notications
                              <AiOutlineReload className="mx-md-2 float-end icon-refresh icon-spin" onClick={this.handleNotifications}                                
/>
                            </p>

                            {this.state.notifications.length !== 0
                              ? this.state.notifications.map((e) => {
                                  if (e.category == "rejected") {
                                    return (
                                  // 
                                      <Link to={e.type == "internship" ? `/Opportunity/${e.id}`: e.type == "session" ? `/CareerCoaching/Advising/${e.session.id}` :""} key={e.id}> 
                                      <RejectCard
                                        id={e.id}
                                        key={e.id}
                                        data={e}
                                      /></Link>
                                    );
                                  } else if (e.category == "success") {
                                    return (
                                      <Link to={e.type == "internship" ? `/Opportunity/${e.id}`: e.type == "session" ? `/CareerCoaching/Advising/${e.session.id}` :""} key={e.id}> 

                                      <AcceptedCard
                                        id={e.id}
                                        key={e.id}
                                        data={e}
                                      /></Link>
                                    );
                                  } else if (e.category == "important") {
                                    return (        <Link to={e.type == "internship" ? `/Opportunity/${e.id}`: e.type == "session" ? `/CareerCoaching/Advising/${e.session.id}` :""} key={e.id}> 

                                      <ImportantCard
                                        id={e.id}
                                        key={e.id}
                                        data={e}
                                      /></Link>
                                    );
                                  }
                                })
                              : ""}
                     
                          </ul>
                        </a>
                        {/* profile */}
                        <div class="btn-group ">
                          <a
                            type="button"
                            class=" dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {this.state.avatar ? (
                              <img
                                src={this.state.avatar}
                                alt="Avatar"
                                width="40"
                                height="40"
                                className="avatar"
                                role="menuitem"
                              />
                            ) : (
                              <AvatarLoader />
                            )}
                          </a>
                          <ul class="dropdown-menu profileMenu ">
                            <li className="row profileHeader d-flex justify-content-center invs">
                              <a
                                class="dropdown-item d-flex flex-row invs"
                                href="/Profile"
                                style={{
                                  fontSize: 18,
                                  fontFamily: "SF med",
                                  color: " #1e4274",
                                }}
                              >
                                <div className="col-4">
                                  {this.state.avatar ? (
                                    <img
                                      src={this.state.avatar}
                                      alt="Avatar"
                                      width="40"
                                      height="40"
                                      className="avatar me-2"
                                      role="menuitem"
                                    />
                                  ) : (
                                    <AvatarLoader />
                                  )}
                                </div>
                                <div className="col-10">
                                  <span
                                    className="nameText  text-wrap"
                                    style={{ textTransform: "capitalize" }}
                                    // style={{
                                    //   flexDirection: "column",
                                    //   flexWrap: "wrap",
                                    // }}
                                  >
                                    {this.state.fullname}
                                    <br />
                                    <span
                                      className="text-muted ms-1"
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
                                class="row "
                                // href="/GenaeralInfo"
                                to="/Profile/General"
                                renderAs="button"
                              >
                                <RiEdit2Fill
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">Edit Profile</p>
                              </Link>
                            </li>
                            <li>
                              <Link to="/Profile/Activity/Applied" class="row">
                                <MdFlashOn
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">Activity</p>
                              </Link>
                            </li>
                            <li>
                              <Link class="row " to="/Cv-Portfolio">
                                <MdAssignment
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">Portfolio</p>
                              </Link>
                            </li>

                            <hr class="dropdown-divider profileHr invs" />

                            <li>
                              <Link
                                class="row "
                                to="/AboutUs"
                                renderAs="button"
                              >
                                <MdInfoOutline
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">About Us</p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                class="row "
                                to="/Setting"
                                renderAs="button"
                              >
                                <MdSettings
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-9">Account settings</p>
                              </Link>
                            </li>

                            <li>
                              <Link
                                class="row "
                                to="/contactUs"
                                renderAs="button"
                              >
                                <MdPermPhoneMsg
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">Contact Us</p>
                              </Link>
                            </li>

                            <hr class="dropdown-divider profileHr invs" />

                            <li>
                              <Link
                                class="row "
                                href="#"
                                onClick={this.handleLogout}
                              >
                                <FiLogOut
                                  color="red"
                                  className="col-3 mt-1 ms-2"
                                  animation="tada"
                                  size="18px"
                                  pull="left"
                                />
                                <p className="col-7">Log Out</p>
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
        )}
      </div>
    );
  }
}
export default AuthNav;

class RejectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="alert itemAlert " role="alert">
        <div className=" row NoticationContent ">
          <div className="row col-2 notificationStyle d-flex align-items-center justify-content-center">
            <div
              class="alertLine "
              style={{
                backgroundColor: "#f44336",
              }}
            >
              <AiOutlineWarning
                style={{ fill: "red" }}
                // color="#F44336"
                className="notificationIcon me-1 ms-2 d-flex align-items-center justify-content-center"
                animation="tada"
                size="18px"
                pull="left"
              />
            </div>
          </div>

          <div className="notificationText col-10 mt-1 fw-bold">
            <h4 className=" fw-bold  ">
              {this.props.data.type == "internship"
                ? this.props.data.internship.title
                : this.props.data.session.title}
            </h4>
            <h4 className="text-wrap  ">{this.props.data.message} </h4>
            <h5
              className=""
              style={{
                marginBottom: 0,
                paddingBottom: 0,
              }}
            >
              Tap for more information
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
class ImportantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="alert itemAlert " role="alert">
        <div className=" row NoticationContent ">
          <div className="row col-2 notificationStyle d-flex align-items-center justify-content-center">
            <div
              class="alertLine "
              style={{
                backgroundColor: "#007BC2",
              }}
            >
              <MdInfoOutline
                style={{ fill: "#007BC2" }} // color="red"
                className="notificationIcon me-1 ms-2 d-flex align-items-center justify-content-center"
                animation="tada"
                size="18px"
                pull="left"
              />
            </div>
          </div>

          <div className="notificationText col-10 mt-2">
            <h4 className="   fw-bold">
              {" "}
              {this.props.data.type == "internship"
                ? this.props.data.internship.title
                : this.props.data.session.title}
            </h4>
            <h4 className="text-wrap  "> {this.props.data.message}</h4>
            <h5 className="">Tap for more information</h5>
          </div>
        </div>
      </div>
    );
  }
}

class AcceptedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="alert itemAlert " role="alert">
        <div className=" row NoticationContent ">
          <div className="row col-2 notificationStyle d-flex align-items-center justify-content-center">
            <div
              class="alertLine "
              style={{
                backgroundColor: "#4CAF50",
              }}
            >
              <AiOutlineCheckCircle
                style={{ fill: "#4CAF50" }}
                // color="green"
                className="notificationIcon me-1 ms-2 d-flex align-items-center justify-content-center"
                animation="tada"
                size="18px"
                pull="left"
              />
            </div>
          </div>

          <div className="notificationText col-10 ">
            <h4 className="   fw-bold">
              {" "}
              {this.props.data.type == "internship"
                ? this.props.data.internship.title
                : this.props.data.session.title}
            </h4>
            <h4 className=" text-wrap "> {this.props.data.message}</h4>
            <h5 className="">Tap for more information</h5>
          </div>
        </div>
      </div>
    );
  }
}
