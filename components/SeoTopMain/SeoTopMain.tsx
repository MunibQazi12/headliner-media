import assest from "@/json/assest";
import { SeoTopMainWrapper } from "@/styles/StyledComponents/SeoTopMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type SeoTopMainType = {
  heading?: string;
  meta_description?: string;
};

export default function SeoTopMain({
  heading,
  meta_description
}: SeoTopMainType) {
  return (
    <SeoTopMainWrapper>
      <Box className="seoMain_inner">
        <Container fixed className="cus_container">
          <Box className="wrapper_mainInfo">
            <Grid container spacing={3} alignItems="center">
              <Grid item lg={8} xs={12}>
                <Box className="wrapper_textInfo">
                  <Typography variant="h1">
                    {heading ||
                      "Get Premium Dry Ice in Philadelphia, PA Delivered Right to You."}
                  </Typography>
                  <Typography variant="body1" className="subText">
                    Need high quality dry ice? EMORY manufactures and delivers
                    affordable bulk dry ice with transparent pricing and
                    dependable 24/7 customer service.
                  </Typography>
                  <Box className="wrapper_form">
                    <Typography variant="body1">
                      {meta_description ||
                        "Where do you need dry ice delivered to in Philadelphia?"}
                    </Typography>
                    <Box className="formOnly">
                      <InputFieldCommon placeholder="Enter Address..." />
                      <CustomButtonPrimary
                        variant="contained"
                        color="secondary"
                      >
                        Get a Free Quote
                      </CustomButtonPrimary>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Box className="wrapper_img">
                  <Image
                    src={assest.seoMainImg}
                    alt="banner-image"
                    width={800}
                    height={800}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </SeoTopMainWrapper>
  );
}
