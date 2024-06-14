import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const NeedDryIceFormWrapper = styled(Box)`
  .wrapper_mainForm {
    position: relative;
    padding: 100px 0;
    @media (max-width: 1499px) {
      padding: 60px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
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
    .textwrapper_infoMian {
      position: relative;
      h3 {
        margin-bottom: 20px;
      }
      p {
        font-size: 31px;
        font-weight: 500;
        color: ${primaryColors.primary};
        margin-bottom: 24px;
        @media (max-width: 1499px) {
          font-size: 24px;
        }
        @media (max-width: 1399px) {
          font-size: 22px;
        }
        @media (max-width: 1199px) {
          font-size: 18px;
          margin-bottom: 10px;
        }
        @media (max-width: 899px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
        a {
          color: ${primaryColors.secondary};
          display: inline-flex;
        }
      }
      span {
        font-size: 18px;
        font-weight: 500;
        color: ${primaryColors.secondary};
        display: block;
        @media (max-width: 899px) {
          font-size: 16px;
        }
        @media (max-width: 599px) {
          font-size: 14px;
        }
      }
    }
    .formWrapper_main {
      position: relative;
      background: ${primaryColors.primary};
      border-radius: 10px;
      padding: 50px 30px;

      @media (max-width: 1199px) {
        padding: 20px 15px;
      }
      .singleinput_wrap {
        margin-bottom: 15px;
        .MuiInputBase-root {
          border: 1px ${primaryColors.color283653};
          border-radius: 10px;
          height: 80px;
          padding: 12px 24px;

          @media (max-width: 1499px) {
            height: 60px;
          }
          input {
            font-size: 20px;
            font-weight: 600;
            color: ${primaryColors.color08204F};
            @media (max-width: 1499px) {
              font-size: 18px;
            }
            &::placeholder {
              color: ${primaryColors.color08204F};
            }
            &::-webkit-input-placeholder {
              color: ${primaryColors.color08204F};
            }
            &::-moz-placeholder {
              color: ${primaryColors.color08204F};
            }
          }
        }
        .MuiInputBase-multiline {
          height: 243px;
          padding: 24px;
          @media (max-width: 1499px) {
            height: 180px;
            padding: 16px 24px;
          }
          textarea {
            height: 100% !important;
            padding: 16px 0;
            font-size: 20px;
            font-weight: 600;
            color: ${primaryColors.color08204F};

            @media (max-width: 1499px) {
              font-size: 18px;
            }
            &::placeholder {
              color: ${primaryColors.color08204F};
            }
            &::-webkit-input-placeholder {
              color: ${primaryColors.color08204F};
            }
            &::-moz-placeholder {
              color: ${primaryColors.color08204F};
            }
          }
        }
      }
      .btnWrap {
        margin-top: 30px;

        @media (max-width: 1199px) {
          margin-top: 20px;
        }
        button {
          width: 100%;
          background: ${primaryColors.secondary};
          padding: 16px 40px;
          font-size: 21px;
          font-weight: 700;
          color: ${primaryColors.white};
          border-radius: 10px;

          @media (max-width: 1199px) {
            padding: 12px 20px;
            font-size: 18px;
          }
          &:hover {
            background: ${primaryColors.white};
            color: ${primaryColors.primary};
          }
        }
      }
    }
  }
`;
