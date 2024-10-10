/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
// import CommonFaq from "@/components/CommonFaq/CommonFaq";
import CommonHeading from "@/components/CommonHeading/CommonHeading";
import SeoSecndSection from "@/components/SeoSecndSection/SeoSecndSection";
import SeoTopMain from "@/components/SeoTopMain/SeoTopMain";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import useSeo from "@/hooks/react-query/useSeo";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
// import { faqMainList } from "@/json/mock/accordianFaq.mock";
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
import { useSearchParams } from "next/navigation";
import IndustryPage from "@/components/Industries/IndustryPage";
import ProductPage from "@/components/Product/ProductPage";
import { GetProducts } from "@/api/functions/product.api";
import { GetResources } from "@/api/functions/resources.api";
import { GetFooterSettings } from "@/api/functions/footer.api";
import { GetAllSeoPages, GetSeoPage } from "@/api/functions/seo.api";
import { GetAllFAQs } from "@/api/functions/faq.api";
import { useEffect } from "react";
import SEOFaqs from "@/components/SEOFaq";
// import { SEO_FAQs } from "@/types/common.type";
import NotFound from "./404";

const SEO_FAQsInitial = {
  id: "",
  slug: "",
  question: "",
  answer: "",
  created_at: "",
  updated_at: ""
};

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const searchParam = useSearchParams();
  const pageType = searchParam.get("i");

  useSeo((slug || "") as string);
  const seoData = useAppSelector((state) => state.seoSlice.data);

  const FAQsData: any = seoData?.faq || SEO_FAQsInitial;

  const grabProducts = async () => {
    return await GetProducts();
  };

  const grabResources = async () => {
    return await GetResources();
  };

  const grabFooterSettings = async () => {
    return await GetFooterSettings();
  };

  const grabAllSeoPages = async () => {
    return await GetAllSeoPages();
  };

  const grabSeoPage = async () => {
    return await GetSeoPage((slug || "") as string);
  };

  const grabAllFAQs = async () => {
    return new Promise((resolve) => {
      // Simulate an asynchronous operation (like an API call)
      setTimeout(async () => {
        const data = await GetAllFAQs();
        resolve(data); // Resolve the promise with data
      }, 1000);
    });

    // return await GetAllFAQs();
  };

  // Using async function to handle the promise
  async function getData() {
    try {
      const data = await grabAllFAQs(); // Wait for the promise to resolve
      console.log("Data received:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    const products = grabProducts();
    console.log("products: ", products);

    const resources = grabResources();
    console.log("resources: ", resources);

    const footerSettings = grabFooterSettings();
    console.log("footerSettings: ", footerSettings);

    const allSeoPages = grabAllSeoPages();
    console.log("allSeoPages: ", allSeoPages);

    const seoPage = grabSeoPage();
    console.log("seoPage: ", seoPage);

    getData();

    console.log("seoData: ", seoData);
  }, []);

  return (
    <div>
      {pageType ? (
        <>
          {pageType == "1" && <IndustryPage slug={slug as string} />}
          {pageType == "2" && <ProductPage slug={slug as string} />}
          {pageType != "1" && pageType != "2" && <NotFound />}
        </>
      ) : (
        <Wrapper>
          <Head>
            <title>{seoData?.seo?.meta_title}</title>
            <meta
              property="og:title"
              content={seoData?.seo?.meta_title}
              key="og-title"
            />
            <meta
              property="og:description"
              name="description"
              content={seoData?.seo?.meta_description}
            />
          </Head>
          <Box className="seoMainPage">
            <SeoTopMain
              heading={seoData?.seo?.h1_tag}
              meta_description={seoData?.seo?.p_tag}
            />
            <SeoSecndSection meta_heading={seoData?.seo?.h2_tag} />
            <WhyDryIceSection />
            <Box className="seoFaq">
              <ClientTestimonial />

              {!!FAQsData.length && (
                <>
                  <Container fixed className="cus_container">
                    <CommonHeading borderHeading="Emory Dry Ice FAQs" />
                  </Container>
                  <SEOFaqs accordiondata={FAQsData} />
                </>
              )}

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
      )}
    </div>
  );
}
