import React, { useEffect, useState } from 'react'

const Stat4 = () => {
    const [total, setTotal] = useState(1);
    const [double, setDouble] = useState(1);
    useEffect(()=>{
        setDouble(total*2);
    },[total])
  return (
    <div>
      <button onClick={()=>{setTotal(total*2)}}>Increment</button>
      <button onClick={()=>{setTotal(total/2)}}>decrement</button>
      <h2>{total}</h2>
      <h2>{double}</h2>
    </div>
  )
}

export default Stat4
