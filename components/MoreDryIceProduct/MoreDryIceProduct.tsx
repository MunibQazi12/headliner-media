/* eslint-disable react/no-array-index-key */
import { listCardDataDryIceTw } from "@/json/mock/cartAboutList.mock";
import { MoreDryIceProductWrap } from "@/styles/StyledComponents/MoreDryIceProductWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useRouter} from "next/router";
import CommonCart from "../CommonCart/CommonCart";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function MoreDryIceProduct() {
  const router = useRouter();
  // @ts-ignore
  const {slug} : {slug : string} = router.query;
  return (
    <MoreDryIceProductWrap>
      <Box className="wrapper_mainMoreIce">
        <Container fixed className="cus_container">
          <Box className="innerWrap">
            <CommonHeading smallHeading="More Dry Ice Products" />
            <Box className="allCardBoxWrap">
              <Grid container spacing={2}>
                {listCardDataDryIceTw.filter((link) => !link.linkPath.includes(`/${slug}/?i=2`) && !link.linkPath.includes(`/${slug}?i=2`)).map((item, index) => (
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
    </MoreDryIceProductWrap>
  );
}
