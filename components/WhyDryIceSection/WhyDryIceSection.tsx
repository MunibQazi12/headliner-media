/* eslint-disable react/no-array-index-key */
import { whyChooseCartList } from "@/json/mock/whyChooseCartLis.mock";
import { WhyDryIceSectionWrapper } from "@/styles/StyledComponents/WhyDryIceSectionWrapper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function WhyDryIceSection() {
  return (
    <WhyDryIceSectionWrapper className="whyDry_iceSec">
      <Box className="wrapper_whyChose">
        <Container fixed className="cus_container">
          <Box className="mainWhyChose">
            <CommonHeading borderHeading="Why Choose Emory for Dry Ice?" />
            <Box className="whyChoseCart">
              <Grid container spacing={1.2}>
                {whyChooseCartList.map((item, index) => (
                  <Grid item xl={2} lg={2} md={4} sm={6} xs={12} key={index}>
                    <Box className="innerCartBox">
                      <figure>
                        <Image
                          src={item.imgPath}
                          alt=""
                          width={600}
                          height={600}
                        />
                      </figure>
                      <Typography variant="h3">{item.textTitle}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </WhyDryIceSectionWrapper>
  );
}
