import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const AddressMainWrapper = styled(Box)`
  .mainAddress_wrapper {
    position: relative;
    .addressMainBox {
      position: relative;
      padding-top: 40px;
      @media (max-width: 899px) {
        padding-top: 10px;
      }
      .wrapper_mainBoxCart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        border: 1px solid ${primaryColors.primary};
        padding: 16px 24px;
        border-radius: 5px;
        @media (max-width: 1399px) {
          padding: 16px 24px;
        }

        @media (max-width: 899px) {
          padding: 12px;
        }
        .btnWrp {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          align-items: center;
          button {
            width: 66px;
            height: 66px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid ${primaryColors.primary};
            padding: 0;
            min-width: auto;
            @media (max-width: 1399px) {
              width: 50px;
              height: 50px;
            }
            @media (max-width: 599px) {
              width: 40px;
              height: 40px;
            }
          }
        }
        .title {
          font-weight: 400;
          font-size: 25px;
          color: ${primaryColors.primary};
          max-width: 100%;

          @media (max-width: 1399px) {
            font-size: 20px;
          }

          @media (max-width: 599px) {
            font-size: 18px;
          }
        }
        p {
          font-weight: 500;
          font-size: 20px;
          color: ${primaryColors.primary};
          max-width: 192px;
          @media (max-width: 1399px) {
            font-size: 18px;
          }
          @media (max-width: 599px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
