import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ClientTestimonialWraper = styled(Box)`
  padding: 110px 0 40px;
  @media (max-width: 1499px) {
    padding: 80px 0 20px;
  }
  @media (max-width: 1399px) {
    padding: 60px 0 20px;
  }
  .clientTestimonial_main {
    position: relative;
    .wrapper_mainTestimonial {
      position: relative;
    }
    .allTestimonialCard {
      padding-top: 30px;
      .slick-slider {
        .slick-list {
          margin: 0 -14px;
          @media (max-width: 1199px) {
            margin: 0 -6px;
          }
        }
        .slick-slide {
          padding: 0 14px;

          @media (max-width: 1199px) {
            padding: 0 6px;
          }
        }
      }
      .slick-dots {
        bottom: 0;
        position: relative;
        margin-top: 40px;
        @media (max-width: 1399px) {
          margin-top: 20px;
        }
        li {
          margin: 0 5px;
          width: auto;
          height: auto;

          @media (max-width: 599px) {
            margin: 0 3px;
          }
          &.slick-active {
            button {
              background: ${primaryColors.secondary};
            }
          }
          button {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            padding: 0;
            background: ${primaryColors.primary};
            @media (max-width: 1399px) {
              width: 18px;
              height: 18px;
            }
            @media (max-width: 1199px) {
              width: 15px;
              height: 15px;
            }
            @media (max-width: 599px) {
              width: 12px;
              height: 12px;
            }
            &::before {
              display: none;
            }
          }
        }
      }
    }
    .wrapper_mainLast {
      position: relative;
      margin-top: 100px;
      @media (max-width: 1399px) {
        margin-top: 60px;
      }
      @media (max-width: 1199px) {
        margin-top: 40px;
      }
      @media (max-width: 599px) {
        margin-top: 30px;
      }
      .imgWRap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1340px;

        @media (max-width: 1399px) {
          max-width: 1040px;
        }
        .singleItemImg {
          padding: 0 10px;
          max-width: 240px;
          width: 100%;
          @media (max-width: 1399px) {
            max-width: 200px;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`;
