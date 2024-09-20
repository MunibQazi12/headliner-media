import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const CommonDashBoardTitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 899px) {
    margin-bottom: 0;
    flex-wrap: wrap;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    width: calc(100% - 300px);
    &.fullWdt {
      width: 100%;
    }
    @media (max-width: 1399px) {
      font-size: 26px;
    }
    @media (max-width: 1299px) {
      font-size: 24px;
    }
    @media (max-width: 899px) {
      width: 100%;
      margin-bottom: 16px !important;
      font-size: 20px;
    }
  }
  button {
    height: 60px;
    padding: 10px 24px;
    @media (max-width: 1499px) {
      height: 50px;
    }

    @media (max-width: 899px) {
      margin-bottom: 16px;
    }
    @media (max-width: 599px) {
      width: 100%;
    }
  }
`;
