import assest from "@/json/assest";
import {NeedCustomerWrapper} from "@/styles/StyledComponents/NeedCustomerWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function NeedCustomer() {
    return (
        <NeedCustomerWrapper>
            <Box className="wrapper_mainNeedCustomer">
                <Container fixed className="cus_container">
                    <Box className="wrapper_need">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item lg={6} md={6} xs={12}>
                                <Box className="wrapper_textInfo">
                                    <Typography variant="h2">Need Custom Cut Dry Ice?</Typography>
                                    <Typography variant="body1">
                                        Emory can help you. We can manufacture and deliver any type
                                        of custom cut dry ice products based on your requirements.
                                    </Typography>
                                    <Typography variant="body1">Get a Free Quote Today</Typography>
                                    <Link href="/contact">
                                        <CustomButtonPrimary variant="contained" color="primary">
                                            {`Contact Us >`}
                                        </CustomButtonPrimary>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Box className="imgWRap">
                                    <figure>
                                        <Image
                                            src={assest.imgNeedCust}
                                            alt="image-need"
                                            width={894}
                                            height={509}
                                        />
                                    </figure>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </NeedCustomerWrapper>
    );
}
