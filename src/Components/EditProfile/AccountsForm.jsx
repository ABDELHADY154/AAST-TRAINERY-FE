import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { axios } from "../Api/axios";
// import { Link } from "react-router-dom";
import "../../layout/EditInfo.css";
import Footer2 from "../Common/Footer2";
import EditNav from "./EditNav";

class AccountsForm extends Component {
  setactive(val) {
    this.setState({ Accounts: val });
  }
  render() {
    return (
      <div>
        <div className='container '>
          <EditNav setactive={"Accounts"} />

          <form class='g-3 mb-3 text-left ' onSubmit={this.handleSubmit}>
            hola
          </form>
        </div>
        <Footer2 />
      </div>
    );
  }
}
export default AccountsForm;
