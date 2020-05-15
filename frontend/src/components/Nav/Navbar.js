import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="nav-brand">
        Brand
      </div>
      <div className="nav-search">
        <form>
          <input type='text'/>
          <button type='submit' id='nav-search'>Search</button>
        </form>
      </div>
      <div className="nav-links">
        <ul className='links-list'>
          <li className='nav-link'><Link to='/'>Home</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
