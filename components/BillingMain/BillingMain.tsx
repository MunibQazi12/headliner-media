import CheckoutPage from "@/components/Checkout/Checkout";
import { BillingMainWrapper } from "@/styles/StyledComponents/BillingMainWrapper";
import Box from "@mui/material/Box";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function BillingMain() {
  return (
    <BillingMainWrapper>
      <Box className="wrapper_mainBilling">
        <CommonDashBoardTitle title="Hello, John. Update or add your payment here." />
        <CheckoutPage />
      </Box>
    </BillingMainWrapper>
  );
}
