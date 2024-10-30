import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (value) => {
    if (["+", "-", "*", "/"].includes(value)) {
      // Сохраняем первое число и оператор, очищаем ввод для второго числа
      setFirstOperand(input);
      setOperator(value);
      setInput("");
    } else if (value === "=") {
      // При нажатии на "=" вычисляем результат и очищаем ввод
      if (firstOperand !== null && operator !== null) {
        const expression = `${firstOperand}${operator}${input}`;
        try {
          setResult(eval(expression));
        } catch (error) {
          setResult("Error");
        }
        setInput("");
        setFirstOperand(null);
        setOperator(null);
      }
    } else if (value === "C") {
      // Сброс калькулятора
      setInput("");
      setResult("");
      setFirstOperand(null);
      setOperator(null);
    } else {
      // Обновляем ввод чисел
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={btn === "C" || btn === "=" ? "button-light" : "button-dark"}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
