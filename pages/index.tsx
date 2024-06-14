import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import IndustriesServed from "@/components/IndustriesServed/IndustriesServed";
import NeedCustomer from "@/components/NeedCustomer/NeedCustomer";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <HomeBanner />
      <HomeAbout />
      <NeedCustomer />
      <IndustriesServed />
      <WhyDryIceSection />
      <ClientTestimonial />
    </Wrapper>
  );
}
