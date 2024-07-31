import { HomeBannerStyled } from "@/styles/StyledComponents/HomeBannerStyled";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CommonQuote from "../CommonQuote/CommonQuote";

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <Container fixed className="cus_container">
        <Stack direction="column" className="bannerHeading" textAlign="start">
          <Typography variant="h1">
            We Support Busy Businesses
          </Typography>
          <Typography variant="h1">
            with Premium Dry Ice Products
          </Typography>
          <Typography variant="body1">
            Get affordable bulk dry ice with transparent pricing and dependable
            24/7 customer service - always.
          </Typography>
        </Stack>
        <CommonQuote />
      </Container>
    </HomeBannerStyled>
  );
};

export default HomeBanner;
