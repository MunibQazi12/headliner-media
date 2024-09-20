import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeAboutStyled = styled(Box)`
  padding: 96px 0 50px;
  @media (max-width: 1499px) {
    padding: 80px 0 40px;
  }
  @media (max-width: 1399px) {
    padding: 60px 0 30px;
  }
  @media (max-width: 1199px) {
    padding: 30px 0;
  }
  @media (max-width: 599px) {
    padding: 0 0 30px;
  }
  .cmnTextWrap {
    position: relative;
    font-size: 27px;
    color: ${primaryColors.secondary};
    margin-bottom: 30px;
    margin-top: 10px;

    @media (max-width: 899px) {
      font-size: 20px;
      margin-bottom: 16px;
    }

    @media (max-width: 599px) {
      font-size: 18px;
    }
  }
  .allCardBoxWrap {
    padding-top: 30px;
  }
`;
