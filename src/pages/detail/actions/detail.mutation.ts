import { useQuery, useQueryClient, useMutation } from "react-query";
import { getPostServiceById, updateService } from "./detail.service";

export const usePosts = (id: number | string) => {
  return useQuery<any, Error>("", () => {
    return getPostServiceById(id);
  });
};

export const useUpdatePost = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: any) => {
      return updateService(id, post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
