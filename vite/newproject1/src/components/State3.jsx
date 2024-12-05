import React, { useState } from 'react';
import './State3.css';

const State3 = () => {
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState('black'); // State to manage the selected color

  return (
    <div className="state3-container">
      <button 
        onClick={() => setTotal(total + 1)} 
        className="state3-button increment"
      >
        Increment
      </button>
      <button 
        onClick={() => setTotal(total - 1)} 
        className="state3-button decrement"
      >
        Decrement
      </button>
      <h1 className="state3-total">{total}</h1>
      <h1 className="state3-fav-color" style={{ color:'black' }}>My Fav Color is <span style={{ color }}>{color}</span></h1>
      <div>
        <button onClick={() => setColor('red')} className="state3-color-button">Red</button>
        <button onClick={() => setColor('blue')} className="state3-color-button">Blue</button>
        <button onClick={() => setColor('green')} className="state3-color-button">Green</button>
        <button onClick={() => setColor('purple')} className="state3-color-button">Purple</button>
      </div>
    </div>
  );
}

export default State3;