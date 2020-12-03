/** @format */

import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://admin.aast-trainery.com/api",
});

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
// console.log(this.props);
