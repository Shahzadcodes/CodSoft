import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function performOperation(e, operation) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (isNaN(inputValue)) return;

    let newResult = result;

    if (operation === "plus") {
      newResult += inputValue;
    } else if (operation === "minus") {
      newResult -= inputValue;
    } else if (operation === "times") {
      newResult *= inputValue;
    } else if (operation === "divide") {
      newResult /= inputValue; 
    }

    setResult(newResult);
    inputRef.current.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={(e) => performOperation(e, "plus")}>Add</button>
        <button onClick={(e) => performOperation(e, "minus")}>Subtract</button>
        <button onClick={(e) => performOperation(e, "times")}>Multiply</button>
        <button onClick={(e) => performOperation(e, "divide")}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
