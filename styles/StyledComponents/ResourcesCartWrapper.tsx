import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ResourcesCartWrapper = styled(Box)`
  .wrapperInfoBox {
    position: relative;
    width: 100%;
    figure {
      width: 100%;
      line-height: 0;
      a {
        width: 100%;
        display: block;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        background: transparent;
        padding: 0;

        img {
          width: 100%;
          transition: 0.3s ease-in-out;
          height : 293px;
        }
      }
    }
    a {
      width: 100%;
      padding: 24px 10px;
      text-align: start;
      color: ${primaryColors.secondary};
       font-size: 1.55vw;
      font-weight: 600;
      line-height : 1.2;

      @media (max-width: 1799px) {
        font-size: 22px;
      }
      @media (max-width: 1499px) {
        font-size: 18px;
        padding: 16px 10px;
      }
    }
  }

  }
`;
