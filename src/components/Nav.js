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
          <li>
            <Link to='/' >
              Home
            </Link>
          </li>
          <li>
            <Link to='/guest-book'>
              Guest Book
            </Link>
          </li>
          <li>
            <Link to='/todo'>
              Todo App
            </Link>
          </li>
          <li>
            <Link to='/wine'>
              Wine App
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
