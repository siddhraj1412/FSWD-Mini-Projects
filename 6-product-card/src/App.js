import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h3 style={{ textAlign: "center", color: "#555" }}>Siddhraj Thakor | ID: 23AIML070</h3>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Products</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
