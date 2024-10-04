import ClientTestimonial from "@/components/ClientTestimonial/ClientTestimonial";
import Industries from "@/components/Industries/Industries";
import IndustryBanner from "@/components/IndustryBanner/IndustryBanner";
import WhyDryIceSection from "@/components/WhyDryIceSection/WhyDryIceSection";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";


export default function Home() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Dry Ice for Industrial Manufacturing - Shop Now at Emory" />
        <meta name="description" content="Shop on Emory for high-quality dry ice for industrial manufacturing cooling, cleaning, mold remediation, and other needs with our premium, affordable dry ice." />
      </Head>
      <IndustryBanner />
      <Industries />
      <WhyDryIceSection />
      <ClientTestimonial />
    </Wrapper>
  );
}
