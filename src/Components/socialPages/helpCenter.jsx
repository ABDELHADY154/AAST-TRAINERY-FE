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
          <div className="container mt-3">
            <div className="mt-3">
              <h1 className="text-center fs-3 fw-bold">Help Center</h1>
              <p className="text-center">
                Any questions or remarks? Just send us a message!
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
                    What is Trainery and how does it work?{" "}
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse1">
                  <div class="card card-body">
                    Trainery is a platform didicated to provide undergraduate
                    students with their desired internships and aims to enhance
                    the process of acquiring and going through gaining
                    experience as well as providing curated career coaching
                    sessions that help students in leveling up and gaining more
                    technical and soft skills. You also can develop your own CV
                    and portfolio with just a click of a button, how cool is
                    that? <br />
                    In order to access the website you must have a valid student
                    mail and sign up for your account then you will have full
                    access to all our services through minimal steps.
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
                    Do I have to be an AAST student to sign up?{" "}
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse2">
                  <div class="card card-body">
                    Our services are currently designed fot AAST-CMT and
                    AAST-CLC students, but we are aiming to provide all
                    undergraduate students from all backgrounds.
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
                    Do I have to add payment methods to use Trainery?{" "}
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse3">
                  <div class="card card-body">
                    No, you don't. Most of our services are free of charge
                    except portfolio development and career coaching sessions
                    and it's not obligatory to add your card information.
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
                    I forgot my password to access my account, what do I do?{" "}
                  </a>
                </p>
                <div class="collapse mb-3" id="collapse4">
                  <div class="card card-body">
                    Don't worry, your account is still safe and you can change
                    your password by accessing the forgot password page and
                    submitting your E-mail to get the one-time access link and
                    change your password to access your Trainery account.
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

                      Contact us for more help!

                    </h5>
                  </div>
                  <div className="row ">
                    <p className="d-flex col-9 col-md-8 col-lg-9 col-sm-9 justify-content-start ">
                      We understand that you may have question that are not
                      answered in our FAQ, If you cannot find the answer to your
                      question please feel free to contact us
                    </p>
                    <div className="col-md-2 col-sm-0 col-0 col-lg-2 space "></div>
                    <div className=" col-3 col-md-2 col-sm-3 col-lg-1 d-flex justify-content-end">

                      <a href="mailto:admin@aast-trainery.com?body=Hi Trainery">
                        <button
                          type="submit"
                          className="col-12 col-md-12 col-sm-12 col-lg-12 btn FAQBtn"
                        >
                          E-mail
                        </button>
                      </a>
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
