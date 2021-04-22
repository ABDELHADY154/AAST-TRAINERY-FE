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
      <div className='col-md-6 col-12  '>
        <div className='d-flex col-12  '>
          <div className='m-1 nocard align-self-start d-flex  '>
            <div className='card-body none  m-auto '>
              {this.props.advisor.map((x) => {
                return x ? (
                  <div className='flex-container'>
                    <div className='d-flex  justify-content-between'>
                      <div className='d-flex'>
                        <img
                          className='  mt-0 d-flex flex-column col-md-4 col-4  adslogo  complogo'
                          src={x !== "null" ? x.image : ""}
                        />
                        <p id='' className='card-title fs-6 mt-2 mx-2'>
                          {x.name}{" "}
                        </p>
                      </div>

                      <div className='d-flex flex-row-reverse ms-auto  align-items-center col-md-6 col-2'>
                        <div class='gray '>2 min ago</div>
                      </div>
                    </div>

                    <hr />
                  </div>
                ) : (
                  ""
                );
              })}
              <div className='d-flex flex-row justify-content-between'>
                <img
                  className='col-md-2 col-4 me-1  adslogo complogo'
                  src={this.props.company_logo}
                />

                <div className='card-title align-self-center fs-6 mt-2 mx-1 col-md-6 col-5 d-flex   align-items-center'>
                  {this.props.post_type === "adsPost"
                    ? this.props.company_name
                    : this.props.title}
                </div>

                <div
                  id='goldtab'
                  className=' d-flex flex-row-reverse  align-items-center col-md-2 col-2 '
                >
                  {this.props.salary ? this.props.salary : ""}
                </div>
              </div>
              {/* <div className='pt-2'> */}
              <div className='d-flex   col-md-12 col-5 hidee flex-warp'>
                <div className='card-title fs-6  align-self-center col-md-3 col-12 '>
                  {this.props.post_type === "adsPost" ? "" : this.props.company_name}
                </div>{" "}
                <div className=' d-block d-md-inline-flex '>
                  {this.props.departments
                    ? this.props.departments.map((x) => {
                        return (
                          <div id='gold' className='d-flex m-2' key={x.id}>
                            {x.dep_name + " "}
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
                    className=' mt-0 d-flex flex-column col-md-12 col-11 me-1  adspic'
                    src={this.props.sponsor_image}
                  />
                  <div className='d-flex flex-row flex-nowrap smallres'>
                    <div
                      id='promoted'
                      className='  d-flex flex-row col-12 col-md-2 fs-5 mt-3'
                    >
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
              <div
                className='d-flex flex-row  justify-content-between smallres align-items-end mt-4 '
                id='bottom'
              >
                <div className='d-flex  flex-wrap col-6 col-md-3 '>
                  {this.props.application_deadline
                    ? "Deadline " + this.props.application_deadline
                    : ""}
                </div>
                {this.props.post_type == "promotedPost" ? (
                  <div className='d-flex  flex-wrap promotedPost me-auto '>
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
                {this.props.post_type !== "adsPost" ? (
                  <div className='flex-row '>
                    <div
                      className=' d-flex flex-row-end   col-md-auto  justify-content-end align-self-end align-items-end
                  '
                    >
                      {/* <div className="col-md-4"></div> */}
                      <BsBookmark
                        id='BsBookmark'
                        color='#1e4274'
                        className=' col-md-2 col-3'
                        size={30}
                      />
                      <button className='applyBtn px-1 py-0 col-md-5 col-8'>Apply</button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecard;
