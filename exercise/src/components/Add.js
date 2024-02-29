import { useState } from 'react';

const Add = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    setTotal(Number(number1) + Number(number2));
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter the first number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter the second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={handleCalculate}>Add</button>
      <p>The total is: {total}</p>
    </div>
  );
}

export default Add;
