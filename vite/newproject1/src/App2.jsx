import React from 'react'
const StudentContext=React.createContext();
import Child32 from './components/Child32'

const App2 = () => {
  const studentData = {
    name: 'John',
    roll: '2200320230046',
  };
  return (
    <div>
      <h1>App2 component</h1>
      <StudentContext.Provider value={studentData}>
        <Child32 />
      </StudentContext.Provider>
    </div>
  )
}

export default App2
export {StudentContext}
