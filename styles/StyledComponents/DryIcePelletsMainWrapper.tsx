import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DryIcePelletsMainWrapper = styled(Box)`
  .wrapperMainPellet {
    position: relative;
    .middlePartMain {
      position: relative;
      margin-bottom: 60px;

      @media (max-width: 1399px) {
        margin-bottom: 40px;
      }
      @media (max-width: 899px) {
        margin-bottom: 20px;
      }
      .imageWrapMain {
        position: relative;
        figure {
          width: 100%;
          line-height: 0;
          font-size: 0;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .productMainInfo {
        position: relative;
        h2 {
          margin-bottom: 30px;

          @media (max-width: 1399px) {
            margin-bottom: 16px;
          }
        }
        ul {
          position: relative;
          margin-bottom: 30px;
          @media (max-width: 1399px) {
            margin-bottom: 16px;
          }
          li {
            font-weight: 500;
            font-size: 18px;
            color: ${primaryColors.secondary};
            @media (max-width: 1399px) {
              font-size: 16px;
            }
          }
        }

        .sizeCart {
          position: relative;
          .title {
            font-weight: 700;
            font-size: 28px;
            color: #${primaryColors.primary};
            margin-bottom: 16px;
            @media (max-width: 1499px) {
              font-size: 22px;
            }
            @media (max-width: 1399px) {
              font-size: 20px;
            }
          }

          .radionList {
            .MuiRadioGroup-root {
              flex-direction: row;
              justify-content: space-between;

              @media (max-width: 899px) {
                flex-wrap: wrap;
              }
              .MuiFormControlLabel-root {
                width: 24%;
                margin: 0;
                position: relative;

                @media (max-width: 899px) {
                  width: 49%;
                  margin: 6px 0;
                }
                p {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  padding: 10px;
                  position: relative;
                  z-index: 1;
                  font-size: 14px;
                  font-weight: 500;
                  color: ${primaryColors.primary};
                  text-align: center;
                  span {
                    font-size: 22px;
                    font-weight: 700;
                    color: ${primaryColors.primary};
                    display: block;
                    margin-bottom: 4px;
                  }
                }
                .MuiRadio-root {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  border: 1px solid ${primaryColors.secondary};
                  border-radius: 0;
                  &.Mui-checked {
                    border: 2px solid ${primaryColors.primary};
                    background: ${primaryColors.colorDDEBF8};
                  }
                  svg {
                    display: none;
                  }
                }
              }
            }
          }
        }
        .quantityWrap {
          position: relative;
          display: flex;
          align-items: center;
          margin: 30px 0;

          @media (max-width: 899px) {
            flex-wrap: wrap;
          }
          .title {
            font-weight: 700;
            font-size: 28px;
            color: #${primaryColors.primary};
            margin-right: 24px;
            @media (max-width: 1499px) {
              font-size: 22px;
            }
            @media (max-width: 1399px) {
              font-size: 20px;
            }
          }
          .quantityFld {
            position: relative;
            .MuiInputBase-root {
              min-width: auto;
              width: 120px;
              height: 61px;
              padding: 10px 20px;
              input {
                font-weight: 500;
                font-size: 32px;
                padding: 0;
                text-align: center;
                @media (max-width: 1499px) {
                  font-size: 24px;
                }
              }
              .MuiInputAdornment-root {
                display: none;
              }
            }

            button {
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              min-width: auto;
              padding: 0;
              background: transparent;
              color: ${primaryColors.primary};
              z-index: 9;
              font-size: 24px;
              font-weight: 700;
              &.minusBtn {
                right: inherit;
                left: 10px;
                font-size: 30px;
                height: auto;
                line-height: 1;
              }
            }
          }
          .wrapper_btn {
            position: relative;
            margin-left: 20px;
            width: 100%;

            @media (max-width: 899px) {
              width: 100%;
              margin: 10px 0 0;
            }
            button {
              width: 100%;
              height: 61px;
              padding: 10px 20px;
              border-radius: 10px;

              @media (max-width: 899px) {
                height: 50px;
                font-size: 16px;
              }
            }
          }
        }
        .shipmentDetails {
          position: relative;
          p {
            font-size: 18px;
            font-weight: 500;
            color: ${primaryColors.primary};
            display: flex;
            align-items: center;
            @media (max-width: 1399px) {
              font-size: 16px;
            }
            &:not(:last-child) {
              margin-bottom: 12px;
            }
          }
          button {
            padding: 0;
            min-width: auto;
            background: transparent;
            color: ${primaryColors.secondary};
            font-size: 18px;
            font-weight: 500;
            margin-left: 4px;
            &:hover {
              color: ${primaryColors.primary};
            }
          }
        }
      }
    }
    .wrapper_mainInfoMddl {
      position: relative;
      max-width: 1475px;
      margin: 0 auto;
      @media (max-width: 1699px) {
        max-width: 1370px;
      }
      @media (max-width: 1499px) {
        max-width: 1200px;
      }
      .tabInfoMain {
        position: relative;
        .tabTop {
          .MuiTabs-root {
            .MuiTab-root {
              padding: 0;
              font-weight: 400;
              font-size: 28px;
              color: ${primaryColors.primary};
              border-bottom: 5px solid ${primaryColors.white};
              @media (max-width: 1199px) {
                font-size: 24px;
              }
              @media (max-width: 599px) {
                font-size: 22px;
                border-bottom: 3px solid ${primaryColors.white};
              }
              &:not(:last-child) {
                margin-right: 50px;

                @media (max-width: 1199px) {
                  margin-right: 30px;
                }
                @media (max-width: 599px) {
                  margin-right: 20px;
                }
              }
              &.Mui-selected {
                font-weight: 700;
                border-color: ${primaryColors.primary};
              }
            }
            .MuiTabs-indicator {
              display: none;
            }
          }
        }
        .infoTabInner {
          position: relative;
          padding-top: 36px;
          @media (max-width: 599px) {
            padding-top: 20px;
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

            @media (max-width: 599px) {
              margin-bottom: 16px;
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
            @media (max-width: 1199px) {
              font-size: 30px;
            }
            @media (max-width: 599px) {
              font-size: 24px;
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

            @media (max-width: 599px) {
              font-size: 18px;
            }
          }
        }
        .accordionList {
          position: relative;
          h3 {
            font-weight: 700;
            font-size: 42px;
            text-align: center;
            color: ${primaryColors.primary};
            margin-bottom: 40px;

            @media (max-width: 1399px) {
              font-size: 40px;
              margin-bottom: 30px;
            }
            @media (max-width: 1199px) {
              font-size: 30px;
            }
            @media (max-width: 599px) {
              font-size: 24px;
              margin-bottom: 20px;
            }
          }
          .bigHeading {
            display: none;
          }
          .commonFaq_wrapper {
            padding-bottom: 0;
            .MuiAccordionSummary-content {
              p {
                margin-bottom: 0 !important;
              }
            }
          }
        }
      }
    }
  }
`;
