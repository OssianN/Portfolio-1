import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'

const Nav = props => {
  const [navShow, setNavShow] = useState('hide');
  const [navClass, setNavClass] = useState('');

  const handleNavTransition = () => {
    if (props.navStyle === 'homeNav') {
      setTimeout(() => {
        setNavShow('navBar');
      }, 1100);
    } else {
      setNavShow('navBar');
    };
  };

  const changeNavBar = () => {
    if (props.navStyle === 'homeNav') {
      setNavClass('homeNav');
    } else {
      setNavClass('notHomeNav');
    };
  };

  useEffect(() => {
    handleNavTransition();
    changeNavBar();
  });

    return (
      <nav className={navShow}>
        <ul className={`defaultNav ${navClass}`} >
          <Link to='/' >
            <li className='homeLink'>Home</li>
          </Link>
          <Link to='guest-book' >
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
