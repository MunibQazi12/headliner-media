import { SignUpMainWrapper } from "@/styles/StyledComponents/SignUpMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ForgotPasswordMain() {
  return (
    <SignUpMainWrapper>
      <Box className="wrapper_authMain">
        <Container fixed>
          <Box className="wrapper_authInner">
            <Box className="textWrap">
              <Typography variant="h2">Forgot password</Typography>
              <Typography variant="body1">
                Please enter your email to receive a one-time password
              </Typography>
            </Box>
            <Box className="wrapper_authForm">
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Email" />
              </Box>
            </Box>
            <Box className="btnWrapper">
              <CustomButtonPrimary variant="contained" color="secondary">
                Send
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Container>
      </Box>
    </SignUpMainWrapper>
  );
}
