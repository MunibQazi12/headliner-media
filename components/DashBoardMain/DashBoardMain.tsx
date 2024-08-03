/* eslint-disable react/no-array-index-key */
import { useProducts } from "@/hooks/react-query/useProduct";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { DashBoardMainWrapper } from "@/styles/StyledComponents/DashBoardMainWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CallUserIcon from "@/ui/Icons/CallUserIcon";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CommonCart from "../CommonCart/CommonCart";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function DashBoardMain() {
  useProducts();
  const products = useAppSelector((state) => state.productSlice.products) || [];
  const {userData} : any = useAppSelector((state) => state.userSlice);
  return (
    <DashBoardMainWrapper>
      <Box className="wrapper_mainInner">
        <CommonDashBoardTitle title={`Hello, ${userData?.first_name}. How can we help you today?`} />
        <Box className="boxTextWrap">
          <Typography variant="h3">Order Dry Ice</Typography>
        </Box>
        <Box className="allCardBoxWrap">
          <Grid container spacing={1.5}>
            {products.map((item, index) => (
              <Grid item lg={3} md={6} xs={12} key={index}>
                <CommonCart
                  linkPath={`/${item.slug}?i=2`}
                  imgPath={item.product_image_url}
                  textMain={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className="dashBoardCardBox">
          <Grid container spacing={1.5}>
            <Grid item lg={6} xs={12}>
              <Box className="innerCrdInfo">
                <Typography variant="body1" className="titleTxt">
                  Need Custom Cut Dry Ice?
                </Typography>
                <CustomButtonPrimary
                  startIcon={<CallUserIcon />}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="caption">866-709-9045</Typography>
                </CustomButtonPrimary>
              </Box>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Box className="innerCrdInfo blueBx">
                <Typography variant="body1" className="titleTxt">
                  Check on Order Status or Something Else?
                </Typography>
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="secondary"
                >
                  <Typography variant="caption">Contact Us</Typography>
                </CustomButtonPrimary>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DashBoardMainWrapper>
  );
}
