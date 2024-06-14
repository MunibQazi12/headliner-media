/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import assest from "@/json/assest";
import { articleResource } from "@/json/mock/cartAboutList.mock";
import { ResourcesDetailsMainWrap } from "@/styles/StyledComponents/ResourcesDetailsMainWrap";
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
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import CommonHeading from "../CommonHeading/CommonHeading";
import ResourcesCart from "../ResourcesCart/ResourcesCart";

export default function ResourcesDetailsMain() {
  return (
    <ResourcesDetailsMainWrap>
      <Box className="wrapper_resourceDetails">
        <Container fixed>
          <Box className="innerTopDetails">
            <Box className="wrapper_mainTop">
              <CommonHeading bigHeading="Emory Business Update About A, B, C New Initiative Going on in June 2024" />
              <figure>
                <Image
                  src={assest.mainDetailsImage1}
                  alt="details-image"
                  width={1332}
                  height={601}
                />
              </figure>
            </Box>
            <Box className="wrapperMainInfoText">
              <Box className="wrapper_leftInfo">
                <Box className="wrapper_socialView">
                  <Typography variant="body1">
                    <Typography variant="caption">109</Typography>Views
                  </Typography>
                  <List disablePadding>
                    <ListItem disablePadding>
                      <Link href="#">
                        <TwiterIcon
                          IconColor="#012060"
                          IconHeight="18"
                          IconWidth="18"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#">
                        <LinkedInIcon
                          IconColor="#012060"
                          IconHeight="18"
                          IconWidth="18"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#">
                        <FacebookIcon
                          IconColor="#012060"
                          IconHeight="18"
                          IconWidth="18"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#">
                        <DiscordIcon
                          IconColor="#012060"
                          IconHeight="18"
                          IconWidth="18"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#">
                        <SocialShareIcon
                          IconColor="#012060"
                          IconHeight="18"
                          IconWidth="18"
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="wrapper_rightInfoText">
                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024. EMORY Corporate
                  Update About A, B, C New Initiative Going on in June 2024.
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024. EMORY Corporate
                  Update About A, B, C New Initiative Going on in June 2024.
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024. EMORY Corporate
                  Update About A, B, C New Initiative Going on in June 2024.
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024. EMORY Corporate
                  Update About A, B, C New Initiative Going on in June 2024.
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024. EMORY Corporate Update About
                  A, B, C New Initiative Going on in June 2024. EMORY Corporate
                  Update About A, B, C New Initiative Going on in June 2024.
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>

                <Typography variant="body1">
                  EMORY Corporate Update About A, B, C New Initiative Going on
                  in June 2024. EMORY Corporate Update About A, B, C New
                  Initiative Going on in June 2024.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="otherArticl">
            <CommonHeading mediumHeading="Other Articles" />
            <Box className="allCardBoxWrap">
              <Grid container columnSpacing={2} rowSpacing={{ lg: 4, xs: 2 }}>
                {articleResource.map((item, index) => (
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
          </Box>
        </Container>
      </Box>
    </ResourcesDetailsMainWrap>
  );
}
