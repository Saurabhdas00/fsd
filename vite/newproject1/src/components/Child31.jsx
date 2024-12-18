import React from 'react'
import Child41 from './Child41'

const Child31 = ({studentData}) => {

  return (
    <div>
      <h2>Child31 component</h2>
      <Child41 studentData={studentData}/>
    </div>
  )
}

export default Child31
