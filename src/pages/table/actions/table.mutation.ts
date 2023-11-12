import { useQueryClient, useMutation } from "react-query";
import { deletePostService } from "./table.service";

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
