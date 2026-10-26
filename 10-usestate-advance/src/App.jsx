import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'Sarthak',age:20})
//   const btnClicked = ()=>{
//     const newNum = {...num};
//     newNum.user = 'Aman'
//     newNum.age = 28
//     setNum(newNum)
//     }
  
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
      
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const [num, setNum] = useState([10,20,30,40])
//   const btnClicked = ()=>{
//     const newNum = [...num];
//     newNum.push(999)
    
//     setNum(newNum)
//     }
  
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
      
//     </div>
//   )
// }

// export default App
// BATCH UPDATE
const App = () => {
  const [num, setNum] = useState(10)
  const btnClicked = ()=>{
      setNum(prev => (prev + 1))
      setNum(prev => (prev + 1))
      setNum(prev => (prev + 1))
    }
  
    
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
      
    </div>
  )
}

export default App