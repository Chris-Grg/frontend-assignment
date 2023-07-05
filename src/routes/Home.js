import React from "react";
import Navbar from "../components/NavbarComponent";
import ProductList from "../components/ProductList";

const Home = ({ products }) => {
  return (
    <div>
      <Navbar />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
