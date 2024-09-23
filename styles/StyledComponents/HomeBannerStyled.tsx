import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

export const HomeBannerStyled = styled(Stack)`
  padding-top: 60px;
  text-align: center;
  @media (max-width: 1499px) {
    padding-top: 60px;
  }
  @media (max-width: 1399px) {
    padding-top: 48px;
  }
  @media (max-width: 1199px) {
    padding-top: 36px;
  }
  @media (max-width: 899px) {
    padding-top: 24px;
  }
  @media (max-width: 599px) {
    padding-top: 12px;
  }
  .bannerHeading {
    h1 {
      text-transform: inherit;
       font-size: 5.5vw;
      @media (max-width : 1200px) {
       font-size: 44px;
      }
      

     
    }
    p {
      color: ${primaryColors?.secondary};
      font-size: 31px;
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 40px;
      @media (max-width: 1399px) {
        font-size: 22px;
      }
      @media (max-width: 1199px) {
        font-size: 20px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
      }
    }
  }
`;
