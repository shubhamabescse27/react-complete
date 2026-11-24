import React from 'react'

const App = () => {
  const user = {
    username:'Sarthak',
    age:18,
    city:'Bhopal'

  }
  localStorage.setItem('user',JSON.stringify(user))
  const llaa = JSON.parse(localStorage.getItem('user'))
  console.log(llaa);

  return (
  
    <div>App</div>
  )
}

export default App
