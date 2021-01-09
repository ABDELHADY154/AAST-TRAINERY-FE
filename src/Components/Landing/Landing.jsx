/** @format */

import React from "react";
import { Redirect } from "react-router-dom";
import Caro from "./Caro";
import img from "./bg (2).png";
import img1 from "./Rectangle1.png";
import img2 from "./Rectangle2.png";
import img3 from "./Rectangle3.png";
import img4 from "./2.png";
import { FaCheck } from "react-icons/fa";

class Landing extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className=''>
          <Caro />
          <div className='container-fluid'>
            <div className=' d-flex row'>
              <div className='m-auto p-5 col-xs-12 col-sm-5 col-md-5 .col-lg-5 container w-100'>
                <h1 className='header m-auto'>
                  We Provide The Best Experience
                </h1>
                <p className='pw'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur dictumst nisi blandit ornare viverra eleifend
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur dictumst nisi blandit ornare viverra eleifend
                </p>
                <div className='row text-center infoApi col-7 mt-5 col-xs-12 col-sm-2 col-md-5'>
                  <div className='mr-5 pr-5'>
                    <p>500</p>
                    <p className='text-left'> Opportunity</p>
                  </div>
                  <div className='mr-5 pr-5'>
                    <p> 500</p>
                    <p className='text-left'>Student</p>
                  </div>
                  <div className='mr-5  pr-5'>
                    <p>500</p>
                    <p className='text-left'>Accpected</p>
                  </div>
                </div>
              </div>

              <img
                src={img}
                className='rounded col-4 col-sm-4  mt-5 ml-auto justify-content-between sms p-0 w-100'
                height='360'
                width='606'
              />
            </div>
            <hr className='prim border' />
            <div className='justify-content-between m-5 p-5 col-sm-12 col-md-12 container'>
              <h1 className='header m-auto text-left'>
                Career Coaching Guidance
              </h1>
              <p className='w-100 pw text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor quis morbi sagittis donec sed massa. Velit malesuada amet
                pretium turpis in commodo aliquet pulvinar ultrices.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi
                sagittis donec sed massa. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut dolor quis morbi sagittis donec
                sed massa. Velit malesuada amet pretium turpis in commodo
                aliquet pulvinar ultrices.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut dolor quis morbi sagittis donec
                sed massa.
              </p>
              <div className='row m-auto d-flex justify-content-center'>
                <div className=' mt-4'>
                  <div className='card'>
                    <img src={img1} height='200' />
                    <div className='carousel-caption1'>
                      <h5 className='textt'>CV writing Coaching</h5>
                    </div>
                  </div>
                </div>
                <div className=' mt-4'>
                  <div className='card'>
                    <img src={img2} height='200' />
                    <div className='carousel-caption1'>
                      <h5 className='textt'>Interview Coaching</h5>
                    </div>
                  </div>
                </div>
                <div className=' mt-4'>
                  <div className='card'>
                    <img src={img3} height='200' />
                    <div className='carousel-caption1'>
                      <h5 className='textt'> Coaching Coaching Path</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='prim border' />

          <div className=' d-flex row'>
            <div className='row '>
              <div className='justify-content-between m-5 p-5  container'>
                <h1 className='header m-auto'>Why Join Us ? </h1>
                <p className='text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  dolor quis morbi sagittis donec sed massa.
                </p>
                <ul class='container column li '>
                  <li class='flex-item   row'>
                    <p className='col-xs-12 text'>
                      <FaCheck className='seco mr-4' />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                  <li class='flex-item  row'>
                    <p className='col-xs-12 text'>
                      <FaCheck className='seco mr-4' />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                  <li class='flex-item   row'>
                    <p className='col-xs-12 text d-inline w-100'>
                      <FaCheck className='seco mr-4' />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6 col-lg-4 d-flex justify-content-end ml-auto'>
              <img
                src={img4}
                className='rounded mt-5 pw'
                height='500'
                width='750'
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Landing;
