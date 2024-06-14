import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const IndustriesServedWrap = styled(Box)`
  .wrapper_mainIndustry {
    padding: 110px 0;
    @media (max-width: 1499px) {
      padding: 80px 0;
    }
    @media (max-width: 1399px) {
      padding: 60px 0;
    }
    @media (max-width: 1199px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .wrapperMainCart {
      position: relative;
      padding-top: 25px;
    }
  }
`;
