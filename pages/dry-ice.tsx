import AboutEmoryIce from "@/components/AboutEmoryIce/AboutEmoryIce";
import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import DryIceTopPart from "@/components/DryIceTopPart/DryIceTopPart";
import NeedCustomer from "@/components/NeedCustomer/NeedCustomer";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function dryIce() {
  return (
    <Wrapper>
      <CommonBreadCrum pageName="Dry Ice" />
      <DryIceTopPart />
      <NeedCustomer />
      <AboutEmoryIce />
      <CommonFaq accordiondata={faqMainList} />
    </Wrapper>
  );
}
