import { AboutMainPageWrapper } from "@/styles/StyledComponents/AboutMainPageWrapper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function AboutMainPage() {
  return (
    <AboutMainPageWrapper>
      <Container fixed>
        <Box className="mainWhyheader">
          <CommonHeading bigHeading="Learn About Emory's Dry Ice Services" />
          <Typography variant="body1">
            Emory welcomes you to consider using our premium, yet affordable dry
            ice supply services. From serving the southern United States and
            beyond from our cutting-edge facilities located in Houston & Dallas,
            TX, Brookhaven, MS, and Burlington, NJ, we pride ourselves on
            delivering top-quality dry ice products.
          </Typography>

          <Typography variant="body1">
            With an unwavering dedication to excellence and a wealth of
            expertise in dry ice production, distribution, and industrial
            applications, we provide innovative solutions tailored to meet the
            specific needs of multiple diverse industries.
          </Typography>

          <Typography variant="body1">
            Since our establishment as a specialized dry ice blasting company in
            2018, Emory has become a leading name in the dry ice industry. Our
            dry ice production facilities work hard to always ensure a steady
            and reliable supply of various dry ice products, catering to
            multiple business and consumer applications. Whether it&apos;s the
            pharmaceutical or airline industries, meat processing, food
            delivery, and more - our dry ice production and supply solutions are
            tailored to meet the many needs of diverse businesses throughout the
            US.
          </Typography>

          <Typography variant="body1">
            Experience the Emory difference through our exceptional customer
            service, commitment to environmental sustainability, and
            industry-leading certifications. You can trust in Emory for all your
            cooling requirements and allow us to become your dependable dry ice
            supply partner.
          </Typography>
        </Box>

        <Box className="whyBox">
          <CommonHeading smallHeading="Better Dry Ice for All" />
          <Typography variant="body1">
            Custom cut dry ice, made to size, super high density, and lasts
            longer. We make our dry ice using modern reformers with
            environmentally friendly carbon recapture instead of cutting it from
            large blocks of ice
          </Typography>
        </Box>

        <Box className="whyBox">
          <CommonHeading smallHeading="Guaranteed Dry Ice Supply on Your Terms" />
          <Typography variant="body1">
            Never miss out. We get the best dry ice to you when you need it, and
            where you need it. Our modern supply chain is not only designed from
            the bottom up to be robust and resilient, but it&apos;s designed
            based on meeting our customers&apos; unique dry ice needs - not the
            other way around. From owning our own tanks/tankers to agile use of
            multiple dry ice production facilities with a strategic reserve
            ready to go at a moment&apos;s notice.
          </Typography>
        </Box>

        <Box className="whyBox">
          <CommonHeading smallHeading="Personalized Customer Service" />
          <Typography variant="body1">
            Partnering with Emory for your dry ice needs is quick and painlessly
            easy. We assign one point of contact to you and your business
            without routing you through call centers and dropping calls.
          </Typography>

          <Typography variant="body1">
            Here at Emory, we are deeply dedicated to delivering exceptional dry
            ice products at affordable prices. We understand that every industry
            and application have unique requirements. That&apos;s why we offer a
            wide range of dry ice products tailored to suit various needs. Our
            reliable, high-quality, and eco-friendly dry ice products have
            earned the trust of both small businesses and large industrial
            enterprises alike.
          </Typography>
        </Box>

        <Box className="whyBox">
          <CommonHeading smallHeading="Need Dry Ice?" />
          <Typography variant="body1">
            Discover the Emory advantage today and unlock a new level of cooling
            and cleaning solutions. Feel free to contact us today and discuss
            your dry ice requirements and experience why businesses nationwide
            trust us as their preferred dry ice supplier.
          </Typography>

          <Typography variant="body1">
            With our cutting-edge dry ice production facilities, an unwavering
            commitment to environmental sustainability, and unparalleled
            customer service, we are here to support your business every step of
            the way.
          </Typography>

          <Typography variant="body1">
            Join countless satisfied customers who rely on our top-notch dry ice
            products, exceptional service, and industry-leading support. Contact
            us today to discuss your dry ice needs.
          </Typography>
        </Box>
      </Container>
    </AboutMainPageWrapper>
  );
}
