import React, { useEffect, useState } from "react";
import ProductListCard from "./ProductListCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

const SearchResults = ({ products }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const searchedProduct = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(searchedProduct);
    console.log(searchQuery, searchedProduct);
  }, [searchQuery, products]);

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {searchResult.map((product) => (
          <Col key={product.id}>
            <ProductListCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchResults;
