/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { AddressInputType } from "@/types/common.type";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

type AutocompleteType = {
  setAddress: (value: AddressInputType) => void;
};

const Wrapper = styled.div`
  width: 100%;
`;

const Autocomplete = ({ setAddress }: AutocompleteType) => {
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <Wrapper>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a location"
        style={{
          width: "100%",
          padding: 20,
          fontSize: "24px",
          border: "1px solid #283653",
          borderRadius: 10,
          color: "#012060"
        }}
        onChange={() => setAddress({ place_id: "", formatted_address: "" })}
      />
    </Wrapper>
  );
};

export default Autocomplete;
