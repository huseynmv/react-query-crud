import { useQueryClient, useMutation } from "react-query";
import { deletePostService } from "./table.service";

export const deletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | undefined) => {
      return deletePostService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
