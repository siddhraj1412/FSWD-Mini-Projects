import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff"
    }}>
      <h3>{product.name}</h3>
      <p style={{ color: "#007BFF", fontWeight: "bold" }}>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;
