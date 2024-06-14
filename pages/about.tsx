import AboutMainPage from "@/components/AboutMainPage/AboutMainPage";
import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function about() {
  return (
    <Wrapper>
      <CommonBreadCrum pageName="About" />
      <AboutMainPage />
    </Wrapper>
  );
}
