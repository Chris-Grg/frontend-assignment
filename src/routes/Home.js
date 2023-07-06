import React from "react";
import Navbar from "../components/NavbarComponent";
import ProductList from "../components/ProductList";
import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, isError, error, data } = useQuery(
    "home-products",
    async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      return jsonData;
    }
  );
  if (isLoading) {
    return <h2>"Loading..."</h2>;
  }

  if (isError) {
    return <h2>"An error has occurred: " + {error.message};</h2>;
  }
  console.log(data);
  return (
    <div>
      <Navbar />
      <ProductList products={data} />
    </div>
  );
};

export default Home;
