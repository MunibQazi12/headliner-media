import CheckoutPage from "@/components/Checkout/Checkout";
import { BillingMainWrapper } from "@/styles/StyledComponents/BillingMainWrapper";
import Box from "@mui/material/Box";
import {useAppSelector} from "@/hooks/redux/useAppSelector";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function BillingMain() {
    const {userData} : any = useAppSelector((state) => state.userSlice);
  return (
    <BillingMainWrapper>
      <Box className="wrapper_mainBilling">
        <CommonDashBoardTitle title={`Hello, ${userData?.first_name}. Update or add your payment here.`} />
        <CheckoutPage />
      </Box>
    </BillingMainWrapper>
  );
}
