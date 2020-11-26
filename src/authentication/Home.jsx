/** @format */

import React, { Component } from "react";
import { axios } from "./axios";
import ContentLoader, { Facebook } from 'react-content-loader'

// const MyLoader = () => <ContentLoader />
// const MyFacebookLoader = () => <Facebook />

class Home extends Component {
  componentDidMount() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios.get("/W/get-profile", config).then(
      (response) => {
        this.setState({
          name: response.data.response.data.name,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    //   console.log(this.state)
        if(this.state){
            return(
                <div className='container'>
                    <h2>hi {this.state.name}</h2>
                </div>
            )
        }
    return (
        
      <div className='container'>
        <h2 className='navbar-brand' href='#'>
          not loggined in
        </h2>
      </div>
    );
  }
}
export default Home;
