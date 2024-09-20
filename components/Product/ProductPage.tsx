import CommonBreadCrum from "@/components/CommonBreadCrum/CommonBreadCrum";
import DryIcePelletsMain from "@/components/DryIcePelletsMain/DryIcePelletsMain";
import { LoadingPage } from "@/components/LoadingPage/LoadingPage";
import MoreDryIceProduct from "@/components/MoreDryIceProduct/MoreDryIceProduct";
import { useProduct } from "@/hooks/react-query/useProduct";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ProductAttributeData, ProductData } from "@/types/common.type";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export default function ProductPage({ slug }: { slug: string }) {

  const { data: rawProduct, isFetching, refetch } = useProduct(slug as string);

  const product = rawProduct?.data?.product as ProductData;
  const product_attribute = rawProduct?.data
    ?.product_attribute as ProductAttributeData[];

  useEffect(() => {
    refetch();
  }, [slug]);

  return (
    <Wrapper>
      <Box className="pelletsDryIce">
        {isFetching ? (
          <LoadingPage />
        ) : (
          <>
            <CommonBreadCrum
              pageName={product?.name}
              sumPageLink="/dashboard"
            />
            <DryIcePelletsMain
              product={product}
              product_attribute={product_attribute}
            />
            <MoreDryIceProduct />
          </>
        )}
      </Box>
    </Wrapper>
  );
}
