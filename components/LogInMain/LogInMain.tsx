import { useSignInMutation } from "@/hooks/react-query/useUserMutation";
import { SignUpMainWrapper } from "@/styles/StyledComponents/SignUpMainWrapper";
import { SignInFormValues } from "@/types/common.type";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import AppleIcon from "@/ui/Icons/AppleIcon";
import GoogleIcon from "@/ui/Icons/GoogleIcon";
import MicrosoftIcon from "@/ui/Icons/MicrosoftIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

const initialValues = {
  email: "",
  password: ""
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

export default function LogInMain() {
  const router = useRouter();
  const signInMutation = useSignInMutation();
  const isLoading = signInMutation.isPending;

  const handleSubmit = (values: SignInFormValues) => {
    signInMutation.mutate(values, {
      onSuccess: (data) => {
        const token = data?.data?.data?.token;

        if (token) {
          localStorage.setItem("_token", token);
          router.push({
            pathname: "/"
          });
        }
      },
      onError: () => {
        // Error handling if needed
      }
    });
  };

  return (
    <SignUpMainWrapper>
      <Box className="wrapper_authMain">
        <Container fixed>
          <Box className="wrapper_authInner">
            <Box className="textWrap">
              <Typography variant="h2">Log In to Your Account</Typography>
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <Box className="wrapper_authForm">
                    <Box className="singleInputWrap">
                      <CustomInput
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <ErrorMessage name="email" component="div" />
                    </Box>
                    <Box className="singleInputWrap">
                      <CustomInput
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <ErrorMessage name="password" component="div" />
                    </Box>
                  </Box>
                  <Box className="btnWrapper">
                    <CustomButtonPrimary
                      type="submit"
                      variant="contained"
                      color="secondary"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging In..." : "Log In"}
                    </CustomButtonPrimary>
                  </Box>
                </Form>
              )}
            </Formik>
            <Box className="forgotPasswordWrap">
              <Typography variant="body1">
                Forgot password?{" "}
                <Link href="/auth/forgot-password">Reset Your Password</Link>
              </Typography>
            </Box>
            <Box className="orText">
              <Typography variant="body1">or</Typography>
            </Box>
            <Box className="allBtnWrapper">
              <Button type="button">
                <i>
                  <GoogleIcon />
                </i>
                Continue with Google
              </Button>
              <Button type="button">
                <i>
                  <MicrosoftIcon />
                </i>
                Continue with Microsoft
              </Button>
              <Button type="button">
                <i>
                  <AppleIcon />
                </i>
                Continue with Apple
              </Button>
            </Box>
            <Box className="wrapper_singIn">
              <Typography variant="body1">
                Don&apos;t have an account?{" "}
                <Link href="/auth/sign-up">Register Now</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </SignUpMainWrapper>
  );
}
