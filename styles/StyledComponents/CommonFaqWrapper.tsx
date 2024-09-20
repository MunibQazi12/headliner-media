import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonFaqWrapper = styled(Box)`
  .commonFaq_wrapper {
    position: relative;
    padding-bottom: 100px;
    @media (max-width: 1499px) {
      padding-bottom: 80px;
    }
    @media (max-width: 1199px) {
      padding-bottom: 60px;
    }
    @media (max-width: 899px) {
      padding-bottom: 40px;
    }
    @media (max-width: 599px) {
      padding-bottom: 30px;
    }
    .wrapper_inner {
      position: relative;
      .bigHeading {
        text-align: center;
        margin-bottom: 40px;
        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }
      .comnMainAccordian {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        .MuiPaper-root {
          border: 2px solid ${primaryColors.primary};
          border-radius: 0;
          outline: none;
          box-shadow: none;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
          .MuiAccordionSummary-content {
            margin: 0;
            p {
              font-size: 24px;
              font-weight: 700;
              color: ${primaryColors.primary};
              @media (max-width: 1499px) {
                font-size: 22px;
              }
              @media (max-width: 1399px) {
                font-size: 20px;
              }
              @media (max-width: 899px) {
                font-size: 18px;
              }
              @media (max-width: 599px) {
                font-size: 16px;
              }
            }
          }
          .MuiAccordionSummary-root {
            padding: 16px 24px;
            @media (max-width: 1499px) {
              padding: 12px 20px;
            }
            @media (max-width: 1399px) {
              padding: 10px 20px;
            }
            @media (max-width: 599px) {
              padding: 10px;
            }
          }
          .MuiAccordionDetails-root {
            padding: 0 24px 32px;
            font-size: 18px;
            font-weight: 500;
            color: ${primaryColors.primary};
            @media (max-width: 1499px) {
              padding: 0 20px 20px;
              font-size: 16px;
            }
            @media (max-width: 1399px) {
              padding: 0 20px 14px;
            }
            @media (max-width: 599px) {
              padding: 0 10px 10px;
            }
            p {
              font-size: 20px;
              font-weight: 500;
              color: ${primaryColors.primary};
              @media (max-width: 1499px) {
                font-size: 18px;
              }
              @media (max-width: 1499px) {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .MuiAccordionSummary-expandIconWrapper {
      svg {
        @media (max-width: 1399px) {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 599px) {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`;
