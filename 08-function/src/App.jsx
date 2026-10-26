import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked');
  }
  function mouseenter(){
    console.log('Mouse Entered');
  }
  return (
    <div>
      <h1>Hello , Sarthak</h1>
      <button>change user</button>
    </div>
  )
}

export default App
