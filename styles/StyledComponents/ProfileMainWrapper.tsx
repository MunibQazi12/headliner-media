import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ProfileMainWrapper = styled(Box)`
  .profileMainWrap {
    position: relative;
    .formWrapper {
      max-width: 820px;
      margin: 60px auto 0;
      @media (max-width: 1199px) {
        margin: 40px auto 0;
      }
      @media (max-width: 899px) {
        margin: 10px auto 0;
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
          max-width: 214px;
          margin: 0 auto;
          width: 100%;
          height: 60px;
          border-radius: 10px;
          text-transform: capitalize !important;
          @media (max-width: 899px) {
            height: 50px;
          }
        }
      }
    }
  }
`;
