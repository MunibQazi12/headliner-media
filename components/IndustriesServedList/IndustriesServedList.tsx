/* eslint-disable react/no-array-index-key */
import { listCardDataIndustry } from "@/json/mock/cartAboutList.mock";
import { IndustriesServedListWrap } from "@/styles/StyledComponents/IndustriesServedListWrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

export default function IndustriesServed() {
  return (
    <IndustriesServedListWrap>
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
                  <h3>
                    <Link href={item.linkPath}>{item.textMain}</Link>
                  </h3>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </IndustriesServedListWrap>
  );
}
