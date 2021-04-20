import React, { Component } from "react";

import { BsArrowUpRight, BsBookmark } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";

import "react-step-progress-bar/styles.css";
import "../../layout/Explore.css";
import "../../layout/Home.css";

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
      <div className='d-contents'>
        <div className='col-md-6' id='tabcontainer'>
          <div className='card'>
            <div className='card-body'>
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
                <div className=' fs-5 ms-2 col-md-10 col-8'>{this.props.title}</div>
                <div id='goldtab' className=' fs-6 mt-2  col-2 col-md-1 m-0'>
                  {this.props.salary ? this.props.salary : ""}
                </div>
              </div>
              <div id='job' className='d-flex flex-row ms-5 '>
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
              {this.props.post_type === "adsPost" ? (
                <div>
                  <img
                    className=' mt-0 d-flex flex-column col-md-6 col-2 me-1 w-100'
                    height='200'
                    src={this.props.sponsor_image}
                  />
                  <div className='d-flex flex-row flex-nowrap smallres'>
                    <div id='promoted' className='  d-flex flex-row col-12 col-md-2 fs-5'>
                      <RiAdvertisementLine className='me-2 fs-3' fill='#cd8930' />
                      <p id='gold'>ADS</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className='me-4 mb-1 col-12  col-md-12'>
                {this.props.tags
                  ? this.props.tags.map((x, i) => {
                      return (
                        <a
                          href='#'
                          className=' broker-tag ms-1 d-inline-block'
                          id='tagsipad'
                        >
                          {x.interest ? x.interest : ""}
                        </a>
                      );
                    })
                  : ""}
              </div>
              <div className='d-flex flex-row flex-nowrap smallres mt-4'>
                <div className='d-flex flex-row flex-wrap col-6 col-md-3'>
                  {this.props.application_deadline
                    ? "Deadline " + this.props.application_deadline
                    : ""}
                </div>
                <div className=''>
                  {this.props.post_type == "promotedPost" ? (
                    <div className='d-flex flex-row flex-wrap promotedPost'>
                      <BsArrowUpRight
                        className='m-0 '
                        color='#cd8930'
                        fill='#cd8930'
                        size={20}
                      />
                      <p id='gold' className='m-0'>
                        Promoted
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className=''>
                  {" "}
                  <div className=' d-flex flex-row-end'>
                    {/* <div className="col-md-4"></div> */}
                    <BsBookmark
                      id='BsBookmark'
                      color='#1e4274'
                      className='fs-2  col-md-9 col-8'
                      path='0px'
                    />
                    <button className='applyBtn px-1 py-0 col-md-12 col-8'>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecard;
