/* eslint-disable jsx-a11y/anchor-is-valid */
import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import CommonHeading from "@/components/CommonHeading/CommonHeading";
import DryIceDeliverySecndSection from "@/components/DryIceDeliverySecondSection/dryIceDeliverySecondSection";
import DryIceDeliveryTopMain from "@/components/DryIceDeliveryTopMain/dryIceDeliveryTopMain";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import LinkedInIcon from "@/ui/Icons/LinkedInIcon";
import PrintStIcon from "@/ui/Icons/PrintStIcon";
import TwiterIcon from "@/ui/Icons/TwiterIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

export default function dryIceDelivery() {
  return (
    <Wrapper>
      <Box className="seoMainPage">
        <DryIceDeliveryTopMain heading="Dry Ice Delivery" meta_description="Where do you need dry ice delivered to?"/>
        <DryIceDeliverySecndSection />
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
