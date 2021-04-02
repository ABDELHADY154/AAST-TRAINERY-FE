import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img3 from "../assests/imgs/coach3.jpg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../../layout/CareerCoaching.css";

export default class CoachCaro extends Component {
  render() {
    var settings = {
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      pauseOnHover: true,
      // fade: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="mt-5 justify-content-center ms-3">
        <Slider {...settings}>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="containerrr col-md-12 col-12">
            {" "}
            <img
              src={img3}
              id="imagehoverr"
              className="d-flex flex-column col-md-3 col-12 rounded "
            />
            <div className="overlay " id="overlayy">
              <a
                id="linksss"
                href="#"
                className="textttt fs-4 mt-5  col-12 col-md-12 "
              >
                Micheal 1{/* {this.state.coach_name} */}
                <br />
                <span className="textttt fs-6 col-12 mt-3  col-md-12 ">
                  CEO at Nobels CO. 1
                  {/* {this.state.job_title} at {this.state.company_name} */}
                </span>
              </a>

              <div className="mt-3 socialscoach">
                <li>
                  <a href="#">
                    <FaFacebookF
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaLinkedinIn
                      color="#ffffff"
                      fill="#ffffff"
                      className="m-2"
                    />
                  </a>
                  <a href="#">
                    <FaYoutube color="#ffffff" fill="#ffffff" className="m-2" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import img1 from "../assests/imgs/coach1.jpg";
// import img2 from "../assests/imgs/coach2.jpg";
// import img3 from "../assests/imgs/coach3.jpg";
// import React, { Component } from "react";
// import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import "../../layout/CareerCoaching.css";

// export default class CoachCaro extends Component {
//   render() {
//     return (
//       <>
//         <Carousel
//           id="CoachCaro"
//           axis="horizontal"
//           autoFocus={false}
//           autoPlay={true}
//           dynamicHeight={false}
//           infiniteLoop={true}
//           swipeable={true}
//           renderIndicator={false}
//           stopOnHover={true}
//           width="100%"
//           height="100%"
//           verticalSwipe="natural"
//         >
//           <div
//             // id="CoachCaro"
//             className="d-flex  flex-row mt-3 col-md-12 col-12"
//           >
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img3}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 mt-2 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img3}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 mt-2 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img3}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 mt-2 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img3}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 mt-2 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex  flex-row mt-3 col-md-12 col-12">
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img1}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img1}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img1}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="containerrr">
//               {" "}
//               <img
//                 src={img1}
//                 id="imagehoverr"
//                 className="d-flex flex-column col-md-3 col-12 rounded "
//               />
//               <div class="overlay" id="overlayy">
//                 <a
//                   id="linksss"
//                   href="#"
//                   class="textttt fs-5 mt-0 mt-2 col-12 col-md-12 "
//                 >
//                   Micheal Hanna
//                   {/* {this.state.coach_name} */}
//                   <br />
//                   <span class="textttt fs-6 col-12 col-md-12 mt-4">
//                     CEO at Nobels CO.
//                     {/* {this.state.job_title} at {this.state.company_name} */}
//                   </span>
//                 </a>

//                 <div className="mt-3 ">
//                   <li>
//                     <a href="#">
//                       <FaFacebookF
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaLinkedinIn
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                     <a href="#">
//                       <FaYoutube
//                         color="#ffffff"
//                         fill="#ffffff"
//                         className="m-2"
//                       />
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Carousel>
//       </>
//     );
//   }
// }

// // ReactDOM.render(<CoachCaro />, document.querySelector(".CoachCaro"));

// // Don't forget to include the css in your page

// // Using webpack or parcel with a style loader
// // import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
