import { useQueryClient, useMutation } from "react-query";
import { updateService } from "./detail.service";

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
