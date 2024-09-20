/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { sliderListItem } from "@/json/mock/testimonialSliderList";
import { ClientTestimonialWraper } from "@/styles/StyledComponents/ClientTestimonialWraper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeading from "../CommonHeading/CommonHeading";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function ClientTestimonial() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 11199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <ClientTestimonialWraper>
      <Box className="clientTestimonial_main">
        <Container fixed className="cus_container">
          <Box className="wrapper_mainTestimonial">
            <CommonHeading borderHeading="Customer Testimonials" />
            <Box className="allTestimonialCard">
              <Slider {...settings}>
                {sliderListItem.map((item, inde) => (
                  <Box className="singleSlider" key={inde}>
                    <TestimonialCard
                      value={item.valustart}
                      textMsg={item.textMsg}
                      name={item.name}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box className="wrapper_mainLast">
              <Box className="imgWRap">
                <Box className="singleItemImg">
                  <Image
                    src={assest.lastBtmImg1}
                    alt="logo-image"
                    width={600}
                    height={600}
                  />
                </Box>
                <Box className="singleItemImg">
                  <Image
                    src={assest.lastBtmImg2}
                    alt="logo-image"
                    width={600}
                    height={600}
                  />
                </Box>
                <Box className="singleItemImg">
                  <Image
                    src={assest.lastBtmImg3}
                    alt="logo-image"
                    width={600}
                    height={600}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ClientTestimonialWraper>
  );
}
