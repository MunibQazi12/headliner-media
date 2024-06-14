import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonCartWrapper = styled(Box)`
  .wrapperInfoBox {
    position: relative;
    width: 100%;
    figure {
      width: 100%;
      line-height: 0;
      a {
        width: 100%;
        display: block;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        background: transparent;
        padding: 0;

        img {
          width: 100%;
          transition: 0.3s ease-in-out;
        }
      }
    }
    a {
      width: 100%;
      padding: 24px 10px;
      text-align: center;
      color: ${primaryColors.white};
      background: ${primaryColors.primary};
      font-size: 28px;
      font-weight: 700;

      @media (max-width: 1799px) {
        font-size: 22px;
      }
      @media (max-width: 1499px) {
        font-size: 18px;
        padding: 16px 10px;
      }
    }
  }
  .resourcesCartMain {
    position: relative;
    width: 100%;
    figure {
      width: 100%;
      line-height: 0;
      margin-bottom: 20px;

      @media (max-width: 599px) {
        margin-bottom: 10px;
      }
      a {
        width: 100%;
        display: block;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        background: transparent;
        padding: 0;
        line-height: 0;
        img {
          width: 100%;
          transition: 0.3s ease-in-out;
        }
      }
    }
    a {
      width: 100%;
      color: ${primaryColors.primary};
      font-size: 33px;
      font-weight: 700;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.2;
      @media (max-width: 1499px) {
        font-size: 24px;
      }
      @media (max-width: 1299px) {
        font-size: 20px;
      }
      @media (max-width: 599px) {
        font-size: 18px;
      }
    }
  }
`;
