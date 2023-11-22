import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IFormValues } from "../../form/form";

export const getPostServiceById = (id: string | undefined) => {
  return axiosInstance.get(API.posts + "/" + id);
};

export const updateService = (id: string | undefined, post: IFormValues) => {
  const data = {
    title: post.title,
    body: post.body,
  };
  return axiosInstance.put(API.posts + "/" + id, data);
};
