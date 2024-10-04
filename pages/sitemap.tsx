import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import Sitemap from "@/components/Sitemap";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


const sitemap = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Why Choose Emory Dry Ice Supplies & Delivery Services" />
        <meta name="description" content="Why you should choose Emory for high-quality dry ice products, supplies, manufacturing, distribution, delivery, and emergency dry ice services today." />
      </Head>
      <CommonBreadCrum pageName="Sitemap" />
      <Sitemap />
    </Wrapper>
  );
};

export default sitemap;