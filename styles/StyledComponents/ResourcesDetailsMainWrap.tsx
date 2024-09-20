import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ResourcesDetailsMainWrap = styled(Box)`
  .wrapper_resourceDetails {
    position: relative;
    .innerTopDetails {
      position: relative;
      .wrapper_mainTop {
        padding-left: 112px;
        @media (max-width: 1299px) {
          padding-left: 72px;
        }

        @media (max-width: 899px) {
          padding-left: 0;
        }
        .bigHeading {
          margin-bottom: 40px;
          @media (max-width: 599px) {
            margin-bottom: 20px;
          }
        }
        figure {
          width: 100%;
          line-height: 0;
          margin-bottom: 40px;

          @media (max-width: 899px) {
            margin-bottom: 20px;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .wrapperMainInfoText {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      .wrapper_leftInfo {
        width: 78px;

        @media (max-width: 1299px) {
          width: 60px;
        }

        @media (max-width: 899px) {
          width: 100%;
          margin-bottom: 16px;
        }
        .wrapper_socialView {
          position: relative;
          border: 2px solid ${primaryColors.primary};
          border-radius: 5px;
          overflow: hidden;

          @media (max-width: 899px) {
            display: flex;
            align-items: center;
          }
          p {
            background: ${primaryColors.colorA8E7FF};
            border-bottom: 2px solid ${primaryColors.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-weight: 400;
            font-size: 12px;
            color: ${primaryColors.primary};
            padding: 10px 0;

            @media (max-width: 1299px) {
              font-size: 11px;
            }

            @media (max-width: 899px) {
              border-bottom: 0;
              border-right: 2px solid ${primaryColors.primary};
              padding: 6px 16px;
            }
            span {
              font-weight: 700;
              font-size: 22px;
              color: ${primaryColors.primary};
              display: block;
              @media (max-width: 1299px) {
                font-size: 18px;
              }
            }
          }
          ul {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 0 auto;
            padding: 10px 0;

            @media (max-width: 899px) {
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              padding: 0 10px;
            }
            li {
              width: auto;
              padding: 6px 0;

              @media (max-width: 899px) {
                padding: 6px 10px;
              }
              a {
                display: inline-block;
                line-height: 0;
                &:hover {
                  transform: scale(1.05);
                }
              }
            }
          }
        }
      }
      .wrapper_rightInfoText {
        width: calc(100% - 78px);
        padding-left: 40px;

        @media (max-width: 1299px) {
          padding-left: 12px;
          width: calc(100% - 60px);
        }

        @media (max-width: 899px) {
          width: 100%;
          padding-left: 0;
        }
        p {
          font-size: 20px;
          color: ${primaryColors.primary};
          font-weight: 500;
          @media (max-width: 1499px) {
            font-size: 18px;
          }
          @media (max-width: 1399px) {
            font-size: 16px;
          }
          &:not(:last-child) {
            margin-bottom: 28px;

            @media (max-width: 1399px) {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
    .otherArticl {
      position: relative;
      padding: 100px 0;
      @media (max-width: 1499px) {
        padding: 80px 0;
      }
      @media (max-width: 1399px) {
        padding: 60px 0;
      }
      @media (max-width: 899px) {
        padding: 40px 0;
      }
      @media (max-width: 599px) {
        padding: 30px 0;
      }
      .allCardBoxWrap {
        padding-top: 40px;
        @media (max-width: 1199px) {
          padding-top: 20px;
        }
      }
    }
  }
`;
