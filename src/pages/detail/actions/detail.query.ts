import { useQuery, useQueryClient, useMutation } from "react-query";
import { getPostServiceById, updateService } from "./detail.service";

export const usePosts = (id: number | string) => {
  return useQuery<any, Error>("", () => {
    return getPostServiceById(id);
  });
};

// export const useAddPost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (post: any) => {
//       return addPost(post);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries();
//     },
//   });
// };

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: any, post: any) => {
      return updateService(id, post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
