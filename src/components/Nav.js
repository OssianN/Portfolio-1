import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.scss';

const Nav = props => {
  const [navShow, setNavShow] = useState('hide');
  const [navClass, setNavClass] = useState('');
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToogleClass, setNavToogleClass] = useState('');

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

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToogleClass('')
    } else {
      setShowMobileNav('0');
      setNavToogleClass('open')
    };
  };

  useEffect(() => {
    handleNavTransition();
    changeNavBar();
  });

    return (
      <div className='navContainer'>
        <button className='mobileNavButton' onClick={handleMobileNavToggle}>
          <div id='nav-icon2' className={navToogleClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className={`mobileNav ${navShow}`} style={{marginLeft: showMobileNav}}>
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
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/portfolio'>
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;
