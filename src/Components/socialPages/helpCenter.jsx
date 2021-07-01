import React from "react";
import "../../layout/socialPages.css";
import { Link, NavLink } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import Footer2 from "../Common/Footer2";
import "../../layout/Home.css";
// import "../../layout/Sign.css";

import { HiOutlineMail } from "react-icons/hi";
import { MdSettingsPhone } from "react-icons/md";

class helpCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      // FormLoading: true,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };

  render() {
    return (
      <div>
        <LoadingOverlay
          active={this.state.FormLoading}
          spinner={<BounceLoader color="#cd8930" />}
          color={"#cd8930"}
          styles={{
            overlay: (base) => ({
              ...base,
              background: "rgb(255, 255, 255)",
              stroke: "rgba(255, 0, 0, 0.5)",
            }),
          }}
        >
          <div className="container">
            <div className="mt-3">
              <h1 className="text-center fs-3 fw-bold">Help Center</h1>
              <p className="text-center">
                Any questios or remarks? Just write us a message!
              </p>
            </div>
            <div className="mb-5">
              <div className="mb-4">
                <p>
                  <a
                    class="btn accordionLink col-12 d-flex align-item-start "
                    data-bs-toggle="collapse"
                    href="#collapse1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse1"
                    style={{ color: "#1E4274" }}
                  >
                    Link with href
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse1">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a
                    class="btn accordionLink col-12 d-flex align-item-start "
                    data-bs-toggle="collapse"
                    href="#collapse2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse2"
                    style={{ color: "#1E4274" }}
                  >
                    Link with href
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse2">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a
                    class="btn accordionLink col-12 d-flex align-item-start "
                    data-bs-toggle="collapse"
                    href="#collapse3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse3"
                    style={{ color: "#1E4274" }}
                  >
                    Link with href
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse3">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a
                    class="btn accordionLink col-12 d-flex align-item-start "
                    data-bs-toggle="collapse"
                    href="#collapse4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapse4"
                    style={{ color: "#1E4274" }}
                  >
                    Link with href
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse4">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="footer"
            className="Container
        
       flex-row "
          >
            <footer
              className="footer-area footer  m-auto prim"
              style={{
                backgroundColor: "#F2F2F2",
              }}
            >
              <div className="pb-4">
                <div className="container pt-4 ">
                  <div className="row ">
                    <h5 className="d-flex  justify-content-start ">
                      Contact Us
                    </h5>
                  </div>
                  <div className="row ">
                    <p className="d-flex col-9 col-md-8 col-lg-9 col-sm-9 justify-content-start ">
                      We understand y ou may have question that are not answered
                      in our FAQ, If you cannot find the answer to your question
                      please feel free to contact us
                    </p>
                    <div className="col-md-2 col-sm-0 col-0 col-lg-2 space "></div>
                    <div className=" col-3 col-md-2 col-sm-3 col-lg-1 d-flex justify-content-end">
                      <Link
                        to={`/contactus`}
                        className="col-12 col-md-12 col-sm-12 col-lg-12 btn FAQBtn"
                      >
                        Send
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Footer2 />
        </LoadingOverlay>
      </div>
    );
  }
}
export default helpCenter;
