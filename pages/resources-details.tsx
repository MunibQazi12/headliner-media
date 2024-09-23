import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import ResourcesDetailsMain from "@/components/ResourcesDetailsMain/ResourcesDetailsMain";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function resourcesDetails() {
  return (
    <Wrapper>
      <CommonBreadCrum
        pageName="Emory Business Update About A, B, C New Initiative Going on in June 2024"
        ifSumpage="Resources"
      />
      <ResourcesDetailsMain />
      
    </Wrapper>
  );
}
