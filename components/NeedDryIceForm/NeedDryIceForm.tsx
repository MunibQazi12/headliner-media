import { NeedDryIceFormWrapper } from "@/styles/StyledComponents/NeedDryIceFormWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function NeedDryIceForm() {
  return (
    <NeedDryIceFormWrapper>
      <Box className="wrapper_mainForm">
        <Container fixed className="cus_container">
          <Box className="innerFormWrap">
            <Grid container spacing={{ xl: 6, lg: 3, md: 2, xs: 3 }}>
              <Grid item lg={6} xs={12}>
                <Box className="textwrapper_infoMian">
                  <Typography variant="h3">Need Dry Ice Delivered?</Typography>
                  <Typography variant="body1">
                    EMORY Dry Ice has you covered.
                  </Typography>

                  <Typography variant="body1">
                    Fill out the form so we can help you today, or feel free to
                    call us at: <Link href="tel:3463882561">346-388-2561</Link>
                  </Typography>

                  <Typography variant="body1">
                    Get premium, affordable dry ice delivered to you for free.
                    Message or call us to get a free quote today.
                  </Typography>
                  <Typography variant="caption">
                    * Some restrictions apply for free delivery due to location
                    coverage and order quantity
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="formWrapper_main">
                  <Box className="singleinput_wrap">
                    <InputFieldCommon placeholder="Full Name" />
                  </Box>
                  <Box className="singleinput_wrap">
                    <InputFieldCommon placeholder="Phone" />
                  </Box>
                  <Box className="singleinput_wrap">
                    <InputFieldCommon placeholder="Email" />
                  </Box>
                  <Box className="singleinput_wrap">
                    <InputFieldCommon placeholder="Delivery Address" />
                  </Box>
                  <Box className="singleinput_wrap">
                    <InputFieldCommon placeholder="Message" multiline />
                  </Box>
                  <Box className="btnWrap">
                    <Button type="button">{`Send Message >`}</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </NeedDryIceFormWrapper>
  );
}
