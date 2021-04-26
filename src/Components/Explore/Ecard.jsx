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
    this.toggleSave = this.toggleSave.bind(this);
  }
  toggleSave = () => {
    this.setState({ saved: !this.state.saved ? true : false });
    // console.log(this.state.saved);
  };
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
        <div className="card my-4">
          <div className="card-body">
            {this.props.advisor.map((x) => {
              return x ? (
                <div className="">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex">
                      <img
                        className=" mt-0 d-flex flex-column col-md-4 col-2 me-3"
                        id="imgicon"
                        src={x !== "null" ? x.image : ""}
                      />
                      <p id="" className="card-title fs-5  mt-2">
                        {x.name}{" "}
                      </p>
                    </div>

                    {/* <div className='d-flex flex-row-reverse'>
                      <div class='gray'>2 min ago</div>
                    </div> */}
                  </div>

                  <hr />
                </div>
              ) : (
                ""
              );
            })}
            <div className="d-flex flex-row flex-wrap">
              <img
                className=" mt-0 d-flex flex-row  col-md-1 col-2 me-1 rounded"
                id="imgicon"
                src={this.props.company_logo}
              />
              <h5 className="card-title  mt-2 mx-1 col-md-7 col-5 col-sm-8 col-xs-9 d-flex align-items-center">
                {this.props.post_type === "adsPost"
                  ? this.props.company_name
                  : this.props.title}
              </h5>
              <div className=" goldenn d-flex flex-row-reverse align-items-center col-md-2 col-2 ms-3">
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
                  className=" mt-0 d-flex flex-column col-md-6 col-2 me-1 w-100"
                  height="400"
                  src={this.props.sponsor_image}
                />
                <div className="d-flex flex-row flex-nowrap smallres">
                  <div
                    id="promoted"
                    className="  d-flex flex-row col-12 col-md-2 fs-5"
                  >
                    <RiAdvertisementLine className="me-2 fs-3" fill="#cd8930" />
                    <p id="gold">ADS</p>
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
            <div className="d-flex flex-row flex-wrap ">
              <div className="  align-middle ">
                <div className="me-4 mb-1 col-11 col-md-12 ">
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
                <div className="d-flex flex-row flex-wrap ">
                  <div className="col-5 col-md-5">
                    {this.props.application_deadline
                      ? "Deadline " + this.props.application_deadline
                      : ""}
                  </div>
                  <div className="col-4 col-md-4 col-sm-4">
                    {this.props.post_type == "promotedPost" ? (
                      <div className="d-flex flex-row">
                        <BsArrowUpRight
                          className=""
                          color="#cd8930"
                          fill="#cd8930"
                          size={17}
                        />
                        <p id="gold" className="">
                          Promoted
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className=" col-3 col-md-3 justify-content-end ">
                    {/* <div className="col-md-4"></div> */}
                    <BsBookmark
                      id="BsBookmark"
                      color="#1e4274"
                      className="fs-2 align-self-center col-md-2 col-4"
                      path="0px"
                    />
                    <button
                      className="applyBtn px-1 py-0 col-md-6 col-8"
                      Onclick={(e) => this.toggleSave(e)}
                    >
                      Apply
                    </button>
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
