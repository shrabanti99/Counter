import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <label>Count: {value}</label>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
