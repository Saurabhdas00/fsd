import React from 'react'
import {StudentContext} from '../App2'
import {useContext} from 'react'
const Child32 = () => {
    const {name,roll}=useContext(StudentContext);
  return (
    <div>
      <h1>Name:{name}</h1>
    <h1>Roll:{roll}</h1>
    </div>
  )
}

export default Child32
