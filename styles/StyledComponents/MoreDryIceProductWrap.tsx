import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const MoreDryIceProductWrap = styled(Box)`
  .wrapper_mainMoreIce {
    position: relative;
    padding: 100px 0;
    @media (max-width: 1399px) {
      padding: 60px 0;
    }
    @media (max-width: 899px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .allCardBoxWrap {
      position: relative;
      padding-top: 40px;

      @media (max-width: 599px) {
        padding-top: 20px;
      }
    }
  }
`;
