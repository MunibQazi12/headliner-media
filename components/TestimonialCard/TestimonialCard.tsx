import { TestimonialCardWrapper } from "@/styles/StyledComponents/TestimonialCardWrapper";
import StartIcon from "@/ui/Icons/StartIcon";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface cartProps {
  value: number;
  textMsg: string;
  name: string;
}

export default function TestimonialCard({ value, textMsg, name }: cartProps) {
  return (
    <TestimonialCardWrapper>
      <Box className="wrapMainCart">
        <Rating name="read-only" value={value} readOnly icon={<StartIcon />} />
        <Typography variant="body1">{textMsg}</Typography>
        <Typography variant="h3">{name}</Typography>
      </Box>
    </TestimonialCardWrapper>
  );
}
