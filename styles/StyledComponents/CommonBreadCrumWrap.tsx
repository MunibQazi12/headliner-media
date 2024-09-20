import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonBreadCrumWrap = styled(Box)`
  padding: 60px 0 20px;
  @media (max-width: 1399px) {
    padding: 30px 0 20px;
  }
  @media (max-width: 1199px) {
    padding: 16px 0;
  }
  .wrapper_mainBreadcrum {
    position: relative;
    .wrapperText {
      position: relative;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          width: auto;
          padding: 0 4px;
          display: inline-flex;
          align-items: center;
          line-height: 1;
          p {
            font-size: 20px;
            font-weight: 600;
            color: ${primaryColors.primary};
            line-height: 1;

            @media (max-width: 1199px) {
              font-size: 18px;
            }
            @media (max-width: 899px) {
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 250px;
            }

            @media (max-width: 599px) {
              max-width: 150px;
            }
            @media (max-width: 360px) {
              max-width: 120px;
            }
          }
          a {
            font-size: 20px;
            font-weight: 600;
            color: ${primaryColors.secondary};
            line-height: 1;
            @media (max-width: 1199px) {
              font-size: 18px;
            }
            @media (max-width: 899px) {
              font-size: 16px;
            }
            &:hover {
              color: ${primaryColors.primary};
            }
          }
          i {
            display: inline-flex;
            align-items: center;
            line-height: 0;
            margin-left: 4px;
          }
        }
      }
    }
  }
`;
