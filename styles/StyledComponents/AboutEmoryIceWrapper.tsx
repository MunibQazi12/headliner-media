import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const AboutEmoryIceWrapper = styled(Box)`
  .mainAboutWrap {
    position: relative;
    padding: 60px 0;
    @media (max-width: 1199px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .wrapper_infoAbout {
      position: relative;
      max-width: 1340px;
      margin: 0 auto;
      .bigHeading {
        text-align: center;
        margin-bottom: 40px;
        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }
      p {
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        color: ${primaryColors.primary};
        @media (max-width: 1399px) {
          font-size: 16px;
        }
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
