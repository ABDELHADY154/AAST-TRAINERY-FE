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

<img
                className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
                id='imgicon'
                src={this.props.company_logo}
              />
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
            {this.props.post_type === "adsPost" ? (
              <div>
                <img
                  className=' mt-0 d-flex flex-column col-md-6 col-2 me-1'
                  id='imgicon'
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

            {/* <img
              className=' mt-0 d-flex flex-column col-md-1 col-2 me-1'
              id='imgicon'
              src={this.props.sponsor_image}
            /> */}
            <div className='d-flex flex-row flex-wrap ww'>
              <div className='s  align-middle '>
                <div className='d-block me-4 mb-1 col-6  col-md-12 ' id=''>
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
                  id='drop'
                  className='d-flex flex-column   text-center
                              text-center  col-3'
                >
                  <div className='d-flex flex-row flex-wrap'>
                    {this.props.application_deadline
                      ? "Deadline " + this.props.application_deadline
                      : ""}
                  </div>
                </div>
                <div
                  className='d-flex flex-column   text-center
 col-md-auto text-center'
                >
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
