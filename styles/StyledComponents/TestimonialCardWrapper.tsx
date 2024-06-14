import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const TestimonialCardWrapper = styled(Box)`
  .wrapMainCart {
    position: relative;
    border: 1px solid ${primaryColors.colorE4E4E4};
    padding: 40px 45px;
    text-align: center;
    border-radius: 10px;
    @media (max-width: 1499px) {
      padding: 30px 16px;
    }
    @media (max-width: 1199px) {
      padding: 20px 10px;
    }
    .MuiRating-root {
      margin-bottom: 20px;
      > span {
        padding: 0 5px;
      }
      .MuiRating-icon {
        @media (max-width: 1499px) {
          width: 24px;
        }
      }
    }
    p {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      color: ${primaryColors.primary};
      margin-bottom: 20px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      line-clamp: 7;
      -webkit-box-orient: vertical;
      min-height: 210px;

      @media (max-width: 1499px) {
        font-size: 18px;
      }
      @media (max-width: 1199px) {
        font-size: 16px;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 21px;
      text-align: center;
      color: ${primaryColors.primary};

      @media (max-width: 1199px) {
        font-size: 18px;
      }
    }
  }
`;
