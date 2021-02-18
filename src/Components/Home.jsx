/** @format */

import React, { Component } from "react";
import { resolve } from "../Api/Resolvers/resolver";
import { axios } from "../Api/axios";
import { Loader } from "../loader";
// import { ProgressBar } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      loading: false,
      token: sessionStorage.getItem("token"),
      avatar: "",
    };
  }

  async componentDidMount() {
    await resolve(
      axios
        .get("/W/get-profile")
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("avatar", res.data.response.data.image);
            this.setState({
              user: res.data.response.data,
              loading: true,
              code: "200",
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: {
              usernameErr: error.response.status,
            },
          });
          if (this.state.error.usernameErr === 401) {
            window.location.reload();
          }
        })
    );
  }

  render() {
    if (this.state.loading === false) {
      return <div className="container text-center">{/* <Loader /> */}</div>;
    } else {
      return (
        <div className="container-fluid ">
          <div className="p-5">
            <div className="d-flex flex-row ">
              <div id="" className="d-flex flex-column text-wrap bg-none">
                <div className="fs-2" id="">
                  Track Your Profile
                </div>
                <div className="fs-6 col-md-8 col-sm-12" id="">
                  We help you track your profile success and update to reach out
                  the best matching opportunity. Check out these steps for a
                  successful experience:
                </div>

                <div className="d-flex flex-row flex-wrap mt-5 justify-content-between">
                  <div className="col-12 col-md-12 d-flex ">
                    <div className="col-6 col-md-6 d-flex">
                      Steps to Success
                    </div>

                    <div class="progress col-6 col-md-6 d-flex">
                      <div
                        class="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
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
}
export default Home;
