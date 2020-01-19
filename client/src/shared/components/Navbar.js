import React from 'react';


const Navbar = () => {
  return(
    <div className='navbar'>
      
      <div className='brand'>
        <button href='/'>MJB</button>
      </div>

      <div className='links'>
        <button href='/'>Home</button>
        <button href='/users'>Users</button>
        <button href='/portfolio'>Portfolio</button>
      </div>

    </div>
  )
}

export default Navbar;
