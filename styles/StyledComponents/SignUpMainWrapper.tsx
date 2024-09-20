import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import {textAlign} from "@mui/system";

export const SignUpMainWrapper = styled(Box)`
  .wrapper_authMain {
    position: relative;
    padding: 80px 0;
    @media (max-width: 1499px) {
      padding: 70px 0;
    }
    @media (max-width: 1399px) {
      padding: 60px 0;
    }
    @media (max-width: 1199px) {
      padding: 40px 0;
    }
    .wrapper_authInner {
      position: relative;
      .textWrap {
        margin-bottom: 30px;
        h2 {
          position: relative;
          text-align: center;
          font-size: 42px;
          margin-bottom: 12px;

          @media (max-width: 1399px) {
            font-size: 30px;
          }
          @media (max-width: 1199px) {
            font-size: 30px;
          }
          @media (max-width: 899px) {
            font-size: 24px;
          }
        }
        p {
          font-weight: 500;
          font-size: 20px;
          text-align: center;
          color: ${primaryColors.primary};

          @media (max-width: 899px) {
            font-size: 16px;
          }
        }
      }

      .wrapper_authForm {
        position: relative;
        max-width: 820px;
        margin: 0 auto;
        .singleInputWrap {
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          .MuiInputBase-root {
            border-radius: 10px;
            height: 70px;

            @media (max-width: 899px) {
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
        max-width: 820px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px auto 30px;
        @media (max-width: 899px) {
          margin: 10px auto 16px;
        }
        button {
          width: 100%;
          height: 60px;
          border-radius: 10px;

          @media (max-width: 899px) {
            height: 50px;
          }
        }
      }
      .orText {
        position: relative;
        text-align: center;
        p {
          display: inline-block;
          padding: 0 22px;
          position: relative;
          background: ${primaryColors.white};
          font-size: 16px;
          font-weight: 500;
          z-index: 1;
          line-height: 1;
          &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 17px;
            height: 1px;
            background: ${primaryColors.primary};
          }
          &::after {
            position: absolute;
            content: "";
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 17px;
            height: 1px;
            background: ${primaryColors.primary};
          }
        }
      }
      .allBtnWrapper {
        position: relative;
        max-width: 820px;
        margin: 30px auto 0;
        @media (max-width: 899px) {
          margin: 16px auto 0;
        }
        button {
          width: 100%;
          border: 1px solid ${primaryColors.primary};
          font-size: 21px;
          font-weight: 700;
          color: ${primaryColors.primary};
          border-radius: 5px;
          display: flex;
          align-items: center;
          position: relative;
          padding: 16px 20px 16px 50px;
          transition: 0.3s ease-in-out;
          @media (max-width: 899px) {
            padding: 8px 16px 8px 40px;
            font-size: 18px;
            height: 50px;
          }

          @media (max-width: 390px) {
            font-size: 16px;
          }
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          &:hover {
            background: ${primaryColors.primary};
            color: ${primaryColors.white};
            svg {
              @media (max-width: 899px) {
                width: 30px;
              }
              path {
                fill: ${primaryColors.white};
              }
            }
          }
          i {
            display: inline-flex;
            align-items: center;
            line-height: 0;
            margin-right: auto;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);

            @media (max-width: 899px) {
              left: 12px;
            }
            svg {
              transition: 0.3s ease-in-out;
              path {
                transition: 0.3s ease-in-out;
              }
            }
          }
        }
      }
    }
    .wrapper_singIn {
      position: relative;
      max-width: 820px;
      text-align: center;
      margin: 30px auto 0;
      @media (max-width: 899px) {
        margin: 16px auto 0;
      }
      p {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        a {
          font-weight: 400;
          color: ${primaryColors.secondary};
          text-decoration: underline;
          margin-left: 6px;
          &:hover {
            text-decoration: none;
            color: ${primaryColors.primary};
          }
        }
      }
    }
    .forgotPasswordWrap {
      position: relative;
      max-width: 820px;
      text-align: center;
      margin: 20px auto;
      @media (max-width: 899px) {
        margin: 10px auto;
      }
      p {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        a {
          font-weight: 400;
          color: ${primaryColors.secondary};
          text-decoration: underline;
          margin-left: 6px;
          &:hover {
            text-decoration: none;
            color: ${primaryColors.primary};
          }
        }
      }
    }
  }
  .text-center {
    text-align: center;
  }
`;
