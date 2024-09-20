import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
 background: ${primaryColors.white};
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      margin-left: auto;
      margin-right: 10px;
    }
    button {
      padding: 14px 42px;
      min-width: auto;
      margin-right: 15px;
      @media (max-width: 399px) {
        margin-right: 5px;
      }
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
      background: ${primaryColors?.secondary};
    }
    .cart_icon {
      margin-right: 18px;
      @media (max-width: 599px) {
        svg {
          width: 20px;
        }
      }
    }
    .loginBtn {
      @media (max-width: 599px) {
        svg {
          width: 16px;
        }
      }
    }
    .loginBtn,
    .cart_icon {
      margin-left: 20px;
      margin-right: 0;
      @media (max-width: 1199px) {
        margin-left: 0px;
      }

      button {
        padding: 0;
        min-width: auto;
        &:hover {
          background: transparent;
        }
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 29px 0;
    transition: all 0.4s;
    @media (max-width: 899px) {
      padding: 15px 0;
    }

    .MuiToolbar-root {
      @media (max-width: 1199px) {
        justify-content: space-between;
      }
    }

    .menuDrawer {
      background: ${primaryColors?.secondary};
      margin-left: 10px;
      margin-right: 0;
    }
  }

  .headerLogo {
    width: 229px;
    display: inline-block;
    transition: all 0.4s;
    line-height: 0;
    @media (max-width: 1499px) {
      width: 200px;
    }
    @media (max-width: 1399px) {
      width: 180px;
    }
    @media (max-width: 1199px) {
      width: 150px;
    }

    @media (max-width: 399px) {
      width: 100px;
    }
  }

  .navbar {
    margin-left: auto;
    min-height: 0px;
    margin-bottom: 0px;
    @media (max-width: 1199px) {
      display: none;
    }
    a {
      margin-right: 100px;
      display: inline-block;
      color: ${primaryColors.primary};
      font-size: 25px;
      font-weight: 500;
      @media (max-width: 1499px) {
        margin-right: 80px;
      }
      @media (max-width: 1399px) {
        margin-right: 40px;
        font-size: 20px;
      }
      &:hover {
        color: ${primaryColors.secondary};
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.secondary};
      }
    }
  }

  .buttonsContsct {
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .dashBoardMenu {
    position: relative;
    button {
      background: ${primaryColors.secondary};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: auto;
    }
  }
  .menuDrawer {
    width: 40px;
    height: 40px;
  }
`;
