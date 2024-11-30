import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > -25) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Contador Incremental y Decremental</h1>
      <p>Nombre: [Freddy]</p>
      <p>Apellido: [Zacarias]</p>
      <p>ID: [000148241]</p>
      <div>
        <button onClick={decrement}>Decrementar</button>
        <span>{count}</span>
        <button onClick={increment}>Incrementar</button>
      </div>
    </div>
  );
}

export default App;
