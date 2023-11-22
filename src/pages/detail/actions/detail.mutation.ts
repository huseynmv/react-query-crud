import { useQueryClient, useMutation } from "react-query";
import { updateService } from "./detail.service";
import { IFormValues } from "../../form/form";

export const useUpdatePost = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: IFormValues) => {
      return updateService(id, post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
