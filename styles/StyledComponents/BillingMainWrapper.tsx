import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BillingMainWrapper = styled(Box)`
  .wrapper_authForm {
    position: relative;
    .singleInputWrap {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      .MuiInputBase-root {
        border-radius: 10px;
        height: 70px;
        @media (max-width: 1399px) {
          height: 60px;
        }
        input {
          font-size: 18px;
          font-weight: 500;
          &::placeholder {
            color: ${primaryColors.primary};
          }
          &::-webkit-input-placeholder {
            color: ${primaryColors.primary};
          }
          &::-moz-placeholder {
            color: ${primaryColors.primary};
          }
        }
      }
    }
  }
  .btnWrapper {
    position: relative;
    max-width: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px auto 0;
    button {
      width: 100%;
      height: 60px;
      border-radius: 10px;
      text-transform: capitalize !important;

      @media (max-width: 899px) {
        height: 50px;
      }
    }
  }
  .wrapper_formTw {
    display: flex;
    margin: 0 -7px;

    @media (max-width: 899px) {
      flex-wrap: wrap;
    }
    .singleInputWrap {
      width: 50%;
      padding: 0 7px;

      @media (max-width: 899px) {
        width: 100%;
        margin-bottom: 15px;
      }
    }
  }
  .wrapper_mainBoxCart {
    position: relative;
    border: 1px solid ${primaryColors.primary};
    background: ${primaryColors.primary};
    padding: 20px 20px 80px 30px;
    border-radius: 5px;
    @media (max-width: 1399px) {
      padding: 20px;
    }
    @media (max-width: 899px) {
      padding: 16px;
    }
    .btnWrp {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      button {
        width: 42px;
        height: 42px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${primaryColors.white};
        padding: 0;
        min-width: auto;
        @media (max-width: 1399px) {
          width: 50px;
          height: 50px;
        }
        @media (max-width: 899px) {
          width: 40px;
          height: 40px;
        }
      }
    }
    .title {
      font-weight: 700;
      font-size: 25px;
      color: ${primaryColors.white};
      margin-bottom: 20px;
      max-width: 100%;

      @media (max-width: 1399px) {
        font-size: 20px;
        margin-bottom: 12px;
      }
      @media (max-width: 899px) {
        margin-bottom: 8px;
        font-size: 18px;
      }
    }
    p {
      font-weight: 700;
      font-size: 25px;
      color: ${primaryColors.white};
      max-width: 100%;
      margin-bottom: 24px;
      @media (max-width: 1399px) {
        font-size: 18px;
      }

      @media (max-width: 899px) {
        margin-bottom: 12px;
        font-size: 16px;
      }
    }
  }
`;
