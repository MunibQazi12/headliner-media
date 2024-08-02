import {useSignUpMutation} from "@/hooks/react-query/useUserMutation";
import {SignUpMainWrapper} from "@/styles/StyledComponents/SignUpMainWrapper";
import {SignUpFormValues} from "@/types/common.type";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import AppleIcon from "@/ui/Icons/AppleIcon";
import GoogleIcon from "@/ui/Icons/GoogleIcon";
import MicrosoftIcon from "@/ui/Icons/MicrosoftIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {useRouter} from "next/router";
import {useState} from "react";

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
        .max(255, "Company must be at most 255 characters"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required")
});

const initialValues: SignUpFormValues = {
    full_name: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    password_confirmation: ""
};

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

export default function SignUpMain() {
    const router = useRouter();
    const signUpMutation = useSignUpMutation();
    const isloading = signUpMutation.isPending;
    const [errorMessage , setErrorMessage] = useState();

    const handleSubmit = async (values: SignUpFormValues) => {
        signUpMutation.mutate(values, {
            onSuccess: (data : any) => {


                if (data.data.success) {
                    router.push({
                        pathname: "/auth/login"
                    });
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
        <SignUpMainWrapper>
            <Box className="wrapper_authMain">
                <Container fixed>
                    <Box className="wrapper_authInner">
                        <Box className="textWrap">
                            <Typography variant="h2">Register Your Account</Typography>
                        </Box>

                        {errorMessage && (
                            <Box className="text-center">
                                <Typography variant="body1" color="error" >
                                    {errorMessage}
                                </Typography>
                            </Box>
                        )}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form>
                                    <Box className="wrapper_authForm">
                                        <Box className="singleInputWrap">
                                            <CustomInput name="full_name" placeholder="Full Name"/>
                                            <ErrorMessage name="full_name" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <ErrorMessage name="email" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput name="company" placeholder="Company"/>
                                            <ErrorMessage name="company" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput name="phone" placeholder="Phone"/>
                                            <ErrorMessage name="phone" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password" component="div"/>
                                        </Box>
                                        <Box className="singleInputWrap">
                                            <CustomInput
                                                name="password_confirmation"
                                                type="password"
                                                placeholder="Confirm Password"
                                            />
                                            <ErrorMessage
                                                name="password_confirmation"
                                                component="div"
                                            />
                                        </Box>
                                    </Box>
                                    <Box className="btnWrapper">
                                        <CustomButtonPrimary
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            disabled={isloading}
                                        >
                                            Sign Up
                                        </CustomButtonPrimary>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                        <Box className="orText">
                            <Typography variant="body1">or</Typography>
                        </Box>
                        <Box className="allBtnWrapper">
                            <Button type="button">
                                <i>
                                    <GoogleIcon/>
                                </i>
                                Continue with Google
                            </Button>
                            <Button type="button">
                                <i>
                                    <MicrosoftIcon/>
                                </i>
                                Continue with Microsoft
                            </Button>
                            <Button type="button">
                                <i>
                                    <AppleIcon/>
                                </i>
                                Continue with Apple
                            </Button>
                        </Box>
                        <Box className="wrapper_singIn">
                            <Typography variant="body1">
                                Already have an account? <Link href="/auth/login">Log In</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </SignUpMainWrapper>
    );
}
