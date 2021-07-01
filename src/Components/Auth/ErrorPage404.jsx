import React from "react";
import logo from "../../Components/assests/imgs/logo.png";
import error from "../../Components/assests/imgs/error.png";
import "../../layout/ErrorPage.css";
import { MdWarning } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fallback: true,
    };
  }

  componentDidMount() {
    if (this.props.fallbackVal === false) {
      this.props.fallback(this.state.fallback);
      this.setState({ fallback: this.props.fallbackVal });
    }
  }
  handlemove = () => {
    this.props.fallback(false);
  };
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar ">
          <Link
            className="navbar-brand mx-2"
            renderAs="button"
            to="/Home"
            onClick={this.handlemove}
          >
            <img
              className="navbar-brand profileImage"
              src={logo}
              width="170"
              alt=""
            ></img>
          </Link>
        </nav>
        <div className="content d-flex flex-column flex-lg-row justify-content-Center">
          <div className="col-lg-6 col-12 errolCol">
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="Four">4</h1>
              <MdWarning className="Warning mb-2" />
              <h1 className="Four">4</h1>
            </div>
            <p className="text ">
              We’re not quite sure what went wrong. You can
              <span className="link"> Go Back </span>, or try looking on our
              <Link to="/helpCenter">
                <span className="link"> {"  "} Help Center</span>{" "}
              </Link>
              if you need a hand.
            </p>
          </div>
          <div className="col"></div>
          <img src={error} alt="" class=" col-lg-4 col-12  " />
        </div>
      </div>
    );
  }
}
export default ErrorPage;
