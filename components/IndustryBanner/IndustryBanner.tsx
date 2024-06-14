import { HomeBannerStyled } from "@/styles/StyledComponents/HomeBannerStyled";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <Container fixed className="cus_container">
        <Stack direction="column" className="bannerHeading">
          <Typography variant="h1">Industries We Serve</Typography>
          <Typography variant="body1">
            Get affordable dry ice with transparent pricing and dependable 24/7
            customer service.
          </Typography>
        </Stack>
      </Container>
    </HomeBannerStyled>
  );
};

export default HomeBanner;
