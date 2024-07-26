import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CommonQuoteStyled = styled(Stack)`
  .quoteWrap {
    h5 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
      @media (max-width: 1399px) {
        font-size: 32px;
      }
      @media (max-width: 1199px) {
        font-size: 26px;
      }
      @media (max-width: 899px) {
        font-size: 24px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
    .submitWrap {
      max-width: 883px;
      border: 1px solid ${primaryColors?.color283653};
      padding: 9px;
      border-radius: 10px;

      @media (max-width: 599px) {
        border: 0;
        flex-wrap: wrap;
        padding: 0;
      }
      input {
        border: none;
        padding-left: 10px;
        color: ${primaryColors?.black};
        max-width: 649px;
        flex-basis: 649px;
        font-size: 24px;

        @media (max-width: 1399px) {
          font-size: 20px;
        }

        @media (max-width: 599px) {
          border-radius: 10px;
          border: 1px solid ${primaryColors?.color283653};
          padding: 16px 20px;
          width: 100%;
          max-width: 100%;
          flex-basis: 100%;
        }
        &::placeholder {
          color: ${primaryColors?.black};
        }
      }
      button {
        max-width: calc(100% - 649px);
        flex-basis: calc(100% - 649px);
        padding: 14px 14px;

        @media (max-width: 599px) {
          width: 100%;
          margin-top: 10px;
          max-width: 100%;
          flex-basis: 100%;
        }
      }
    }
  }
`;

const CommonQuote = () => {
  return (
    <CommonQuoteStyled>
      <Stack direction="column" className="quoteWrap" textAlign="start">
        <Typography variant="h5">
          Where do you need dry ice delivered to?
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="submitWrap"
        >
          <input type="text" placeholder="Enter Address..." />
          <CustomButtonPrimary variant="contained" color="secondary">
            <Typography variant="caption">Get a Free Quote</Typography>
          </CustomButtonPrimary>
        </Stack>
      </Stack>
    </CommonQuoteStyled>
  );
};

export default CommonQuote;
