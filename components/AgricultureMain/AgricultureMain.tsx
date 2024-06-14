/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { faqMainListTw } from "@/json/mock/accordianFaq.mock";
import { listCardData } from "@/json/mock/cartAboutList.mock";
import { AgricultureMainWrapper } from "@/styles/StyledComponents/AgricultureMainWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CommonBreadCrum from "../CommonBreadCrum/CommonBreadCrum";
import CommonCart from "../CommonCart/CommonCart";
import CommonFaq from "../CommonFaq/CommonFaq";
import CommonHeading from "../CommonHeading/CommonHeading";

export default function AgricultureMain() {
  return (
    <AgricultureMainWrapper>
      <Box className="wrapper_mainAgriculture">
        <Box className="extraGap big">
          <CommonBreadCrum pageName="Dry Ice for Agriculture" />
        </Box>
        <Container fixed className="cus_container">
          <Box className="innerMainAgriculture extraGap">
            <Grid
              container
              spacing={{ lg: 6, md: 3, xs: 2 }}
              alignItems="center"
            >
              <Grid item lg={6} xs={12}>
                <Box className="wrapper_textInfo">
                  <Typography variant="h2">Dry Ice for Agriculture</Typography>
                  <Typography variant="body1">
                    Keeping fruits and vegetables fresh when transporting them
                    from farms to stores is no easy task, but Emory can help
                    provide high-quality, affordable dry ice solutions that help
                    preserve freshness and overall food quality.
                  </Typography>

                  <Typography variant="body1">
                    Maintain temperature and moisture control while drastically
                    reducing spoilage and improving your margins at scale with
                    Emory&apos;s dry ice solutions for agriculture.
                  </Typography>
                  <Typography variant="h3">
                    Where do you need dry ice delivered to?
                  </Typography>
                  <Box className="wrapper_inputFld">
                    <InputFieldCommon placeholder="Enter Address..." />
                    <Box className="btnWrap">
                      <Button type="button">Get a Free Quote</Button>
                    </Box>
                  </Box>
                  <Typography variant="caption">
                    * Free Shipping included for orders over 50 pounds
                    (conditions apply)
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="imgWrapper">
                  <figure>
                    <Image
                      src={assest.agricultureImg1}
                      alt="image-agreculture"
                      width={800}
                      height={800}
                    />
                  </figure>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="dryIceSection">
            <CommonHeading borderHeading="Dry Ice Solutions for Agriculture" />
            <Box className="wrapper_listItem">
              <Typography variant="body1">
                Produce cooling is crucial in the agriculture industry in order
                to maintain the freshness and quality of fruits and vegetables
                when delivering them from farms to stores. Here are some of the
                common challenges that Emory&apos;s dry ice cooling solutions
                helps agriculture with:
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Temperature Control:</Typography>
                Different types of produce require specific temperature ranges
                for optimal preservation. Maintaining these temperatures
                throughout the transportation process can be challenging,
                especially during long journeys or in varying environmental
                conditions.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Moisture Control:</Typography>
                Excessive moisture can lead to spoilage, mold growth, and
                bacterial contamination. Proper humidity levels must be
                maintained to prevent such issues.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Ethylene Management:</Typography>
                Some fruits and vegetables produce ethylene gas, which
                accelerates ripening and can lead to premature spoilage if not
                controlled.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">
                  Transportation Delays:
                </Typography>
                Delays in transportation can occur due to various reasons such
                as traffic, weather conditions, or logistical issues. Extended
                transit times increase the risk of produce spoilage.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">
                  Dry ice, solid carbon dioxide (CO2) is commonly used in
                  agriculture for several reasons:
                </Typography>
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Temperature Control:</Typography>
                Dry ice provides extremely low temperatures, making it ideal for
                preserving perishable goods. It can create a consistently cold
                environment during transportation, ensuring that the produce
                remains fresh for a longer duration.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Moisture Control:</Typography>Dry
                ice sublimates directly from solid to gas, leaving behind no
                liquid residue. This helps in maintaining dry conditions, which
                is crucial for preventing moisture-related spoilage.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Ethylene Management:</Typography>
                Dry ice can help mitigate the effects of ethylene gas by slowing
                down the ripening process of fruits and vegetables. This helps
                extend the shelf life of produce during transportation.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">Versatility:</Typography> Dry ice
                is versatile and can be used in various forms, such as in
                insulated containers, cooling packs, or as a direct coolant. Its
                flexibility makes it suitable for different transportation
                methods and packaging configurations.
              </Typography>
              <Typography variant="body1">
                <Typography variant="caption">
                  Non-toxic and Odorless:
                </Typography>
                Dry ice is non-toxic and odorless, making it safe for use with
                food products. It does not leave any residue or affect the taste
                or quality of the produce.
              </Typography>
              <Typography variant="body1">
                Overall, dry ice offers an efficient and reliable cooling
                solution for transporting produce, addressing many of the
                challenges faced by agriculture in preserving freshness and
                quality. If you need a high-quality and affordable dry ice
                cooling solution for your produce freshness and transportation
                needs, please contact Emory today.
              </Typography>
            </Box>
          </Box>
          <Box className="infoTabInner">
            <Box className="accordionList">
              <Typography variant="h3">Emory Dry Ice FAQs</Typography>
              <CommonFaq accordiondata={faqMainListTw} />
            </Box>
          </Box>
          <Box className="deliveredProduct">
            <CommonHeading borderHeading="Premium, Affordable Dry Ice for Agriculture" />
          </Box>
          <Box className="allCardBoxWrap">
            <Grid container spacing={2}>
              {listCardData.map((item, index) => (
                <Grid item lg={3} md={6} xs={12} key={index}>
                  <CommonCart
                    linkPath={item.linkPath}
                    imgPath={item.imgPath}
                    textMain={item.textMain}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </AgricultureMainWrapper>
  );
}
