import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DashboardSidebarMainWrapper = styled(Box)`
  .sideBarMain_wrap {
    position: relative;
    ul {
      @media (max-width: 1199px) {
        height: calc(100vh - 70px);
        overflow-y: auto;
        padding-right: 10px;
      }
      li {
        position: relative;
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        a {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px 30px;
          font-size: 25px;
          font-weight: 700;
          color: ${primaryColors.primary};
          border-radius: 10px;
          @media (max-width: 1499px) {
            font-size: 22px;
            padding: 16px 24px;
          }
          @media (max-width: 1399px) {
            font-size: 20px;
            padding: 14px 24px;
          }
          @media (max-width: 1299px) {
            font-size: 18px;
            padding: 12px 20px;
          }
          @media (max-width: 1199px) {
            font-size: 16px;
            padding: 10px 16px;
          }
          &:hover {
            background: ${primaryColors.primary};
            color: ${primaryColors.white};
          }
          &.active {
            background: ${primaryColors.primary};
            color: ${primaryColors.white};
          }
        }
      }
    }
  }
`;
