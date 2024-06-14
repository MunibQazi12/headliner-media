/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { listCardDataResource } from "@/json/mock/cartAboutList.mock";
import { ResourcesMainWrapper } from "@/styles/StyledComponents/ResourcesMainWrapper";
import DiscordIcon from "@/ui/Icons/DiscordIcon";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import LinkedInIcon from "@/ui/Icons/LinkedInIcon";
import SocialShareIcon from "@/ui/Icons/SocialShareIcon";
import TwiterIcon from "@/ui/Icons/TwiterIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import CommonHeading from "../CommonHeading/CommonHeading";
import ResourcesCart from "../ResourcesCart/ResourcesCart";

export default function ResourcesMain() {
  return (
    <ResourcesMainWrapper>
      <Box className="wrapper_mainResorc">
        <Container fixed className="cus_container">
          <Box className="wrapper_infoMain">
            <CommonHeading bigHeading="Emory Dry Ice Resources" />
            <Box className="allCardBoxWrap">
              <Grid container columnSpacing={2} rowSpacing={{ lg: 4, xs: 2 }}>
                {listCardDataResource.map((item, index) => (
                  <Grid item lg={4} md={6} xs={12} key={index}>
                    <ResourcesCart
                      linkPath={item.linkPath}
                      imgPath={item.imgPath}
                      textMain={item.textMain}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box className="allSocialList">
              <List disablePadding>
                <ListItem disablePadding>
                  <Link href="">
                    <TwiterIcon />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="">
                    <LinkedInIcon />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="">
                    <FacebookIcon />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="">
                    <DiscordIcon />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="">
                    <SocialShareIcon />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </ResourcesMainWrapper>
  );
}
