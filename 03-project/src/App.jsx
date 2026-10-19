import React from 'react';
import Card from './components/card';

const App = () => {
  return (
    <div className='parent'> 
             <Card user="Shubham" age={25} img="https://images.unsplash.com/photo-1782267917390-57d2d0717a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
             <Card user="Rohit" age={30} img="https://images.unsplash.com/photo-1774701939418-52903726f5c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  );
}
export default App;