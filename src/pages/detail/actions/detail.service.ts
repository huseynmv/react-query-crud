import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const getPostServiceById = (id: number | string | undefined) => {
  return axiosInstance.get(API.posts + "/" + id);
};

export const updateService = (id: any, post: any) => {
  const data = {
    title: post.title,
    body: post.body,
  };
  return axiosInstance.put(API.posts + "/" + id, data);
};
