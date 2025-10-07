import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

const API_BASE = process.env.REACT_APP_API_URL || ''

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(`${API_BASE}/api/products`)
      .then(r => r.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load products', err)
        setLoading(false)
      })
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0f2f5", minHeight: "100vh", padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "#555" }}>Siddhraj Thakor | ID: 23AIML070</h3>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Products</h1>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading products...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
