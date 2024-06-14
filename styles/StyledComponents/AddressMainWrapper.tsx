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
        position: relative;
        border: 1px solid ${primaryColors.primary};
        padding: 20px 20px 80px 30px;
        border-radius: 5px;
        @media (max-width: 1399px) {
          padding: 20px;
        }

        @media (max-width: 899px) {
          padding: 12px;
        }
        .btnWrp {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-left: auto;
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
          font-weight: 700;
          font-size: 25px;
          color: ${primaryColors.primary};
          margin-bottom: 20px;
          max-width: 100%;

          @media (max-width: 1399px) {
            font-size: 20px;
            margin-bottom: 12px;
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
