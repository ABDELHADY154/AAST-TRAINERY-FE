import React from "react";
import { axios } from "../../Api/axios";

import { Redirect } from "react-router-dom";
import Caro from "./Caro";
import Footer from "../Footer";
import img from "./bg (2).png";
import img1 from "./Rectangle1.png";
import img2 from "./Rectangle2.png";
import img3 from "./Rectangle3.png";
import img4 from "./2.png";
import google from "./google.png";
import apple from "./apple.png";
import { Loader } from "../../loader";

import { FaCheck } from "react-icons/fa";
import { Component } from "react";

class Landing extends React.Component {
  state = {
    loading: false,
  };

  async componentDidMount() {
    await axios.get("/W/landingCount").then((data) => {
      this.setState({
        loading: true,
        students: data.data.response.data.students,
        opportunities: data.data.response.data.opportunities,
        applied: data.data.response.data.applied,
      });
      console.log(data.data.response.data);
    });
  }
  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return (
        <div className='test'>
          <Caro />
          <div className='container-fluid'>
            <div className=' d-flex row '>
              <div className='m-auto p-5 col-xs-12 col-sm-12 col-md-7 .col-lg-5 container w-100'>
                <h1 className='header m-auto respo'>We Provide The Best Experience</h1>
                <p className='pw'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
                  dictumst nisi blandit ornare viverra eleifend Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Consectetur dictumst nisi blandit
                  ornare viverra eleifend
                </p>
                <div className='row text-center infoApi col-7 mt-5 col-xs-12 col-sm-2 col-md-5'>
                  {this.state.loading === false ? (
                    <Loader />
                  ) : (
                    <div>
                      <div className='mr-5 pr-5'>
                        <p>{this.state.opportunities}</p>
                        <p className='text-left'> Opportunity</p>
                      </div>
                      <div className='mr-5 pr-5'>
                        <p>{this.state.students}</p>
                        <p className='text-left'>Student</p>
                      </div>
                      <div className='mr-5  pr-5'>
                        <p>{this.state.applied}</p>
                        <p className='text-left'>Accpected</p>
                      </div>
                    </div>
                  )}

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
            <div className='justify-content-between m-5 p-5 col-sm-12 col-md-12 container-fluid respo'>
              <h1 className='header m-auto text-left respo'>Career Coaching Guidance</h1>
              <p className='w-100 pw text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis
                morbi sagittis donec sed massa. Velit malesuada amet pretium turpis in
                commodo aliquet pulvinar ultrices.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut dolor quis morbi sagittis donec sed massa. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi sagittis
                donec sed massa. Velit malesuada amet pretium turpis in commodo aliquet
                pulvinar ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut dolor quis morbi sagittis donec sed massa.
              </p>
            </div>
            <div className='row m-auto d-flex justify-content-center'>
              <div className=' mt-4'>
                <div className='card m-2'>
                  <img className='cardImg' src={img1} height='200' />
                  <div className='carousel-caption2'>
                    <h5 className='textt'>CV writing Coaching</h5>
                  </div>
                </div>
              </div>
              <div className=' mt-4 '>
                <div className=' card m-2'>
                  <img className='cardImg' src={img2} height='200' />
                  <div className='carousel-caption2'>
                    <h5 className='textt'>Interview Coaching</h5>
                  </div>
                </div>
              </div>
              <div className=' mt-4'>
                <div className=' card m-2'>
                  <img className='cardImg' src={img3} height='200' />
                  <div className='carousel-caption2'>
                    <h5 className='textt '> Coaching Coaching Path</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='prim border' />

          <div className=' d-flex row'>
            <div className='row '>
              <div className='justify-content-between m-5 p-5 container'>
                <h1 className='header  respo mb-5'>Why Join Us ? </h1>
                <p className='text pw'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis
                  morbi sagittis donec sed massa.
                </p>
                <ul class='container column li '>
                  <li class='flex-item   row'>
                    <p className='col-xs-12 text respo'>
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
                  <li class='text-center row'>
                    <p className='col-xs-12 text d-inline w-100'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='d-flex m-auto w-100 store row m-auto d-flex justify-content-center'>
                      <img src={google} className='m-3 cardImg2' />
                      <img src={apple} className='m-3 cardImg2' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6 col-lg-4 d-flex justify-content-end ml-auto'>
              <img
                src={img4}
                className='rounded mt-5 pw imgbook m-auto'
                height='500'
                width='750'
              />
            </div>
          </div>
          <div className='justify-content-between m-5 p-5 col-sm-12 col-md-12 container-fluid respo'>
            <h1 className='header-seco m-auto text-left respo seco'>
              Over 1000+ Opportunity just for students
            </h1>
            <p className='w-100 pw text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, laoreet elit
              habitasse vitae ultrices feugiat. Quis semper tortor malesuada Eros, laoreet
              elit habitasse vitae ultrices feugiat. Quis semper tortor malesuada
            </p>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default Landing;
