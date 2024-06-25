/* eslint-disable no-console */
import { GetSeoPage } from "@/api/functions/seo.api";
import { onSeoChange } from "@/reduxtoolkit/slices/seoSlice";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/useAppDispatch";

const useSeo = (slug: string) => {
  const dispatch = useAppDispatch();

  const seoData = useQuery({
    queryKey: ["seopage", slug],
    queryFn: () => GetSeoPage(slug)
    // onSuccess(data) {
    //   if (data?.data?.status === 401) {
    //     dispatch(logout());
    //   } else {
    //     dispatch(setLoginData(data?.data?.data));
    //   }
    // },
    // onError() {
    //   dispatch(logout());
    // }
  });

  useEffect(() => {
    if (seoData?.data) {
      if (seoData?.data?.status === 401) {
        dispatch(logout());
      } else {
        dispatch(
          onSeoChange({
            data: seoData?.data?.data?.data,
            isLoading: seoData.isFetching
          })
        );
      }
    }
  }, [seoData]);

  return { ...seoData };
};

export default useSeo;
