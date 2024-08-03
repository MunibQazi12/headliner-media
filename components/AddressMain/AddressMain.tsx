/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import AutoComplete from "@/components/Autocomplete/Autocomplete";
import { useAddresses } from "@/hooks/react-query/useAddress";
import {useAddressCreateMutation} from "@/hooks/react-query/useAddressMutations";
import { AddressMainWrapper } from "@/styles/StyledComponents/AddressMainWrapper";
import type { AddressInputType } from "@/types/common.type";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import DotBtnMain from "@/ui/Icons/DotBtnMain";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {useAppSelector} from "@/hooks/redux/useAppSelector";
import {DeleteAddress} from "@/api/functions/address.api";
import CommonDashBoardTitle from "../CommonDashBoardTitle/CommonDashBoardTitle";

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const FlexDiv = styled.div`
  flex: 1;
`;

export default function AddressMain() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [address, setAddress] = React.useState<AddressInputType>({
    formatted_address: "",
    place_id: ""
  });
  const { data, error, isLoading, refetch } = useAddresses();
  const addressCreateMutation = useAddressCreateMutation();

  const addresses = data?.data.data;

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteItem = async (id: string) => {
    const addressDeleteMutation = await DeleteAddress(id as string);
    refetch();
  };
  const onSubmitAddress = () => {
    addressCreateMutation.mutate(address, {
      onSuccess: () => {
        // Refetch addresses after a successful mutation
        refetch();
      },
      onError: (error) => {
        // Handle error case here
        // console.error("Error creating address:", error);
      }
    });
  };
  const {userData} : any = useAppSelector((state) => state.userSlice);
  return (
    <AddressMainWrapper>
      <Box className="mainAddress_wrapper">
        <CommonDashBoardTitle
          title={`Hello, ${userData?.first_name}. Update or add shipping address here.`}
          btnText="+ Add Shipping Address"
        />
        <FlexBox>
          <FlexDiv>
            <AutoComplete setAddress={setAddress} />
          </FlexDiv>
          <CustomButtonPrimary
            onClick={() => onSubmitAddress()}
            variant="contained"
            color="secondary"
            disabled={address.place_id === ""}
          >
            + Add a new address
          </CustomButtonPrimary>
        </FlexBox>
        <Box className="addressMainBox">
          <Grid container spacing={{ lg: 3, xs: 2 }}>
            {addresses?.map((item) => (
              <Grid item xs={12}>

                <Box className="wrapper_mainBoxCart">
                  <div className="title">{item.formatted_address}</div>
                  <Box className="btnWrp">
                    <Button
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <DotBtnMain />
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
                      <MenuItem onClick={ () => { deleteItem(item.id);handleClose()}}>Delete</MenuItem>
                    </Menu>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </AddressMainWrapper>
  );
}
