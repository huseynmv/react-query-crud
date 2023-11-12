import { useQuery } from "react-query";
import { getPostService } from "./table.service";

export const usePosts = () => {
  return useQuery<any[], Error>("test", () => {
    return getPostService();
  });
};
