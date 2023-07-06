import React from "react";
import ProductDetailsContent from "../components/ProductDetailsContent";
import NavbarComponent from "../components/NavbarComponent";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const ProductDetails = () => {
  const { productId } = useParams();

  const { isLoading, isError, error, data } = useQuery(
    "product-detail",
    async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const jsonData = await response.json();
      return jsonData;
    },
    { staleTime: 30000 }
  );
  if (isLoading) {
    return <h2>"Loading..."</h2>;
  }

  if (isError) {
    return <h2>"An error has occurred: " + {error.message}</h2>;
  }
  return (
    <div>
      <NavbarComponent />
      <ProductDetailsContent product={data} />
    </div>
  );
};

export default ProductDetails;
