/* eslint-disable no-console */
import {
  GetOrderDistance,
  GetProduct,
  GetProducts
} from "@/api/functions/product.api";
import { onProductsChange } from "@/reduxtoolkit/slices/productSlice";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/useAppDispatch";

const useProducts = () => {
  const dispatch = useAppDispatch();

  const products = useQuery({
    queryKey: ["products"],
    queryFn: GetProducts
  });

  useEffect(() => {
    if (products?.data) {
      if (products?.data?.status === 401) {
        dispatch(logout());
      } else {
        dispatch(
          onProductsChange({
            data: products?.data?.data?.data?.data,
            isLoading: products.isFetching
          })
        );
      }
    }
  }, [products]);

  return { ...products };
};

const useProduct = (slug: string) =>
  useQuery({
    queryKey: ["product"],
    queryFn: () => GetProduct(slug)
  });

const useOrderDistanceMutation = () =>
  useMutation({
    mutationFn: GetOrderDistance
  });

export { useOrderDistanceMutation, useProduct, useProducts };
