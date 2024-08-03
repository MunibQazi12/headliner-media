/* eslint-disable no-console */
import {GetProfileDetails} from "@/api/functions/user.api";
import {logout, setLoginData} from "@/reduxtoolkit/slices/userSlice";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/useAppDispatch";

const useUser = () => {

    const dispatch = useAppDispatch();

    const profileDetails = useQuery({
        queryKey: ["userdetails"],
        queryFn: GetProfileDetails,
        enabled: true
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
        if (profileDetails?.data) {
            if (profileDetails?.data?.status === 401) {
                dispatch(logout());
            } else {
                dispatch(setLoginData(profileDetails?.data?.data?.data));
            }
        }
    }, [profileDetails?.status, profileDetails?.data]);
    return {...profileDetails};
};

export default useUser;
