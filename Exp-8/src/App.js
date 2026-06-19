import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-wrapper">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        <div className="counter-value">{count}</div>
        <div className="button-group">
          <button className="btn btn-primary" onClick={increment}>
            Increment (+)
          </button>
          <button className="btn btn-primary" onClick={decrement}>
            Decrement (-)
          </button>
        </div>
        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
