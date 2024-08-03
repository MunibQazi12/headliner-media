import {ProfileMainWrapper} from "@/styles/StyledComponents/ProfileMainWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import useUser from "@/hooks/react-query/useUser";
import {useEffect, useState} from "react";
import {LoadingPage} from "@/components/LoadingPage/LoadingPage";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ProfileUpdate} from "@/types/common.type";
import styled from "@emotion/styled";
import {useProfileUpdateMutation} from "@/hooks/react-query/useUserMutation";
import Typography from "@mui/material/Typography";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

const validationSchema = Yup.object({
    full_name: Yup.string()
        .required("Full Name is required")
        .test(
            "two-sections",
            "Full name must consist of at least two sections",
            (value: any) => {
                return value && value.trim().split(" ").length >= 2;
            }
        ),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    company: Yup.string()
        .required("Company is required")
        .max(255, "Company must be at most 255 characters")
});
const CustomInput = styled(Field)`
  width: 100%;
  border: 1px solid #012060 !important;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px !important;
  height: 70px;
  padding: 6px 16px;
  color: #012060;
`;
export default function ProfileMain() {
    const {data: profileData, isFetching, refetch} = useUser();
    useEffect(() => {

        refetch();
    }, []);
    const signUpMutation = useProfileUpdateMutation();
    const isloading = signUpMutation.isPending;
    const [errorMessage , setErrorMessage] = useState();
    const [successMessage , setSuccessMessage] = useState();
    const handleSubmit = async (values : ProfileUpdate) => {
        signUpMutation.mutate(values, {
            onSuccess: (data : any) => {


                if (data.data.success) {
                    //@ts-ignore
                   setSuccessMessage("Profile Updated Successfully")
                } else {
                    setErrorMessage(data.data.message);
                }
            },
            onError: (data : any) => {
                setErrorMessage(data.message);
            }
        });
    };
    // @ts-ignore
    return (
        <ProfileMainWrapper>
            {isFetching ? (
                <LoadingPage/>
            ) : (


                <Box className="profileMainWrap">
                    <CommonDashBoardTitle title={`Hello, ${profileData?.data?.data?.first_name}. You can update your profile information here.`}/>
                    {errorMessage && (
                        <Box className="text-center">
                            <Typography variant="body1" color="error" >
                                {errorMessage}
                            </Typography>
                        </Box>
                    )}
                    {successMessage && (
                        <Box className="text-center">
                            <Typography variant="body1" color="success" >
                                {successMessage}
                            </Typography>
                        </Box>
                    )}
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            full_name: `${profileData?.data?.data?.first_name}  ${profileData?.data?.data?.last_name}` ,
                            email: profileData?.data?.data?.email || "",
                            phone: profileData?.data?.data?.phone || "",
                            //@ts-ignore

                            company: profileData?.data?.data?.company || ""
                        }} onSubmit={handleSubmit}>
                        {() => (
                            <Form>
                                <Box className="formWrapper">
                                    <Box className="wrapper_authForm">
                                        <Box className="singleInputWrap">
                                            <CustomInput placeholder="Full Name" name="full_name"/>
                                            <ErrorMessage name="full_name" component="div"/>
                                        </Box>

                                        <Box className="singleInputWrap">
                                            <CustomInput placeholder="dummyemail@gmail.com" name="email" disabled/>
                                            <ErrorMessage name="email" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput placeholder="123 321 4567" name="phone"/>
                                            <ErrorMessage name="phone" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput placeholder="Lorem ipsum LTD." name="company"/>
                                            <ErrorMessage name="company" component="div"/>
                                        </Box>

                                    </Box>
                                    <Box className="btnWrapper">
                                        <CustomButtonPrimary
                                            type="submit"
                                            variant="contained" color="secondary" disabled={isloading}>
                                            Save Info
                                        </CustomButtonPrimary>
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            )}
        </ProfileMainWrapper>
    );
}
