import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import Industries from "@/components/Industries/Industries";
import IndustryBanner from "@/components/IndustryBanner/IndustryBanner";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <IndustryBanner />
      <Industries />
      <WhyDryIceSection />
      <ClientTestimonial />
    </Wrapper>
  );
}
