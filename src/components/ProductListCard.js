import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductListCard = ({ product }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={product.image}
        className="img-fluid"
        style={{ maxHeight: "200px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductListCard;
