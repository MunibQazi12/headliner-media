/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const FooterWrap = styled(Box)`
  .footerTopMain {
    position: relative;
    background: ${primaryColors.primary};
    padding: 80px 0 100px;

    @media (max-width: 1399px) {
      padding: 40px 0 60px;
    }

    @media (max-width: 1199px) {
      padding: 30px 0;
    }
  }
  .wrapper_topFooter {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .footerLogoWrap {
      width: 35%;
      padding-right: 150px;
      @media (max-width: 1499px) {
        padding-right: 80px;
      }
      @media (max-width: 1399px) {
        padding-right: 20px;
        width: 30%;
      }
      @media (max-width: 1199px) {
        padding-right: 16px;
        width: 28%;
      }

      @media (max-width: 899px) {
        width: 100%;
        padding-right: 0;
        margin-bottom: 30px;
        text-align: center;
      }
      .footerLogoInfo {
        position: relative;
        a {
          display: inline-block;
          margin-bottom: 20px;

          @media (max-width: 899px) {
            margin-bottom: 16px;
            max-width: 180px;
          }
        }
        p {
          font-weight: 400;
          font-size: 21px;
          color: ${primaryColors.white};
          margin-bottom: 24px;

          @media (max-width: 1399px) {
            font-size: 18px;
          }
          @media (max-width: 1199px) {
            font-size: 14px;
          }

          @media (max-width: 899px) {
            margin-bottom: 14px;
          }
        }
      }
      .listPhone {
        position: relative;
        li {
          @media (max-width: 899px) {
            justify-content: center;
          }
          &:not(:last-child) {
            margin-bottom: 14px;
            line-height: 1;

            @media (max-width: 1199px) {
              margin-bottom: 8px;
            }
          }
            
          p {
            font-weight: 700;
            font-size: 18px;
            color: ${primaryColors.white};
            margin-bottom: 0;
            line-height: 1;

            @media (max-width: 1399px) {
              font-size: 16px;
            }
            @media (max-width: 1199px) {
              font-size: 14px;
            }
            a {
              color: ${primaryColors.white};
              margin-bottom: 0;
              &:hover {
                color: ${primaryColors.secondary};
              }
            }
          }
        }
      }
      .socialIcon {
        display: flex;
        align-items: center;
        margin-top: 40px;
        @media (max-width: 899px) {
          margin-top: 16px;
          justify-content: center;
        }
        li {
          padding: 0 9px 0 0;
          width: auto;
          &:last-child {
            padding: 0;
          }
          a {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.13);
            margin-bottom: 0;
            &:hover {
              transform: scale(1.03);
            }
          }
        }
      }
    }
    .wrapperMainLinkWrap {
      width: 65%;
      display: flex;
      margin: 0 -15px;

      @media (max-width: 1399px) {
        width: 70%;
      }
      @media (max-width: 1199px) {
        width: 72%;
      }

      @media (max-width: 899px) {
        width: 100%;
        margin: 0;
      }

      @media (max-width: 599px) {
        flex-wrap: wrap;
      }
      .singleMenuLink {
        width: 33.33%;
        padding: 0 15px;

        @media (max-width: 899px) {
          padding: 0 15px 0 0;
        }

        @media (max-width: 599px) {
          width: 50%;
          margin-bottom: 20px;
        }
        &:first-child {
          @media (max-width: 1199px) {
            width: 26%;
          }
          @media (max-width: 899px) {
            width: 30%;
          }
          @media (max-width: 599px) {
            width: 40%;
            padding: 0 10px 0 0;
          }

          @media (max-width: 340px) {
            width: 100%;
            padding: 0;
          }
        }
        &:nth-child(2) {
          @media (max-width: 1199px) {
            width: 40%;
          }
          @media (max-width: 899px) {
            width: 35%;
          }
          @media (max-width: 599px) {
            width: 60%;
            padding-right: 0;
          }
          @media (max-width: 340px) {
            width: 100%;
            padding: 0;
          }
        }
        &:nth-child(3) {
          @media (max-width: 1199px) {
            width: 34%;
          }
          @media (max-width: 899px) {
            width: 35%;
            padding-right: 0;
          }
          @media (max-width: 599px) {
            width: 100%;
            margin-bottom: 0;
          }
        }
        .wrapper_footerMenu {
          position: relative;
          .titletxt {
            font-weight: 700;
            font-size: 36px;
            color: ${primaryColors.white};
            margin-bottom: 20px;
            @media (max-width: 1399px) {
              font-size: 30px;
            }
            @media (max-width: 1199px) {
              font-size: 24px;
            }

            @media (max-width: 899px) {
              font-size: 20px;
              margin-bottom: 10px;
            }
          }
          ul {
            li {
              @media (max-width: 599px) {
                line-height: 1.2;
              }
              &:not(:last-child) {
                margin-bottom: 12px;
                @media (max-width: 1199px) {
                  margin-bottom: 8px;
                }

                @media (max-width: 899px) {
                  margin-bottom: 4px;
                }
                @media (max-width: 599px) {
                  margin-bottom: 12px;
                }
              }
              a {
                color: ${primaryColors.white};
                font-size: 20px;

                @media (max-width: 1399px) {
                  font-size: 16px;
                }
                @media (max-width: 1199px) {
                  font-size: 14px;
                }
                &:hover {
                  color: ${primaryColors.secondary};
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
  .footerBtmWrapper {
    position: relative;
    background: ${primaryColors.secondary};
    padding: 20px 0;

    @media (max-width: 1399px) {
      padding: 14px 0;
    }

    @media (max-width: 1199px) {
      padding: 10px 0;
    }
    .footerWrapBtm {
      display: flex;
      align-items: center;

      @media (max-width: 899px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      p {
        font-size: 18px;
        color: ${primaryColors.white};
        padding-right: 24px;

        @media (max-width: 1399px) {
          font-size: 16px;
        }

        @media (max-width: 1199px) {
          font-size: 14px;
        }

        @media (max-width: 899px) {
          padding: 0 0 10px;
        }
      }
      a {
        color: ${primaryColors.white};
        font-size: 18px;
        @media (max-width: 1399px) {
          font-size: 16px;
        }
        @media (max-width: 1199px) {
          font-size: 14px;
        }
        &:hover {
          color: ${primaryColors.primary};
        }
      }
      ul {
        display: flex;
        align-items: center;

        @media (max-width: 899px) {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 479px) {
          flex-wrap: wrap;
        }
        li {
          padding: 0 15px;
          border-right: 1px solid ${primaryColors.white};
          width: auto;
          line-height: 1;

          @media (max-width: 479px) {
            width: 100%;
            justify-content: center;
            text-align: center;
            padding: 0 0 10px;
            border: 0;
          }
          &:last-child {
            border: 0;

            @media (max-width: 479px) {
              padding: 0;
            }
          }
        }
      }
    }
  }
  .fixedBtn {
    position: relative;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${primaryColors.primary};
    border: 1px solid ${primaryColors.black};
    border-radius: 20px;
    min-width: auto;
    margin-left: auto;
    @media (max-width: 1199px) {
      height: 40px;
      width: 40px;
      border-radius: 10px;
    }

    @media (max-width: 899px) {
      border-radius: 5px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
    &:hover {
      background: ${primaryColors.black};
    }
  }
`;
