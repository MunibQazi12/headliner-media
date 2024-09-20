import { SignUpMainWrapper } from "@/styles/StyledComponents/SignUpMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function VerificationMain() {
  return (
    <SignUpMainWrapper>
      <Box className="wrapper_authMain">
        <Container fixed>
          <Box className="wrapper_authInner">
            <Box className="textWrap">
              <Typography variant="h2">Verification</Typography>
              <Typography variant="body1">
                Enter the one-time password sent to your email
              </Typography>
            </Box>
            <Box className="wrapper_authForm">
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Enter Your one-time password" />
              </Box>
            </Box>
            <Box className="btnWrapper">
              <CustomButtonPrimary variant="contained" color="secondary">
                Submit
              </CustomButtonPrimary>
            </Box>
            <Box className="wrapper_singIn">
              <Typography variant="body1">
                Didn&apos;t get the One-time password?
                <Link href="/auth/login">Resend</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </SignUpMainWrapper>
  );
}
