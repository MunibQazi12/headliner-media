import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeadingStyled = styled(Box)`
  .borderHeading {
    h2 {
      font-weight: 800;
      border-bottom: 5px solid ${primaryColors.primary};
      padding-bottom: 12px;
      line-height: 0.9;
      font-size: 49px;

      @media (max-width: 1499px) {
        font-size: 40px;
      }
      @media (max-width: 1399px) {
        font-size: 36px;
      }
      @media (max-width: 1199px) {
        font-size: 34px;
      }
      @media (max-width: 899px) {
        border-bottom: 3px solid ${primaryColors.primary};
        padding-bottom: 4px;
        font-size: 28px;
        line-height: 1.2;
      }
      @media (max-width: 599px) {
        font-size: 22px;
      }
    }
  }
  .mediumHeading {
    h2 {
      @media (max-width: 1499px) {
        font-size: 42px;
      }
      @media (max-width: 1399px) {
        font-size: 40px;
      }
      @media (max-width: 1199px) {
        font-size: 36px;
      }
      @media (max-width: 899px) {
        font-size: 32px;
      }
      @media (max-width: 599px) {
        font-size: 22px;
      }
    }
  }
`;
