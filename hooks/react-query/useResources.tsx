import { GetResources } from "@/api/functions/resources.api";
import { onResourceChange } from "@/reduxtoolkit/slices/resourseSlice";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/useAppDispatch";

const useResources = () => {
  const dispatch = useAppDispatch();
  const resources = useQuery({
    queryKey: ["resources"],
    queryFn: GetResources
  });

  useEffect(() => {
    if (resources?.data) {
      if (resources?.data?.status === 401) {
        dispatch(logout());
      } else {
        dispatch(
          onResourceChange({
            data: resources?.data?.data?.data,
            isLoading: resources.isFetching
          })
        );
      }
    }
  }, [resources]);

  return { ...resources };
};

export { useResources };
