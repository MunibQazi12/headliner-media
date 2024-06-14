import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const NeedCustomerWrapper = styled(Box)`
  .wrapper_mainNeedCustomer {
    position: relative;
    .wrapper_need {
      position: relative;
      background: ${primaryColors.secondary};
      padding: 64px 40px;
      @media (max-width: 1499px) {
        padding: 40px 24px;
      }
      @media (max-width: 1199px) {
        padding: 30px 16px;
      }
      @media (max-width: 899px) {
        padding: 20px 12px;
      }
      .wrapper_textInfo {
        position: relative;
        h3 {
          font-weight: 700;
          font-size: 57px;
          color: ${primaryColors.white};
          margin-bottom: 10px;
          max-width: 740px;
          @media (max-width: 1499px) {
            font-size: 40px;
          }
          @media (max-width: 1199px) {
            font-size: 30px;
          }
          @media (max-width: 599px) {
            font-size: 24px;
          }
        }
        p {
          color: ${primaryColors.white};
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 24px;
          max-width: 720px;
          @media (max-width: 1499px) {
            font-size: 18px;
            max-width: 520px;
          }
          @media (max-width: 1199px) {
            font-size: 16px;
            margin-bottom: 12px;
          }
        }
        h4 {
          font-weight: 700;
          font-size: 29px;
          color: ${primaryColors.white};
          margin-bottom: 16px;
          @media (max-width: 1499px) {
            font-size: 24px;
          }
          @media (max-width: 599px) {
            font-size: 20px;
          }
        }
        button {
          height: 50px;
          padding: 10px 14px;
          color: ${primaryColors.white};
          &:hover {
            background: ${primaryColors.primary};
          }
        }
      }
      .imgWRap {
        position: relative;
        figure {
          line-height: 0;
          width: 100%;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;
