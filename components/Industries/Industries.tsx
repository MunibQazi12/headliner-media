/* eslint-disable react/no-array-index-key */
import { IndustriesWrap } from "@/styles/StyledComponents/IndustriesWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IndustriesServedList from "../IndustriesServedList/IndustriesServedList";

export default function IndustriesServed() {
  return (
    <IndustriesWrap>
      <Container fixed className="cus_container">
        <Box className="mainIndustry_wrap">
          <IndustriesServedList />
        </Box>
      </Container>
    </IndustriesWrap>
  );
}
