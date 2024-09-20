import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const OrderMainWraper = styled(Box)`
  .cmnTable {
    position: relative;
    .MuiPaper-root {
      box-shadow: none;
      border: 0;
      border-radius: 0;

      table {
        border: 0;
        border-radius: 0;

        @media (max-width: 899px) {
          width: 800px;
        }
        thead {
          tr {
            th {
              padding: 20px 24px;
              color: ${primaryColors.white};
              background: ${primaryColors.primary};
              font-size: 25px;
              font-weight: 700;
              @media (max-width: 1599px) {
                font-size: 20px;
              }
              @media (max-width: 1499px) {
                font-size: 18px;
                padding: 12px 16px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 20px 24px;
              border: 0;
              font-size: 22px;
              font-weight: 700;
              color: ${primaryColors.primary};
              @media (max-width: 1599px) {
                font-size: 18px;
              }
              @media (max-width: 1699px) {
                font-size: 16px;
              }
              @media (max-width: 1499px) {
                padding: 12px 16px;
              }
              button {
                width: 63px;
                height: 59px;
                border: 1px solid ${primaryColors.primary};
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: auto;
                padding: 0;
                border-radius: 0;

                @media (max-width: 1499px) {
                  width: 50px;
                  height: 45px;
                }
                &:hover {
                  background: transparent;
                  opacity: 0.7;
                }
              }
              p {
                font-size: 22px;
                font-weight: 700;
                color: ${primaryColors.primary};
                background: rgba(218, 232, 245, 1);
                padding: 10px;
                border-radius: 10px;
                text-align: center;
                &.Processing {
                  background: rgba(251, 250, 160, 1);
                }
                &.Completed {
                  background: rgba(164, 242, 169, 1);
                }
                @media (max-width: 1599px) {
                  font-size: 18px;
                }
                @media (max-width: 1699px) {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
  .tableMain {
    position: relative;
    margin: 40px 0;
    @media (max-width: 1199px) {
      margin: 20px 0;
    }
  }
  .cmn_pagination {
    position: relative;
    .MuiPagination-root {
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid ${primaryColors.primary};
        border-right: 1px solid ${primaryColors.primary};
        border-top: 2px solid ${primaryColors.primary};
        border-bottom: 2px solid ${primaryColors.primary};
        li {
          .MuiButtonBase-root {
            width: 66px;
            height: 66px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0;
            font-size: 25px;
            font-weight: 700;
            color: ${primaryColors.primary};
            margin: 0;
            padding: 0;
            border-right: 1px solid ${primaryColors.primary};
            border-left: 1px solid ${primaryColors.primary};
            @media (max-width: 1299px) {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
            @media (max-width: 899px) {
              width: 40px;
              height: 40px;
              font-size: 16px;
            }
            &.MuiPaginationItem-previousNext {
              display: none;
            }
            &.Mui-selected {
              background: rgba(218, 226, 245, 1);
            }
          }
        }
      }
    }
  }
`;
