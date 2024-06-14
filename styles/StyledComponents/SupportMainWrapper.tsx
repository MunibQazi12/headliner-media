import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SupportMainWrapper = styled(Box)`
  .supportMainWrap {
    position: relative;
  }
  .infoAllForm {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
    h3 {
      font-size: 33px;
      font-weight: 800;
      color: ${primaryColors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      @media (max-width: 1399px) {
        font-size: 30px;
      }
      @media (max-width: 1199px) {
        font-size: 24px;
      }
      @media (max-width: 899px) {
        font-size: 20px;
      }
      @media (max-width: 899px) {
        font-size: 18px;
        flex-wrap: wrap;
        text-align: center;
      }
      a {
        font-weight: 700;
        font-size: 30px;
        color: ${primaryColors.primary};
        margin-left: 10px;
        @media (max-width: 1399px) {
          font-size: 24px;
        }
        @media (max-width: 1199px) {
          font-size: 20px;
        }
        @media (max-width: 899px) {
          font-size: 16px;
        }
        &:hover {
          color: ${primaryColors.secondary};
        }
      }
    }
    .wrapper_authForm {
      position: relative;
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
        .MuiInputBase-multiline {
          height: 290px;
          padding: 18px 16px;
          @media (max-width: 899px) {
            height: 180px;
          }
          textarea {
            height: 100% !important;
            padding: 0 !important;
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
      margin: 25px auto 0;
      button {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        text-transform: capitalize !important;
        @media (max-width: 899px) {
          height: 50px;
          padding: 10px 16px;
        }
      }
    }
  }
`;
