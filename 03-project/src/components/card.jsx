import React from 'react'


const card = (props) => {
  console.log(props.user,props.age);
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>View profile</button>
      </div>
  )
}

export default card
