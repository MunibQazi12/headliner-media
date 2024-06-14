import { OrderMainWraper } from "@/styles/StyledComponents/OrderMainWraper";
import ViewTableBtn from "@/ui/Icons/ViewTableBtn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function createData(
  order: string,
  date: string,
  product: string,
  total: string,
  status: string
) {
  return { order, date, product, total, status };
}

const rows = [
  createData(
    "#0007",
    "May 8, 2024",
    "3mm Dry Ice Pellets",
    "$1,280",
    "Processing"
  ),
  createData(
    "#0006",
    "May 7, 2024",
    "6mm Dry Ice Pellets",
    "$10,280",
    "Completed"
  ),
  createData(
    "#0005",
    "May 4, 2024",
    "High-Density Pellets",
    "$5,000",
    "Shipped"
  ),
  createData(
    "#0004",
    "May 1, 2024",
    "5 lb. Dry Ice Blocks",
    "$14,880",
    "Shipped"
  ),
  createData(
    "#0003",
    "April 25, 2024",
    "Custom Cut Dry Ice",
    "$24,675",
    "Shipped"
  ),
  createData(
    "#0002",
    "February 22, 2024",
    "Custom Cut Dry Ice",
    "$24,675",
    "Shipped"
  ),
  createData(
    "#0001",
    "January 28, 2024",
    "Custom Cut Dry Ice",
    "$24,675",
    "Shipped"
  )
];

export default function OrderMainTable() {
  return (
    <OrderMainWraper>
      <Box className="cmnTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.order}>
                  <TableCell>{row.order}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell>
                    <Typography variant="body1" className={row.status}>
                      {row.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button type="button">
                      <ViewTableBtn />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </OrderMainWraper>
  );
}
