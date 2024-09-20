import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SeoTopMainWrapper = styled(Box)`
  padding: 40px;

  @media (max-width: 899px) {
    padding: 30px;
  }
  @media (max-width: 599px) {
    padding: 30px;
  }
  .seoMain_inner {
    position: relative;
    .wrapper_mainInfo {
      position: relative;
      .wrapper_textInfo {
        position: relative;
        h1 {
          font-size: 72px;
          margin-bottom: 30px;
          @media (max-width: 1399px) {
            font-size: 52px;
          }
          @media (max-width: 1199px) {
            font-size: 40px;
          }
          @media (max-width: 899px) {
            font-size: 30px;
            margin-bottom: 16px;
          }
          @media (max-width: 599px) {
            font-size: 26px;
          }
        }
        .subText {
          font-weight: 600;
          font-size: 31px;
          color: ${primaryColors.secondary};
          margin-bottom: 30px;
          @media (max-width: 899px) {
            font-size: 24px;
            margin-bottom: 16px;
          }
          @media (max-width: 599px) {
            font-size: 20px;
          }
        }
        .wrapper_form {
          position: relative;
          p {
            font-weight: 700;
            font-size: 30px;
            color: ${primaryColors.primary};
            margin-bottom: 20px;
            @media (max-width: 899px) {
              font-size: 24px;
              margin-bottom: 16px;
            }
            @media (max-width: 599px) {
              font-size: 20px;
            }
          }
          .formOnly {
            position: relative;
            max-width : 883px;
            .MuiInputBase-root {
              padding: 14px 230px 14px 16px;
              border-radius: 10px;

              @media (max-width: 599px) {
                padding: 6px 16px;
              }
              input {
                font-size: 24px;
                color: ${primaryColors.primary};

                @media (max-width: 1199px) {
                  font-size: 20px;
                }
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
            button {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              height: 60px;
              padding: 10px 24px;

              @media (max-width: 599px) {
                position: static;
                transform: inherit;
                width: 100%;
                margin-top: 10px;
                height: 50px;
              }
            }
          }
        }
      }
    }
  }
  .wrapper_img {
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
