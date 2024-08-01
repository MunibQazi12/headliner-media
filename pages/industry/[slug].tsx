import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import CommonHeading from "@/components/CommonHeading/CommonHeading";
import CommonQuote from "@/components/CommonQuote/CommonQuote";
import { LoadingPage } from "@/components/LoadingPage/LoadingPage";
import { useIndustry } from "@/hooks/react-query/useIndustry";
import Wrapper from "@/layout/wrapper/Wrapper";
import { IndustryData } from "@/types/common.type";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Industry() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: rawProduct, isFetching, refetch } = useIndustry(slug as string);

  const industry = rawProduct?.data?.industry as IndustryData;

  useEffect(() => {
    refetch();
  }, [slug]);

  return (
    <Wrapper>
        <Box className="pelletsDryIce">
        {isFetching ? (
            <LoadingPage />
        ) : (
            <>
                <CommonBreadCrum
                    pageName={industry.title}
                    ifSumpage="Dry Ice"
                    sumPageLink="/dashboard"
                />
                <Container fixed className="cus_container">
                    <Box className="middlePartMain">
                        <Grid container spacing={4} >
                            <Grid item lg={6} md={12} xs={12}>
                                <Typography variant="h3">{industry.title}</Typography>
                                <Typography variant="body1" 
                                    style={{ 
                                        marginTop: '16px',
                                        marginBottom: '20px'
                                    }}
                                >
                                    {industry.short_description}
                                </Typography>
                                <CommonQuote/>
                            </Grid>
                            <Grid item lg={6} md={12} xs={12}>
                            <Box className="productMainInfo" textAlign="right">
                                <figure>
                                <Image
                                    src={industry.featured_image_url}
                                    alt="cart-image"
                                    width={700}
                                    height={500}
                                    loader={({ src }) => src}
                                />
                                </figure>
                            </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="deliveredProduct">
                        <CommonHeading borderHeading="Dry Ice Solutions for Grocery Retailers" />
                        <Typography variant="body1" 
                            style={{ 
                                marginTop: '16px',
                                marginBottom: '20px'
                            }}
                        >
                            {industry.short_description}
                        </Typography>
                    </Box>
                </Container>

            </>
            )}
        </Box>
    </Wrapper>
  );
}
