import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Profile.css";
import img2 from "../../../Components/assests/imgs/cib.png";

export default class studentReviews extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="flex-row d-flex ">
                <div className="d-flex flex-column col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row">
                        <img
                          className=" mt-0 d-flex flex-column col-md-1 col-2 me-1"
                          // id="imgicon"
                          src={img2}
                        />
                        <div className=" fs-5 mt-2 ms-2 col-md-10 col-8">
                          UI/UX Designer
                        </div>
                      </div>
                      <div id="job" className="d-flex flex-row ms-5 ">
                        <div className="d-flex ms-3 flex-column">CIB</div>
                      </div>
                      <p className="card-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam repudiandae aut possimus. Repellendus at nostrum
                        iste doloremque. Ea omnis ipsam, eum nam tempore culpa
                        illum consequuntur quis nobis adipisci et?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item active">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
