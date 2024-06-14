import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ChangePasswordMainWrapper = styled(Box)`
  .wrapper_authForm {
    position: relative;
    max-width: 820px;
    margin: 60px auto 0;
    @media (max-width: 1199px) {
      margin: 40px auto 0;
    }
    @media (max-width: 899px) {
      margin: 10px auto 0;
    }
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
`;
