import { HeadingStyled } from "@/styles/StyledComponents/HeadingStyled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CommonHeadingProps {
  bigHeading?: string | boolean;
  borderHeading?: string | boolean;
  largeHeading?: string | boolean;
  mediumHeading?: string | boolean;
  smallHeading?: string | boolean;
}

const CommonHeading = ({
  bigHeading,
  borderHeading,
  largeHeading,
  mediumHeading,
  smallHeading
}: CommonHeadingProps) => {
  return (
    <HeadingStyled>
      {bigHeading && (
        <Box className="bigHeading">
          <Typography variant="h2">{bigHeading}</Typography>
        </Box>
      )}
      {borderHeading && (
        <Box className="borderHeading">
          <Typography variant="h2">{borderHeading}</Typography>
        </Box>
      )}
      {largeHeading && (
        <Box>
          <Typography variant="h2">{largeHeading}</Typography>
        </Box>
      )}
      {mediumHeading && (
        <Box className="mediumHeading">
          <Typography variant="h2">{mediumHeading}</Typography>
        </Box>
      )}
      {smallHeading && (
        <Box className="smallHeading" padding="16px 0px">
          <Typography variant="h3">{smallHeading}</Typography>
        </Box>
      )}
    </HeadingStyled>
  );
};

export default CommonHeading;
