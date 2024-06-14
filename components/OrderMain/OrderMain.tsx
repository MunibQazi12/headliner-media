import { OrderMainWraper } from "@/styles/StyledComponents/OrderMainWraper";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";
import OrderMainTable from "../OrderMainTable/OrderMainTable";

export default function OrderMain() {
  return (
    <OrderMainWraper>
      <Box className="orderMain_wrapper">
        <CommonDashBoardTitle title="Hello, John. Update or add shipping address here." />
        <Box className="tableMain">
          <OrderMainTable />
        </Box>
        <Box className="cmn_pagination">
          <Pagination count={2} />
        </Box>
      </Box>
    </OrderMainWraper>
  );
}
