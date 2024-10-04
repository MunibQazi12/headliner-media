import Wrapper from "@/layout/wrapper/Wrapper";
import ContactForm from "pages/ContactForm";
import Head from "next/head";

export const contact = () => {
  return (
    <Wrapper>
       <Head>
        <meta name="title" content="Contact Emory Dry Ice" />
        <meta name="description" content="Contact Emory about our high-quality dry ice products, supplies, manufacturing, distribution, delivery, emergency dry ice services, support, and more today." />
      </Head>
      <ContactForm />
    </Wrapper>
  );
};

export default contact;
