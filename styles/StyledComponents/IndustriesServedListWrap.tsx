import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const IndustriesServedListWrap = styled(Box)`
  .wrapperInfoBox {
    position: relative;
    width: 100%;
    height: 100%;
    figure {
      width: 100%;
      line-height: 0;
      min-height: 407px;
      @media (max-width: 1499px) {
        min-height: auto;
      }
      a {
        width: 100%;
        display: block;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        background: transparent;
        padding: 0;
        min-height: 407px;
        @media (max-width: 1499px) {
          min-height: auto;
        }

        img {
          width: 100%;
          height: 407px;
          object-fit: cover;
          transition: 0.3s ease-in-out;
          @media (max-width: 1499px) {
            height: auto;
          }
        }
      }
    }
    .textInfo {
      position: relative;
      a {
        width: 100%;
        text-align: center;
        color: ${primaryColors.white};
        padding: 24px 10px;
        font-size: 28px;
        font-weight: 700;
        @media (max-width: 1499px) {
          font-size: 20px;
          padding: 16px 10px;
        }
      }
    }
  }
`;
