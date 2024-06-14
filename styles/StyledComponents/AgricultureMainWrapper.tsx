import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const AgricultureMainWrapper = styled(Box)`
  .extraGap {
    max-width: 1680px;
    margin: 0 auto;
    @media (max-width: 1799px) {
      max-width: 1400px;
    }
    @media (max-width: 1499px) {
      max-width: 1200px;
    }

    @media (max-width: 1399px) {
      max-width: 100%;
    }
    .wrapper_mainBreadcrum {
      .MuiContainer-root {
        padding: 0;

        @media (max-width: 1399px) {
          padding: 0 30px;
        }
        @media (max-width: 1199px) {
          padding: 0 24px;
        }
      }
    }
  }
  .wrapper_mainBreadcrum {
    .wrapperText {
      ul {
        justify-content: flex-start !important;
      }
    }
  }
  .wrapper_textInfo {
    position: relative;

    h2 {
      color: ${primaryColors.primary};
      margin-bottom: 20px;

      @media (max-width: 1799px) {
        font-size: 60px;
      }
      @media (max-width: 1499px) {
        font-size: 50px;
      }
      @media (max-width: 1199px) {
        font-size: 40px;
      }
      @media (max-width: 899px) {
        font-size: 30px;
      }
    }
    p {
      font-size: 27px;
      font-weight: 500;
      color: ${primaryColors.primary};
      margin-bottom: 24px;
      @media (max-width: 1499px) {
        font-size: 20px;
      }
      @media (max-width: 1499px) {
        font-size: 18px;
      }
    }
    h3 {
      font-size: 30px;
      font-weight: 700;
      color: ${primaryColors.primary};
      margin-bottom: 20px;
      @media (max-width: 1499px) {
        font-size: 24px;
      }
    }
    .wrapper_inputFld {
      position: relative;
      margin-bottom: 20px;
      @media (max-width: 1499px) {
        margin-bottom: 10px;
      }
      .MuiInputBase-root {
        height: 81px;
        border-radius: 10px;
        padding-right: 230px;

        @media (max-width: 1199px) {
          height: 70px;
        }
        @media (max-width: 899px) {
          padding: 10px 16px;
          height: 60px;
        }
        input {
          font-size: 20px;
          font-weight: 600;
          color: ${primaryColors.primary};
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
      .btnWrap {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;

        @media (max-width: 899px) {
          transform: inherit;
          position: relative;
          width: 100%;
          right: 0;
          top: inherit;
          margin-top: 10px;
        }
        button {
          background: ${primaryColors.secondary};
          border-radius: 10px;
          padding: 10px 18px;
          font-size: 21px;
          font-weight: 700;
          color: ${primaryColors.white};
          @media (max-width: 1499px) {
            font-size: 18px;
          }
          @media (max-width: 1499px) {
            font-size: 16px;
          }

          @media (max-width: 899px) {
            width: 100%;
          }
          &:hover {
            background: ${primaryColors.primary};
          }
        }
      }
    }
    span {
      display: block;
      font-weight: 500;
      font-size: 18px;
      color: ${primaryColors.primary};
      padding-left: 20px;

      @media (max-width: 1499px) {
        font-size: 16px;
      }
    }
  }
  .imgWrapper {
    position: relative;
    figure {
      width: 100%;
      line-height: 0;
      img {
        width: 100%;
      }
    }
  }
  .dryIceSection {
    position: relative;
    padding: 100px 80px 60px;
    @media (max-width: 1799px) {
      max-width: 1400px;
      margin: 0 auto;
      padding: 100px 40px 60px;
    }
    @media (max-width: 1499px) {
      padding: 80px 30px 60px;
      max-width: 1200px;
    }
    @media (max-width: 1399px) {
      padding: 60px 40px 40px;
    }
    @media (max-width: 1199px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .wrapper_listItem {
      position: relative;
      margin-top: 40px;
      padding: 0 30px;

      @media (max-width: 1399px) {
        padding: 0 24px;
      }
      @media (max-width: 1199px) {
        margin-top: 20px;
        padding: 0 10px;
      }
      @media (max-width: 599px) {
        margin-top: 10px;
        padding: 0;
      }
      p {
        font-weight: 500;
        font-size: 28px;
        color: ${primaryColors.primary};
        @media (max-width: 1399px) {
          font-size: 24px;
        }
        @media (max-width: 1199px) {
          font-size: 20px;
        }
        @media (max-width: 599px) {
          font-size: 18px;
        }
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        span {
          font-weight: 700;
          color: ${primaryColors.primary};
          display: inline-flex;
          padding-right: 10px;
          font-size: 28px;
          @media (max-width: 1399px) {
            font-size: 24px;
          }
          @media (max-width: 1199px) {
            font-size: 20px;
          }
          @media (max-width: 599px) {
            font-size: 18px;
            padding-left: 8px;
          }
        }
      }
    }
  }
  .infoTabInner {
    position: relative;
    padding-top: 36px;
    max-width: 1024px;
    margin: 0 auto;
    @media (max-width: 1199px) {
      padding-top: 20px;
    }
    @media (max-width: 599px) {
      padding-top: 10px;
    }
    .accordionList {
      h3 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 42px;
        @media (max-width: 1399px) {
          font-size: 36px;
        }
        @media (max-width: 1199px) {
          font-size: 30px;
        }
        @media (max-width: 899px) {
          font-size: 24px;
          margin-bottom: 16px;
        }
      }
    }
    .bigHeading {
      display: none;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      color: ${primaryColors.primary};
      margin-bottom: 24px;
      @media (max-width: 1499px) {
        font-size: 18px;
      }
      @media (max-width: 1399px) {
        font-size: 16px;
      }
    }
    .bigText {
      font-size: 62px;
      font-weight: 700;
      @media (max-width: 1499px) {
        font-size: 50px;
      }
      @media (max-width: 1399px) {
        font-size: 40px;
      }
    }
    .smlTxt {
      font-size: 33px;
      font-weight: 700;
      @media (max-width: 1499px) {
        font-size: 24px;
      }
      @media (max-width: 1399px) {
        font-size: 20px;
      }
    }
    .MuiAccordionSummary-content {
      p {
        margin-bottom: 0;
      }
    }
  }
  .deliveredProduct {
    margin-bottom: 40px;
    @media (max-width: 1199px) {
      margin-bottom: 30px;
    }
    @media (max-width: 899px) {
      margin-bottom: 20px;
    }
    @media (max-width: 599px) {
      margin-bottom: 14px;
    }
  }
  .allCardBoxWrap {
    padding-bottom: 40px;

    @media (max-width: 599px) {
      padding-bottom: 30px;
    }
  }
`;
