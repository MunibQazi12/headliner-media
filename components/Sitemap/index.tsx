import { SiteMapWrapper } from '@/styles/StyledComponents/SiteMapWrapper'
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from 'next/link';
import CommonHeading from "../CommonHeading/CommonHeading";

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
        name: "High-Density Dry Ice Pellets",
        route: "/High-Density Dry Ice Pellets"
      },
      {
        name: "5 lb. Dry Ice Blocks",
        route: "/aireline-cut-dry-ice?i=2"
      },
      {
        name: "Airline Cut Dry Ice",
        route: "/high-density-dry-ice-pellets?i=2"
      },
      {
        name: "Custom Cut Dry Ice",
        route: "#"
      },
      {
        name: "Distribution Centers",
        route: "#"
      },
    
    ]
  },
  {
    title: "Industries",
    submenu: [
      {
        name: "Dry Ice Safety 101",
        route: "#"
      },
      {
        name: "Carbon Ice",
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
        name: "Carbon Ice",
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
     
    ]
  }
];


function index() {
  return (
    <SiteMapWrapper className='siteMapWrapper'>
      <Container fixed className="cus_container">
        <Box className="innerMain">
          <CommonHeading bigHeading="Sitemap for Emory Dry Ice" />
        </Box>
        <Box className=" headingSection ">

        {navItems.map((item) => (
                <Box key={`footer-${item}`}>
                  <Box >
                   <Typography className='titletxt'>{item.title}</Typography>
                      {item.submenu.map((items) => (
                        <Box key={`${item}`}>
                        <Link className='customLinks' href={items.route}>{items.name}</Link>
                      </Box>
                      ))}
                  </Box>
                </Box>
              ))}


          {/* <Box>
            <Typography className='titletxt'>Company</Typography>
            <Box>
            <Link className='customLinks' href="/" >Home</Link>
            </Box>

            <Box>
            <Link className='customLinks' href="/" >Home</Link>
            </Box> <Box>
            <Link className='customLinks' href="/" >Home</Link>
            </Box> <Box>
            <Link className='customLinks' href="/" >Home</Link>
            </Box> <Box>
            <Link className='customLinks' href="/" >Home</Link>
            </Box>
      

          </Box> */}
{/* 
          <Box>
            <Typography className='titletxt'>Dry Ice Supplies </Typography>
            <Link className='customLinks' href="/" >Home</Link>

          </Box>

          <Box>
            <Typography className='titletxt'>Industries</Typography>
            <Link className='customLinks' href="/" >Home</Link>

          </Box>

          <Box>
            <Typography className='titletxt'>Resources</Typography>
            <Link className='customLinks' href="/" >Home</Link>

          </Box> */}


        </Box>
      </Container>


    </SiteMapWrapper>
  )
}

export default index