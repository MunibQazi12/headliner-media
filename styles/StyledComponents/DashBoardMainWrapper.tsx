import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DashBoardMainWrapper = styled(Box)`
  .wrapper_mainInner {
    position: relative;

    .boxTextWrap {
      position: relative;
      background: ${primaryColors.primary};
      padding: 16px 34px;
      margin-bottom: 12px;
      @media (max-width: 1399px) {
        padding: 12px 24px;
      }
      h3 {
        color: ${primaryColors.white};
        font-size: 25px;
        font-weight: 800;
        @media (max-width: 1399px) {
          font-size: 22px;
        }
        @media (max-width: 599px) {
          font-size: 18px;
        }
      }
    }
    .allCardBoxWrap {
      margin-bottom: 12px;
      .wrapperInfoBox {
        height: 100%;
        background: ${primaryColors.primary};
        figure {
          a {
            padding: 0;
          }
        }
        a {
          font-size: 20px;
          padding: 16px;
          @media (max-width: 1499px) {
            font-size: 18px;
            padding: 12px;
          }
          @media (max-width: 1399px) {
            font-size: 16px;
          }
        }
      }
      .MuiGrid-item {
        > div {
          height: 100%;
        }
      }
    }
    .innerCrdInfo {
      position: relative;
      text-align: center;
      padding: 80px 20px;
      height: 100%;
      background: ${primaryColors.secondary};
      @media (max-width: 1399px) {
        padding: 60px 10px;
      }
      @media (max-width: 899px) {
        padding: 30px 10px;
      }
      &.blueBx {
        background: ${primaryColors.primary};
      }
      .titleTxt {
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        color: ${primaryColors.white};
        margin-bottom: 30px;

        @media (max-width: 1499px) {
          font-size: 20px;
        }
        @media (max-width: 1399px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
        }
      }
      button {
        height: 60px;
        margin: 0 auto;
        @media (max-width: 899px) {
          height: 50px;
          span,
          p {
            font-size: 16px;
          }
        }
        &:hover {
          background: ${primaryColors.black};
        }
      }
    }
  }
`;
