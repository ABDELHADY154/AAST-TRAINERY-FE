/** @format */

import React from "react";
import { Redirect } from "react-router-dom";

class Landing extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to='/Home' />;
    } else {
      return <div className='container'> heloo sir </div>;
    }
  }
}
export default Landing;
