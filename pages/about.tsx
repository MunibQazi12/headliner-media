import AboutMainPage from "@/components/AboutMainPage/AboutMainPage";
import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


export default function about() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Learn About Emory Dry Ice Supplies & Distribution Services" />
        <meta name="description" content="Learn about Emory's high-quality dry ice products, supplies, manufacturing, distribution, delivery, and emergency dry ice services. Contact us for help." />
      </Head>
      <CommonBreadCrum pageName="About" />
      <AboutMainPage />
    </Wrapper>
  );
}
