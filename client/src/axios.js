import axios from "axios";

const instance = axios.create({
  baseURL: "https://facebookmernclone.herokuapp.com",
});

export default instance;
