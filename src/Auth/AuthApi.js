/** @format */

import { axios } from "../Api/axios";
state = {};
console.log(this.state.responses);

export async function login(data) {
  return await axios.post("/login", data).then((response) => {
    localStorage.setItem("token", response.data.response.data.token);
    this.setState({
      responses: response.data.response.data,
    });
  });
}
