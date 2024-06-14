import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import CommonFaq from "@/components/CommonFaq/CommonFaq";
import { faqMainList } from "@/json/mock/accordianFaq.mock";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function faq() {
  return (
    <Wrapper>
      <CommonBreadCrum pageName="FAQs" />
      <CommonFaq accordiondata={faqMainList} />
    </Wrapper>
  );
}
