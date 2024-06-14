import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

export const HomeBannerStyled = styled(Stack)`
  padding: 139px 0 96px;
  @media (max-width: 1499px) {
    padding: 80px 0 60px;
  }
  @media (max-width: 1399px) {
    padding: 80px 0 40px;
  }
  @media (max-width: 1199px) {
    padding: 60px 0 40px;
  }
  @media (max-width: 899px) {
    padding: 40px 0px;
  }
  @media (max-width: 599px) {
    padding: 30px 0px;
  }
  .bannerHeading {
    padding-bottom: 102px;
    @media (max-width: 1399px) {
      padding-bottom: 60px;
    }
    @media (max-width: 1199px) {
      padding-bottom: 40px;
    }
    @media (max-width: 599px) {
      padding-bottom: 20px;
    }
    h1 {
      text-transform: inherit;
    }
    p {
      color: ${primaryColors?.secondary};
      font-size: 31px;
      font-weight: 600;
      margin-top: 20px;

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
