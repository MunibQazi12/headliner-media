import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import ResourcesMain from "@/components/ResourcesMain/ResourcesMain";
import Wrapper from "@/layout/wrapper/Wrapper";
import Head from "next/head";

export default function resources() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Emory Dry Ice Resources: Tips & Information for Safe Use" />
        <meta name="description" content="Access essential tips and information on using dry ice safely. Learn about handling, storage, and shipping best practices with Emory's dry ice resources." />
      </Head>
      <CommonBreadCrum pageName="Resources" />
      <ResourcesMain />
    </Wrapper>
  );
}
