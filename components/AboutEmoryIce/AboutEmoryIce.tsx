import { AboutEmoryIceWrapper } from "@/styles/StyledComponents/AboutEmoryIceWrapper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function AboutEmoryIce() {
  return (
    <AboutEmoryIceWrapper>
      <Box className="mainAboutWrap">
        <Container fixed className="cus_container">
          <Box className="wrapper_infoAbout">
            <CommonHeading bigHeading="About for Emory Dry Ice Services" />
            <Box className="wrapper_allText">
              <Typography variant="body1">
                Emory is a leading dry ice manufacturer, supplier, and
                distributor in the US. We provide affordable, high-quality dry
                ice pellets, dry ice blocks, custom dry ice cuts, and dry ice
                delivery services to customers throughout the south and via our
                regional distribution centers.
              </Typography>

              <Typography variant="body1">
                Providing exceptional 24/7 customer service and owning and
                operating our own dry ice production center with several
                distribution locations in Texas, Mississippi, and New Jersey,
                with more to come soon, Emory can fulfill small to large volume
                dry ice orders with fast turnarounds.
              </Typography>

              <Typography variant="body1">
                Emory services multiple industry needs for dry ice supplies and
                can deliver to your door within 1-2 days if within our service
                locations. If you have any questions, please contact us today
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </AboutEmoryIceWrapper>
  );
}
