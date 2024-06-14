import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import DryIcePelletsMain from "@/components/DryIcePelletsMain/DryIcePelletsMain";
import MoreDryIceProduct from "@/components/MoreDryIceProduct/MoreDryIceProduct";
import Wrapper from "@/layout/wrapper/Wrapper";
import Box from "@mui/material/Box";

export default function dryIcePellets() {
  return (
    <Wrapper>
      <Box className="pelletsDryIce">
        <CommonBreadCrum
          pageName="Dry Ice Pellets"
          ifSumpage="Dry Ice"
          sumPageLink="dry-ice"
        />
        <DryIcePelletsMain />
        <MoreDryIceProduct />
      </Box>
    </Wrapper>
  );
}
