const axios = require("axios");

const local_token = localStorage.getItem("token");

const options = {
  baseURL: process.env.baseURL,
  headers: {
    Authorization: local_token,
  },
  timeout: 1000,
};
const http = axios.create(options);

http.defaults.headers.post["Content-Type"] = "application/json";

http.interceptors.request.use(
  (config) => {
    // check if token exists
    console.log(config);
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.resolve(err);
  }
);

module.exports = http;
