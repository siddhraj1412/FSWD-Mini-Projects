import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [error, setError] = useState({ num1: "", num2: "" });

  const handleAddition = () => {
    let hasError = false;
    const newError = { num1: "", num2: "" };

    if (num1 === "") {
      newError.num1 = "First number is required";
      hasError = true;
    }
    if (num2 === "") {
      newError.num2 = "Second number is required";
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      setSum(Number(num1) + Number(num2));
    } else {
      setSum(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3 style={{ marginBottom: "20px", color: "#555" }}>
        Siddhraj Thakor | ID: 23AIML070
      </h3>
      <h1>Add Two Numbers</h1>
      <div style={{ marginTop: "20px" }}>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            style={{ margin: "5px", padding: "5px" }}
          />
          {error.num1 && (
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              {error.num1}
            </div>
          )}
        </div>
        <div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            style={{ margin: "5px", padding: "5px" }}
          />
          {error.num2 && (
            <div style={{ color: "red", fontSize: "0.9rem" }}>
              {error.num2}
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddition} style={{ padding: "5px 10px" }}>
          Add
        </button>
      </div>
      {sum !== null && (
        <h2 style={{ marginTop: "20px" }}>Sum: {sum}</h2>
      )}
    </div>
  );
}

export default App;
