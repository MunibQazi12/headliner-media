import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DistributionCentersMainWrap = styled(Box)`
  position: relative;
  padding-top: 40px;

  @media (max-width: 599px) {
    padding-top: 30px;
  }
  .cus_container {
    padding: 0 80px !important;

    @media (max-width: 1199px) {
      padding: 0 24px !important;
    }
    @media (max-width: 599px) {
      padding: 0 16px !important;
    }
  }
  .wrapper_mainDistribute {
    position: relative;
    h1 {
      font-size: 72px;
      text-align: center;
      margin-bottom: 60px;
      @media (max-width: 1499px) {
        font-size: 60px;
        margin-bottom: 40px;
      }
      @media (max-width: 1399px) {
        font-size: 50px;
      }
      @media (max-width: 1199px) {
        font-size: 40px;
      }
      @media (max-width: 899px) {
        font-size: 30px;
      }
      @media (max-width: 599px) {
        font-size: 26px;
      }
    }
    .imgWrapMap {
      position: relative;
      figure {
        width: 100%;
        line-height: 0;
        img {
          width: 100%;
        }
      }
    }
    .textWrapMap_info {
      position: relative;
      background: ${primaryColors.color62b4e4};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding: 16px;
      h2 {
        font-size: 62px;
        margin-bottom: 40px;
        color: ${primaryColors.primary};

        @media (max-width: 1499px) {
          font-size: 50px;
        }
        @media (max-width: 1399px) {
          font-size: 40px;
        }
        @media (max-width: 1199px) {
          font-size: 30px;
        }
        @media (max-width: 599px) {
          font-size: 24px;
          margin-bottom: 20px;
        }
      }
      p {
        font-size: 42px;
        font-weight: 500;
        color: ${primaryColors.primary};
        line-height: 1.4;
        @media (max-width: 1499px) {
          font-size: 36px;
        }
        @media (max-width: 1399px) {
          font-size: 30px;
        }
        @media (max-width: 1199px) {
          font-size: 24px;
        }
        @media (max-width: 599px) {
          font-size: 20px;
        }
        @media (max-width: 499px) {
          font-size: 18px;
        }
      }
    }
    .singleMap {
      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }

      &:nth-child(even) {
        .MuiGrid-root {
          flex-direction: row-reverse;
        }
      }
    }
    .allListItemsData {
    }
    .btnwrapper {
      margin-top: 50px;
      @media (max-width: 1199px) {
        margin-top: 30px;
      }
      @media (max-width: 599px) {
        margin-top: 20px;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        background: ${primaryColors.color3074F1};
        padding: 16px 40px;
        font-size: 21px;
        font-weight: 700;
        color: ${primaryColors.white};
        border-radius: 10px;

        @media (max-width: 1199px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
          padding: 10px 16px;
        }
        @media (max-width: 390px) {
          font-size: 14px;
        }
        &:hover {
          background: ${primaryColors.black};
        }
      }
    }
  }
`;
