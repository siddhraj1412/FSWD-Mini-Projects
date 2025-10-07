import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      textAlign: "center",
      backgroundColor: "#fff"
    }}>
      <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px", objectFit: "contain" }} />
      <h3 style={{ fontSize: "1rem", margin: "10px 0" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
    </div>
  );
}

export default ProductCard;
