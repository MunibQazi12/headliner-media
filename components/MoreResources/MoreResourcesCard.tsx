/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ResourcesCartWrapper } from "@/styles/StyledComponents/ResourcesCartWrapper";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

interface cartProps {
  linkPath: string;
  imgPath: string;
  textMain: string;
}

export default function MoreResourcesCard({ linkPath, imgPath, textMain }: cartProps) {
  return (
    <ResourcesCartWrapper>
      <Box className="wrapperInfoBox">
        <figure>
          <Link href={linkPath}>
            <Image
              src={imgPath}
              alt="cart-image"
              width={440}
              height={440}
              loader={({ src }) => src}
            />
          </Link>
        </figure>
        <Link href={linkPath}>{textMain}</Link>
      </Box>
    </ResourcesCartWrapper>
  );
}
