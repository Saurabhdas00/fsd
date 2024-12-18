import React from 'react'
import Child51 from './Child51'

const Child41 = ({studentData}) => {
  return (
    <div>
      <h2>Child41 component</h2>
      <Child51 studentData={studentData}/>
    </div>
  )
}

export default Child41
