/** @format */

// import { axios } from "./axios";

// import { resolve } from "./Resolvers/resolver";

// export async function login(data) {
//   return await 
//     axios
//       .then((response) => {
//         sessionStorage.setItem(
//           "name",
//           JSON.stringify(response.data.response.data.name)
//         );
//         // let data = response.data.response.data;
//         sessionStorage.setItem("token", response.data.response.data.token);
//         sessionStorage.setItem("status", response.statusText);
//         console.log(response);
//       })
//       .catch(function (error) {
//         sessionStorage.setItem("error", error);
//       })
//   );
// }
// export async function getdata(data) {
//   return await resolve(
//     axios.get("/W/get-profile").then((response) => {

//       let data = response.data.response.data;
//       console.log(data);
//     })
//   );
// }
