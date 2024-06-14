/* eslint-disable react/no-array-index-key */
import { IndustriesServedWrap } from "@/styles/StyledComponents/IndustriesServedWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CommonHeading from "../CommonHeading/CommonHeading";
import IndustriesServedList from "../IndustriesServedList/IndustriesServedList";

export default function IndustriesServed() {
  return (
    <IndustriesServedWrap>
      <Box className="wrapper_mainIndustry">
        <Container fixed className="cus_container">
          <Box className="mainIndustry_wrap">
            <CommonHeading borderHeading="Industries Served" />
            <IndustriesServedList />
          </Box>
        </Container>
      </Box>
    </IndustriesServedWrap>
  );
}
