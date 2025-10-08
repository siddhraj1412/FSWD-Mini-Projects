import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import ProductsTable from "./ProductsTable";

const LOCAL_KEY = "exam_products_v1";

export default function ProductApp() {
  const [products, setProducts] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
  }, [products]);

  const generateId = () => {
    return products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: generateId() };
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="card">
      <h2>Product Management (useState & map)</h2>
      <AddProductForm onAdd={addProduct} />
      <ProductsTable products={products} onDelete={deleteProduct} />
    </div>
  );
}
