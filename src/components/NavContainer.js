import React, { useState } from 'react';
import Navigation from './NavigationBar';
import Hamburger from './hamburger';
import '../styles/navbar.scss';

const Nav = props => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');

  return (
    <>
      {/* <button className='mobileNavButton' onClick={handleMobileNavToggle}>
        <div id='nav-icon2' className={navToogleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button> */}
      <Hamburger
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      /> 
      <Navigation
        showMobileNav={showMobileNav}
        tabName={props.tabName}
      />
    </>
  );
}

export default Nav;
