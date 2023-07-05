import React from "react";
import Card from "react-bootstrap/Card";

const ProductListCard = ({ product }) => {
  const handleProductClick = () => {
    console.log(product.id);
    window.location.href = `/product-details/${product.id}`;
  };
  return (
    <Card onClick={handleProductClick}>
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
