import React from "react";

export default function ProductsTable({ products, onDelete }) {
  if (!products || products.length === 0) {
    return <p>No products yet. Add one above.</p>;
  }

  return (
    <table className="products-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, idx) => (
          <tr key={p.id}>
            <td>{idx + 1}</td>
            <td>{p.name}</td>
            <td>{p.price.toFixed(2)}</td>
            <td>{p.quantity}</td>
            <td>{(p.price * p.quantity).toFixed(2)}</td>
            <td>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
