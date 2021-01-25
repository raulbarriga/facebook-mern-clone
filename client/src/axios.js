import axios from "axios";

const instance = axios.create({
  // baseURL: "", // deployed path from heroku
  baseURL: "http://localhost:9000", // development path
});

export default instance;
