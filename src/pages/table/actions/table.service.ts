import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import TableModel from "../models/table.model";

export const getPostService = () => {
  return axiosInstance.get(API.posts).then((res) => {
    return res.data.map((item: any) => new TableModel(item));
  });
};

export const deletePostService = (id: string | undefined) => {
  return axiosInstance.delete(API.posts + "/" + id);
};
