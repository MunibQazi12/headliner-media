import AboutEmoryIce from "@/components/AboutEmoryIce/AboutEmoryIce";
import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import DryIceTopPart from "@/components/DryIceTopPart/DryIceTopPart";
import NeedCustomer from "@/components/NeedCustomer/NeedCustomer";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


export default function dryIce() {
  return (
    <Wrapper>
        <Head>
        <meta name="title" content="Dry Ice Products for Sale by Emory" />
        <meta name="description" content="Emory's high-quality dry ice products for sale - from dry ice pellets, high-density pellets, 5 lb. dry ice blocks, airline cut, and custom cut dry ice." />
      </Head>
      <CommonBreadCrum pageName="Dry Ice" />
      <DryIceTopPart />
      <NeedCustomer />
      <AboutEmoryIce />
      <CommonFaq accordiondata={faqMainList} />
    </Wrapper>
  );
}
