import DistributionCentersMain from "@/components/DistributionCentersMain/DistributionCentersMain";
import NeedDryIceForm from "@/components/NeedDryIceForm/NeedDryIceForm";
import Wrapper from "@/layout/wrapper/Wrapper";
import Box from "@mui/material/Box";
import Head from "next/head";

export default function distributionCenters() {
  return (
    <Wrapper>
      <Head>
        <meta name="title" content="Dry Ice Distribution Services - Contact Emory" />
        <meta name="description" content="Emory is a top-rated dry ice distributor with multiple dry ice manufacturing and distribution centers located in the US. Contact us for quality dry ice today." />
      </Head>
      <Box className="pelletsDryIce">
        <DistributionCentersMain />
        <NeedDryIceForm />
      </Box>
    </Wrapper>
  );
}

