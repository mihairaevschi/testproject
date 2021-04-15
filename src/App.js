import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const setCountHandler = () => {
    setCount(count +1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={setCountHandler}>Click Me</button>
    </div>
  );
}

export default App;
