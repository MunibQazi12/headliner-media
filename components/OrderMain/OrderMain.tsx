import { OrderMainWraper } from "@/styles/StyledComponents/OrderMainWraper";
import Box from "@mui/material/Box";
import {useAppSelector} from "@/hooks/redux/useAppSelector";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";
import OrderMainTable from "../OrderMainTable/OrderMainTable";

export default function OrderMain() {
    const {userData} : any = useAppSelector((state) => state.userSlice);
  return (
    <OrderMainWraper>
      <Box className="orderMain_wrapper">
        <CommonDashBoardTitle title={`Hello, ${userData?.first_name}. View your orders here.`} />
        <Box className="tableMain">
          <OrderMainTable />
        </Box>
        {/* <Box className="cmn_pagination">
          <Pagination count={2} />
        </Box> */}
      </Box>
    </OrderMainWraper>
  );
}
