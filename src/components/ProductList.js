import React from "react";
import ProductListCard from "./ProductListCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const ProductList = ({ products }) => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductListCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
