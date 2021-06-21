import axios from "axios";

export const $axios = axios.create({
  baseURL: "http://192.168.0.3:5000/api",
  timeout: 10000,
  withCredentials: true,
});
