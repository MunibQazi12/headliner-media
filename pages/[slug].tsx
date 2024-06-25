/* eslint-disable jsx-a11y/anchor-is-valid */
import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import CommonHeading from "@/components/CommonHeading/CommonHeading";
import SeoSecndSection from "@/components/SeoSecndSection/SeoSecndSection";
import SeoTopMain from "@/components/SeoTopMain/SeoTopMain";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import useSeo from "@/hooks/react-query/useSeo";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import LinkedInIcon from "@/ui/Icons/LinkedInIcon";
import PrintStIcon from "@/ui/Icons/PrintStIcon";
import TwiterIcon from "@/ui/Icons/TwiterIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  useSeo((slug || "") as string);
  const seoData = useAppSelector((state) => state.seoSlice.data);

  return (
    <Wrapper>
      <Head>
        <title>{seoData?.meta_title}</title>
        <meta name="description" content={seoData?.meta_description} />
      </Head>
      <Box className="seoMainPage">
        <SeoTopMain
          heading={seoData?.h1_tag}
          meta_description={seoData?.p_tag}
        />
        <SeoSecndSection meta_heading={seoData?.h2_tag} />
        <WhyDryIceSection />
        <Box className="seoFaq">
          <ClientTestimonial />
          <Container fixed className="cus_container">
            <CommonHeading borderHeading="Emory Dry Ice FAQs" />
          </Container>
          <CommonFaq accordiondata={faqMainList} />
          <Box className="listSocialShare">
            <Container fixed>
              <List disablePadding>
                <ListItem disablePadding>
                  <Link href="#">Like</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="#">Share</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="#" className="twitterBtn">
                    <TwiterIcon IconHeight="24" IconWidth="24" />
                    Share
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="#" className="linkedInBtn">
                    <LinkedInIcon IconHeight="24" IconWidth="24" />
                    Share
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="#" className="printrStBtn">
                    <PrintStIcon />
                    Share
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="#" className="shareBtn">
                    + Share
                  </Link>
                </ListItem>
              </List>
            </Container>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}
