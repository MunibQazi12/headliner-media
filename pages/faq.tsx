import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";

export default function faq() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="FAQs About Emory Dry Ice Supplies & Distribution Services" />
        <meta name="description" content="FAQs about Emory's high-quality dry ice products, supplies, manufacturing, distribution, delivery, and emergency dry ice services. Contact us now for help." />
      </Head>
      <CommonBreadCrum pageName="FAQs" />
      <CommonFaq accordiondata={faqMainList} />
    </Wrapper>
  );
}
