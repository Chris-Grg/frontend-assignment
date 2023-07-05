import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProductDetails from "./routes/ProductDetails";
import SearchPage from "./routes/SearchPage";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CartPage from "./routes/CartPage";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/search-results"
          element={<SearchPage products={products} />}
        />
        <Route path="/cart" element={<CartPage products={products} />} />
      </Routes>
    </>
  );
};

export default App;
