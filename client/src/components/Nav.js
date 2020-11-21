import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  const [navShow, setNavShow] = useState({display: 'none'});

  const handleNavTransition = () => {
    setTimeout(() => {
      setNavShow({display: 'flex'});
    }, 3000);
  };

  useEffect(() => {
    handleNavTransition();
  })

    return (
      <nav style={navShow}>
        <ul className='navList'>
          <Link to='/' >
            <li className='homeLink'>Home</li>
          </Link>
          <Link to='/todo' >
            <li className='todoLink'>Todo App</li>
          </Link>
          <Link to='wine' >
            <li className='wineLink'>Wine App</li>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav;
