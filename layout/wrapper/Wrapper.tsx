/* eslint-disable no-undef */
import DashboardSidebarMain from "@/components/DashboardSidebarMain/DashboardSidebarMain";
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/utils/useDetectOnline";
import {WrapperStyle} from "@/styles/StyledComponents/WrapperStyle";
import {primaryColors} from "@/themes/_muiPalette";
import Close from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {NextAuthProvider} from "@/components/layout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface wrapperProps {
    children: React.ReactNode;
    dashBoardTrue?: boolean;
}

const Wrapper = (props: wrapperProps) => {
    const {children, dashBoardTrue} = props;

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    // const handleOpen = () => {
    //   setOpen(true);
    // };

    // useEffect(() => {
    //   if (document) {
    //     const hdrElm = document.querySelector<HTMLElement>(".main_head");
    //     const hdrHeight = hdrElm?.clientHeight;
    //     const paaddngELM = document.querySelector<HTMLElement>(".body_content");
    //     if (!!paaddngELM) {
    //       paaddngELM.style.paddingTop = hdrHeight + "px";
    //     }
    //   }
    // });
    const router = useRouter();

    const routerText = router.pathname.split("");

    routerText.shift();
    const favText = routerText.join("").toString().toUpperCase();
    const projectName = "Emory";

    useOnlineStatus();

    const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
    const handelMenuOpen = () => {
        setDashboardMenuOpen(true);
    };
    const handelMenuClose = () => {
        setDashboardMenuOpen(false);
    };

    return (
        <WrapperStyle className={dashboardMenuOpen === true ? " active" : ""}>
            <NextAuthProvider>
                <Seo
                    title={
                        router.pathname === "/"
                            ? `${projectName}`
                            : `${projectName} || ${favText}`
                    }
                    canonical=""
                    description=""
                    url=""
                    image=""
                />
                <Header isDashboard={dashBoardTrue} dashboardMenuClick={handelMenuOpen}/>
                {dashBoardTrue === true ? (
                    <Box className="dashBoardOuter">
                        <Container fixed className="cus_container">
                            <Box className="dashboardInner">
                                <Box
                                    className={
                                        dashboardMenuOpen === true
                                            ? "innerSiderBar active"
                                            : "innerSiderBar"
                                    }
                                >
                                    <Button
                                        type="button"
                                        className="closeBtn"
                                        onClick={handelMenuClose}
                                    >
                                        <Close/>
                                    </Button>
                                    <DashboardSidebarMain/>
                                </Box>
                                <Box className="mainContentRight">{children}</Box>
                            </Box>
                        </Container>
                    </Box>
                ) : (
                    <Box className="body_content">

                        {children}
                    </Box>
                )}

                <Footer/>

                <Backdrop
                    sx={{
                        color: `${primaryColors?.white}`,
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <Box
                    className={
                        dashboardMenuOpen === true
                            ? "overlayDashboard active"
                            : "overlayDashboard"
                    }
                    onClick={handelMenuClose}
                />
            </NextAuthProvider>
        </WrapperStyle>
    );
};

export default Wrapper;
