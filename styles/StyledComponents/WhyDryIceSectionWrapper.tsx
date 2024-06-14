import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WhyDryIceSectionWrapper = styled(Box)`
  .wrapper_whyChose {
    position: relative;
    .mainWhyChose {
      .whyChoseCart {
        position: relative;
        padding-top: 30px;
        .innerCartBox {
          position: relative;
          width: 100%;
          border: 1px solid ${primaryColors.secondary};
          border-radius: 10px;
          padding: 28px 10px;
          @media (max-width: 1499px) {
            padding: 16px 10px;
          }
          figure {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            max-width: 192px;
            margin: 0 auto 36px;
            @media (max-width: 1499px) {
              margin: 0 auto 20px;
              max-width: 140px;
            }
            img {
              width: 100%;
              height: auto;
            }
          }
          p {
            font-weight: 700;
            font-size: 28px;
            text-align: center;
            color: ${primaryColors.primary};
            @media (max-width: 1499px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;
