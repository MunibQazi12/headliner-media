/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { dashboardSidebarMenu } from "@/json/mock/dashboardSidebarList.mock";
import { DashboardSidebarMainWrapper } from "@/styles/StyledComponents/DashboardSidebarMainWrapper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useRouter } from "next/router";
import {signOut} from "next-auth/react";

export default function DashboardSidebarMain() {
  const router = useRouter();





  return (
    <DashboardSidebarMainWrapper>
      <Box className="sideBarMain_wrap">
        <List disablePadding>
          {dashboardSidebarMenu.map((item, index) => (
            <ListItem disablePadding key={index}>
              <Link
                href={item.route}
                className={item.route === router.pathname ? "active" : ""}
              >
                {item.menuText}
              </Link>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Link href="#" onClick={() => {
                signOut();
            }}>Logout</Link>
          </ListItem>
        </List>
      </Box>
    </DashboardSidebarMainWrapper>
  );
}
