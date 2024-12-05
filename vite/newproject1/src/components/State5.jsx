import React, { useState } from 'react';
import pic from '../images/download.png';

const State5 = () => {
  const [width, setWidth] = useState(100); 
  const [height, setHeight] = useState(100); 
  const [rotation, setRotation] = useState(0); 

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => setWidth(width + 10)}>Increase Width</button>
      <button onClick={() => setHeight(height + 10)}>Increase Height</button>
      <button onClick={() => setRotation(rotation + 15)}>Rotate</button>
      <div style={{ marginTop: '20px' }}>
        <img 
          src={pic} 
          alt="Example" 
          style={{ 
            width: `${width}px`, 
            height: `${height}px`, 
            transform: `rotate(${rotation}deg)` 
          }} 
        />
      </div>
    </div>
  );
}

export default State5;