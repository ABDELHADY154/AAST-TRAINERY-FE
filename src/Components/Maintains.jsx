/** @format */

import React from "react";
import logo from "../Components/assests/imgs/logo.png";
import "../layout/Maintains.css";
class Maintains extends React.Component {
  render() {
    return (
      <div>
        <form className='d-flex col-12'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </form>
        <img className='img  mx-auto ' src={logo} alt=''></img>
        <h1 className='text-center m1'>Website is Under Construction</h1>
        <p className='stext text-center'>Currently working hard on this site</p>
        <p className='text-center stext'>
          If you want to contact us in the meantime please don’t hesitate to
          reach us
          <br /> out at
          <span className='text-warning '> admin@aast-trainery.com</span>
        </p>
        <button type='button' className='btn btn-outline-primary mt p3'>
          Back
        </button>
      </div>
    );
  }
}
export default Maintains;
