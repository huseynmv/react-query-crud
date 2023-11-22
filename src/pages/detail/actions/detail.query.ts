import { useQuery } from "react-query";
import { getPostServiceById } from "./detail.service";

export const usePosts = (id: string | undefined) => {
  return useQuery<any, Error>("", () => {
    return getPostServiceById(id);
  });
};
