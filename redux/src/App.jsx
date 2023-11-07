// App.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply, divide } from "./redux/calculatorSlice";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState("");

  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (selectedOperation === "+") {
      dispatch(add(n1 + n2));
    } else if (selectedOperation === "-") {
      dispatch(subtract(n1 - n2));
    } else if (selectedOperation === "*") {
      dispatch(multiply(n1 * n2));
    } else if (selectedOperation === "/" && n2 !== 0) {
      dispatch(divide(n1 / n2));
    }
  };
console.log(selectedOperation);
  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select
          value={selectedOperation}
          onChange={(e) => setSelectedOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={calculate}>=</button>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Calculator;
