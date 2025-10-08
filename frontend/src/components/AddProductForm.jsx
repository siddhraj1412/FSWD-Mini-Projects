import React, { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Enter product name");
      return;
    }

    const priceNum = parseFloat(price);
    const quantityNum = parseInt(quantity, 10);

    if (isNaN(priceNum) || priceNum < 0) {
      alert("Enter valid price");
      return;
    }

    if (isNaN(quantityNum) || quantityNum < 0) {
      alert("Enter valid quantity");
      return;
    }

    onAdd({ name: name.trim(), price: priceNum, quantity: quantityNum });
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step="0.01"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
