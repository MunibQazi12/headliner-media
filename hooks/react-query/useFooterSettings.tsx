import { onFooterSettingsChange } from "@/reduxtoolkit/slices/footerSettingsSlice";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { GetFooterSettings } from "@/api/functions/footer.api";
import { useAppDispatch } from "../redux/useAppDispatch";

const useFooterSettings = () => {
  const dispatch = useAppDispatch();
  const footerSettings = useQuery({
    queryKey: ["footer-settings"],
    queryFn: GetFooterSettings
  });

  useEffect(() => {
    if (footerSettings?.data) {
      if (footerSettings?.data?.status === 401) {
        dispatch(logout());
      } else {
        dispatch(
          onFooterSettingsChange({
            data: footerSettings?.data?.data?.data,
            isLoading: footerSettings.isFetching
          })
        );
      }
    }
  }, [footerSettings]);

  return { ...footerSettings };
};

export { useFooterSettings };
