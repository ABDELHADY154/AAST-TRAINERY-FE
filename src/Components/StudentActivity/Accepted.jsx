import React, { Component } from "react";
import { Link } from "react-router-dom";
import ActivityNavbar from "./Navbar";
import none from "../../Components/assests/imgs/none.png";
import { BsArrowUpRight } from "react-icons/bs";
import Footer2 from "../Common/Footer2";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import "../../layout/EditInfo.css";
import { axios } from "../../Api/axios";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";
import "../../layout/Footer.css";
import BigCard from "../Explore/BigCard";

class Accepted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPixelsY: 0,
      data: [],
      advisor: {},
      FormLoading: true,
    };
    window.scrollTo(0, 0);
  }
  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY,
    });
  };
  async componentDidMount() {
    this.setState({ FormLoading: true });
    await axios
      .get("/W/student/studentAccepted")
      .then((res) => {
        this.setState({
          id: res.data.response.data.id,
          data: res.data.response.data,
          advisor: res.data.response.data.advisor,
          FormLoading: false,
        });
        // console.log(res.data.response.data.advisor.name);
      })
      .catch((err) => {
        this.setState({ FormLoading: true });
        // console.log(err);
      });
  }
  render() {
    // console.log(this.state.advisor);
    return (
      <div id="page-container">
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
          <div id="content-wrap">
            <Link to="/Profile/Activity/Accepted" />
            <div className="container">
              <ActivityNavbar setactive={"Accepted"} />
              <div className="mb-5">
                {this.state.data.length == 0 ? (
                  <div className="col-12">
                    <Link
                      className="row mb-5 mt-2 d-flex justify-content-center explore"
                      to="/Explore"
                    >
                      Explore our new internship
                      <span className="sr-only" />
                    </Link>

                    <img className="row center img-fluid" src={none} />
                  </div>
                ) : (
                  this.state.data.map((data) => {
                    return (
                      <BigCard
                        title={data.title}
                        company_logo={data.company_logo}
                        salary={data.salary}
                        company_name={data.company_name}
                        departments={data.departments}
                        description={data.description}
                        tags={data.tags}
                        application_deadline={data.application_deadline}
                        advisor={data.advisor}
                        post_type={data.post_type}
                        sponsor_image={data.sponsor_image}
                        key={data.id}
                        saved={data.saved}
                        id={data.id}
                        company_id={data.company_id}
                        status={data.status}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <Footer2 id="footer" />
        </LoadingOverlay>
      </div>
    );
  }
}
export default Accepted;
