import React, { useState } from "react";
import { add, subtract, multiply, divide } from "./Action";
import { useDispatch } from "react-redux";
export default function Cinput(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(num1, num2));
  };

  const handleSubtract = () => {
    dispatch(subtract(num1, num2));
  };

  const handleMultiply = () => {
    dispatch(multiply(num1, num2));
  };

  const handleDivide = () => {
    dispatch(divide(num1, num2));
  };

  
  return (
    <div>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
    </div>
  );

}