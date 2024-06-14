/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { CommonCartWrapper } from "@/styles/StyledComponents/CommonCartWrapper";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

interface cartProps {
  linkPath: string;
  imgPath: string;
  textMain: string;
}

export default function CommonCart({ linkPath, imgPath, textMain }: cartProps) {
  return (
    <CommonCartWrapper>
      <Box className="wrapperInfoBox">
        <figure>
          <Link href={linkPath}>
            <Image src={imgPath} alt="cart-image" width={440} height={440} />
          </Link>
        </figure>
        <Link href={linkPath}>{textMain}</Link>
      </Box>
    </CommonCartWrapper>
  );
}
