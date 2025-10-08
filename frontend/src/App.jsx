import React from "react";
import ProductApp from "./components/ProductApp";
import ApiPosts from "./components/ApiPosts";
import "./styles.css"; 

export default function App() {
  return (
    <div className="container">
      <header className="header-card">
        <h1>Product Management Dashboard</h1>
        <p>
          Siddhraj Thakor <br />
          23AIML070
        </p>
      </header>
      <ProductApp />

      <hr />
      <ApiPosts />
    </div>
  );
}
