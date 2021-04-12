import React, { Component } from "react";
import { resolve } from "../../Api/Resolvers/resolver";
import { axios } from "../../Api/axios";
import { Loader } from "../../loader";
import img from "../../Components/assests/imgs/girlavi.png";
import MaleAvatar from "../../Components/assests/imgs/boyavi.png";
import img2 from "../../Components/assests/imgs/cib.png";
import img3 from "../../Components/assests/imgs/cibExplore.png";
import "../../layout/Home.css";
import { BsCheck, BsArrowUpRight } from "react-icons/bs";

import "react-step-progress-bar/styles.css";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../layout/Explore.css";

export class Ecard extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      loading: false,
      token: sessionStorage.getItem("token"),
    };
  }
  componentDidMount() {
    // this.props.senddata.map((data) => {
    //   //   console.log(data);
    // this.setState({
    //   advisor: this.props.advisor,
    // });
    // });
  }
  render() {
    return (
      <div>
        <div className='card '>
          <div className='card-body mb-4'>
            {this.props.advisor.map((x) => {
              return x ? (
                <div className=''>
                  <div className='d-flex flex-row justify-content-between'>
                    <div className='d-flex'>
                      <img
                        className=' mt-0 d-flex flex-column col-md-4 col-2 me-3'
                        id='imgicon'
                        src={x !== "null" ? x.image : ""}
                      />
                      <p id='' className='card-title fs-5 mt-2'>
                        {x.name}{" "}
                      </p>
                    </div>

                    <div className='d-flex flex-row-reverse'>
                      <div class='gray'>2 min ago</div>
                    </div>
                  </div>

                  <hr />
                </div>
              ) : (
                ""
              );
            })}

            <div className='d-flex flex-row'>
              <img
                className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                id='imgicon'
                src={this.props.company_logo}
              />
              <div className=' fs-5 mt-2 ms-2 col-md-10 col-8'>{this.props.title}</div>
              <div id='goldtab' className=' fs-6 mt-2  col-2 col-md-1'>
                {this.props.salary ? this.props.salary : ""}
              </div>
            </div>
            <div id='job' className='d-flex flex-row py-2 ms-5'>
              <div className='d-flex ms-3 flex-column'>{this.props.company_name}</div>
              <div id='gold' className='d-flex ms-2 flex-row'>
                {this.props.departments
                  ? this.props.departments.map((x) => {
                      return (
                        <div id='gold ' className='d-inline mx-1 goldenn' key={x.id}>
                          {x.dep_name}
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
            <p className='card-text mt-2'>{this.props.description}</p>
            <div className='d-flex flex-row flex-wrap ww'>
              <div className='s  align-middle h-100'>
                <div className='d-flex flex-row me-4 mb-1 col-12  col-md-1' id=''>
                  {this.props.tags
                    ? this.props.tags.map((x, i) => {
                        return (
                          <a
                            href='#'
                            className='  m-1 m-md-2 p-0 p-md-1 text-center d-flex'
                            id='tagsipad'
                          >
                            {x.interest ? x.interest : ""}
                          </a>
                        );
                      })
                    : ""}
                </div>
                <div
                  id='drop'
                  className='d-flex flex-column   text-center
                              col-md-auto text-center'
                >
                  <div className='align-self-center d-flex align-items-center my-3 p-1 text-center'>
                    {this.props.application_deadline}
                  </div>
                </div>
                <div
                  className='d-flex flex-column   text-center
 col-md-auto text-center'
                >
                  {this.props.post_type == "promotedPost" ? (
                    <div className='align-self-center d-flex align-items-center my-2 p-1 text-center'>
                      <BsArrowUpRight
                        className='m-2'
                        color='#cd8930'
                        fill='#cd8930'
                        size={20}
                      />
                      <p id='gold' className='m-1'>
                        Promoted
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className='  d-flex flex-row col-12 col-md-4 justify-content-end btnmovement'>
                {/* <div className="col-md-4"></div> */}
                <BsBookmark
                  id='BsBookmark'
                  color='#1e4274'
                  className='fs-2 align-self-center mb-5  col-md-2 col-4'
                  path='0px'
                />
                <button className='applyBtn px-1 py-0 col-md-3 col-8'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecard;
