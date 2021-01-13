import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Nav = props => {
  const [navShow, setNavShow] = useState('hide');
  const location = useLocation();

  const handleNavTransition = () => {
    if (location.pathname === '/') {
      setTimeout(() => {
        setNavShow('navBar');
      }, 1100);
    } else {
      setNavShow('navBar');
    };
  };

  const changeNavBar = () => {
    if (location.pathname === '/' || location.pathname === '/guestbook') {
      props.setNavStyle('homeNav');
    } else {
      props.setNavStyle('notHomeNav');
    };
  };

  useEffect(() => {
    handleNavTransition();
    changeNavBar();
  });


    return (
      <nav className={navShow}>
        <ul className={`defaultNav ${props.navStyle}`} >
          <Link to='/' >
            <li className='homeLink'>Home</li>
          </Link>
          <Link to='guestbook' >
            <li className='guestBookLink'>Guest Book</li>
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
