import { ProfileMainWrapper } from "@/styles/StyledComponents/ProfileMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function ProfileMain() {
  return (
    <ProfileMainWrapper>
      <Box className="profileMainWrap">
        <CommonDashBoardTitle title="Hello, John. You can update your profile information here." />
        <Box className="formWrapper">
          <Box className="wrapper_authForm">
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="Full Name" />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="John Duo" />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="dummyemail@gmail.com" />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="123 321 4567" />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="Lorem ipsum LTD." />
            </Box>
            <Box className="singleInputWrap">
              <InputFieldCommon placeholder="Dummy address98, lorem" />
            </Box>
          </Box>
          <Box className="btnWrapper">
            <CustomButtonPrimary variant="contained" color="secondary">
              Save Info
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Box>
    </ProfileMainWrapper>
  );
}
