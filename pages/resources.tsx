import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import ResourcesMain from "@/components/ResourcesMain/ResourcesMain";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function resources() {
  return (
    <Wrapper>
      <CommonBreadCrum pageName="Resources" />
      <ResourcesMain />
    </Wrapper>
  );
}
