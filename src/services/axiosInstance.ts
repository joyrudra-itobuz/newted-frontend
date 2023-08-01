import axios from "axios";
import config from "../config/config";

const baseURL = config.serverEndpoint;
const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
