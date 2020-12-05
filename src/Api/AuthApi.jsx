/** @format */

import { axios } from "./axios";
import React from "react";
import Login from "../Components/Login";

export async function login(data) {
  return await axios.post("/login", data).then((response) => {
    // localStorage.setItem("data", response.data.response.data.name);
    // let data = response.data.response.data;
    localStorage.setItem("token", response.data.response.data.token);
  });
}
