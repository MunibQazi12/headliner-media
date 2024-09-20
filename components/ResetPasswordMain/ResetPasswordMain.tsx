import { SignUpMainWrapper } from "@/styles/StyledComponents/SignUpMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ResetPasswordMain() {
  return (
    <SignUpMainWrapper>
      <Box className="wrapper_authMain">
        <Container fixed>
          <Box className="wrapper_authInner">
            <Box className="textWrap">
              <Typography variant="h2">Reset Password</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet
              </Typography>
            </Box>
            <Box className="wrapper_authForm">
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Password" isPassword />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Confirm Password" isPassword />
              </Box>
            </Box>
            <Box className="btnWrapper">
              <CustomButtonPrimary variant="contained" color="secondary">
                Reset Password
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Container>
      </Box>
    </SignUpMainWrapper>
  );
}
