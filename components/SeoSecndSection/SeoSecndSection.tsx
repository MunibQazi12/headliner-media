/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { listCardData } from "@/json/mock/cartAboutList.mock";
import { HomeAboutStyled } from "@/styles/StyledComponents/HomeAboutStyled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CommonCart from "../CommonCart/CommonCart";
import CommonHeading from "../CommonHeading/CommonHeading";

type SeoSecndSection = {
  meta_heading?: string;
};

const SeoSecndSection = ({ meta_heading }: SeoSecndSection) => {
  return (
    <HomeAboutStyled>
      <Container fixed className="cus_container">
        <Typography variant="h2" className="learnText">Learn About Emory&apos;s Dry Ice Products & Delivery Services</Typography>
        <Typography variant="body1" className="cmnTextWrap">
          We are deeply committed to providing exceptional dry ice products,
          comprehensive coverage, and customer service.
        </Typography>
        <Typography variant="body1" className="cmnTextWrap">
          We are deeply committed to providing exceptional dry ice products,
          comprehensive coverage, and customer service.
        </Typography>

        <Box className="deliveredProduct">
          <CommonHeading
            borderHeading={
              meta_heading || "Affordable Dry Ice Delivery in Philadelphia, PA"
            }
          />
        </Box>
        <Box className="allCardBoxWrap">
          <Grid container spacing={2}>
            {listCardData.map((item, index) => (
              <Grid item lg={3} md={6} xs={12} key={index}>
                <CommonCart
                  linkPath={item.linkPath}
                  imgPath={item.imgPath}
                  textMain={item.textMain}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </HomeAboutStyled>
  );
};

export default SeoSecndSection;
