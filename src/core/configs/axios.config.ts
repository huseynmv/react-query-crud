import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { environment } from "./app.config";
import { generateGuid } from "../helpers/generate-guid";

const axiosInstance = axios.create({
  baseURL: environment.apiMain,
  headers: {
    Authorization: "Bearer " + generateGuid(),
  },
});

export default axiosInstance;
