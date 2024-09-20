import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import WhyUsMain from "@/components/WhyUsMain/WhyUsMain";
import Wrapper from "@/layout/wrapper/Wrapper";

const whyus = () => {
  return (
    <Wrapper>
      <CommonBreadCrum pageName="Why Us" />
      <WhyUsMain />
    </Wrapper>
  );
};

export default whyus;
