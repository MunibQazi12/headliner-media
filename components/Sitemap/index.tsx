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
    "submenu": [
      {
        "name": "Home",
        "route": "/home"
      },
      {
        "name": "About",
        "route": "/about"
      },
      {
        "name": "FAQs",
        "route": "/faq"
      },
      {
        "name": "Why Us?",
        "route": "/why-us"
      },
      {
        "name": "Industries",
        "route": "/industries"
      },
      {
        "name": "Dry Ice Delivery",
        "route": "/dry-ice-delivery"
      },
      {
        "name": "Dry Ice Distribution",
        "route": "/dry-ice-distribution"
      },
      {
        "name": "Contact",
        "route": "/contact"
      }
    ]
  },
  {
    title: "Dry Ice Supplies",
    "submenu": [
      {
        "name": "Dry Ice",
        "route": "/dry-ice-pellets"
      },
      {
        "name": "Dry Ice Pellets",
        "route": "/dry-ice-pellets"
      },
      {
        "name": "High-Density Dry Ice Pellets",
        "route": "/dry-ice-high-density-pellets"
      },
      {
        "name": "5 lb. Dry Ice Blocks",
        "route": "/dry-ice-5-lb-blocks"
      },
      {
        "name": "Airline Cut Dry Ice",
        "route": "/dry-ice-airline-cut"
      },
      {
        "name": "Emergency Dry Ice",
        "route": "/dry-ice-emergency"
      }
    ]

  },
  {
    title: "Industries",
    "submenu": [
      {
        "name": "Dry Ice for Agriculture",
        "route": "/dry-ice-for-agriculture"
      },
      {
        "name": "Dry Ice for Airlines",
        "route": "/dry-ice-for-airlines"
      },
      {
        "name": "Dry Ice for Education",
        "route": "/dry-ice-for-education"
      },
      {
        "name": "Dry Ice Food & Beverage",
        "route": "/dry-ice-for-food-beverage"
      },
      {
        "name": "Dry Ice for Food Delivery",
        "route": "/dry-ice-for-food-delivery"
      },
      {
        "name": "Dry Ice for Food Processing",
        "route": "/dry-ice-for-food-processing"
      },
      {
        "name": "Dry Ice for Healthcare",
        "route": "/dry-ice-for-healthcare"
      },
      {
        "name": "Dry Ice for Industrial Manufacturing",
        "route": "/dry-ice-for-industrial-manufacturing"
      },
      {
        "name": "Dry Ice for Meat Processing",
        "route": "/dry-ice-for-meat-processing"
      },
      {
        "name": "Dry Ice for Oil & Gas",
        "route": "/dry-ice-for-oil-gas"
      },
      {
        "name": "Dry Ice for Pharmaceuticals",
        "route": "/dry-ice-for-pharmaceuticals"
      },
      {
        "name": "Dry Ice for Retailers",
        "route": "/dry-ice-for-retailers"
      }
    ]
  },
  {
    title: "Resources",
    "submenu": [
      {
        "name": "Carbon Ice",
        "route": "/dry-ice-carbon-ice"
      },
      {
        "name": "Dry Ice Blasting",
        "route": "/dry-ice-blasting"
      },
      {
        "name": "Dry Ice Blasting for Automotive Restoration",
        "route": "/dry-ice-blasting-automotive-restoration"
      },
      {
        "name": "Dry Ice Blasting for Industrial Facilities",
        "route": "/dry-ice-blasting-industrial-facilities"
      },
      {
        "name": "Dry Ice Blasting for Paint Removal",
        "route": "/dry-ice-blasting-paint-removal"
      },
      {
        "name": "Dry Ice Blasting for Rust Removal",
        "route": "/dry-ice-blasting-rust-removal"
      },
      {
        "name": "Dry Ice Cleaning Car Interiors",
        "route": "/dry-ice-cleaning-car-interiors"
      },
      {
        "name": "Dry Ice Cleaning Home Furniture & Appliances",
        "route": "/dry-ice-cleaning-home-furniture-appliances"
      },
      {
        "name": "Dry Ice Cleaning for Maritime",
        "route": "/dry-ice-cleaning-maritime"
      },
      {
        "name": "Dry Ice Cleaning Supermarkets",
        "route": "/dry-ice-cleaning-supermarkets"
      },
      {
        "name": "Dry Ice Disposal Tips",
        "route": "/dry-ice-disposal-tips"
      },
      {
        "name": "Dry Ice for Automotive Detailing",
        "route": "/dry-ice-automotive-detailing"
      },
      {
        "name": "Dry Ice for Camping",
        "route": "/dry-ice-camping"
      },
      {
        "name": "Dry Ice for Cocktails",
        "route": "/dry-ice-cocktails"
      },
      {
        "name": "Dry Ice for Events",
        "route": "/dry-ice-events"
      },
      {
        "name": "Dry Ice for Food Displays",
        "route": "/dry-ice-food-displays"
      },
      {
        "name": "Dry Ice for Halloween Parties",
        "route": "/dry-ice-halloween-parties"
      },
      {
        "name": "Dry Ice for Laboratory Use",
        "route": "/dry-ice-laboratory-use"
      },
      {
        "name": "Dry Ice for Long-term Food Storage & Preservation",
        "route": "/dry-ice-long-term-food-storage-preservation"
      },
      {
        "name": "Dry Ice for Mold Remediation",
        "route": "/dry-ice-mold-remediation"
      },
      {
        "name": "Dry Ice for Power Outages",
        "route": "/dry-ice-power-outages"
      },
      {
        "name": "Dry Ice for Restaurants",
        "route": "/dry-ice-restaurants"
      },
      {
        "name": "Dry Ice for Shipping Medicine",
        "route": "/dry-ice-shipping-medicine"
      },
      {
        "name": "Dry Ice for Shipping Perishables",
        "route": "/dry-ice-shipping-perishables"
      },
      {
        "name": "Dry Ice for Theatrical Events",
        "route": "/dry-ice-theatrical-events"
      },
      {
        "name": "Dry Ice Hazards",
        "route": "/dry-ice-hazards"
      },
      {
        "name": "Dry Ice Manufacturing Process",
        "route": "/dry-ice-manufacturing-process"
      },
      {
        "name": "Dry Ice Melting Temperature",
        "route": "/dry-ice-melting-temperature"
      },
      {
        "name": "Dry Ice Packaging Tips",
        "route": "/dry-ice-packaging-tips"
      },
      {
        "name": "Dry Ice Safety",
        "route": "/dry-ice-safety"
      },
      {
        "name": "Dry Ice Sublimation",
        "route": "/dry-ice-sublimation"
      },
      {
        "name": "Dry Ice vs Gel Packs",
        "route": "/dry-ice-vs-gel-packs"
      },
      {
        "name": "Dry Ice vs Liquid Nitrogen",
        "route": "/dry-ice-vs-liquid-nitrogen"
      },
      {
        "name": "Making Dry Ice",
        "route": "/making-dry-ice"
      },
      {
        "name": "Making Ice Cream with Dry Ice",
        "route": "/making-ice-cream-with-dry-ice"
      },
      {
        "name": "Transporting Dry Ice",
        "route": "/transporting-dry-ice"
      }
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
            <Box className="linkListElements" key={`footer-${item}`}>
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