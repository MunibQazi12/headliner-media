import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

const CommonQuoteStyled = styled(Stack)`
  .quoteWrap {
    margin-top : 40px;
    p {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
      @media (max-width: 1399px) {
        font-size: 32px;
      }
      @media (max-width: 1199px) {
        font-size: 26px;
      }
      @media (max-width: 899px) {
        font-size: 24px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
    .submitWrap {
      max-width: 790px;
      border: 1px solid ${primaryColors?.color283653};
      padding: 9px;
      border-radius: 10px;
      margin-bottom: 60px;
      @media (max-width: 599px) {
        border: 0;
        flex-wrap: wrap;
        padding: 0;
      }
      input {
        border: none;
        padding-left: 10px;
        color: ${primaryColors?.black};
        max-width: 530px;
        width : 100%;
        font-size: 20px;

        @media (max-width: 1399px) {
          font-size: 18px;
        }

        @media (max-width: 599px) {
          border-radius: 10px;
          border: 1px solid ${primaryColors?.color283653};
          padding: 16px 20px;
          width: 100%;
          max-width: 100%;
          flex-basis: 100%;
        }
        &::placeholder {
          color: ${primaryColors?.black};
        }
      }
      button {
        padding: 14px 14px;

        @media (max-width: 599px) {
          width: 100%;
          margin-top: 10px;
          max-width: 100%;
          flex-basis: 100%;
        }
      }
    }
  }
`;

const CommonQuote = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [address, setAddress] = useState({ place_id: "", formatted_address: "" });

  useEffect(() => {
    if (window.google && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "us" }
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.geometry) {
          setAddress({
            place_id: place?.place_id || "",
            formatted_address: place?.formatted_address || ""
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (address.place_id || address.formatted_address) {
      // Handle the address update (e.g., send it to a server, log it, etc.)
    }
  }, [address]);


  return (
    <CommonQuoteStyled>
      <Stack direction="column" className="quoteWrap" textAlign="start">
        <Typography variant="body1">
          Where do you need dry ice delivered to?
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="submitWrap"
        >
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Enter Address..." 
            onChange={() => setAddress({ place_id: "", formatted_address: "" })}
          />
          <CustomButtonPrimary variant="contained" color="secondary">
            <Typography variant="caption">Get a Free Quote</Typography>
          </CustomButtonPrimary>
        </Stack>
      </Stack>
    </CommonQuoteStyled>
  );
};

export default CommonQuote;
