import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProductDetails from "./routes/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getProducts = async () => {
    const url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setProducts(responseJson);
  };
  useEffect(() => {
    getProducts();
  }, []);
  // const getSearchedProduct =async (searchValue)=>{
  //   const url = `https://fakestoreapi.com/products`;
  //   const response = await fetch(url);
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  //   if(responseJson)
  //   setProducts(responseJson);
  // }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              products={products}
            />
          }
        />
        <Route
          path="/product-details"
          element={<ProductDetails products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
