import DistributionCentersMain from "@/components/DistributionCentersMain/DistributionCentersMain";
import NeedDryIceForm from "@/components/NeedDryIceForm/NeedDryIceForm";
import Wrapper from "@/layout/wrapper/Wrapper";
import Box from "@mui/material/Box";

export default function distributionCenters() {
  return (
    <Wrapper>
      <Box className="pelletsDryIce">
        <DistributionCentersMain />
        <NeedDryIceForm />
      </Box>
    </Wrapper>
  );
}
