import React from "react";
import logo from "../Components/assests/imgs/logo.png";
import error from "../Components/assests/imgs/error.png";
import "../layout/ErrorPage.css";
import { MdWarning } from "react-icons/md";

class ErrorPage extends React.Component {
  componentDidMount() {
    var nav = document.getElementsByClassName("navBottom")[0].remove(nav);
  }
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar '>
          <a className='navbar-brand' href='#'>
            <img
              src={logo}
              alt=''
              width='200'
              height='38'
              className=' d-inline-block align-top img-fluid logo'
            />
          </a>
        </nav>
        <div className='content d-flex flex-column flex-lg-row justify-content-Center'>
          <div className='col-lg-6 col-12 errolCol'>
            <div className='d-flex justify-content-center align-items-center'>
              <h1 className='Four'>4</h1>
              <MdWarning className='Warning mb-2' />
              <h1 className='Four'>4</h1>
            </div>
            <p className='text '>
              We’re not quite sure what went wrong. You can
              <span className='link'> Go Back </span>, or try looking on our
              <span className='link'> Help Center </span> if you need a hand.
            </p>
          </div>
          <div className='col'></div>
          <img src={error} alt='' class=' col-lg-4 col-12  ' />
        </div>
      </div>
    );
  }
}
export default ErrorPage;
