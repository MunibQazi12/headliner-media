import { ChangePasswordMainWrapper } from "@/styles/StyledComponents/ChangePasswordMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function ChangePasswordMain() {
  return (
    <ChangePasswordMainWrapper>
      <Box className="changePassword_main">
        <CommonDashBoardTitle title="Hello, John. Change your password here." />
        <Box className="formWrapper">
          <Box className="wrapper_authForm">
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="Current password" isPassword />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="New password" isPassword />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="Confirm new password" isPassword />
            </Box>
          </Box>
          <Box className="btnWrapper">
            <CustomButtonPrimary variant="contained" color="secondary">
              Save new password
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Box>
    </ChangePasswordMainWrapper>
  );
}
