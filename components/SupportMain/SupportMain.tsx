import { SupportMainWrapper } from "@/styles/StyledComponents/SupportMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {useAppSelector} from "@/hooks/redux/useAppSelector";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function SupportMain() {
  const {userData} : any = useAppSelector((state) => state.userSlice);
  return (
    <SupportMainWrapper>
      <Box className="supportMainWrap">
        <CommonDashBoardTitle title={`Hello, ${userData?.first_name}. Contact Support for order updates, questions, and more here.`} />
        <Box className="infoAllForm">
          <Typography variant="h3">
            Call Emory Customer Support 24/7
            <Link href="tel:8667099055">866-709-9055</Link>
          </Typography>
          <Box className="formWrapper">
            <Box className="wrapper_authForm">
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Full Name" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Email" />
              </Box>
              <Box className="singleInputWrap">
                <InputFieldCommon placeholder="Enter message here…" multiline />
              </Box>
            </Box>
            <Box className="btnWrapper">
              <CustomButtonPrimary variant="contained" color="secondary">
                Contact Customer Support
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Box>
      </Box>
    </SupportMainWrapper>
  );
}
