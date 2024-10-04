import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import WhyUsMain from "@/components/WhyUsMain/WhyUsMain";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


const whyus = () => {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Why Choose Emory Dry Ice Supplies & Delivery Services" />
        <meta name="description" content="Why you should choose Emory for high-quality dry ice products, supplies, manufacturing, distribution, delivery, and emergency dry ice services today." />
      </Head>
      <CommonBreadCrum pageName="Why Us" />
      <WhyUsMain />
    </Wrapper>
  );
};

export default whyus;
