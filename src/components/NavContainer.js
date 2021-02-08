import React, { useState } from 'react';
import Navigation from './NavigationBar';
import '../styles/navbar.scss';

const Nav = props => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToogleClass, setNavToggleClass] = useState('');

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToggleClass('')
    } else {
      setShowMobileNav('0');
      setNavToggleClass('open')
    }
  }

  return (
    <>
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
      <Navigation
        showMobileNav={showMobileNav}
        navStyle={props.navStyle}
        tabName={props.tabName}
      />
    </>
  );
}

export default Nav;
