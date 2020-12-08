/** @format */

import { axios } from "./axios";
import React from "react";
import Login from "../Components/Login";
import { Redirect } from "react-router-dom";

import { resolve } from "./Resolvers/resolver";

export async function login(data) {

  return await resolve(
    axios.post("/login", data).then((response) => {
      localStorage.setItem("data", JSON.stringify(response.data.response.data));
      // let data = response.data.response.data;
      localStorage.setItem("token", response.data.response.data.token);
    })
  );
}
