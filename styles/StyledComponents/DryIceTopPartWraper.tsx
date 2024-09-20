import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DryIceTopPartWraper = styled(Box)`
  .wrapper_mainDryIce {
    position: relative;
    padding-bottom: 40px;
    @media (max-width: 1199px) {
      padding-bottom: 20px;
    }
    .bigHeading {
      text-align: center;
      margin-bottom: 40px;

      @media (max-width: 1399px) {
        margin-bottom: 20px;
      }
    }
    .subText {
      text-align: center;
      font-weight: 700;
      font-size: 33px;
      color: ${primaryColors.primary};
      margin-bottom: 40px;
      @media (max-width: 1499px) {
        font-size: 30px;
      }
      @media (max-width: 1399px) {
        font-size: 24px;
      }
      @media (max-width: 1199px) {
        font-size: 20px;
      }
      @media (max-width: 899px) {
        font-size: 18px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
      }
    }
  }
`;
