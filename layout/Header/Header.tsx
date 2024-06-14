/* eslint-disable no-console */

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CallUserIcon from "@/ui/Icons/CallUserIcon";
import DashBoardMenu from "@/ui/Icons/DashBoardMenu";
import LoginIcon from "@/ui/Icons/LoginIcon";
import CartIcon from "@/ui/Icons/cartIcon";
import Close from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface dashboardHeader {
  isDashboard?: boolean;
  dashboardMenuClick?: any;
}
// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

const drawerWidth = 240;

export default function Header({
  isDashboard,
  dashboardMenuClick
}: dashboardHeader) {
  const navItems = [
    {
      name: "Dry Ice",
      route: "javascript:void(0)"
    },
    {
      name: "Why Us?",
      route: "javascript:void(0)"
    },
    {
      name: "About",
      route: "javascript:void(0)"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box className="drawerWrap">
      <Button
        type="button"
        className="closeMenuBtn"
        onClick={handleDrawerToggle}
      >
        <Close />
      </Button>
      <Box className="drawerLogo">
        <Link href="/">
          <Image src={assest.mainLogo} width={250} height={38} alt="Logo" />
        </Link>
      </Box>
      <List className="drawerMenu">
        {navItems.map((item) => (
          <ListItem disablePadding>
            <Link href={item?.route} key={item.name}>
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>

      <Box className="hdr_rgt">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          className="buttonsContsct"
        >
          <CustomButtonPrimary
            startIcon={<CallUserIcon />}
            type="button"
            variant="contained"
            color="primary"
          >
            <Typography variant="caption">866-709-9045</Typography>
          </CustomButtonPrimary>

          <CustomButtonPrimary
            type="button"
            variant="contained"
            color="secondary"
          >
            <Typography variant="caption">Contact Us</Typography>
          </CustomButtonPrimary>
        </Stack>
      </Box>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed className="cus_container">
          <Toolbar>
            <Link href="/" className="headerLogo">
              <Image src={assest.mainLogo} width={250} height={38} alt="Logo" />
            </Link>

            {isLoggedIn ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <CustomButtonPrimary
                  onClick={handleLogout}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>Logout</span>
                </CustomButtonPrimary>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <span>{userData?.email}</span>
                </CustomButtonPrimary>
              </Box>
            ) : (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <List disablePadding>
                  <ListItem disablePadding>
                    {navItems.map((item) => (
                      <Link
                        href={item?.route}
                        key={item?.route}
                        className={
                          router.pathname === item.route ? "active" : ""
                        }
                      >
                        {/* <CustomButton type="button" variant="text"> */}
                        {item?.name}
                        {/* </CustomButton> */}
                      </Link>
                    ))}
                  </ListItem>
                </List>
              </Box>
            )}
            <Box className="hdr_rgt">
              <Stack direction="row" className="buttonsContsct">
                <CustomButtonPrimary
                  startIcon={<CallUserIcon />}
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="caption">866-709-9045</Typography>
                </CustomButtonPrimary>

                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="secondary"
                >
                  <Typography variant="caption">Contact Us</Typography>
                </CustomButtonPrimary>
              </Stack>

              <Box className="loginBtn">
                <Button>
                  <LoginIcon />
                </Button>
              </Box>

              <Box className="cart_icon">
                <Button>
                  <Badge color="primary" variant="dot">
                    <CartIcon />
                  </Badge>
                </Button>
              </Box>
            </Box>
            {isDashboard && (
              <Box
                className="dashBoardMenu"
                sx={{ display: { lg: "none", xs: "inline-block" } }}
              >
                <Button type="button" onClick={dashboardMenuClick}>
                  <DashBoardMenu />
                </Button>
              </Box>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
              className="menuDrawer"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "none",
              filter: "drop-shadow(0px 29px 97.3px rgba(125, 97, 157, 0.24))"
            }
          }}
          className="menu-drawer"
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
