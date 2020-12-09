/** @format */

import { axios } from "./axios";

import { resolve } from "./Resolvers/resolver";

export async function login(data) {
  return await resolve(
    axios.post("/login", data).then((response) => {
      sessionStorage.setItem(
        "name",
        JSON.stringify(response.data.response.data.name)
      );
      // let data = response.data.response.data;
      sessionStorage.setItem("token", response.data.response.data.token);
      sessionStorage.setItem("status", response.statusText);
    })
  );
}
