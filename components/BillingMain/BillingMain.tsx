import CheckoutPage from "@/components/Checkout/Checkout";
import { BillingMainWrapper } from "@/styles/StyledComponents/BillingMainWrapper";
import Box from "@mui/material/Box";
import * as React from "react";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

export default function BillingMain() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <BillingMainWrapper>
      <Box className="wrapper_mainBilling">
        <CommonDashBoardTitle
          title="Hello, John. Update or add shipping address here."
          btnText="+ Add Payment Method"
          isButton
        />
        <CheckoutPage />
        {/* <Box className="billingInner">
          <Grid container spacing={3}>
            <Grid item lg={7} xs={12}>
              <Box className="formWrapper">
                <Box className="wrapper_authForm">
                  <Box className="singleInputWrap">
                    <InputFieldCommon placeholder="Name on Card" />
                  </Box>
                  <Box className="singleInputWrap">
                    <InputFieldCommon placeholder="Card Number" />
                  </Box>
                  <Box className="wrapper_formTw">
                    <Box className="singleInputWrap">
                      <InputFieldCommon placeholder="Expiration Date" />
                    </Box>
                    <Box className="singleInputWrap">
                      <InputFieldCommon placeholder="CVV" isPassword />
                    </Box>
                  </Box>
                  <Box className="singleInputWrap">
                    <InputFieldCommon placeholder="Billing Address" />
                  </Box>
                </Box>
                <Box className="btnWrapper">
                  <CustomButtonPrimary variant="contained" color="secondary">
                    Save Info
                  </CustomButtonPrimary>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={5} xs={12}>
              <Box className="wrapper_mainBoxCart">
                <Box className="btnWrp">
                  <Button
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <DotBtnMain
                      IconColor="#fff"
                      IconHeight="16"
                      IconWidth="5"
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        background: "#DAE2F5",
                        filter: "none",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "#DAE2F5",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0
                        }
                      }
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </Box>
                <Box className="wrapper_mainInfo">
                  <Typography variant="body1" className="title">
                    Talan Franci
                  </Typography>
                  <Typography variant="body1">**** **** **** 1234</Typography>
                  <Typography variant="body1">01/11/23</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
    </BillingMainWrapper>
  );
}
