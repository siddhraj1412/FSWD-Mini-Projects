import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (todo.trim() === "") {
      setError("Please enter a task");
      return;
    }
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
    setError("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
        marginBottom: "30px"
      }}>
        <h3 style={{ color: "#555" }}>Siddhraj Thakor | ID: 23AIML070</h3>
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Todo Application</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            style={{
              padding: "10px",
              width: "70%",
              borderRadius: "5px 0 0 5px",
              border: "1px solid #ccc",
              outline: "none"
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "0 5px 5px 0"
            }}
          >
            Add
          </button>
        </div>
        {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
      </div>

      <ul style={{ width: "100%", maxWidth: "500px", padding: 0, listStyle: "none" }}>
        {todos.map((item, index) => (
          <li key={index} style={{
            backgroundColor: "#fff",
            padding: "10px 15px",
            marginBottom: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {item.text}
            </span>
            <button
              onClick={() => handleDelete(index)}
              style={{
                padding: "5px 10px",
                border: "none",
                backgroundColor: "#dc3545",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
