import axios from "axios";
import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const getPostService = () => {
  return axiosInstance.get(API.posts).then((res) => res.data);
};

export const deletePostService = (id: number) => {
  return axiosInstance.delete(API.posts + "/" + id);
};
