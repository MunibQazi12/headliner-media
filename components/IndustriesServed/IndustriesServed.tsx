/* eslint-disable react/no-array-index-key */
import { listCardDataIndustry } from "@/json/mock/cartAboutList.mock";
import { IndustriesServedWrap } from "@/styles/StyledComponents/IndustriesServedWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function IndustriesServed() {
  return (
    <IndustriesServedWrap>
      <Box className="wrapper_mainIndustry">
        <Container fixed className="cus_container">
          <Box className="mainIndustry_wrap">
            <CommonHeading borderHeading="Industries Served" />
            <Box className="wrapperMainCart">
              <Grid container rowSpacing={3} columnSpacing={2}>
                {listCardDataIndustry.map((item, index) => (
                  <Grid item lg={3} md={6} xs={12} key={index}>
                    <Box className="wrapperInfoBox">
                      <figure>
                        <Link href={item.linkPath}>
                          <Image
                            src={item.imgPath}
                            alt="cart-image"
                            width={440}
                            height={440}
                          />
                        </Link>
                      </figure>
                      <Box
                        className="textInfo"
                        sx={{ background: `${item.colorCode}` }}
                      >
                        <Link href={item.linkPath}>{item.textMain}</Link>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </IndustriesServedWrap>
  );
}
