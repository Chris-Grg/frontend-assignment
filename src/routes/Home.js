import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = ({ searchValue, setSearchValue, products }) => {
  return (
    <div>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
