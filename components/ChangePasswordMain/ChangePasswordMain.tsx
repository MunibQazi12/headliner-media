import {ChangePasswordMainWrapper} from "@/styles/StyledComponents/ChangePasswordMainWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {ChangePassword} from "@/types/common.type";
import {useChangePasswordMutation} from "@/hooks/react-query/useUserMutation";
import {useAppSelector} from "@/hooks/redux/useAppSelector";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

const validationSchema = Yup.object({
    old_password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required")
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
export default function ChangePasswordMain() {
    const changePasswordMutation = useChangePasswordMutation();
    const isloading = changePasswordMutation.isPending;
    const [errorMessage , setErrorMessage] = useState();
    const [successMessage , setSuccessMessage] = useState();
    const {userData} : any = useAppSelector((state) => state.userSlice);
    const handleSubmit = async (values : ChangePassword) => {
        changePasswordMutation.mutate(values, {
            onSuccess: (data : any) => {


                if (data.data.success) {
                    //@ts-ignore
                    setSuccessMessage("Password Updated Successfully")
                } else {
                    setErrorMessage(data.data.message);
                }
            },
            onError: (data : any) => {
                setErrorMessage(data.message);
            }
        });
    };
    return (
        <ChangePasswordMainWrapper>
            <Box className="changePassword_main">
                <CommonDashBoardTitle title={`Hello, ${userData?.first_name}. Change your password here.`}/>
                {errorMessage && (
                    <Box className="text-center">
                        <Typography variant="body1" color="error">
                            {errorMessage}
                        </Typography>
                    </Box>
                )}
                {successMessage && (
                    <Box className="text-center">
                        <Typography variant="body1" color="success">
                            {successMessage}
                        </Typography>
                    </Box>
                )}
                <Formik
                    initialValues={{
                        old_password: "",
                        password: "",
                        confirm_password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {() => (
                        <Form >

                            <Box className="formWrapper">
                                <Box className="wrapper_authForm">
                                    <Box className="singleInputWrap">
                                        <CustomInput placeholder="Old Password" name="old_password" type="password"/>
                                        <ErrorMessage name="old_password" component="div"/>
                                    </Box>
                                    <Box className="singleInputWrap">
                                        <CustomInput placeholder="New Password" name="password" type="password"/>
                                        <ErrorMessage name="password" component="div"/>
                                    </Box>
                                    <Box className="singleInputWrap">
                                        <CustomInput placeholder="Confirm Password" name="confirm_password" type="password"/>
                                        <ErrorMessage name="confirm_password" component="div"/>
                                    </Box>
                                </Box>
                                <Box className="btnWrapper">
                                    <CustomButtonPrimary
                                        type="submit"
                                        variant="contained" color="secondary" disabled={isloading}>
                                        Save new password
                                    </CustomButtonPrimary>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </ChangePasswordMainWrapper>
    );
}
