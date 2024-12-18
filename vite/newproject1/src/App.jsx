import React from 'react'
import Child31 from './components/Child31'
import Child41 from './components/Child41'
import Child51 from './components/Child51'

const App = () => {
  const studentData = {
    name: "Saurabh",
    roll: "2200320230046",
  };
  return (
    <div>
      <h1>App component</h1>
      <Child31 studentData={studentData}/>  
    </div>
  )
}

export default App