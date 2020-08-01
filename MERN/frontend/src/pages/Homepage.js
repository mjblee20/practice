import React from 'react'
import './Homepage.css';

function Homepage() {
  return (
    <div className='home-grid'>
      <ul className='app-list'>
        <li>
          <a href='/todo'>Todo App</a>
        </li>
      </ul>
    </div>
  )
}

export default Homepage;
