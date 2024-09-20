/* eslint-disable react/no-array-index-key */
import { distributionList } from "@/json/mock/distributionDataList.mock";
import { DistributionCentersMainWrap } from "@/styles/StyledComponents/DistributionCentersMainWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function DistributionCentersMain() {
  return (
    <DistributionCentersMainWrap>
      <Container fixed className="cus_container">
        <Box className="wrapper_mainDistribute">
          <Typography variant="h1">
            Emory Dry Ice Distribution Centers
          </Typography>
          <Box className="allListItemsData">
            {distributionList.map((item, index) => (
              <Box className="singleMap" key={index}>
                <Grid container spacing={{ lg: 2.4, xs: 2 }}>
                  <Grid item lg={6} md={6} xs={12}>
                    <Box className="imgWrapMap">
                      <figure>
                        <Image
                          src={item.mapImg}
                          alt="map-image"
                          width={900}
                          height={638}
                        />
                      </figure>
                    </Box>
                  </Grid>

                  <Grid item lg={6} md={6} xs={12}>
                    <Box className="textWrapMap_info">
                      <Typography variant="h2">{item.title}</Typography>
                      <Typography variant="body1">
                        {item.addressDetails}
                      </Typography>
                      <Typography variant="body1">
                        {item.addressLineStreet}
                      </Typography>
                      <Typography variant="body1">
                        {item.stateCodeAdds}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
          {/* <Box className="btnwrapper">
            <Button type="button">More Locations Coming Soon in 2024</Button>
          </Box> */}
        </Box>
      </Container>
    </DistributionCentersMainWrap>
  );
}
