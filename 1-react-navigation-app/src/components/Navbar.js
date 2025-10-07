import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      padding: "1rem", 
      backgroundColor: "#f0f0f0", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center"
    }}>
      <div>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div style={{ fontWeight: "bold" }}>
        {}
        Siddhraj Thakor | ID: 23AIML070
      </div>
    </nav>
  );
}

export default Navbar;
