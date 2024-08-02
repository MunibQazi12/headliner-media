/* eslint-disable react/no-array-index-key */
import { listCardDataDryIce } from "@/json/mock/cartAboutList.mock";
import { DryIceTopPartWraper } from "@/styles/StyledComponents/DryIceTopPartWraper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CommonCart from "../CommonCart/CommonCart";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function DryIceTopPart() {

  return (
    <DryIceTopPartWraper>
      <Box className="wrapper_mainDryIce">
        <Container fixed className="cus_container">
          <Box className="innerMain">
            <CommonHeading bigHeading="Premium, Affordable Dry Ice for Sale" />
            <Typography variant="body1" className="subText">
              Buy the best dry ice products from Emory today
            </Typography>
            <Box className="allCartWrap">
              <Grid container spacing={2}>
                {listCardDataDryIce.map((item, index) => (
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
          </Box>
        </Container>
      </Box>
    </DryIceTopPartWraper>
  );
}
