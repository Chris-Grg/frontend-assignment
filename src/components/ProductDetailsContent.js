import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

const ProductDetailsContent = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <Image
        src={product.image}
        alt={product.title}
        className="img-fluid rounded"
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      />
      <div className="mt-4 text-center">
        <h2>{product.title}</h2>
        <p
          style={{
            textAlign: "justify",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {product.description}
        </p>
        <div className="d-flex justify-content-between">
          <div className="rating">
            <span className="rating-stars">
              {product.rating.rate}
              <i class="bi bi-star-fill"></i>
            </span>
            <span className="rating-count">
              ({product.rating.count} reviews)
            </span>
          </div>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
