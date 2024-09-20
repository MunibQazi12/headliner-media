import { useAddresses } from "@/hooks/react-query/useAddress";
import { usePurchaseCreateMutation } from "@/hooks/react-query/useOrder";
import { useOrderDistanceMutation } from "@/hooks/react-query/useProduct";
import { faqMainListTw } from "@/json/mock/accordianFaq.mock";
import { DryIcePelletsMainWrapper } from "@/styles/StyledComponents/DryIcePelletsMainWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { calculateFee } from "helper/feeCalculator";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import CommonFaq from "../CommonFaq/CommonFaq";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ItemGroupTitle = styled(Box)`
  font-weight: 700;
  font-size: 28px;
  color: #${primaryColors.primary};
  margin-bottom: 16px;
  @media (max-width: 1499px) {
    font-size: 22px;
  }
  @media (max-width: 1399px) {
    font-size: 20px;
  }
`;

const ItemGroupDesc = styled(Box)`
  font-weight: 500;
  font-size: 56px;
  line-height: 60px;
  color: #${primaryColors.primary};
  padding: 16px 16px 64px;
  @media (max-width: 1499px) {
    font-size: 44px;
  }
  @media (max-width: 1399px) {
    font-size: 40px;
  }
`;

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function DryIcePelletsMain({ product, product_attribute }: any) {
  const router = useRouter();
  const getOrderDistanceMutation = useOrderDistanceMutation();
  const orderPurchaseMutate = usePurchaseCreateMutation();
  const [value, setValue] = useState(0);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState<number | null>(0);
  const [quantity, setQuantity] = useState<number>(50);
  const [fee, setFee] = useState<number>(0);
  const [distance, setDistance] = useState(0);
  const [agency, setAgency] = useState<any>(0);
  const [origin, setOrigin] = useState<any>({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState<any>({ lat: 0, lng: 0 });

  const navigateTo = (path: any) => {
    router.push(path);
  };

  const handelAddQut = () => {
    setQuantity(quantity + 1);
  };
  const handelDeleteQut = () => {
    setQuantity(quantity - 1);
  };

  const handleDropdownChange = (event: any) => {
    setSelectedDropdownValue(event.target.value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePurchase = () => {
    orderPurchaseMutate.mutate(
      {
        agency_id: agency.id,
        dest: selectedDropdownValue,
        quantity,
        product_id: selectedAttribute
      },
      {
        onSuccess: () => {
          navigateTo("/dashboard/order/");
          alert("payment purchased successfully!");
        },
        onError: () => {
          // Error handling if needed
        }
      }
    );
  };

  const onSubmit = () => {
    getOrderDistanceMutation.mutate(
      {
        location: selectedDropdownValue
      },
      {
        onSuccess: (data: any) => {
          setAgency(data?.data.agency);
          setOrigin(data?.data.origination);
          setDestination(data?.data.destination);
        },
        onError: () => {
          // Error handling if needed
        }
      }
    );
  };

  const { data } = useAddresses();
  const addresses = data?.data.data || [];

  const calculateAndDisplayRoute = (
    directionsService: any,
    directionsRenderer: any
  ) => {
    directionsService.route(
      {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(
          destination.lat,
          destination.lng
        ),
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (response: any, status: any) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
          const route = response.routes[0];
          setDistance(route.legs[0].distance.text);
          setFee(
            calculateFee(route.legs[0].distance.value * 0.000621371, quantity)
          );
        } else {
          window.alert(`Directions request failed due to ${status}`);
        }
      }
    );
  };

  const initMap = () => {
    const mapElement = document.getElementById("map");

    if (mapElement) {
      const map = new window.google.maps.Map(mapElement, {
        zoom: 7,
        center: origin
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      calculateAndDisplayRoute(directionsService, directionsRenderer);
    }
  };

  const loadGoogleMapsScript = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  React.useEffect(() => {
    if (
      origin.lat !== 0 ||
      origin.lng !== 0 ||
      destination.lat !== 0 ||
      destination.lng !== 0
    ) {
      if (!window.google) {
        loadGoogleMapsScript();
      } else {
        initMap();
      }
    }
  }, [origin, destination]);

  React.useEffect(() => {
    setSelectedDropdownValue(addresses[0]?.place_id);
  }, [data]);

  React.useEffect(() => {
    setSelectedAttribute(product_attribute[0].id);
  }, [product]);

  return (
    <DryIcePelletsMainWrapper>
      <Box className="wrapperMainPellet">
        <Container fixed className="cus_container">
          <Box className="middlePartMain">
            <Grid
              container
              spacing={{ xl: 6, lg: 3, xs: 2 }}
              alignItems="center"
            >
              <Grid item lg={6} md={12} xs={12}>
                <Box className="imageWrapMain">
                  <figure>
                    <Image
                      src={product.product_image_url}
                      alt="image-dryice"
                      width={800}
                      height={800}
                    />
                  </figure>
                </Box>
              </Grid>

              <Grid item lg={6} md={12} xs={12}>
                <Box className="productMainInfo">
                  <Typography variant="h2">{product.name}</Typography>

                  <Box className="sizeCart">
                    <Typography variant="body1" className="title">
                      Size
                    </Typography>
                    <Box className="radionList">
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={product_attribute[0]?.id}
                        name="radio-buttons-group"
                      >
                        {product_attribute.map((item: any) => (
                          <FormControlLabel
                            value={item.id}
                            control={<Radio />}
                            label={
                              <Box
                                onClick={() => setSelectedAttribute(item.id)}
                              >
                                <Typography>
                                  <Typography variant="caption">
                                    {item.size}
                                  </Typography>
                                  <div
                                    style={{
                                      maxHeight: 92,
                                      overflow: "hidden"
                                    }}
                                  >
                                    <Typography>{item.details}</Typography>
                                  </div>
                                </Typography>
                              </Box>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </Box>
                  </Box>
                  <Box className="sizeCart">
                    <Typography variant="body1" className="title">
                      Address
                    </Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedDropdownValue}
                      onChange={handleDropdownChange}
                      sx={{ color: "#002060", width: "100%" }}
                      defaultValue="1"
                    >
                      {addresses.map((item) => (
                        <MenuItem value={item.place_id}>
                          {item.formatted_address}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box className="quantityWrap">
                    <Typography variant="body1" className="title">
                      Quantity
                    </Typography>
                    <Box className="quantityFld">
                      <Button
                        type="button"
                        disableRipple
                        className="minusBtn"
                        onClick={handelDeleteQut}
                      >
                        -
                      </Button>
                      <InputFieldCommon value={quantity} />
                      <Button
                        type="button"
                        disableRipple
                        onClick={handelAddQut}
                      >
                        +
                      </Button>
                    </Box>
                    <Box className="wrapper_btn">
                      <CustomButtonPrimary
                        onClick={() => onSubmit()}
                        variant="contained"
                        color="secondary"
                        disabled={
                          getOrderDistanceMutation.isPending ||
                          orderPurchaseMutate.isPending
                        }
                      >
                        Get Distance & Price
                      </CustomButtonPrimary>
                    </Box>
                  </Box>
                  {/* <Box className="shipmentDetails">
                    <Typography variant="body1">
                      Ship to: 10001 <Button type="button">(Change)</Button>
                    </Typography>
                    <Typography variant="body1">{`Order by 3pm today and get dry ice delivered to you on {Next Day Date} by 5pm.`}</Typography>
                    <Typography variant="body1">
                      * Free Shipping Included for orders over 50 pounds
                      (conditions apply)
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Box>

          {(origin.lat !== 0 ||
            origin.lng !== 0 ||
            destination.lat !== 0 ||
            destination.lng !== 0) && (
            <Box sx={{ display: "flex", gap: 10 }}>
              <Box sx={{ flex: 2 }}>
                <div
                  id="map"
                  style={{ height: "500px", width: "100%", marginBottom: 32 }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <ItemGroupTitle>Distance</ItemGroupTitle>
                <ItemGroupDesc>{distance}</ItemGroupDesc>
                <ItemGroupTitle>Price</ItemGroupTitle>
                <ItemGroupDesc>
                  $
                  {(product_attribute.find(
                    ({ id }: any) => id === selectedAttribute
                  )?.price ?? 0) * quantity}{" "}
                  {fee > 0 && `+ $${fee} (fee)`}
                </ItemGroupDesc>

                <Box className="wrapper_btn">
                  <CustomButtonPrimary
                    onClick={() => handlePurchase()}
                    variant="contained"
                    color="secondary"
                    disabled={
                      getOrderDistanceMutation.isPending ||
                      orderPurchaseMutate.isPending
                    }
                  >
                    Create an order
                  </CustomButtonPrimary>
                </Box>
              </Box>
            </Box>
          )}
          <Box className="wrapper_mainInfoMddl">
            <Box className="tabInfoMain">
              <Box className="tabTop">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Product Details" {...a11yProps(0)} />
                  <Tab label="FAQs" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box className="infoTabInner">
                  <Typography variant="body1">
                    Emory offers a revolutionary solution for
                    temperature-sensitive applications. Our high-density dry ice
                    pellets are designed to redefine cooling and cleaning
                    processes across multiple industries. With Emory’s
                    high-density dry ice pellets, you can unlock a world of
                    possibilities that enhance efficiency and versatility within
                    your business operations. Experience the innovative
                    potential firsthand as these dry ice pellets provide
                    exceptional capabilities. Discover why our dedication to
                    providing cutting-edge dry ice supply solutions sets us
                    apart when it comes to meeting your cooling and cleaning
                    needs.
                  </Typography>
                  <Typography variant="body1" className="bigText">
                    Dry Ice Pellets - Size & Shape
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets come in a standard size, measuring 16mm.
                    This consistent size of this type of dry ice ensures
                    precision and ease of use in various applications. Their
                    unique cylindrical or pellet-like shape gives them
                    versatility for a wide range of cooling and cleaning tasks.{" "}
                  </Typography>

                  <Typography variant="body1">
                    The uniform shape of dry ice pellets allows for controlled
                    dosages and efficient handling, making these types of dry
                    ice pellets a preferred choice in industries like
                    pharmaceuticals, food processing, and manufacturing. Whether
                    it&apos;s shipping perishable goods or conducting dry ice
                    blasting services, the size and shape of these dry ice
                    pellets contribute to their effectiveness and efficiency in
                    diverse industrial applications.
                  </Typography>
                  <Typography variant="body1" className="bigText">
                    Primary Use Cases for Dry Ice Pellets
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets are widely utilized across various
                    industries due to their distinctive properties and
                    versatility. These exceptional attributes make them the
                    preferred option for both cooling and cleaning applications,
                    playing a vital role in optimizing efficiency while ensuring
                    the preservation of product quality. Now, let&apos;s delve
                    into exploring the primary uses of dry ice pellets.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Shipping Perishable Goods
                  </Typography>
                  <Typography variant="body1">
                    Maintaining the appropriate temperature is crucial when
                    transporting perishable goods. It ensures that products
                    remain fresh and maintain their quality throughout the
                    journey. For shipping items like food, pharmaceuticals, and
                    biologics, dry ice pellets provide an excellent cooling
                    solution. Placing the products alongside dry ice pellets
                    inside insulated containers helps to consistently uphold low
                    temperatures, guaranteeing that the goods reach their
                    destination in optimal condition.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Parts Shrinking in Industrial Processes
                  </Typography>
                  <Typography variant="body1">
                    Precision is of utmost importance in industrial
                    manufacturing, especially when it comes to the creation and
                    assembly of parts. One method that aids in achieving this
                    accuracy is known as “cryogenic shrink fitting,” which
                    involves utilizing dry ice pellets. By cooling metal
                    components with dry ice, they temporarily contract in size.
                    Assembling these cooled components promptly allows for a
                    tight fit, which is further improved by their expansion upon
                    returning to room temperature. Ultimately, this technique
                    enhances the overall quality and integrity of the assembled
                    parts.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Cold Chain Storage for Temperature-Sensitive Products
                  </Typography>
                  <Typography variant="body1">
                    The pharmaceutical and biotechnology industries heavily rely
                    on the cold chain. This method helps preserve the
                    effectiveness of temperaturesensitive products, including
                    vaccines, medications, and biologics. A key player in
                    maintaining this cold chain is dry ice pellets. They provide
                    reliable and consistent cooling during storage and
                    transportation, ensuring that critical products like
                    vaccines or biological samples are kept at required low
                    temperatures. By safeguarding their potency and efficacy,
                    dry ice pellets play a vital role in protecting these
                    valuable healthcare products.
                  </Typography>
                  <Typography variant="body1" className="bigText">
                    Advantages of Using Dry Ice Pellets
                  </Typography>
                  <Typography variant="body1">
                    We can confidently say that dry ice pellets offer a
                    multitude of advantages that make them the preferred choice
                    for cooling and cleaning in various industries. At Emory Dry
                    Ice, our commitment to excellence means we take great pride
                    in supplying top-quality dry ice pellets that consistently
                    deliver exceptional performance. Now, let&apos;s delve into
                    the key advantages of utilizing these remarkable pellets:
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Fast Cooling Capabilities for Efficient Processes
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets are exceptional for providing rapid and
                    efficient cooling, making them ideal for time-sensitive
                    processes. When these pellets come into contact with a
                    surface, they undergo sublimation, transforming directly
                    from a solid to a gas without any liquid residue left
                    behind. This remarkable property allows dry ice pellets to
                    quickly cool products and equipment without requiring
                    additional cleanup or drying time. As a result, production
                    cycles are optimized, leading to enhanced overall
                    efficiency.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    No Residue Left Behind During Sublimation
                  </Typography>
                  <Typography variant="body1">
                    One standout advantage of using dry ice pellets is their
                    ability to transform directly into carbon dioxide gas
                    without any harmful residues remaining. This unique feature
                    holds great value for sectors that demand the utmost
                    cleanliness and precision, including food processing,
                    pharmaceuticals, and electronics manufacturing. By using dry
                    ice pellets, these industries can ensure complete absence of
                    contamination or chemical buildup, guaranteeing the
                    integrity and exceptional quality of their final products.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Versatility in Various Industries and Applications
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets have several diverse applications across a
                    wide range of industries owing to their remarkable
                    versatility. These pellets offer flexible solutions for an
                    array of industrial needs, including shipping perishable
                    goods, dry ice blasting, and parts shrinking. Notably, the
                    food, pharmaceuticals, aerospace, automotive, and other
                    sectors commonly rely on high-quality dry ice pellets due to
                    their ability to effectively cater to different cooling and
                    cleaning requirements. Consequently, businesses across
                    various industries trust using our dry ice pellets as a
                    reliable choice.
                  </Typography>
                  <Typography variant="body1" className="smlTxt">
                    Eco-Friendly Dry Ice Solutions
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets offer a compelling eco-friendly cooling and
                    cleaning solution. These pellets are aligned with
                    environmental considerations, making them a clean and green
                    alternative. Unlike several traditional methods that often
                    rely on harmful chemicals or generate waste, our dry ice
                    pellets provide an efficient and sustainable option.{" "}
                  </Typography>
                  <Typography variant="body1">
                    When dry ice pellets undergo sublimation, they go from solid
                    to gas without leaving any residue or waste behind. This
                    natural process is not only safe for the environment but
                    also for those handling the dry ice pellets. By utilizing
                    the sublimation of dry ice, we can effectively and
                    ecologically cool various products and surfaces.{" "}
                  </Typography>
                  <Typography variant="body1">
                    Dry ice pellets are a much better alternative to traditional
                    cooling methods. By opting for dry ice pellets, businesses
                    can effectively reduce their carbon foone-time passwordrint
                    and minimize any negative environmental impact. Moreover,
                    dry icet&apos;s eco-friendly properties and Emoryt&apos;s
                    sustainable production process makes it the responsible
                    choice for any and all environmentally conscious
                    organizations.
                  </Typography>
                  <Box className="accordionList">
                    <Typography variant="h3">Emory Dry Ice FAQs</Typography>
                    <CommonFaq accordiondata={faqMainListTw} />
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box className="infoTabInner">
                  <Box className="accordionList">
                    <Typography variant="h3">Emory Dry Ice FAQs</Typography>
                    <CommonFaq accordiondata={faqMainListTw} />
                  </Box>
                </Box>
              </CustomTabPanel>
            </Box>
          </Box>
        </Container>
      </Box>
    </DryIcePelletsMainWrapper>
  );
}
