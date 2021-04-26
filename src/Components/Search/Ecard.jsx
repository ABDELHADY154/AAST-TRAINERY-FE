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
  componentDidMount() {}
  render() {
    return (
      <div className="col-md-6 col-12 align-self-center  ">
        <div className="d-flex col-12  ">
          <div className="m-3 nocard align-self-start d-flex  ">
            <div className="card-body none  m-auto ">
              {this.props.advisor.map((x) => {
                return x ? (
                  <div className="flex-container">
                    <div className="d-flex  justify-content-between">
                      <div className="d-flex">
                        <img
                          className=" mt-0 d-flex flex-row  col-md-1 col-2 me-1 rounded"
                          id="imgicon"
                          src={x !== "null" ? x.image : ""}
                        />

                        <p id="" className="card-title fs-6 mt-2 ">
                          {x.name}{" "}
                        </p>
                      </div>

                      {/* <div className="d-flex flex-row-reverse ms-auto  align-items-center col-md-6 col-2">
                        <div class="gray ">2 min ago</div>
                      </div> */}
                    </div>

                    <hr />
                  </div>
                ) : (
                  ""
                );
              })}
              <div className="d-flex flex-row justify-content-between">
                <img
                  className=" mt-0 d-flex flex-row  col-md-1 col-2 me-1 rounded"
                  id="imgicon"
                  src={this.props.company_logo}
                />

                <h5
                  className="card-title mt-2 col-md-6 col-5 col-sm-8 col-xs-9 d-flex align-items-center"
                  style={{ marginRight: 24 }}
                >
                  {this.props.post_type === "adsPost"
                    ? this.props.company_name
                    : this.props.title}
                </h5>
                <div
                  id="goldtab"
                  className=" d-flex flex-row-reverse align-items-center col-md-2 col-2"
                >
                  {this.props.salary ? this.props.salary : ""}
                </div>
              </div>
              <div className="row">
                <div id="" className="d-flex flex-row ms-3 ">
                  <div className="ms-5" style={{ marginLeft: 20 }}>
                    {this.props.post_type !== "adsPost"
                      ? this.props.company_name
                      : this.props.title}
                  </div>
                </div>
                <div
                  id="gold"
                  className="col-10 col-lg-12 col-md-11 col-sm-10 d-flex flex-row flex-wrap ms-5"
                  style={{ marginLeft: 30 }}
                >
                  {this.props.departments
                    ? this.props.departments.map((x) => {
                        return (
                          <div id="gold " className="ms-3  goldenn" key={x.id}>
                            {x.dep_name}
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>

              <p className="card-text mt-2">{this.props.description}</p>
              {this.props.post_type === "adsPost" ? (
                <div>
                  <img
                    className=" mt-0 d-flex flex-column col-md-12 col-11 me-1  adspic"
                    src={this.props.sponsor_image}
                  />
                  <div className="d-flex flex-row flex-nowrap smallres">
                    <div
                      id="promoted"
                      className="  d-flex flex-row col-12 col-md-2 fs-5 mt-3"
                    >
                      <RiAdvertisementLine
                        className="me-2 fs-3"
                        fill="#cd8930"
                      />
                      <p id="gold">ADS</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="me-4 mb-1 col-12  col-md-12">
                {this.props.tags
                  ? this.props.tags.map((x, i) => {
                      return (
                        <a
                          href="#"
                          className=" broker-tag ms-1 d-inline-block"
                          id="tagsipad"
                        >
                          {x.interest ? x.interest : ""}
                        </a>
                      );
                    })
                  : ""}
              </div>
              <div
                className="d-flex flex-row  justify-content-between smallres align-items-end mt-4 "
                id="bottom"
              >
                <div className="d-flex  flex-wrap col-6 col-md-6 ">
                  {this.props.application_deadline
                    ? "Deadline " + this.props.application_deadline
                    : ""}
                </div>
                {this.props.post_type == "promotedPost" ? (
                  <div className="d-flex  flex-wrap promotedPost me-auto col-5 col-md-3">
                    <BsArrowUpRight
                      className="m-0 "
                      color="#cd8930"
                      fill="#cd8930"
                      size={18}
                    />
                    <p id="gold" className="m-0">
                      Promoted
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {this.props.post_type !== "adsPost" ? (
                  <div className="d-flex flex-row-reverse ms-auto">
                    <div
                      className=" d-flex flex-row-end col-md-12 col-8 mt-md-0 mt-3 justify-content-end align-self-end align-items-end
                  "
                    >
                      {/* <div className="col-md-4"></div> */}
                      <BsBookmark
                        id="BsBookmark"
                        color="#1e4274"
                        className=" col-md-2 col-3"
                        size={30}
                      />
                      <button className="applyBtn px-4 py-0 col-md-auto col-12">
                        Apply
                      </button>
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
