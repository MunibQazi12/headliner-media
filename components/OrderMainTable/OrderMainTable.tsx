import { useOrdersQuery } from "@/hooks/react-query/useOrder";
import { OrderMainWraper } from "@/styles/StyledComponents/OrderMainWraper";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { useEffect } from "react";
import { LoadingPage } from "../LoadingPage/LoadingPage";

export default function OrderMainTable() {
  const { data, isFetching, refetch } = useOrdersQuery();

  const orders = data?.data || [];

  useEffect(() => {
    refetch();
  }, []);

  return isFetching ? (
    <LoadingPage />
  ) : (
    <OrderMainWraper>
      <Box className="cmnTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Quantity</TableCell>
                {/* <TableCell>View</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {moment(row.created_at).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell>{row.product.name}</TableCell>
                  <TableCell>${row.price}</TableCell>
                  <TableCell>{row.quantity}Kg</TableCell>
                  {/* <TableCell>
                    <Typography variant="body1" className={row.status}>
                      {row.status}
                    </Typography>
                  </TableCell> */}
                  {/* <TableCell>
                    <Button type="button">
                      <ViewTableBtn />
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </OrderMainWraper>
  );
}
