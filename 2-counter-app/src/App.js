import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3 style={{ marginBottom: "20px", color: "#555" }}>
        Siddhraj Thakor | ID: 23AIML070
      </h3>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>+</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>-</button>
        <button onClick={() => setCount(0)} style={{ margin: "5px" }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
