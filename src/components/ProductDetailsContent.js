import React from "react";
import Image from "react-bootstrap/Image";
const ProductDetailsContent = ({ product }) => {
  return (
    <div
      className="container mt-4 d-flex flex-column align-items-center"
      style={{ maxWidth: "75%" }}
    >
      <Image
        src={product.image}
        alt={product.title}
        className="img-fluid rounded"
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <div className="mt-4 text-center">
        <h2>{product.title}</h2>
        <div
          className="description"
          style={{
            width: "100%",
            paddingLeft: "0",
            paddingRight: "0",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              textAlign: "justify",
              margin: "0",
            }}
          >
            {product.description}
          </p>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "10px" }}
          >
            <div
              className="rating"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              <span className="rating-stars">
                {product.rating.rate}
                <i class="bi bi-star-fill"></i>
              </span>
              <span className="rating-count">
                ({product.rating.count} reviews)
              </span>
            </div>
            <div
              className="price"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              ${product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
