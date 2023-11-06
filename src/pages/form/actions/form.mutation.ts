import { useQuery, useQueryClient, useMutation } from "react-query";
import { addPost } from "./form.service";

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: any) => {
      return addPost(post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
