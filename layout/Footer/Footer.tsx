/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import assest from "@/json/assest";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import ArrowWhiteBtn from "@/ui/Icons/ArrowWhiteBtn";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import LinkedInIcon from "@/ui/Icons/LinkedInIcon";
import TwiterIcon from "@/ui/Icons/TwiterIcon";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    title: "Company",
    submenu: [
      {
        name: "About Us",
        route: "/about"
      },
      {
        name: "FAQs",
        route: "/faq"
      },
      {
        name: "Why Us?",
        route: "/why-us"
      },
      {
        name: "Industries",
        route: "/industries"
      },
      {
        name: "Services",
        route: "#"
      },
      {
        name: "Contact Us",
        route: "/contact"
      }
    ]
  },
  {
    title: "Dry Ice",
    submenu: [
      {
        name: "Dry Ice Pellets",
        route: "/dry-ice-pellets?i=2"
      },
      {
        name: "Dry Ice Blocks",
        route: "/5-lb-dry-ice-blocks?i=2"
      },
      {
        name: "Airline Cut Dry Ice",
        route: "/aireline-cut-dry-ice?i=2"
      },
      {
        name: "High-Density Dry Ice Pellets",
        route: "/high-density-dry-ice-pellets?i=2"
      },
      {
        name: "Dry Ice Delivery",
        route: "#"
      },
      {
        name: "Dry Ice Distribution",
        route: "#"
      },
      {
        name: "Emergency Dry Ice",
        route: "#"
      }
    ]
  },
  {
    title: "Resources",
    submenu: [
      {
        name: "Dry Ice Safety 101",
        route: "#"
      },
      {
        name: "Dry Ice Hazards",
        route: "#"
      },
      {
        name: "Dry Ice Melting Temperature",
        route: "#"
      },
      {
        name: "Dry Ice Blasting",
        route: "#"
      },
      {
        name: "Dry Ice Sublimation",
        route: "#"
      },
      {
        name: "Transporting Dry Ice",
        route: "#"
      },
      {
        name: "Carbon Ice",
        route: "#"
      }
    ]
  }
];

const Footer = () => {
  const router = useRouter();
  return (
    <FooterWrap>
      <Box className="footerTopMain">
        <Container fixed className="cus_container">
          <Box className="wrapper_topFooter">
            <Box className="footerLogoWrap">
              <Box className="footerLogoInfo">
                <Link href="/">
                  <Image
                    src={assest.footerLogo}
                    alt="logo"
                    width={139}
                    height={31}
                  />
                </Link>
                <Typography variant="body1">
                  Emory provides exceptional dry ice products delivered to you,
                  along a variety of tier-1 dry ice services made available to
                  commercial and industrial businesses throughout the US.
                </Typography>
                <List disablePadding className="listPhone">
                  <ListItem disablePadding>
                    <Typography>
                      Sales: <Link href="tel:8667099045">866-709-9045</Link>
                    </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <Typography>
                      Support: <Link href="tel:8667099055">866-709-9055</Link>
                    </Typography>
                  </ListItem>
                </List>
                <List disablePadding className="socialIcon">
                  <ListItem disablePadding>
                    <Link href="#">
                      <FacebookIcon />
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="#">
                      <TwiterIcon />
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="#">
                      <LinkedInIcon />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box className="wrapperMainLinkWrap">
              {navItems.map((item, index) => (
                <Box className="singleMenuLink" key={`footer-${index}`}>
                  <Box className="wrapper_footerMenu">
                    <Typography variant="body1" className="titletxt">
                      {item.title}
                    </Typography>
                    <List disablePadding>
                      {item.submenu.map((items, index) => (
                        <ListItem disablePadding key={index}>
                          <Link href={items.route}>{items.name}</Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="footerBtmWrapper">
        <Container fixed className="cus_container">
          <Box className="footerWrapBtm">
            <Typography variant="body1">
              © 2024 <Link href="/">Emory Inc</Link>. All Rights Reserved.
            </Typography>
            <List disablePadding>
              <ListItem disablePadding>
                <Link href="#">Terms of Service </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#">Privacy Policy </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#">Sitemap </Link>
              </ListItem>
            </List>
            <Button type="button" className="fixedBtn">
              <ArrowWhiteBtn />
            </Button>
          </Box>
        </Container>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
