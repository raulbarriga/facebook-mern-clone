import axios from "axios";

const instance = axios.create({
  baseURL: "https://facebookmernclone.herokuapp.com", // deployed path
  // baseURL: "http://localhost:9000", // development path
});

export default instance;
