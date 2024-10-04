import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import IndustriesServed from "@/components/IndustriesServed/IndustriesServed";
import NeedCustomer from "@/components/NeedCustomer/NeedCustomer";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


export default function Home() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Emory Dry Ice Supplies, Distribution & Delivery Services" />
        <meta name="description" content="Emory dry ice supplies, distribution & delivery services - your always reliable source for high-quality dry ice products. Contact us about your dry ice needs." />
      </Head>
      <HomeBanner />
      <HomeAbout />
      <NeedCustomer />
      <IndustriesServed />
      <WhyDryIceSection />
      <ClientTestimonial />
    </Wrapper>
  );
}
