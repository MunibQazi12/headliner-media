import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WhyUsMainStyled = styled(Box)`
  padding: 20px 0 60px;

  @media (max-width: 599px) {
    padding: 20px 0 40px;
  }
  .mainWhyheader {
    h2 {
      text-align: center;
      margin-bottom: 30px;
      @media (max-width: 1199px) {
        margin-bottom: 20px;
      }
      @media (max-width: 599px) {
        margin-bottom: 16px;
      }
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 28px !important;
    @media (max-width: 899px) {
      font-size: 18px;
      margin-bottom: 20px !important;
    }
    @media (max-width: 599px) {
      font-size: 16px;
      margin-bottom: 16px !important;
    }
  }

  h6 {
    margin-bottom: 16px;
  }
  .whyBox {
  }
`;
