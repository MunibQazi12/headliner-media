import { SignUpMainWrapper } from "@/styles/StyledComponents/SignUpMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import AppleIcon from "@/ui/Icons/AppleIcon";
import GoogleIcon from "@/ui/Icons/GoogleIcon";
import MicrosoftIcon from "@/ui/Icons/MicrosoftIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function SignUpMain() {
  return (
    <SignUpMainWrapper>
      <Box className="wrapper_authMain">
        <Container fixed>
          <Box className="wrapper_authInner">
            <Box className="textWrap">
              <Typography variant="h2">Register Your Account</Typography>
            </Box>
            <Box className="wrapper_authForm">
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Full Name" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Email" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Phone" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Company" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Password" isPassword />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Confirm Password" isPassword />
              </Box>
            </Box>
            <Box className="btnWrapper">
              <CustomButtonPrimary variant="contained" color="secondary">
                Sign Up
              </CustomButtonPrimary>
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
                Already have an account? <Link href="/auth/login">Log In</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </SignUpMainWrapper>
  );
}
