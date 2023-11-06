import { useQuery, useQueryClient, useMutation } from "react-query";
import { deletePostService, getPostService } from "./table.service";

export const usePosts = () => {
  return useQuery<any[], Error>("test", () => {
    return getPostService();
  });
};

export const deletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return deletePostService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
