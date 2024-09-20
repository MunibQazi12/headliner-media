import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ResourcesMainWrapper = styled(Box)`
  .wrapper_mainResorc {
    position: relative;
    padding: 0 0 100px;
    @media (max-width: 1499px) {
      padding: 0 0 60px;
    }
    @media (max-width: 899px) {
      padding: 0 0 40px;
    }
    @media (max-width: 599px) {
      padding: 0 0 30px;
    }
    .wrapper_infoMain {
      position: relative;
      .bigHeading {
        text-align: center;
        margin-bottom: 50px;
        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }
      .allCardBoxWrap {
        margin-bottom: 60px;

        @media (max-width: 1499px) {
          margin-bottom: 40px;
        }
      }
      .allSocialList {
        position: relative;
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            width: auto;
            padding: 0 6px;

            @media (max-width: 599px) {
              padding: 0 4px;
            }
            a {
              width: 55px;
              height: 55px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: ${primaryColors.primary};

              @media (max-width: 899px) {
                width: 45px;
                height: 45px;
              }
              @media (max-width: 599px) {
                width: 40px;
                height: 40px;
              }
              &:hover {
                transform: scale(1.06);
              }
            }
          }
        }
      }
    }
  }
`;
