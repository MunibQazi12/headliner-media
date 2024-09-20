/* eslint-disable no-console */
import { GetIndustries, GetIndustry } from "@/api/functions/industries.api";
import { onIndustriesChange } from "@/reduxtoolkit/slices/industrySlice";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/useAppDispatch";
  
  const useIndustries = () => {
    const dispatch = useAppDispatch();
  
    const industries = useQuery({
      queryKey: ["industries"],
      queryFn: GetIndustries
    });
  
    useEffect(() => {
      if (industries?.data) {
        if (industries?.data?.status === 401) {
          dispatch(logout());
        } else {
          dispatch(
            onIndustriesChange({
              data: industries?.data?.data?.data?.data,
              isLoading: industries.isFetching
            })
          );
        }
      }
    }, [industries]);
  
    return { ...industries };
  };
  
  const useIndustry = (slug: string) =>
    useQuery({
      queryKey: ["industry"],
      queryFn: () => GetIndustry(slug)
    });
  
  
  export { useIndustries, useIndustry };
  