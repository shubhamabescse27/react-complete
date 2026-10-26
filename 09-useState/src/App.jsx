import React,{ useState } from 'react'

// const { useState } = require("react");

// function App() {
//   const [num, setNum] = useState(10)
//   const [name, setName] = useState('aman')
//   const [users, setUsers] = useState([10,20,30])


//   function changeNum(){
//     setNum(20)
//     setName('shubham')
//     setUsers([15,26,35])
//   }

//   return (
//     <div>
//       <h1>Value is {num} <br /> {users}<br/>value of user is {name}</h1>

//       <button onClick={changeNum}>Click
        
//       </button>
//     </div>
//   )
// }

// export default App
//import React from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jump5Num(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1> 
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
       <button onClick={jump5Num}>increase by 5</button>
    </div>
  )
}

export default App
