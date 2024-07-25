import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

type LoadingPagePropsType = {
  height?: number;
};

const Wrapper = styled(Box)<LoadingPagePropsType>`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingPage = ({ height = 500 }: LoadingPagePropsType) => {
  return (
    <Wrapper height={height}>
      <CircularProgress />
    </Wrapper>
  );
};

export { LoadingPage };
